"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-40 w-full flex md:justify-evenly justify-between items-center md:py-6 py-3 md:px-20 px-6 bg-background/30 backdrop-blur-md">
            <a href="#home" className="flex flex-col justify-center cursor-pointer leading-none select-none">
                <div className="flex items-center gap-1.5 justify-center">
                    <Image
                        src="/logo/GitPortify-Logo(dark).png"
                        alt="GitPortify Logo"
                        width={44}
                        height={44}
                        className="rounded-2xl object-center"
                        priority
                    />

                    <h1 className="text-foreground xl:text-3xl md:text-2xl text-xl fira-sans-bold tracking-tight">
                        GitPortify
                    </h1>
                </div>
            </a>
            <div className="hidden fira-sans-regular md:flex justify-center items-center gap-6 xl:text-lg md:text-base text-sm text-foreground">
                <a href="#templates" className="hover:text-[#8550c7] transition">
                    Templates
                </a>
                <a href="#features" className="hover:text-[#8550c7] transition">
                    Features
                </a>
                <a href="#how-it-works" className="hover:text-[#8550c7] transition">
                    How It Works
                </a>
                <a href="#faq" className="hover:text-[#8550c7] transition">
                    FAQ
                </a>
            </div>

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden flex justify-center items-center fira-sans-medium text-foreground text-3xl"
            >
                {open ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-background/80 backdrop-blur-md border-t border-border md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${open
                        ? "max-h-96 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-5 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col justify-center items-center py-6 px-5 gap-5 fira-sans-regular text-base text-foreground">
                    <a
                        href="#templates"
                        onClick={() => setOpen(false)}
                        className="hover:text-[#8550c7] transition"
                    >
                        Templates
                    </a>

                    <a
                        href="#features"
                        onClick={() => setOpen(false)}
                        className="hover:text-[#8550c7] transition"
                    >
                        Features
                    </a>

                    <a
                        href="#how-it-works"
                        onClick={() => setOpen(false)}
                        className="hover:text-[#8550c7] transition"
                    >
                        How It Works
                    </a>

                    <a
                        href="#faq"
                        onClick={() => setOpen(false)}
                        className="hover:text-[#8550c7] transition"
                    >
                        FAQ
                    </a>
                </div>
            </div>
        </nav>
    );
};