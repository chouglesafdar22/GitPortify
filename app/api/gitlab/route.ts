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

        if (!provider || provider.provider !== "gitlab") {
            return NextResponse.json(
                { error: "GitLab account not connected" },
                { status: 400 }
            );
        }

        const auth = await getCurrentUserAccessToken();

        if (!auth?.accessToken) {
            return NextResponse.json(
                { error: "GitLab access token not available" },
                { status: 401 }
            );
        }

        // Fetch GitLab user
        const userRes = await fetch("https://gitlab.com/api/v4/user", {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`,
                Accept: "application/json",
            },
        });

        if (!userRes.ok) {
            return NextResponse.json(
                { error: "Failed to fetch GitLab user" },
                { status: userRes.status }
            );
        }

        const user = await userRes.json();

        // Fetch user's personal projects
        const projectsRes = await fetch(
            "https://gitlab.com/api/v4/projects?membership=true&order_by=updated_at&sort=desc&per_page=100",
            {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`,
                    Accept: "application/json",
                },
            }
        );

        if (!projectsRes.ok) {
            const errorBody = await projectsRes.text();

            console.error("GitLab Projects Error:", {
                status: projectsRes.status,
                body: errorBody,
            });

            return NextResponse.json(
                {
                    error: "Failed to fetch GitLab projects",
                    gitlabStatus: projectsRes.status,
                    gitlabError: errorBody,
                },
                { status: projectsRes.status }
            );
        }

        const projectsData = await projectsRes.json();

        const projects = projectsData.map((project: any) => ({
            id: project.id,
            name: project.name,
            description: project.description || "No description",
            imageUrl: "",
            tech: project.programming_language
                ? [project.programming_language]
                : [],
            githubUrl: project.web_url,
            liveUrl: project.web_url || "",
        }));

        return NextResponse.json({
            provider: "gitlab",
            projects,
            user: {
                name: user.name,
                username: user.username,
                avatar: user.avatar_url,
                bio: user.bio,
            },
        });
    } catch (error) {
        console.error("GitLab API Error:", error);

        return NextResponse.json(
            { error: "Failed to fetch GitLab data" },
            { status: 500 }
        );
    }
};