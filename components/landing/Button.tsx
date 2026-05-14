"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    reverse?: boolean;
}

export default function Button({
    text,
    icon,
    onClick,
    href,
    className = "",
    reverse
}: ButtonProps) {
    const content = (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={`${reverse ? "flex-row-reverse" : ""} flex flex-row md:py-2.5 py-1.5 md:px-4 px-3 md:gap-2.5 gap-1.5 rounded-3xl lg:text-base md:text-sm sm:text-xs text-[12px] text-white bg-[#51149C] hover:bg-[#6D28D9] justify-center items-center cursor-pointer w-fit ${className}`}
        >
            <span>{text}</span>
            {icon && <span>{icon}</span>}
        </motion.div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return <button onClick={onClick}>{content}</button>;
};