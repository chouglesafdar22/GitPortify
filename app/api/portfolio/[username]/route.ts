import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Portfolio from "@/app/models/Portfolio";

export async function GET(req: Request) {
    try {
        await connectDB();

        const url = new URL(req.url);
        const pathname = url.pathname;

        const username = pathname.split("/").pop();

        const portfolio = await Portfolio.findOne({
            username: username
        }).lean();

        if (!portfolio) {
            return NextResponse.json(
                { error: "Portfolio not found" },
                { status: 404 }
            )
        };

        return NextResponse.json({ portfolio });
    } catch (error) {
        console.error("Console error for fetching portfolio:", error);
        return NextResponse.json(
            { error: "Server 500 Error" },
            { status: 500 }
        );
    }
};