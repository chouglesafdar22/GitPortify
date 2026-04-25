"use client";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

interface Props {
    name: string;
    contactLinks: {
        email: string;
        github: string;
        linkedin: string;
        website: string;
    };
}

export default function Navbar({ name, contactLinks }: Props) {

    const links = [
        {
            key: "email",
            value: contactLinks.email,
            icon: <MdOutlineMailOutline />,
        },
        {
            key: "github",
            value: contactLinks.github,
            icon: <IoLogoGithub />,
        },
        {
            key: "linkedin",
            value: contactLinks.linkedin,
            icon: <FaLinkedin />,
        },
        {
            key: "website",
            value: contactLinks.website,
            icon: <TbWorld />,
        },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b">
            <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">

                <h1 className="text-sm sm:text-base font-semibold tracking-tight">
                    {name || "Portfolio"}
                </h1>

                <div className="flex items-center gap-3 text-lg">
                    {links
                        .filter((link) => link.value)
                        .map((link) => (
                            <Link
                                key={link.key}
                                href={
                                    link.key === "email"
                                        ? `mailto:${link.value}`
                                        : link.value
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-muted-foreground transition"
                            >
                                {link.icon}
                            </Link>
                        ))}
                </div>

            </div>
        </nav>
    );
}
