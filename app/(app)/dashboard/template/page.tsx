"use client";
import TemplateCard from "@/components/landing/TemplateCard";
import GuideBarButton from "@/components/layout/GuideBarButton";

export default function TemplatesPage() {
    return (
        <>
            <div className="fixed bottom-5 right-6 z-40">
                <GuideBarButton />
            </div>

            <main className="min-h-full w-full px-4 py-5 md:px-6 xl:px-8">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-10 pt-12 md:pt-0 md:pb-0">

                    {/* Header */}
                    <div className="space-y-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground fira-sans-semibold sm:text-3xl">
                            Templates
                        </h1>

                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground fira-sans-regular">
                            Choose a design for your developer portfolio. You can
                            preview each template before selecting it.
                        </p>
                    </div>

                    {/* Template Grid */}
                    <section className="rounded-2xl border border-foreground/10 bg-foreground/2.5 p-4 shadow-sm sm:p-5">
                        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

                            {/* Minimal Resume */}
                            <div className="w-full max-w-[320px]">
                                <TemplateCard
                                    image="/templates/website/minimal-resume.png"
                                    isNew
                                    title="Minimal Resume"
                                    description="A clean, resume-style portfolio built to get interviews."
                                    href="/preview/website/minimal-resume"
                                />
                            </div>

                            {/* Glassfolio */}
                            <div className="w-full max-w-[320px]">
                                <TemplateCard
                                    image="/templates/website/glassfolio.png"
                                    isNew
                                    title="Glassfolio"
                                    description="A glassmorphism developer portfolio with floating glass cards."
                                    href="/preview/website/glassfolio"
                                />
                            </div>

                            {/* Neo Dev */}
                            <div className="w-full max-w-[320px]">
                                <TemplateCard
                                    image="/templates/website/neo-dev.png"
                                    title="Neo Dev"
                                    description="A modern glassmorphism-inspired developer portfolio."
                                    href="/preview/website/neo-dev"
                                />
                            </div>

                            {/* Terminal Dev */}
                            <div className="w-full max-w-[320px]">
                                <TemplateCard
                                    image="/templates/website/terminal-dev.png"
                                    title="Terminal Dev"
                                    description="A terminal-style portfolio for developers who love the command line."
                                    href="/preview/website/terminal-dev"
                                />
                            </div>

                            {/* Product Landing */}
                            <div className="w-full max-w-[320px]">
                                <TemplateCard
                                    image="/templates/website/product-landing.png"
                                    title="Product Landing"
                                    description="A modern landing-page style portfolio focused on projects and impact."
                                    href="/preview/website/product-landing"
                                />
                            </div>

                            {/* GitHub Pro */}
                            <div className="w-full max-w-[320px]">
                                <TemplateCard
                                    image="/templates/website/github-pro.png"
                                    title="GitHub Pro"
                                    description="A clean developer portfolio inspired by the GitHub experience."
                                    href="/preview/website/github-pro"
                                />
                            </div>

                        </div>
                    </section>

                    {/* Coming Soon */}
                    <section className="rounded-2xl border border-dashed border-foreground/10 bg-foreground/1.5 px-5 py-6 text-center">
                        <p className="text-sm font-medium text-foreground fira-sans-medium">
                            More templates are coming soon.
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground fira-sans-regular">
                            New portfolio designs will be added as GitPortify grows.
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
};