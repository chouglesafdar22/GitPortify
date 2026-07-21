"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FaBookOpen } from "react-icons/fa";

const links = [
    { name: "Guide", icon: <FaBookOpen size={20} />, href: "https://youtu.be/zDH-1B2zhVg?si=tWh_VtU49gfFnF7L" }
];

interface BtnProps {
    contentClassName?: string;
    reverse?: boolean;
    className?: string;
};

export default function GuideBarButton({
    contentClassName = "",
    reverse,
    className = "",
}: BtnProps) {
    return (
        links.map((l) => (
            <Link href={l.href} target="_blank" rel="noopener noreferrer" key={l.name} className={className}>
                <Tooltip key={l.href}>
                    <TooltipTrigger asChild>
                        <motion.div
                            key={l.name}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", duration: 0.3 }}
                            className={`${reverse ? "flex-row-reverse" : ""} flex flex-row p-2.5 md:gap-2.5 gap-1.5 rounded-full text-white xl:text-lg md:text-base text-sm bg-[#51149C] hover:bg-[#6D28D9] justify-center items-center text-center cursor-pointer w-fit fira-sans-medium ${contentClassName}`}
                        >
                            {l.icon && <span>{l.icon}</span>}
                        </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        {l.name}
                    </TooltipContent>
                </Tooltip>
            </Link>
        ))
    )
};