import { connectDB } from "@/app/lib/mongodb";
import Feedback from "@/app/models/Feedback";
import { NextResponse } from "next/server";

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

        if (!name || !type || !feedback) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name and feedback are required",
                },
                { status: 400 }
            );
        };

        const newFeedback = await Feedback.create({
            name,
            type,
            email,
            feedback
        })

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