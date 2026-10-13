import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Portfolio from "@/app/models/Portfolio";
import User from "@/app/models/User";
import { getCurrentUserId } from "@/app/lib/auth";

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
        };

        const portfolio = await Portfolio.findOne({
            userId: user._id,
        });

        if (!portfolio) {
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
                portfolio,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("GET Portfolio Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch portfolio",
            },
            { status: 500 }
        );
    }
}

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
                    status: 404
                }
            )
        }

        // check if username already taken by someone else
        const existingUsername = await Portfolio.findOne({ username });

        if (existingUsername && existingUsername.userId.toString() !== user._id.toString()) {
            return NextResponse.json(
                { error: "Username already taken" },
                { status: 400 }
            );
        };

        // UPSERT (update or create)
        const portfolio = await Portfolio.findOneAndUpdate(
            { userId: user._id },
            {
                username,
                name,
                bio,
                avatar,
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

        return NextResponse.json({
            success: true,
            portfolio,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
};