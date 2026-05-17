"use client";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export default function FeatureCard({
    icon,
    title,
    desc,
}: CardProps) {
    return (
        <div
            className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl px-6 py-8 flex flex-col justify-center items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(109,40,217,0.18)]"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Icon */}
            <span className="relative text-foreground xl:text-3xl md:text-2xl text-xl">
                {icon}
            </span>
            {/* Content */}
            <div className="relative flex flex-col justify-start items-start gap-1.5">
                <h4 className="text-foreground xl:text-xl md:text-lg text-sm fira-sans-semibold">
                    {title}
                </h4>
                <p className="text-muted-foreground xl:text-lg md:text-base text-sm leading-relaxed fira-sans-regular">
                    {desc}
                </p>
            </div>
        </div>
    );
}