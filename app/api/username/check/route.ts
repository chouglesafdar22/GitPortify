import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Portfolio from "@/app/models/Portfolio";

export async function GET(req: Request) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username")?.trim().toLowerCase();

        if (!username) {
            return NextResponse.json(
                { error: "Username is required" },
                { status: 400 }
            );
        }

        const portfolio = await Portfolio.findOne({
            username,
        }).select("_id");

        return NextResponse.json({
            available: !portfolio,
        });
    } catch (error) {
        console.error("Username Check Error:", error);

        return NextResponse.json(
            { error: "Failed to check username" },
            { status: 500 }
        );
    }
};