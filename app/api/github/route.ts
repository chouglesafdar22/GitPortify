import { NextResponse } from "next/server";
import {
    getCurrentUserId,
    getCurrentUserProvider,
    getCurrentUserAccessToken,
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

        if (!provider || provider.provider !== "github") {
            return NextResponse.json(
                { error: "GitHub account not connected" },
                { status: 400 }
            );
        }

        const auth = await getCurrentUserAccessToken();

        if (!auth?.accessToken) {
            return NextResponse.json(
                { error: "GitHub access token not available" },
                { status: 401 }
            );
        }

        const userRes = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`,
                Accept: "application/vnd.github+json",
            },
        });

        if (!userRes.ok) {
            return NextResponse.json(
                { error: "Failed to fetch GitHub user" },
                { status: userRes.status }
            );
        }

        const user = await userRes.json();

        const repoRes = await fetch(
            `https://api.github.com/users/${user.login}/repos?sort=updated&per_page=100`,
            {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`,
                    Accept: "application/vnd.github+json",
                },
            }
        );

        if (!repoRes.ok) {
            return NextResponse.json(
                { error: "Failed to fetch GitHub repositories" },
                { status: repoRes.status }
            );
        }

        const repos = await repoRes.json();

        const projects = repos.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description",
            imageUrl: "",
            tech: repo.language ? [repo.language] : [],
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || "",
        }));

        return NextResponse.json({
            provider: "github",
            projects,
            user: {
                name: user.name,
                username: user.login,
                avatar: user.avatar_url,
                bio: user.bio,
            },
        });
    } catch (error) {
        console.error("GitHub API Error:", error);

        return NextResponse.json(
            { error: "Failed to fetch GitHub data" },
            { status: 500 }
        );
    }
}