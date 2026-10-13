import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/backend/webhooks";
import { clerkClient } from "@clerk/nextjs/server";
import { connectDB } from "@/app/lib/mongodb";
import { sendGitPortifyEmail } from "@/app/lib/email";
import { welcomeEmail, signInEmail } from "@/app/lib/email-templates";
import WebhookEvent from "@/app/models/WebhookEvents";

export async function POST(request: NextRequest) {
    let event;

    try {
        event = await verifyWebhook(request);
    } catch (error) {
        console.error("Clerk webhook verification failed:", error);
        return new Response("Invalid webhook signature", { status: 400 });
    }

    if (
        event.type !== "user.created" &&
        event.type !== "session.created"
    ) {
        return new Response("Event ignored", { status: 200 });
    }

    const eventId = request.headers.get("svix-id");

    if (!eventId) {
        return new Response("Missing webhook event ID", { status: 400 });
    }

    let claimed = false;

    try {
        await connectDB();

        try {
            await WebhookEvent.create({
                eventId,
                eventType: event.type,
                status: "processing",
            });

            claimed = true;
        } catch (error: unknown) {
            if (
                typeof error === "object" &&
                error !== null &&
                "code" in error &&
                error.code === 11000
            ) {
                return new Response("Event already processed", {
                    status: 200,
                });
            }

            throw error;
        }

        let userId: string;

        switch (event.type) {
            case "user.created":
                userId = event.data.id;
                break;

            case "session.created":
                userId = event.data.user_id;
                break;

            default:
                return new Response("Event ignored", { status: 200 });
        }

        const client = await clerkClient();
        const user = await client.users.getUser(userId);

        const emailAddress = user.emailAddresses.find(
            (address) => address.id === user.primaryEmailAddressId
        )?.emailAddress;

        if (!emailAddress) {
            throw new Error("Primary email address not found.");
        }

        const name =
            [user.firstName, user.lastName].filter(Boolean).join(" ") ||
            user.username ||
            "there";

        if (event.type === "user.created") {
            await sendGitPortifyEmail({
                to: emailAddress,
                subject: "Welcome to GitPortify!",
                html: welcomeEmail(name),
            });
        } else {
            // Clerk timestamps are milliseconds since the Unix epoch.
            // A session created at essentially the same time as the
            // account is the initial signup session.
            const sessionCreatedAt = event.data.created_at;
            const accountCreatedAt = user.createdAt;

            const isInitialSignupSession =
                Math.abs(sessionCreatedAt - accountCreatedAt) < 60_000;

            if (isInitialSignupSession) {
                await WebhookEvent.updateOne(
                    { eventId },
                    {
                        $set: {
                            status: "sent",
                            processedAt: new Date(),
                        },
                    }
                );

                return new Response(
                    "Initial signup session: sign-in email skipped",
                    { status: 200 }
                );
            }

            await sendGitPortifyEmail({
                to: emailAddress,
                subject: "New sign-in to your GitPortify account",
                html: signInEmail(name),
            });
        }

        await WebhookEvent.updateOne(
            { eventId },
            {
                $set: {
                    status: "sent",
                    processedAt: new Date(),
                },
            }
        );

        return new Response("Email handled successfully", { status: 200 });
    } catch (error) {
        console.error("GitPortify webhook email failed:", error);

        if (claimed) {
            try {
                await connectDB();
                await WebhookEvent.deleteOne({
                    eventId,
                    status: "processing",
                });
            } catch (cleanupError) {
                console.error("Webhook event cleanup failed:", cleanupError);
            }
        }

        return new Response("Webhook email delivery failed", { status: 500 });
    }
}

