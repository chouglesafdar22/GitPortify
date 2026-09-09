"use client";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import DashboardCard from "./dashboardCard";

type TemplateType =
    | "github-pro"
    | "product-landing"
    | "terminal-dev"
    | "neo-dev"
    | "glassfolio"
    | "minimal-resume";

interface Template {
    id: TemplateType;
    name: string;
    description: string;
    previewUrl: string;
}

interface TemplatesCardProps {
    selectedTemplate?: TemplateType;
}

const templates: Template[] = [
    {
        id: "minimal-resume",
        name: "Minimal Resume",
        description: "A clean, resume-style portfolio built to get interviews",
        previewUrl: "/preview/website/minimal-resume",
    },
    {
        id: "glassfolio",
        name: "Glassfolio",
        description: "A glassmorphism developer portfolio with floating glass cards",
        previewUrl: "/preview/website/glassfolio",
    },
    {
        id: "neo-dev",
        name: "Neo-Dev",
        description: "A modern glassmorphism-inspired developer portfolio",
        previewUrl: "/preview/website/neo-dev",
    },
    {
        id: "terminal-dev",
        name: "Terminal-Dev",
        description: "Terminal style hacker portfolio page",
        previewUrl: "/preview/website/terminal-dev",
    },
    {
        id: "product-landing",
        name: "Product-Landing",
        description: "Modern landing page style portfolio",
        previewUrl: "/preview/website/product-landing",
    },
    {
        id: "github-pro",
        name: "GitHub-Pro",
        description: "Clean developer portfolio inspired by GitHub",
        previewUrl: "/preview/website/github-pro",
    },
];

export default function TemplatesCard({
    selectedTemplate,
}: TemplatesCardProps) {
    const router = useRouter();

    const handlePreview = (template: Template) => {
        window.open(template.previewUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <DashboardCard
            title="Templates"
            onEdit={() => router.push("/dashboard/templates")}
        >
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground fira-sans-regular">
                        Choose a design for your portfolio
                    </p>

                    <span className="text-xs text-muted-foreground">
                        {templates.length} templates
                    </span>
                </div>

                {/* Scrollable template list */}
                <div className="max-h-65 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-foreground/15 scrollbar-track-transparent">
                    <div className="space-y-2">
                        {templates.map((template) => {
                            const isSelected =
                                selectedTemplate === template.id;

                            return (
                                <button
                                    key={template.id}
                                    type="button"
                                    onClick={() => handlePreview(template)}
                                    className={`
                                        group w-full cursor-pointer
                                        rounded-xl border
                                        p-3 text-left
                                        transition-all duration-200
                                        ${isSelected
                                            ? "border-purple-500/60 bg-purple-500/10 shadow-[0_0_20px_rgba(109,40,217,0.12)]"
                                            : "border-foreground/10 bg-foreground/5 hover:border-purple-500/30 hover:bg-purple-500/5"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Template preview block */}
                                        <div
                                            className={`
                                                flex h-12 w-16 shrink-0
                                                items-center justify-center
                                                rounded-lg border
                                                bg-black/20
                                                ${isSelected
                                                    ? "border-purple-500/40"
                                                    : "border-foreground/10"
                                                }
                                            `}
                                        >
                                            <span className="text-[9px] text-muted-foreground">
                                                Preview
                                            </span>
                                        </div>

                                        {/* Template information */}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="truncate text-sm text-foreground fira-sans-medium">
                                                    {template.name}
                                                </h3>

                                                {isSelected && (
                                                    <span className="shrink-0 rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[9px] text-purple-400">
                                                        Selected
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-0.5 truncate text-xs text-muted-foreground fira-sans-regular">
                                                {template.description}
                                            </p>
                                        </div>

                                        <ExternalLink
                                            className="
                                                h-4 w-4 shrink-0
                                                text-muted-foreground
                                                transition-colors
                                                group-hover:text-purple-400
                                            "
                                        />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DashboardCard>
    );
}