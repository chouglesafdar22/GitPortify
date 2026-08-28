"use client";
import Footer from "@/components/dashboard/Footer";
import TemplateCard from "@/components/landing/TemplateCard";
import GuideBarButton from "@/components/layout/GuideBarButton";

export default function TemplatesPage() {
    return (
        <>
            <div className="fixed bottom-5 right-6 z-40">
                <GuideBarButton />
            </div>
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
                                image={"/templates/website/minimal-resume.png"}
                                title="Minimal-Resume"
                                description="A clean, resume-style portfolio built to get interviews"
                                href="/preview/website/minimal-resume"
                            />
                        </div>
                        <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                            <TemplateCard
                                image={"/templates/website/glassfolio.png"}
                                title="Glassfolio"
                                description="A glassmorphism developer portfolio with floating glass cards"
                                href="/preview/website/glassfolio"
                            />
                        </div>
                        <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                            <TemplateCard
                                image={"/templates/website/neo-dev.png"}
                                title="Neo-Dev"
                                description="A modern glassmorphism-inspired developer portfolio"
                                href="/preview/website/neo-dev"
                            />
                        </div>
                        <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                            <TemplateCard
                                image={"/templates/website/terminal-dev.png"}
                                title="Terminal-Dev"
                                description="Terminal style hacker portfolio page"
                                href="/preview/website/terminal-dev"
                            />
                        </div>
                        <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                            <TemplateCard
                                image={"/templates/website/product-landing.png"}
                                title="Product-Landing"
                                description="Modern landing page style portfolio"
                                href="/preview/website/product-landing"
                            />
                        </div>
                        <div className="min-w-72.5 sm:min-w-[320px] max-w-[320px] snap-start">
                            <TemplateCard
                                image={"/templates/website/github-pro.png"}
                                title="Github-Pro"
                                description="Clean developer portfolio inspired by GitHub"
                                href="/preview/website/github-pro"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};