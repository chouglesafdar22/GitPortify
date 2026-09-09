"use client";
import { ReactNode } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
    title: string;
    children: ReactNode;
    onEdit?: () => void;
    className?: string;
}

export default function DashboardCard({
    title,
    children,
    onEdit,
    className = "",
}: DashboardCardProps) {
    return (
        <div
            className={`
                group relative overflow-hidden
                rounded-2xl
                border border-foreground/10
                bg-foreground/5
                backdrop-blur-xl
                transition-all duration-300
                hover:border-purple-500/30
                hover:shadow-[0_0_35px_rgba(109,40,217,0.12)]
                ${className}
            `}
        >
            <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
                <h2 className="text-lg fira-sans-medium text-foreground">
                    {title}
                </h2>

                {onEdit && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={onEdit}
                        className="
                            h-8 w-8
                            cursor-pointer
                            rounded-md
                            text-muted-foreground
                            hover:bg-purple-500/10
                            hover:text-purple-400
                        "
                        aria-label={`Edit ${title}`}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>
                )}
            </div>

            <div className="p-5">
                {children}
            </div>
        </div>
    );
}