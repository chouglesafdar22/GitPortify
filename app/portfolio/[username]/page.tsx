"use client";
import { useEffect, useState } from "react";
import TemplateRenderer from "@/components/templates/TemplateRenderer";
import PreviewPanel from "@/components/dashboard/PreviewPanel";
import { useParams } from "next/navigation";

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
                const res = await fetch(`/api/portfolio/${encodeURIComponent(username)}`);
                const result = await res.json();

                if (!res.ok) {
                    console.error("Error:", result.error);
                    return;
                }

                setData(result.portfolio);
            } catch (err) {
                console.error("fetch error:", err)
            }
        };

        if (username) fetchPortfolio();

        setLoading(false);

    }, [username]);

    if (!mounted) return null;

    if (!data) {
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
