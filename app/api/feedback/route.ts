import { connectDB } from "@/app/lib/mongodb";
import Feedback from "@/app/models/Feedback";
import { NextResponse } from "next/server";
import transporter from "@/app/lib/mailer";

export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();

        const {
            name,
            type,
            email,
            feedback
        } = body;

        if (!name || !type || !email || !feedback) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, type, email and feedback are required",
                },
                { status: 400 }
            );
        };

        const newFeedback = await Feedback.create({
            name,
            type,
            email,
            feedback
        });

        // Message shown in the user's thank-you email
        const feedbackMessage = {
            general:
                "We really appreciate you taking the time to share your thoughts. Your feedback helps us understand what we're doing well and where we can improve.",

            "bug report":
                "Thank you for reporting this issue. Your report helps us identify problems and make GitPortify more reliable for everyone.",

            "feature request":
                "Thank you for sharing your feature suggestion. Your ideas help us improve GitPortify and shape what we build next.",
        }[type as "general" | "bug report" | "feature request"];

        try {
            await transporter.sendMail({
                from: `"GitPortify Feedback" <${process.env.SMTP_USER}>`,
                to: [
                    "gitportify@gmail.com",
                    "chouglesafdar22@gmail.com",
                ],
                replyTo: email,
                subject: `New GitPortify Feedback — ${type}`,
                text: `
New feedback received on GitPortify.

Name: ${name}
Email: ${email}
Type: ${type}

Feedback:
${feedback}

Submitted: ${new Date(newFeedback.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "medium",
})}
                `,
            });

            await transporter.sendMail({
                from: `"GitPortify" <${process.env.SMTP_USER}>`,
                to: email,
                subject: "Thank you for your feedback — GitPortify",
                text: `
Hi ${name},

Thank you for taking the time to share your feedback with GitPortify.

${feedbackMessage}

You shared:

${feedback}

We appreciate your contribution to GitPortify and will take your feedback into consideration as we continue improving the platform.

Thanks again for helping us make GitPortify better.

— GitPortify Team
                `,
            });
        } catch (emailError) {
            // Feedback is already safely stored in MongoDB.
            // Don't fail the submission just because email delivery failed.
            console.error(
                "Feedback email delivery failed:",
                emailError
            );
        };

        return NextResponse.json(
            {
                success: true,
                newFeedback
            },
            {
                status: 201
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
};