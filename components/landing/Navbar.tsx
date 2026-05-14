"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "./Button";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-40 w-full flex justify-between items-center md:py-6 py-3 md:px-20 px-6 bg-background/30 backdrop-blur-md">
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
                <h1 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">
                    GitPortify
                </h1>
            </a>
            <div className="hidden md:flex gap-6 lg:text-lg md:text-base sm:text-sm text-xs text-foreground">
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