import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { getCurrentUserId } from "@/app/lib/auth";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import Portfolio from "@/app/models/Portfolio";

export async function DELETE() {
    try {
        const clerkId = await getCurrentUserId();

        if (!clerkId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectDB();

        const user = await User.findOne({ clerkId });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Delete the Clerk account first.
        const client = await clerkClient();
        await client.users.deleteUser(clerkId);

        // Remove associated MongoDB records.
        await Portfolio.deleteOne({ userId: user._id });
        await User.deleteOne({ _id: user._id });

        return NextResponse.json({
            success: true,
            message: "Account deleted successfully.",
        });
    } catch (error) {
        console.error("Delete Account Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while deleting the account.",
            },
            { status: 500 }
        );
    }
}
