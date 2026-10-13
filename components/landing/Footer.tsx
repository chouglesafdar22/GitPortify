"use client";
import Link from "next/link";
import Image from "next/image";
import {
    FaLinkedin,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "Templates", href: "#templates" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
];

const pageLinks = [
    { label: "Sign up", href: "/signup" },
    { label: "Sign in", href: "/signin" },
    { label: "Templates", href: "/templates" },
    { label: "Feedback", href: "/support/feedback" },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/safdar-chougle",
        icon: FaLinkedin,
    },
    {
        label: "YouTube",
        href: "https://youtube.com/playlist?list=PLUGVMxgOgh0ZCEuF-jZTkkZrKYt4GdFoE&si=4528IXkm_TFuGRbq",
        icon: FaYoutube,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/chouglesafdar22?igsh=cnY5cG0yY3gzZngz",
        icon: FaInstagram,
    },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
];

const linkClass =
    "text-sm leading-6 text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Footer() {
    return (
        <footer className="relative mt-8 border-t border-foreground/10 bg-background/50">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                        <Link
                            href="#home"
                            aria-label="GitPortify home"
                            className="inline-flex items-center gap-2.5 rounded-lg"
                        >
                            <Image
                                src="/logo/GitPortify - Logo.png"
                                alt=""
                                width={40}
                                height={40}
                                sizes="40px"
                                className="h-9 w-9 rounded-xl object-contain sm:h-10 sm:w-10"
                            />

                            <span className="fira-sans-bold text-xl tracking-tight text-foreground md:text-2xl xl:text-3xl">
                                GitPortify
                            </span>
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground md:text-base xl:text-lg fira-sans-regular">
                            Turn your GitHub or GitLab profile into a
                            professional developer portfolio.
                        </p>

                        <Link
                            href="/signup"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-400 transition-all duration-200 hover:border-violet-500/40 hover:bg-violet-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                        >
                            Create your portfolio
                            <FaArrowRight />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <FooterColumn title="Explore">
                        {navigationLinks.map((link) => (
                            <FooterLink
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    {/* Account */}
                    <FooterColumn title="Pages">
                        {pageLinks.map((link) => (
                            <FooterLink
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    {/* Social */}
                    <FooterColumn title="Connect">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 ${linkClass}`}
                                >
                                    <Icon size={15} aria-hidden="true" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="mailto:gitportify@gmail.com"
                                className={`inline-flex items-center gap-2 ${linkClass}`}
                            >
                                <MdEmail size={17} aria-hidden="true" />
                                Email
                            </Link>
                        </li>
                    </FooterColumn>

                    {/* Legal */}
                    <FooterColumn title="Legal">
                        {legalLinks.map((link) => (
                            <FooterLink
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-6 text-center sm:mt-14 sm:flex-row sm:text-left fira-sans-light">
                    <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
                        © {new Date().getFullYear()} GitPortify. All rights
                        reserved.
                    </p>

                    <p className="text-xs text-muted-foreground sm:text-sm">
                        Built for developers, wherever they code.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2 className="fira-sans-medium mb-3.5 text-sm text-foreground md:text-base xl:text-lg">
                {title}
            </h2>

            <ul className="flex flex-col fira-sans-regular text-sm md:text-base xl:text-lg items-start gap-2">
                {children}
            </ul>
        </div>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <Link href={href} className={linkClass}>
                {children}
            </Link>
        </li>
    );
}

// Developed By <Link className="hover:text-foreground hover:underline" href={"https://safdarchougle.vercel.app"}>chouglesafdar</Link>