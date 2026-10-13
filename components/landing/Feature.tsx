"use client";
import FeatureCard from "./FeatureCard";
import { GrTemplate } from "react-icons/gr";
import { FaLink, FaRegEdit } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaGitlab } from "react-icons/fa";

export default function Feature() {
    const reduceMotion = useReducedMotion();

    const animation = reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.5, ease: "easeOut" as const },
        };

    return (
        <section
            id="features"
            className="mt-4 flex flex-col items-center gap-10 px-5 py-12 pb-24 sm:mt-5 md:mt-6 md:px-14 md:py-16 lg:mt-7"
        >
            {/* Heading */}
            <motion.div
                {...animation}
                className="flex max-w-2xl flex-col items-center gap-4 text-center"
            >
                <p className="text-sm fira-sans-medium uppercase tracking-[0.2em] text-violet-500">
                    Built for developers
                </p>

                <h2 className="fira-sans-semibold text-center text-2xl text-foreground md:text-3xl xl:text-4xl">
                    Everything you need to stand out.
                </h2>

                <p className="max-w-xl fira-sans-regular text-base leading-7 text-muted-foreground md:text-lg xl:text-xl">
                    Turn your developer profile into a portfolio that
                    showcases your skills, projects, and personality.
                </p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {/* Featured: GitHub + GitLab */}
                <FeatureCard
                    {...animation}
                    featured
                    icon={
                        <div className="flex items-center gap-5">
                            <span className="flex h-auto w-auto p-1 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                                <FaGithub className="text-4xl md:text-7xl fira-sans-medium text-foreground" />
                            </span>

                            <span className="text-3xl fira-sans-regular text-muted-foreground">
                                +
                            </span>

                            <span className="flex h-auto w-auto p-1 items-center justify-center rounded-xl border border-foreground/10 bg-[#FC6D2615]">
                                <FaGitlab className="text-4xl md:text-7xl fira-sans-medium text-[#FC6D26]" />
                            </span>
                        </div>
                    }
                    number="01"
                    label="IMPORT"
                    title="Your projects, connected."
                    desc="Bring your developer profile and projects from GitHub or GitLab into your portfolio workflow, without starting from scratch."
                />

                {/* Templates */}
                <FeatureCard
                    {...animation}
                    number="02"
                    label="PERSONALIZE"
                    icon={<GrTemplate />}
                    title="Make it yours."
                    desc="Choose from modern portfolio templates and find a design that fits your personal brand."
                />

                {/* Publish */}
                <FeatureCard
                    {...animation}
                    number="03"
                    label="PUBLISH"
                    icon={<FaLink />}
                    title="One link. Your work."
                    desc="Publish your portfolio and share your projects with recruiters, clients, and your community."
                />

                {/* Editing */}
                <FeatureCard
                    {...animation}
                    number="04"
                    label="CUSTOMIZE"
                    icon={<FaRegEdit />}
                    title="Keep your portfolio fresh."
                    desc="Update your profile and portfolio details whenever you need to, without rebuilding your site from scratch."
                />
            </div>
        </section>
    );
};
