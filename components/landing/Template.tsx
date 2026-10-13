"use client";
import TemplateCard from "./TemplateCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Template() {
    return (
        <section
            id="templates"
            className="lg:mt-7 md:mt-6 mt-4 flex flex-col items-center justify-center gap-10 px-3 pb-30 py-5 md:px-10 md:py-10"
        >
            {/* Section Heading */}
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-sm fira-sans-medium uppercase tracking-[0.2em] text-violet-500">
                    Find your style
                </p>

                <h2 className="text-foreground fira-sans-semibold text-center text-2xl md:text-3xl xl:text-4xl">
                    Your portfolio, your identity.
                </h2>

                <p className="max-w-2xl text-center text-base text-foreground/65 md:text-lg xl:text-xl">
                    Explore modern portfolio designs built for developers.
                    Choose a style that showcases your work.
                </p>
            </div>

            {/* Latest Templates */}
            <div className="w-full max-w-7xl">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-foreground fira-sans-medium text-lg md:text-xl">
                        Latest templates
                    </h3>

                    <span className="text-sm fira-sans-regular text-foreground/50">
                        Explore the collection
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Latest Template 1 */}
                    <div className="min-w-0 transition-transform duration-300 hover:-translate-y-1">
                        <TemplateCard
                            image="/templates/website/minimal-resume.png"
                            isNew
                            title="Minimal-Resume"
                            description="A clean, resume-style portfolio built to get interviews"
                            href="/preview/website/minimal-resume"
                        />
                    </div>

                    {/* Latest Template 2 */}
                    <div className="min-w-0 transition-transform duration-300 hover:-translate-y-1">
                        <TemplateCard
                            image="/templates/website/glassfolio.png"
                            isNew
                            title="Glassfolio"
                            description="A glassmorphism developer portfolio with floating glass cards"
                            href="/preview/website/glassfolio"
                        />
                    </div>

                    {/* View More Templates */}
                    <Link
                        href="/templates"
                        className="group flex min-h-62.5 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-foreground/20 bg-foreground/2 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/4 sm:min-h-full"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 transition-colors duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10">
                            <FaArrowRight className="text-xl text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-500" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="text-foreground fira-sans-semibold text-xl">
                                Explore all templates
                            </h3>

                            <p className="mx-auto max-w-xs text-sm leading-6 text-foreground/60">
                                Discover more designs and find the right look
                                for your developer portfolio.
                            </p>
                        </div>

                        <span className="text-sm font-medium text-violet-500">
                            View all templates →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
