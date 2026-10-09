import { NextRequest } from "next/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(request: NextRequest) {
    let event;

    try {
        event = await verifyWebhook(request);
    } catch (error) {
        console.error("Clerk webhook verification failed:", error);

        return new Response("Invalid webhook signature", {
            status: 400,
        });
    }

    console.log("Clerk webhook received:", event.type);

    if (event.type === "email.created") {
        console.log(
            "Email event received. Payload fields:",
            Object.keys(event.data)
        );
    }

    return new Response("Webhook received", {
        status: 200,
    });
}
