"use client";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-800 px-5 md:px-10 md:py-6 py-5 gap-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-8 gap-5">
                <div className="space-y-2 justify-start items-start">
                    <div className="flex cursor-pointer leading-none select-none">
                        <div className="flex items-center gap-1.5 justify-center">
                            <Image
                                src="/logo/Gitportify-Logo(dark).png"
                                alt="GitPortify Logo"
                                width={44}
                                height={44}
                                className="rounded-3xl object-center"
                                priority
                            />

                            <h1 className="text-[oklch(0.985_0_0)] xl:text-3xl md:text-2xl text-xl fira-sans-bold tracking-tight">
                                GitPortify
                            </h1>
                        </div>
                    </div>
                    <p className="xl:text-lg md:text-base text-sm fira-sans-medium text-muted-foreground max-w-xs">
                        Develop your portfolio in minutes — powered by GitHub
                    </p>
                    <div className="flex justify-start items-center gap-2.5">
                        <Link
                            href="https://www.linkedin.com/in/safdar-chougle"
                            target="_blank"
                            className="inline-flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border border-white rounded-md hover:bg-neutral-800 transition"
                        >
                            <FaLinkedin className="xl:text-xl md:text-base text-sm text-white fira-sans-regular" />
                        </Link>
                        <Link
                            href="https://youtube.com/playlist?list=PLUGVMxgOgh0ZCEuF-jZTkkZrKYt4GdFoE&si=4528IXkm_TFuGRbq"
                            target="_blank"
                            className="inline-flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border border-white rounded-sm hover:bg-neutral-800 transition"
                        >
                            <FaYoutube className="xl:text-xl md:text-base text-sm text-white fira-sans-regular" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/chouglesafdar22?igsh=cnY5cG0yY3gzZngz"
                            target="_blank"
                            className="inline-flex items-center justify-center xl:w-7 w-5 xl:h-7 h-5 border border-white rounded-sm hover:bg-neutral-800 transition"
                        >
                            <FaInstagram className="xl:text-xl md:text-base text-sm text-white fira-sans-regular" />
                        </Link>
                    </div>
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
                        <li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-white">Terms</Link></li>
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