"use client";
import { useState } from "react";
import { HiMenu3, HiX } from "react-icons/hi";
import Button from "./Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-40 w-full flex justify-between items-center md:py-6 py-3 md:px-20 px-6 bg-background/30 backdrop-blur-md">

            {/* Logo */}
            <a
                href="#home"
                className="flex flex-col cursor-pointer leading-none select-none"
            >
                <div className="flex justify-center gap-1 items-center">

                    <span className="text-foreground xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg fira-sans-bold tracking-tight">
                        {"</"}
                    </span>

                    <h1 className="text-foreground xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg fira-sans-bold tracking-tight lowercase drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
                        gitportify
                    </h1>

                    <span className="text-foreground xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg fira-sans-bold tracking-tight">
                        {">"}
                    </span>

                </div>

                <p className="text-[4px] sm:text-[5px] md:text-[7px] lg:text-[8px] text-muted-foreground fira-sans-medium text-center mt-0.5 tracking-wide">
                    Develop your portfolio in minutes
                </p>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">

                <div className="fira-sans-regular flex gap-6 lg:text-lg md:text-base sm:text-sm text-xs text-foreground">
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

                <Button
                    href="/signup"
                    text="SignUp"
                />

            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden flex text-foreground fira-sans-medium text-2xl"
            >
                {open ? <HiX /> : <HiMenu3 />}
            </button>

            {/* Mobile Menu */}
            <div className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-border transition-all duration-300 md:hidden
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}
            `}>
                <div className="flex flex-col justify-center items-center py-6 gap-5 fira-sans-regular lg:text-lg md:text-base sm:text-sm text-xs text-foreground">
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

                    <Button
                        href="/signup"
                        text="SignUp"
                    />

                </div>
            </div>

        </nav>
    );
};