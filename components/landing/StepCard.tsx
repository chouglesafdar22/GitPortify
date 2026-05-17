"use client";

interface StepProps {
    video: string;
    title: string;
    desc: string;
    reverse?: boolean;
    steps: string;
}

export default function StepCard({
    video,
    title,
    desc,
    reverse,
    steps,
}: StepProps) {
    return (
        <div
            className={`grid md:grid-cols-2 grid-cols-1 items-center md:gap-14 gap-8 md:py-16 py-8
            ${reverse ? "md:[&>*:first-child]:order-2" : ""}
            `}
        >
            {/* Video */}
            <div className="relative w-full">
                {/* Glow */}
                <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-3xl" />
                {/* Window */}
                <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-foreground/40 backdrop-blur-xl shadow-[0_0_40px_rgba(109,40,217,0.12)] cursor-pointer">
                    {/* Browser Top */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10 bg-foreground/5">
                        <div className="md:w-3 w-1.5 md:h-3 h-1.5 rounded-full bg-red-500" />
                        <div className="md:w-3 w-1.5 md:h-3 h-1.5 rounded-full bg-yellow-500" />
                        <div className="md:w-3 w-1.5 md:h-3 h-1.5 rounded-full bg-green-500" />
                    </div>
                    {/* Video */}
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center items-start md:gap-4 gap-2.5">
                <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 xl:text-base md:text-sm text-xs fira-sans-medium">
                    {steps}
                </span>
                <div className="flex flex-col">
                    <h4 className="text-foreground xl:text-2xl md:text-xl text-lg leading-tight fira-sans-semibold">
                        {title}
                    </h4>
                    <p className="text-muted-foreground xl:text-lg md:text-base text-sm leading-relaxed max-w-lg fira-sans-regular">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}