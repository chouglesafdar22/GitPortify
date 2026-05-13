"use client";
import { useEffect, useState } from "react";
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
        <div className="relative min-h-dvh transition-colors duration-500 ease-linear">
            {/* {config.allowThemeToggle && (
                <div className="absolute top-20 right-4 sm:top-20 sm:right-6 lg:right-8 z-20">
                    <button
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark")
                        }}
                        className="text-lg border text-foreground cursor-pointer rounded-full px-3 py-1 hover:bg-muted"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <CiSun /> : <AiOutlineMoon />}
                    </button>
                </div>
            )}
            {config.showNavbar && (
                <Navbar name={data.name} contactLinks={data.contactLinks} />
            )} */}
            <PreviewPanel {...data} loading={loading} />
            <footer className="flex w-full p-5 justify-center items-center text-center">
                <div className='flex items-center justify-center'>
                    <p className="text-[10px] md:text-[11px] xl:text-xs text-muted-foreground">
                        &copy;{currentYear} All Rights Reserved {data.name}. Created with {" "}
                        <Link
                            href={"/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-violet-600"
                        >
                            GitPortify
                        </Link></p>
                </div>
            </footer>
        </div>
    );
};
