"use client";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
};

export default function FeatureCard({ icon, title, desc }: CardProps) {
    return (
        <div className="flex flex-col justify-center items-start py-9 px-6 gap-4 bg-[#51149C] rounded-3xl">
            <span className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg text-center">{icon}</span>
            <div className="flex flex-col justify-start items-start gap-2.5">
                <h4 className="text-white lg:text-xl md:text-lg sm:text-base text-sm">{title}</h4>
                <p className="text-gray-300 lg:text-lg md:text-base sm:text-sm text-xs">{desc}</p>
            </div>
        </div>
    )
}