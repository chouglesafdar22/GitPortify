import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import Portfolio from "@/app/models/Portfolio";

export async function DELETE() {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const user = await User.findOne({
            email: session.user.email,
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Delete Portfolio
        await Portfolio.deleteOne({
            userId: user._id,
        });

        // Delete User
        await User.deleteOne({
            _id: user._id,
        });

        return NextResponse.json({
            success: true,
            message: "Account deleted successfully.",
        });

    } catch (error) {
        console.error("Delete Account Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}