"use client";

interface StepProps {
    video: string;
    title: string;
    desc: string;
    reverse?: boolean;
}

export default function StepCard({ video, title, desc, reverse }: StepProps) {
    return (
        <div
            className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                } items-center justify-between md:py-12 py-6 px-6 md:px-16 md:gap-10 gap-5`}
        >
            <div className="w-full md:w-3/4 lg:w-4/5 flex justify-center">
                <div className="relative w-full max-w-none">
                    <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-2xl"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3 text-left">
                <h4 className="text-foreground lg:text-xl md:text-lg sm:text-base text-sm">
                    {title}
                </h4>
                <p className="text-muted-foreground lg:text-lg md:text-base sm:text-sm text-xs max-w-md">
                    {desc}
                </p>
            </div>
        </div>
    );
};