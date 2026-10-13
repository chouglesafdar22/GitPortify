import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Website from "@/app/models/Website";
import User from "@/app/models/User";
import { getCurrentUserId } from "@/app/lib/auth";
import { sendGitPortifyEmail } from "@/app/lib/email";
import {
    websitePublishedEmail,
    websiteUpdatedEmail,
} from "@/app/lib/email-templates";

export async function GET(req: Request) {
    try {
        await connectDB();

        const clerkId = await getCurrentUserId();

        if (!clerkId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const user = await User.findOne({
            clerkId,
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const website = await Website.findOne({
            userId: user._id,
        });

        if (!website) {
            return NextResponse.json(
                {
                    success: true,
                    portfolio: null,
                },
                { status: 200 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                website,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("GET Website Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch portfolio website",
            },
            { status: 500 }
        );
    }
};

export async function POST(req: Request) {
    try {
        await connectDB();

        const clerkId = await getCurrentUserId();

        if (!clerkId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body = await req.json();

        const {
            username,
            name,
            bio,
            avatar,
            template,
            projects,
            techSkills,
            experiences,
            education,
            contactLinks,
        } = body;

        const user = await User.findOne({
            clerkId,
        });

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    error: "User not found",
                },
                {
                    status: 404,
                }
            );
        }

        // check if username already taken by someone else
        const existingUsername = await Website.findOne({ username });

        if (existingUsername && existingUsername.userId.toString() !== user._id.toString()) {
            return NextResponse.json(
                { error: "Username already taken" },
                { status: 400 }
            );
        };

        const existingWebsite = await Website.findOne({
            userId: user._id,
        });

        // UPSERT (update or create)
        const website = await Website.findOneAndUpdate(
            { userId: user._id },
            {
                username,
                name,
                bio,
                avatar,
                template,
                projects,
                techSkills,
                experiences,
                education,
                contactLinks,
                updatedAt: new Date(),
            },
            {
                new: true,
                upsert: true,
                runValidators: true
            }
        );

        try {
            if (user.email) {
                const websiteUrl =
                    `https://gitportify.vercel.app/w/${website.username}`;

                const emailName = user.name || "GitPortify User";

                const isUpdate = Boolean(existingWebsite);

                await sendGitPortifyEmail({
                    to: user.email,
                    subject: isUpdate
                        ? "Your GitPortify website has been updated"
                        : "Your GitPortify website is live!",
                    html: isUpdate
                        ? websiteUpdatedEmail(emailName, websiteUrl)
                        : websitePublishedEmail(emailName, websiteUrl),
                });
            }
        } catch (emailError) {
            console.error(
                "Website notification email failed:",
                emailError
            );
        }

        return NextResponse.json({
            success: true,
            website,
        });
    } catch (error) {
        console.error("POST Website Error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
};