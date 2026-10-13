"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { label: "Templates", href: "#templates" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
];

const linkClass =
    "text-sm fira-sans-medium text-muted-foreground transition-colors duration-200 hover:text-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md md:text-base xl:text-lg";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                aria-label="Main navigation"
                className="border-b border-foreground/8 bg-background/75 backdrop-blur-xl"
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
                    {/* Brand */}
                    <Link
                        href="#home"
                        aria-label="GitPortify home"
                        onClick={closeMenu}
                        className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                    >
                        <Image
                            src="/logo/GitPortify - Logo.png"
                            alt=""
                            width={40}
                            height={40}
                            sizes="40px"
                            priority
                            className="h-8 w-8 rounded-xl object-contain sm:h-9 sm:w-9"
                        />

                        <span className="fira-sans-bold text-xl md:text-2xl tracking-tight text-foreground xl:text-3xl">
                            GitPortify
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-7 md:flex lg:gap-9">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={linkClass}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop account actions */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            href="/signin"
                            className="rounded-lg px-3 py-2 text-sm fira-sans-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                            Sign in
                        </Link>

                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500 px-4 py-2.5 text-sm fira-sans-medium text-white shadow-sm shadow-violet-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((previous) => !previous)}
                        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="flex h-8 w-8 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/3 text-lg text-foreground fira-sans-medium transition-colors hover:bg-foreground/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
                    >
                        {open ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
                    </button>
                </div>

                {/* Mobile navigation */}
                <div
                    id="mobile-navigation"
                    aria-hidden={!open}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        <div className="border-t border-foreground/10 bg-background/95 px-5 pb-6 pt-4 backdrop-blur-xl sm:px-8">
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        tabIndex={open ? 0 : -1}
                                        onClick={closeMenu}
                                        className="rounded-xl px-4 py-3 text-sm fira-sans-medium text-muted-foreground transition-colors hover:bg-foreground/4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-foreground/10 pt-4">
                                <Link
                                    href="/signin"
                                    tabIndex={open ? 0 : -1}
                                    onClick={closeMenu}
                                    className="inline-flex items-center justify-center rounded-xl border border-foreground/10 px-4 py-3 text-sm fira-sans-medium text-foreground transition-colors hover:bg-foreground/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                >
                                    Sign in
                                </Link>

                                <Link
                                    href="/signup"
                                    tabIndex={open ? 0 : -1}
                                    onClick={closeMenu}
                                    className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-4 py-3 text-sm fira-sans-medium text-white transition-colors hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}