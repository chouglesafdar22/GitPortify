"use client";
import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-background/25 px-5 md:px-10 md:py-6 py-5 gap-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-7 gap-4">
                <div className="space-y-2 justify-start items-start">
                    <div className="flex cursor-pointer leading-none select-none">
                        <div className="flex items-center md:gap-1.5 gap-1 justify-center">
                            <Image
                                src="/logo/GitPortify-Logo(dark).png"
                                alt="GitPortify Logo"
                                width={42}
                                height={42}
                                className="rounded-2xl object-center"
                                priority
                            />

                            <h1 className="text-foreground xl:text-3xl md:text-2xl text-xl fira-sans-bold tracking-tight">
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
                        >
                            <FaLinkedin className="xl:text-xl md:text-base text-sm text-foreground fira-sans-regular hover:text-[#8550c7]" />
                        </Link>
                        <Link
                            href="https://youtube.com/playlist?list=PLUGVMxgOgh0ZCEuF-jZTkkZrKYt4GdFoE&si=4528IXkm_TFuGRbq"
                            target="_blank"
                        >
                            <FaYoutube className="xl:text-xl md:text-base text-sm text-foreground fira-sans-regular hover:text-[#8550c7]" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/chouglesafdar22?igsh=cnY5cG0yY3gzZngz"
                            target="_blank"
                        >
                            <FaInstagram className="xl:text-xl md:text-base text-sm text-foreground fira-sans-regular hover:text-[#8550c7]" />
                        </Link>
                    </div>
                </div>

                <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-start gap-2.5">
                <div>
                    <h3 className="text-foreground xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Links</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="#home" className="hover:text-foreground">Home</Link></li>
                        <li><Link href="#templates" className="hover:text-foreground">Templates</Link></li>
                        <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
                        <li><Link href="#how-it-works" className="hover:text-foreground">How It Works</Link></li>
                        <li><Link href="#faq" className="hover:text-foreground">FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-foreground xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Pages</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="/signup" className="hover:text-foreground">SignUp</Link></li>
                        <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                        <li><Link href="/feedback" className="hover:text-foreground">Feedback</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-foreground xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Legal</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="/privacy-policy" className="hover:text-foreground">Privacy</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-foreground">Terms</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-foreground xl:text-xl md:text-lg text-base fira-sans-medium mb-1.5">Contact</h3>
                    <ul className="space-y-1.5 xl:text-base md:text-sm text-xs fira-sans-regular text-muted-foreground">
                        <li><Link href="mailto:gitportify@gmail.com" className="hover:text-foreground">gitportify@gmail.com</Link></li>
                    </ul>
                </div>
                
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center gap-2.5 mt-6">
                <div className='h-0.5 bg-muted-foreground rounded'></div>
                <div className="xl:text-[15px] md:text-[13px] text-[11px] text-muted-foreground text-left fira-sans-light">
                    &copy;{new Date().getFullYear()} GitPortify, All rights reserved.
                </div>
            </div>
        </footer>
    );
};

// Developed By <Link className="hover:text-foreground hover:underline" href={"https://safdarchougle.vercel.app"}>chouglesafdar</Link>