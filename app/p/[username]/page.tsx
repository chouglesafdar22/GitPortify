"use client";
import { useEffect, useState } from "react";
import TemplateRenderer from "@/components/templates/TemplateRenderer";
import PreviewPanel from "@/components/dashboard/PreviewPanel";
import { useParams } from "next/navigation";
import NotFoundPortfolio from "@/components/portfolio/notfoundPortfolio";

export default function PortfolioPage() {
    const params = useParams();
    const username = params?.username as string;
    const [data, setData] = useState<any>(null);
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);

        const fetchPortfolio = async () => {
            try {
                const res = await fetch(`/api/website/${encodeURIComponent(username)}`);
                const result = await res.json();

                console.log("API", result)

                if (!res.ok) {
                    console.error("Error:", result.error);
                    return;
                }

                setData(result.website);
            } catch (err) {
                console.error("fetch error:", err)
            } finally {
                setLoading(false);
            }
        };

        if (username) fetchPortfolio();
    }, [username]);

    useEffect(() => {
        console.log("Updated data:", data);
    }, [data]);

    if (!mounted) return null;

    if (loading) {
        return (
            <PreviewPanel
                bio=""
                name=""
                avatar=""
                template="github-pro"
                projects={[]}
                techSkills={[]}
                experiences={[]}
                education={[]}
                contactLinks={{
                    email: "",
                    github: "",
                    linkedin: "",
                    website: "",
                }}
                loading={true}
            />
        );
    };

    if (!data) {
        return (
            <NotFoundPortfolio />
        )
    }

    return (
        <TemplateRenderer
            key={data.template}
            template={data.template}
            name={data.name}
            bio={data.bio}
            avatar={data.avatar}
            projects={data.projects}
            education={data.education}
            experiences={data.experiences}
            techSkills={data.techSkills}
            contactLinks={data.contactLinks}
        />
    );
};
