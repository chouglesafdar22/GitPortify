"use client";
import Footer from "@/components/dashboard/Footer";
import TemplateCard from "@/components/landing/TemplateCard";

export default function TemplatesPage() {
    return (
        <>
            <div className="p-7 space-y-10 h-full animate-in fade-in duration-500">
                <h1 className="text-lg sm:text-xl lg:text-2xl px-16 fira-sans-semibold">
                    Templates
                </h1>
                <div className="w-full">
                    {/* Scroll Container */}
                    <div
                        className="flex flex-wrap gap-5 justify-center items-center pb-2.5 px-1 cursor-grab active:cursor-grabbing"
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
            </div>
            <Footer />
        </>
    )
};