"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutDashboard, TbTemplate, TbSettings } from "react-icons/tb";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const navLinks = [
    { name: "Dashboard", icon: <TbLayoutDashboard size={20} />, href: "/dashboard" },
    { name: "Templates", icon: <TbTemplate size={20} />, href: "/dashboard/template" },
    { name: "Setting", icon: <TbSettings size={20} />, href: "/dashboard/setting" }
];

export default function Sidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant={"secondary"}
                className={`fixed top-5 left-5 z-40 cursor-w-resize  text-sm text-foreground sm:text-base md:text-lg lg:text-xl xl:text-2xl fira-sans-medium p-0 ${open ? "hidden" : ""}`}
                onClick={() => setOpen(prev => !prev)}
            >
                <GoSidebarCollapse />
            </Button>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                />
            )}

            <aside className={`fixed top-0 left-0 h-screen w-54 sm:w-56 lg:w-60 border-r flex flex-col z-40 py-6 lg:px-3 px-0.5 gap-4 transition-transform duration-300 ease-in-out bg-background
                ${open ? "translate-x-0 " : "-translate-x-full"}
                `}>
                <div
                    className="flex justify-between items-center w-full px-0.5">
                    <div className="flex flex-col cursor-pointer leading-none select-none">
                        <div className="flex justify-center gap-1 items-center">
                            <span className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base fira-sans-semibold tracking-tight">
                                {"</"}
                            </span>
                            <h1 className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base fira-sans-semibold tracking-tight lowercase drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                                gitportify
                            </h1>
                            <span className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base fira-sans-semibold tracking-tight">
                                {">"}
                            </span>
                        </div>
                        <p
                            className="text-[4px] sm:text-[5px] md:text-[7px] lg:text-[8px] text-muted-foreground fira-sans-medium text-center mt-0.5 tracking-wide"
                        >
                            Develop your portfolio in minutes
                        </p>
                    </div>
                    <span
                        onClick={() => setOpen(false)}
                        className="hover:bg-muted p-1 rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl fira-sans-medium text-foreground cursor-w-resize text-center"
                    >
                        <GoSidebarExpand />
                    </span>
                </div>
                <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Tooltip key={link.href}>
                                <TooltipTrigger asChild>
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-3 py-2 rounded-md transition-colors flex justify-start gap-2.5 items-center fira-sans-medium
                                        ${active
                                                ? "bg-muted text-foreground"
                                                : "text-muted-foreground hover:bg-muted"
                                            }
                            `}
                                    >
                                        <span>{link.icon}</span>
                                        <span>{link.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    {link.name}
                                </TooltipContent>
                            </Tooltip>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
};