import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Portfolio from "@/app/models/Portfolio";
import User from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export async function POST(req: Request) {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

        //find user
        let user = await User.findOne({ email: session.user?.email });

        if (!user) {
            user = await User.create({
                githubId: session.user?.email,
                name: session.user?.name,
                email: session.user?.email,
                image: session.user?.image,
            });
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
}