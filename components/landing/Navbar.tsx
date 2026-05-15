"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "./Button";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-40 w-full flex justify-between items-center md:py-6 py-3 md:px-20 px-6 bg-background/30 backdrop-blur-md">
            <a href="#home" className="flex flex-col cursor-pointer leading-none select-none">
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
                <p
                    className="text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] text-muted-foreground fira-sans-medium text-center mt-0.5 tracking-wide"
                >
                    Develop your portfolio in minutes
                </p>
            </a>
            <div className="hidden fira-sans-regular md:flex gap-6 lg:text-lg md:text-base sm:text-sm text-xs text-foreground">
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
        </nav>
    );
}