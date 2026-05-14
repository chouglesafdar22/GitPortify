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
                } items-center justify-between md:py-12 py-6 px-2.5 md:px-16 md:gap-10 gap-5`}
        >
            <div className="w-full flex justify-center">
                <div className="relative w-full max-w-none">
                    <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-2xl"></div>
                    <div className="relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full max-h-175 object-contain bg-black"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full justify-center md:w-1/2 flex flex-col gap-1 text-left">
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