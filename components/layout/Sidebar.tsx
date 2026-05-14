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
                className="fixed top-5 left-5 z-40 cursor-w-resize text-sm text-foreground sm:text-base md:text-lg lg:text-xl xl:text-2xl p-0"
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

            <aside className={`fixed top-0 left-0 h-screen w-46 sm:w-48 lg:w-50 border-r flex flex-col z-40 py-6 lg:px-3 px-0.5 gap-4 transition-transform duration-300 ease-in-out bg-background
                ${open ? "translate-x-0 " : "-translate-x-full"}
                `}>
                <div
                    className="flex justify-between items-center w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-foreground px-0.5">
                    <span>GitPortify</span>
                    <span
                        onClick={() => setOpen(false)}
                        className="hover:bg-muted p-1 rounded cursor-w-resize"
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
                                        className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-3 py-2 rounded-md transition-colors flex justify-start gap-2.5 items-center
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