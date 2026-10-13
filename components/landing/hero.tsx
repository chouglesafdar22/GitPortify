"use client";
import PrimaryBtn, { SecondaryBtn } from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Badge from "./Badge";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="home"
            className="px-5 pt-28 pb-20 mt-14 sm:mt-18 md:mt-28 md:px-13 lg:mt-32 md:pb-28"
        >
            <div className="mx-auto max-w-7xl">
                {/* Hero Content */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6 text-center"
                >
                    <Badge />

                    <div className="flex max-w-4xl flex-col gap-5">
                        <h1 className="text-foreground fira-sans-bold text-4xl leading-tight tracking-tight md:text-5xl xl:text-6xl">
                            Your code deserves a portfolio that{" "}
                            <span className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                stands out.
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base leading-7 text-foreground/70 fira-sans-regular md:text-lg xl:text-xl">
                            Turn your GitHub or GitLab profile into a
                            professional developer portfolio. Customize your
                            style, showcase your projects, and publish your
                            own link.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <PrimaryBtn
                            href="/signup"
                            text="Create Your Portfolio"
                            icon={<FaLongArrowAltRight />}
                            contentClassName="md:px-6 md:py-4 px-5 py-3 text-base md:text-lg xl:text-xl"
                        />

                        <SecondaryBtn
                            href="#templates"
                            text="Explore Templates"
                            contentClassName="md:px-6 md:py-4 px-5 py-3 text-base md:text-lg xl:text-xl"
                        />
                    </div>

                    <p className="text-sm text-foreground/55">
                        Sign up with GitHub or GitLab · No coding required
                    </p>
                </motion.div>

                {/* Published Portfolio Preview */}
                <motion.div
                    initial={
                        shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 30, scale: 0.98 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="relative mx-auto mt-14 max-w-6xl sm:mt-20"
                >
                    <div
                        aria-hidden="true"
                        className="absolute -inset-6 -z-10 rounded-xl bg-violet-600/15 blur-3xl"
                    />

                    <div className="overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-violet-500/10">
                        {/* Browser Bar */}
                        <div className="flex items-center md:gap-3 gap-1.5 border-b border-foreground/10 md:px-5 px-2 md:py-3 py-1.5">
                            <div className="flex gap-1.5" aria-hidden="true">
                                <span className="md:h-2.5 h-1.25 md:w-2.5 w-1.25 rounded-full bg-red-400" />
                                <span className="md:h-2.5 h-1.25 md:w-2.5 w-1.25 rounded-full bg-yellow-400" />
                                <span className="md:h-2.5 h-1.25 md:w-2.5 w-1.25 rounded-full bg-green-400" />
                            </div>

                            <div className="mx-auto max-w-sm truncate rounded-md bg-foreground/5 md:px-4 px-1.5 py-1.5 text-center text-xs text-foreground/55 md:text-sm xl:text-base">
                                gitportify.vercel.app/w/chouglesafdar22
                            </div>
                        </div>

                        <Image
                            src="/images/dashboard-preview.png"
                            alt="Example of a published developer portfolio created with GitPortify"
                            width={1200}
                            height={800}
                            priority
                            sizes="(max-width: 768px) 100vw, 1152px"
                            className="h-auto w-full object-cover object-top text-foreground"
                        />
                    </div>

                    <p className="mt-4 text-center text-xs text-foreground/50">
                        Your projects. Your style. Your portfolio.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
