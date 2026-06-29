"use client";
import TemplateCard from "./TemplateCard";

export default function Template() {
    return (
        <section id="templates" className="lg:mt-7 md:mt-6 sm:mt-5 mt-4 flex flex-col justify-center items-center md:px-10 px-3 md:py-10 py-5 gap-10 pb-30">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-foreground xl:text-3xl md:text-2xl text-xl text-center fira-sans-semibold">
                    Templates
                </h2>
                <h3 className="text-foreground xl:text-2xl md:text-xl text-lg text-center fira-sans-medium">
                    Modern portfolio templates designed for developers
                </h3>
            </div>
            <div className="w-full">
                {/* Scroll Container */}
                <div
                    className="flex gap-6 overflow-x-auto xl:justify-center justify-start items-center scrollbar-hide snap-x snap-mandatory pb-3 px-1 cursor-grab active:cursor-grabbing"
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
                            description="Terminal style hacker portfolio page"
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