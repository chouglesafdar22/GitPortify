import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Website from "@/app/models/Website";

export async function GET(req: Request) {
    try {
        await connectDB();

        const url = new URL(req.url);
        const pathname = url.pathname;

        const username = pathname.split("/").pop();

        const website = await Website.findOne({
            username: username
        }).lean();

        if (!website) {
            return NextResponse.json(
                { error: "Portfolio not found" },
                { status: 404 }
            )
        };

        return NextResponse.json({ website });
    } catch (error) {
        console.error("Console error for fetching portfolio:", error);
        return NextResponse.json(
            { error: "Server 500 Error" },
            { status: 500 }
        );
    }
};