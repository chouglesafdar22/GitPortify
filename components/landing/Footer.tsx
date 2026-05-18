"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#2E2E2E] px-5 md:px-10 md:py-6 py-5 gap-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-8 gap-5">
                <div className="space-y-2 justify-start items-start">
                    <div className="flex cursor-pointer leading-none select-none">
                        <div className="flex justify-start gap-0.5 items-start">
                            <span className="text-[oklch(0.985_0_0)] xl:text-4xl md:text-3xl text-2xl fira-sans-bold tracking-tight">
                                {"</"}
                            </span>
                            <h1 className="text-[oklch(0.985_0_0)] xl:text-4xl md:text-3xl text-2xl fira-sans-bold tracking-tight lowercase drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                                gitportify
                            </h1>
                            <span className="text-[oklch(0.985_0_0)] xl:text-4xl md:text-3xl text-2xl fira-sans-bold tracking-tight">
                                {">"}
                            </span>
                        </div>
                    </div>
                    <p className="xl:text-lg md:text-base text-sm fira-sans-medium text-muted-foreground max-w-xs">
                        Develop your portfolio in minutes — powered by GitHub
                    </p>
                    <Link
                        href="https://www.linkedin.com/in/safdar-chougle"
                        target="_blank"
                        className="inline-flex items-center justify-center xl:w-8 w-6 xl:h-8 h-6 border border-white rounded-sm hover:bg-neutral-800 transition"
                    >
                        <FaLinkedin className="xl:text-[22px] md:text-[19px] text-[17px] text-white fira-sans-regular" />
                    </Link>
                </div>

                <div>
                    <h3 className="text-white xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Links</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="#home" className="hover:text-white">Home</Link></li>
                        <li><Link href="#templates" className="hover:text-white">Templates</Link></li>
                        <li><Link href="#features" className="hover:text-white">Features</Link></li>
                        <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                        <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Pages</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="/signup" className="hover:text-white">SignUp</Link></li>
                        <li><Link href="/feedback" className="hover:text-white">Feedback</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Legal</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="/privacy-policy" className="hover:text-white">PrivacyPolicy</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-white">Terms&Conditions</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center gap-2.5 mt-6">
                <div className='h-0.5 bg-muted-foreground rounded'></div>
                <div className="xl:text-[15px] md:text-[13px] text-[11px] text-muted-foreground text-left fira-sans-light">
                    &copy;{new Date().getFullYear()} GitPortify, All rights reserved. Developed By <Link className="hover:text-foreground hover:underline" href={"https://gitportify.vercel.app/portfolio/safdar"}>Safdar Chougle</Link>
                </div>
            </div>
        </footer>
    );
}