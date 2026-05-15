"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#2E2E2E] px-5 md:px-10 md:py-9 py-5 gap-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-8 gap-5">
                <div className="space-y-2">
                    <a href="#home" className="flex flex-col cursor-pointer leading-none select-none">
                        <div className="flex justify-center gap-1 items-start">
                            <span className="text-[oklch(0.985_0_0)] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg fira-sans-bold tracking-tight">
                                {"</"}
                            </span>
                            <h1 className="text-[oklch(0.985 0 0)] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg fira-sans-bold tracking-tight lowercase drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                                gitportify
                            </h1>
                            <span className="text-[oklch(0.985 0 0)] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg fira-sans-bold tracking-tight">
                                {">"}
                            </span>
                        </div>
                        <p
                            className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] text-muted-foreground fira-sans-medium text-center mt-0.5 tracking-wide"
                        >
                            Develop your portfolio in minutes
                        </p>
                    </a>
                    <p className="lg:text-lg md:text-base sm:text-sm text-xs fira-sans-medium text-muted-foreground max-w-xs">
                        Develop your portfolio in minutes — powered by GitHub
                    </p>
                    <Link
                        href="https://www.linkedin.com/in/safdar-chougle"
                        target="_blank"
                        className="inline-flex items-center justify-center w-8 h-8 border border-white rounded-md hover:bg-neutral-800 transition"
                    >
                        <FaLinkedin className="lg:text-xl md:text-lg sm:text-base text-sm text-white fira-sans-regular" />
                    </Link>
                </div>

                <div>
                    <h3 className="text-white lg:text-xl md:text-lg sm:text-base text-sm fira-sans-medium mb-3">Links</h3>
                    <ul className="space-y-1.5 lg:text-base md:text-sm sm:text-xs text-[10px] fira-sans-regular text-muted-foreground">
                        <li><Link href="#home" className="hover:text-white">Home</Link></li>
                        <li><Link href="#features" className="hover:text-white">Features</Link></li>
                        <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                        <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white lg:text-xl md:text-lg sm:text-base text-sm fira-sans-medium mb-3">Legal</h3>
                    <ul className="space-y-1.5 lg:text-base md:text-sm sm:text-xs text-[10px] fira-sans-regular text-muted-foreground">
                        <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-white">Terms&Conditions</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center gap-2 mt-6">
                <div className='h-0.5 bg-muted-foreground rounded'></div>
                <div className=" lg:text-[13px] md:text-[14px] sm:text-[12px] text-[10px] text-muted-foreground text-left fira-sans-light">
                    &copy;{new Date().getFullYear()} GitPortify, All rights reserved. Develop By <Link className="hover:text-foreground hover:underline" href={"https://safdarchougle.vercel.app"}>Safdar Chougle</Link>
                </div>
            </div>
        </footer>
    );
}