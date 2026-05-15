"use client";
import TemplateCard from "./TemplateCard";

export default function Template() {
    return (
        <section id="templates" className="lg:mt-7 md:mt-6 sm:mt-5 mt-4 flex flex-col justify-center items-center md:px-14 px-5 md:py-10 py-5 md:gap-7 gap-6">
            <div className="flex flex-col justify-center items-center md:gap-3 gap-1.5">
                <h2 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg text-center fira-sans-semibold">
                    Templates
                </h2>
                <h3 className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base text-center fira-sans-medium">
                   Modern portfolio templates designed for developers
                </h3>
            </div>
            <div className="relative w-full">
                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full md:w-8 w-2.5 bg-linear-to-r from-background to-transparent" />
                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full md:w-8 w-2.5 bg-linear-to-l from-background to-transparent" />
                {/* Scroll Container */}
                <div
                    className="flex gap-6 overflow-x-auto items-center scrollbar-hide snap-x snap-mandatory pb-3 px-1 cursor-grab active:cursor-grabbing"
                >
                    <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                        <TemplateCard
                            image={"/templates/neo-dev.png"}
                            title="Neo-Dev"
                            description="A modern glassmorphism-inspired developer portfolio"
                            href="/preview/demo-neo-dev"
                        />
                    </div>

                    <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                        <TemplateCard
                            image={"/templates/terminal-dev.png"}
                            title="Terminal-Dev"
                            description="Terminal style hacker portfolio"
                            href="/preview/demo-terminal-dev"
                        />
                    </div>

                    <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                        <TemplateCard
                            image={"/templates/product-landing.png"}
                            title="Product-Landing"
                            description="Modern landing page style portfolio"
                            href="/preview/demo-product-landing"
                        />
                    </div>

                    <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                        <TemplateCard
                            image={"/templates/github-pro.png"}
                            title="GitHub-Pro"
                            description="Clean developer portfolio inspired by GitHub"
                            href="/preview/demo-github-pro"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
};