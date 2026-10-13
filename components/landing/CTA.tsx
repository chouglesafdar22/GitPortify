"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import PrimaryBtn, { SecondaryBtn } from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { IoSparklesOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaGitlab } from "react-icons/fa";

export default function CTASection() {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 18,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section
            id="get-started"
            className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.12 }}
                className="mx-auto max-w-6xl"
            >
                <div className="relative isolate overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-br from-violet-500/9 via-background to-indigo-500/6 px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    {/* Ambient background glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-36 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]"
                    />

                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 fira-sans-light py-2 text-xs text-violet-400 md:text-sm"
                        >
                            <IoSparklesOutline />
                            Your portfolio starts here
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="fira-sans-bold text-3xl leading-tight tracking-tight text-foreground md:text-4xl xl:text-5xl"
                        >
                            Build a portfolio
                            <br className="hidden sm:block" /> that{" "}
                            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                                stands out.
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-5 max-w-2xl text-sm leading-7 fira-sans-medium text-muted-foreground md:text-base x;:text-lg"
                        >
                            Turn your developer profile and projects into a
                            portfolio you can share with the world. Connect
                            with GitHub or GitLab and make your work easier
                            to showcase.
                        </motion.p>

                        {/* Provider support */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-7 flex flex-wrap items-center justify-center gap-3"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/50 fira-sans-regular px-3.5 py-2 text-sm text-muted-foreground">
                                <IoLogoGithub className="text-base" />
                                GitHub
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/50 fira-sans-regular px-3.5 py-2 text-sm text-muted-foreground">
                                <FaGitlab className="text-base" />
                                GitLab
                            </div>
                        </motion.div>

                        {/* Product availability */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-10 flex w-full max-w-sm items-center gap-4 rounded-2xl border border-foreground/10 bg-background/40 p-4 text-left backdrop-blur-sm transition-colors duration-300 hover:border-violet-500/30 sm:max-w-md sm:p-5"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 fira-sans-medium bg-violet-500/10 text-violet-400 text-sm md:text-base xl:text-lg">
                                <BsGlobe2 />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="fira-sans-medium text-sm text-foreground md:text-base xl:text-lg">
                                    Developer Portfolio
                                </h3>
                                <p className="mt-0.5 text-xs fira-sans-regular text-muted-foreground md:text-sm xl:text-base">
                                    Create, customize and publish
                                </p>
                            </div>

                            <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] fira-sans-medium text-emerald-400 sm:text-xs">
                                Available
                            </span>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center md:gap-5"
                        >
                            <div className="transition-transform duration-200 hover:-translate-y-0.5">
                                <PrimaryBtn
                                    href="/signup"
                                    text="Create Your Portfolio"
                                    icon={<FaArrowRight />}
                                    contentClassName="w-full justify-center px-5 py-3.5 text-base sm:w-auto text-base md:text-lg xl:text-xl"
                                />
                            </div>

                            <div className="transition-transform duration-200 hover:-translate-y-0.5">
                                <SecondaryBtn
                                    href="#templates"
                                    text="Explore Templates"
                                    contentClassName="w-full justify-center px-5 py-3.5 text-base sm:w-auto text-base md:text-lg xl:text-xl"
                                />
                            </div>
                        </motion.div>

                        {/* Reassurance */}
                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-6 text-xs leading-6 fira-sans-regular text-muted-foreground md:text-sm"
                        >
                            Free to start <span className="mx-1.5 text-foreground/30">•</span>
                            No credit card required
                        </motion.p>

                        {/* Existing account */}
                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-3 text-sm fira-sans-regular text-muted-foreground"
                        >
                            Already have an account?{" "}
                            <Link
                                href="/signin"
                                className="fira-sans-medium text-foreground underline decoration-violet-500/50 underline-offset-4 transition-colors hover:text-violet-400"
                            >
                                Sign in
                            </Link>
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}