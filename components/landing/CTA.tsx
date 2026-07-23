import Link from "next/link";
import { ArrowRight, Sparkles, Globe, FileText, Mail } from "lucide-react";
import { IoSparklesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button, { SecondaryBtn } from "./Button";

export default function CTASection() {
    return (
        <section className="lg:mt-7 md:mt-6 sm:mt-5 mt-4 md:px-14 px-1 md:py-10 py-5 pb-5">
            <div className="mx-auto max-w-5xl">
                <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-b from-background to-background/25 p-2.5 md:p-10">

                    {/* Background Glow */}
                    <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />

                    <div className="relative z-10 mx-auto max-w-4xl text-center">

                        {/* Badge */}
                        <div className="mb-10 inline-flex items-center gap-2 rounded-full border fira-sans-light border-purple-500/20 bg-purple-500/10 px-4 py-2 md:text-sm text-xs text-muted-foreground">
                            <IoSparklesSharp />
                            More Than a Portfolio Builder
                        </div>

                        {/* Heading */}
                        <h2 className="xl:text-3xl md:text-2xl text-xl fira-sans-bold tracking-tight text-foreground">
                            One Developer Profile.
                            <br />
                            <span className="text-indigo-400">
                                Multiple Ways to Showcase It.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-2xl xl:text-lg md:text-base text-sm fira-sans-medium text-muted-foreground">
                            Build your portfolio today using your GitHub profile. Soon, generate professional resumes and cover letters from the same developer profile.
                        </p>

                        {/* Roadmap */}
                        <div className="mt-10 flex flex-col justify-center items-center md:flex-row md:gap-5 gap-2.5">

                            <div className="rounded-2xl flex flex-col justify-center items-center h-40 w-50 border border-foreground/20 bg-background/5 p-5 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(109,40,217,0.18)] cursor-pointer">
                                <BsGlobe2 className="mb-2.5 mx-auto fira-sans-medium xl:text-2xl md:text-xl text-lg text-foreground" />
                                <h3 className="fira-sans-medium text-foreground">
                                    Portfolio Website
                                </h3>
                                <p className="mt-1 text-sm fira-sans-regular text-muted-foreground">
                                    Available Now
                                </p>
                            </div>

                            <div className="rounded-2xl flex flex-col justify-center items-center h-40 w-50 border border-foreground/20 bg-foreground/5 p-5">
                                <FiFileText className="mb-2.5 mx-auto fira-sans-medium xl:text-2xl md:text-xl text-lg text-foreground" />
                                <h3 className="fira-sans-medium text-foreground">
                                    Resume Builder
                                </h3>
                                <p className="mt-1 text-sm fira-sans-regular text-muted-foreground">
                                    Coming Soon
                                </p>
                            </div>

                            <div className="rounded-2xl flex flex-col justify-center items-center h-40 w-50 border border-foreground/20 bg-foreground/5 p-5">
                                <MdOutlineMail className="mb-2.5 mx-auto fira-sans-medium xl:text-2xl md:text-xl text-lg text-foreground" />
                                <h3 className="fira-sans-medium text-foreground">
                                    Cover Letter
                                </h3>
                                <p className="mt-1 text-sm fira-sans-regular text-muted-foreground">
                                    Coming Soon
                                </p>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                            <Button
                                href="/signup"
                                text="Create Portfolio Free"
                                icon={<FaLongArrowAltRight />}
                                contentClassName="xl:text-xl md:text-lg text-base md:py-4 py-3 md:px-5 px-3.5"
                            />

                            <SecondaryBtn
                                href="#templates"
                                text="Explore Templates"
                                contentClassName="xl:text-xl md:text-lg text-base md:py-4 py-3 md:px-5 px-3.5"
                            />

                        </div>

                        {/* Bottom Text */}
                        <p className="mt-10 text-sm text-neutral-500">
                            Free to start • Powered by GitHub • No credit card required
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}