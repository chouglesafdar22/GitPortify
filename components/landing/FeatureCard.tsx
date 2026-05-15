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
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-8 flex flex-col justify-center items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(109,40,217,0.18)]"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Icon */}
            <span className="relative text-white lg:text-3xl md:text-2xl sm:text-xl text-lg">
                {icon}
            </span>
            {/* Content */}
            <div className="relative flex flex-col justify-start items-start gap-2.5">
                <h4 className="text-white lg:text-xl md:text-lg sm:text-base text-sm fira-sans-semibold">
                    {title}
                </h4>
                <p className="text-muted-foreground lg:text-base md:text-sm sm:text-xs text-[11px] leading-relaxed fira-sans-regular">
                    {desc}
                </p>
            </div>
        </div>
    );
}