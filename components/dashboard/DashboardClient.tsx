"use client";
import { useEffect, useState } from "react";
import PortfolioCard from "./card/portfolioCard";
import ProfileCard from "./card/profileCard";
import TemplatesCard from "./card/templatesCard";
import AnalyticsCard from "./card/analyticsCard";
import type { TemplateType } from "@/types/template";
import { useUser } from "@clerk/nextjs";

export default function DashboardClient() {
    const [loading, setLoading] = useState(true);
    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [template, setTemplate] = useState<TemplateType | undefined>();
    const { isLoaded, isSignedIn } = useUser();

    useEffect(() => {
        if (!isLoaded) return;

        if (!isSignedIn) {
            setLoading(false);
            return;
        };

        const fetchDashboardData = async () => {
            try {
                setLoading(true);

                const providerResponse = await fetch("/api/provider");

                if (!providerResponse.ok) {
                    console.error(
                        "Failed to sync user to MongoDB:",
                        await providerResponse.text()
                    );
                }

                const [profileResponse, websiteResponse] =
                    await Promise.all([
                        fetch("/api/portfolio"),
                        fetch("/api/website"),
                    ]);

                const profileData = await profileResponse.json();
                const websiteData = await websiteResponse.json();

                const portfolio = profileData.portfolio;
                const website = websiteData.website;

                if (portfolio) {
                    setAvatar(portfolio.avatar ?? "");
                    setUsername(portfolio.username ?? "");
                    setBio(portfolio.bio ?? "");
                    setName(portfolio.name ?? "");
                }

                if (website?.template) {
                    setTemplate(website.template);
                }
            } catch (error) {
                console.error(
                    "Failed to fetch dashboard data:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [isLoaded, isSignedIn]);

    return (
        <>
            <div className="p-3.5 w-full h-full flex justify-center items-start">
                <div className="grid grid-cols-1 gap-5 p-3 items-start md:grid-cols-2
                "
                >
                    <PortfolioCard
                        username={username}
                        isLoading={loading}
                    />

                    <ProfileCard
                        avatar={avatar}
                        name={name}
                        username={username}
                        bio={bio}
                        isLoading={loading}
                    />

                    <TemplatesCard
                        selectedTemplate={template}
                    />

                    <AnalyticsCard />
                </div>
            </div>
        </>
    );
};