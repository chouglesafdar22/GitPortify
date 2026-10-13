"use client";
import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

interface CardProps extends Pick<
    HTMLMotionProps<"div">,
    "initial" | "whileInView" | "viewport" | "transition"
> {
    icon: ReactNode;
    title: string;
    desc: string;
    number: string;
    label: string;
    featured?: boolean;
}

export default function FeatureCard({
    icon,
    title,
    desc,
    number,
    label,
    featured = false,
    ...motionProps
}: CardProps) {
    return (
        <motion.div
            {...motionProps}
            whileHover={{ y: -4 }}
            className={`group relative isolate flex min-h-62.5 flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl border p-6 transition-colors duration-300 md:p-8 ${featured
                ? "border-violet-500/20 bg-linear-to-br from-violet-500/12 via-foreground/4 to-transparent md:row-span-2"
                : "border-foreground/10 bg-foreground/3 hover:border-violet-500/30"
                }`}
        >
            {/* Hover glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Card header */}
            <div
                className={`relative flex w-full items-center ${featured
                        ? "min-h-75 w-full justify-center md:min-h-90"
                        : "justify-between"
                    }`}
            >
                <span
                    className={`flex items-center justify-center ${featured
                            ? "flex h-full max-h-65 w-full items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 text-5xl shadow-[0_0_60px_rgba(139,92,246,0.12)] md:text-6xl"
                            : "h-12 w-12 rounded-2xl border border-foreground/10 bg-foreground/4 text-3xl"
                        }`}
                >
                    {icon}
                </span>

                <span
                    className={`text-xs fira-sans-medium tracking-widest text-muted-foreground/70 ${featured ? "absolute right-0 top-0" : ""
                        }`}
                >
                    {number}
                </span>
            </div>

            {/* Card content */}
            <div className="flex w-full flex-col gap-3">
                <p className="text-xs fira-sans-medium tracking-[0.16em] text-violet-500">
                    {label}
                </p>

                <h3 className="fira-sans-semibold text-xl text-foreground md:text-2xl">
                    {title}
                </h3>

                <p className="fira-sans-regular max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};
