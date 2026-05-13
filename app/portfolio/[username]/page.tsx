"use client";
import { useEffect, useState } from "react";
import TemplateRenderer from "@/components/templates/TemplateRenderer";
import PreviewPanel from "@/components/dashboard/PreviewPanel";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { CiSun } from "react-icons/ci";
import { AiOutlineMoon } from "react-icons/ai";
import { templateConfigs } from "@/components/templates/template-configs";
import Navbar from "@/components/templates/Navbar";

export default function PortfolioPage() {
    const params = useParams();
    const username = params?.username as string;
    const [data, setData] = useState<any>(null);
    const currentYear = new Date().getFullYear();
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
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
    }

    // const config = templateConfigs[data.template as keyof typeof templateConfigs] ??
    // {
    //     allowThemeToggle: false,
    //     showNavbar: false
    // };

    return (
        // <PreviewPanel {...data} loading={loading} />

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
