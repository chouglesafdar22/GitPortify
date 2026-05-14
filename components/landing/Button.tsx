"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    contentClassName?: string;
    reverse?: boolean;
    className?: string;
};

export default function Button({
    text,
    icon,
    onClick,
    href,
    contentClassName = "",
    reverse,
    className = "",
}: ButtonProps) {
    const content = (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={`${reverse ? "flex-row-reverse" : ""} flex flex-row md:py-2.5 py-1.5 md:px-4 px-3 md:gap-2.5 gap-1.5 rounded-3xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[12px] text-white bg-[#51149C] hover:bg-[#6D28D9] justify-center items-center cursor-pointer w-fit ${contentClassName}`}
        >
            <span>{text}</span>
            {icon && <span>{icon}</span>}
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className={`${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${className}`}>
            {content}
        </button>
    );
};