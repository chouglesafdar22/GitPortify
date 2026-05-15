"use client";
import Image from "next/image";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";

interface TemplateCardProps {
    image: string;
    title: string;
    description: string;
    href: string;
    featured?: boolean;
}

export default function TemplateCard({
    image,
    title,
    description,
    href,
    featured = false,
}: TemplateCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(109,40,217,0.18)]
                ${featured
                    ? "md:col-span-2"
                    : ""
                }
            `}
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Preview Image */}
            <div className="relative overflow-hidden border-b border-white/10">

                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full border border-green-500/20 bg-black/60 px-2 py-1 backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-[10px] text-green-400 fira-sans-medium">
                        Live Preview
                    </span>
                </div>

                <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={800}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]
                        
                        ${featured
                            ? "h-80"
                            : "h-62.5"
                        }
                    `}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col gap-4 p-5">

                <div className="space-y-1">

                    <h3 className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base fira-sans-bold">
                        {title}
                    </h3>

                    <p className="text-muted-foreground lg:text-base md:text-sm text-xs fira-sans-regular leading-relaxed">
                        {description}
                    </p>

                </div>

                <Button
                    href={href}
                    text="Preview Template"
                    icon={<FaLongArrowAltRight />}
                    contentClassName="w-full"
                    className="w-full"
                />

            </div>
        </div>
    );
}