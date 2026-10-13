import { NextResponse } from "next/server";
import {
    getCurrentUserId,
    getCurrentUserProvider,
    getOrCreateCurrentUser,
} from "@/app/lib/auth";

export async function GET() {
    try {
        const userId = await getCurrentUserId();

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const provider = await getCurrentUserProvider();

        if (!provider) {
            return NextResponse.json(
                { error: "Provider not found" },
                { status: 404 }
            );
        }

        const mongoUser = await getOrCreateCurrentUser();

        if (!mongoUser) {
            return NextResponse.json(
                { error: "Failed to create user" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            provider: provider.provider,
            username: provider.username,
        });
        
    } catch (error) {
        console.error("Provider API Error:", error);

        return NextResponse.json(
            { error: "Failed to determine provider" },
            { status: 500 }
        );
    }
};