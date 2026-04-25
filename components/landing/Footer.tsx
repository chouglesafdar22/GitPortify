"use client";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#2E2E2E] px-5 md:px-10 md:py-9 py-5 gap-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-8 gap-5">
                <div className="space-y-2">
                    <a href="#home" className="flex gap-2 items-center">
                        <div className="flex justify-center items-center bg-white md:w-8 w-5 md:h-8 h-5 rounded-full overflow-hidden">
                            <Image
                                src="/logo/GitPortify-Logo2.png"
                                alt="GitPortify Logo"
                                width={36}
                                height={36}
                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg">
                            GitPortify
                        </h1>
                    </a>
                    <p className="lg:text-lg md:text-base sm:text-sm text-xs text-muted-foreground max-w-xs">
                        Develop your portfolio in minutes — powered by GitHub
                    </p>
                    <Link
                        href="https://www.linkedin.com/in/safdar-chougle"
                        target="_blank"
                        className="inline-flex items-center justify-center w-8 h-8 border border-neutral-700 rounded-md hover:bg-neutral-800 transition"
                    >
                        <FaLinkedin className="lg:text-lg md:text-base sm:text-sm text-xs" />
                    </Link>
                </div>

                <div>
                    <h3 className="text-foreground lg:text-xl md:text-lg sm:text-base text-sm font-medium mb-3">Links</h3>
                    <ul className="space-y-2 lg:text-base md:text-sm sm:text-xs text-[10px] text-muted-foreground">
                        <li><Link href="#home" className="hover:text-white">Home</Link></li>
                        <li><Link href="#features" className="hover:text-white">Features</Link></li>
                        <li><Link href="#steps" className="hover:text-white">Steps</Link></li>
                        <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-foreground lg:text-xl md:text-lg sm:text-base text-sm font-medium mb-3">Company</h3>
                    <ul className="space-y-2 lg:text-base md:text-sm sm:text-xs text-[10px] text-muted-foreground">
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center gap-2 mt-6">
                <div className='h-0.5 bg-muted-foreground rounded'></div>
                <div className=" lg:text-base md:text-sm sm:text-xs text-[12px] text-muted-foreground text-left font-light">
                    &copy;{new Date().getFullYear()} GitPortify, All rights reserved. <Link className="hover:text-foreground hover:underline" href={"https://safdarchougle.vercel.app"}>Safdar Chougle</Link>
                </div>
            </div>
        </footer>
    );
}