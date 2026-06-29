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
            className={`grid grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:gap-16 md:py-20
                ${reverse ? "md:[&>*:first-child]:order-2" : ""}
            `}
        >
            {/* Preview */}

            <div className="relative">

                <div className="absolute inset-0 rounded-3xl bg-purple-600/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 shadow-2xl backdrop-blur-xl">

                    {/* Browser Header */}

                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">

                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />

                    </div>

                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-b-2xl bg-black object-contain"
                    />

                </div>

            </div>

            {/* Content */}

            <div className="flex flex-col gap-5">

                <span className="inline-flex w-fit rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-purple-300">
                    {steps}
                </span>

                <div className="space-y-3">

                    <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                        {title}
                    </h3>

                    <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                        {desc}
                    </p>

                </div>

            </div>

        </div>
    );
}