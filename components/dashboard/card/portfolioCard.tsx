"use client";
import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import DashboardCard from "./dashboardCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PortfolioCardProps {
    username?: string;
}

export default function PortfolioCard({
    username,
}: PortfolioCardProps) {
    const router = useRouter();
    const [copied, setCopied] = useState(false);

    const portfolioUrl = username
        ? `${window.location.origin}/p/${username}`
        : "";

    const handleCopy = async () => {
        if (!portfolioUrl) {
            toast.error("Create your portfolio username first.");
            return;
        }

        try {
            await navigator.clipboard.writeText(portfolioUrl);

            setCopied(true);
            toast.success("Portfolio URL copied");

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch {
            toast.error("Failed to copy portfolio URL");
        }
    };

    const handleOpenPortfolio = () => {
        if (!username) {
            router.push("/dashboard/portfolio");
            return;
        }

        window.open(portfolioUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            
            <DashboardCard
                title="Portfolio"
                onEdit={() => router.push("/dashboard/portfolio")}
                className="min-h-52"
            >
                <div className="flex h-full flex-col justify-between gap-6">
                    {/* Website */}
                    <div>
                        <p className="mb-2 text-sm text-muted-foreground fira-sans-regular">
                            Website
                        </p>

                        {username ? (
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handleOpenPortfolio}
                                    className="
                                    min-w-0 flex-1 truncate
                                    text-left text-sm
                                    text-foreground
                                    transition-colors
                                    hover:text-purple-400
                                    cursor-pointer
                                "
                                    title={portfolioUrl}
                                >
                                    {portfolioUrl}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className="
                                    flex h-8 w-8 shrink-0
                                    items-center justify-center
                                    rounded-md
                                    border border-foreground/10
                                    text-muted-foreground
                                    transition-all
                                    hover:border-purple-500/30
                                    hover:bg-purple-500/10
                                    hover:text-purple-400
                                    cursor-pointer
                                "
                                    aria-label="Copy portfolio URL"
                                >
                                    {copied ? (
                                        <Check className="h-4 w-4" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Create your portfolio username first.
                            </p>
                        )}
                    </div>

                    {/* Username / status */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                            <p className="text-xs text-muted-foreground fira-sans-regular">
                                Username
                            </p>

                            <p className="mt-1 truncate text-sm text-foreground fira-sans-medium">
                                {username ? `@${username}` : "Not set"}
                            </p>
                        </div>

                        {/* {username && (
                            <button
                                type="button"
                                onClick={handleOpenPortfolio}
                                className="
                                flex shrink-0 items-center gap-1.5
                                text-xs
                                text-muted-foreground
                                transition-colors
                                hover:text-purple-400
                                cursor-pointer
                            "
                            >
                                View
                                <ExternalLink className="h-3.5 w-3.5" />
                            </button>
                        )} */}
                    </div>
                </div>
            </DashboardCard>
        </>
    );
}