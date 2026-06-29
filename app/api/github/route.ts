import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("token");

        if (!token) {
            return NextResponse.json({ error: "Token required" }, { status: 400 });
        };

        const userRes = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const user = await userRes.json();

        const repoRes = await fetch(
            `https://api.github.com/users/${user.login}/repos?sort=updated&per_page=5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const repos = await repoRes.json();

        const projects = repos.filter((repo: any) => !repo.fork)
            .slice(0, 5)
            .map((repo: any) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description || "No description",
                imageUrl: "",
                tech: repo.language ? [repo.language] : [],
                githubUrl: repo.html_url,
                liveUrl: repo.homepage || "",
            }));

        return NextResponse.json({
            projects,
            user: {
                name: user.name,
                avatar: user.avatar_url,
                bio: user.bio,
            },
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: "Failed"
            },
            {
                status: 500
            }
        );
    }
};