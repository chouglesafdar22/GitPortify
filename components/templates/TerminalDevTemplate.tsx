"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Footer from "../portfolio/Footer";

interface Props {
    name: string;
    avatar: string;
    bio: string;

    projects: {
        id: number;
        name: string;
        description: string;
        imageUrl: string;
        tech: string[];
        liveUrl?: string;
    }[];

    techSkills: {
        id: number;
        category: string;
        skills: string[];
    }[];

    experiences: {
        id: number;
        role: string;
        company: string;
        location: string;
        startDate: string;
        endDate: string;
        current?: boolean;
        description?: string;
        tech: string[];
    }[];

    education: {
        id: number;
        degree: string;
        institution: string;
        location: string;
        startYear: string;
        endYear: string;
        description?: string;
    }[];

    contactLinks: {
        email: string;
        github: string;
        linkedin: string;
        website: string;
    };
}

export default function TerminalDevTemplate({
    name,
    bio,
    projects,
    techSkills,
    experiences,
    education,
    contactLinks,
}: Props) {

    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("terminaldev-theme") as "dark" | "light";

        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);

        localStorage.setItem("terminaldev-theme", newTheme);
    };

    const isDark = theme === "dark";

    return (
        <div
            className={`min-h-screen transition-colors duration-300 font-mono ${isDark
                ? "bg-[#050505] text-green-400"
                : "bg-[#f8f8f8] text-black"
                }`}
        >

            {/* NAVBAR */}
            <header className="sticky top-5 z-50 flex justify-center px-4 py-4">

                <nav
                    className={`w-full max-w-5xl rounded-full border backdrop-blur-xl px-6 py-3 transition-colors duration-300 ${isDark
                        ? "bg-black/70 border-green-500/20"
                        : "bg-white/70 border-black/10"
                        }`}
                >

                    <div className="flex items-center justify-between">

                        <Link
                            href="#home"
                            className={`text-sm md:text-base font-semibold tracking-wide ${isDark ? "text-green-400" : "text-black"
                                }`}
                        >
                             {name || "Portfolio"}
                        </Link>

                        {/* DESKTOP NAV */}
                        <div
                            className={`hidden md:flex items-center gap-6 text-sm ${isDark ? "text-green-300" : "text-zinc-700"
                                }`}
                        >

                            <a href="#projects" className="hover:text-green-500 transition">
                                projects
                            </a>

                            <a href="#skills" className="hover:text-green-500 transition">
                                skills
                            </a>

                            <a href="#experience" className="hover:text-green-500 transition">
                                experience
                            </a>

                            <a href="#education" className="hover:text-green-500 transition">
                                education
                            </a>

                            <a href="#links" className="hover:text-green-500 transition">
                                links
                            </a>

                            {/* THEME */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full border transition cursor-pointer ${isDark
                                    ? "border-green-500/20 bg-black hover:bg-green-500/10"
                                    : "border-black/10 bg-white hover:bg-black/5"
                                    }`}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>

                    </div>

                    {/* MOBILE MENU */}
                    {open && (
                        <div
                            className={`md:hidden mt-5 rounded-2xl border p-5 flex flex-col gap-4 ${isDark
                                ? "bg-black border-green-500/20"
                                : "bg-white border-black/10"
                                }`}
                        >

                            <a href="#projects" onClick={() => setOpen(false)}>
                                projects
                            </a>

                            <a href="#skills" onClick={() => setOpen(false)}>
                                skills
                            </a>

                            <a href="#experience" onClick={() => setOpen(false)}>
                                experience
                            </a>

                            <a href="#education" onClick={() => setOpen(false)}>
                                education
                            </a>

                            <a href="#links" onClick={() => setOpen(false)}>
                                links
                            </a>

                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-2"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                change theme
                            </button>

                        </div>
                    )}

                </nav>

            </header>

            {/* MAIN */}
            <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-sm">

                {/* WHOAMI */}
                <div
                    id="home"
                    className={`rounded-2xl border p-6 backdrop-blur-xl ${isDark
                        ? "border-green-500/20 bg-black/50"
                        : "border-black/10 bg-white/70"
                        }`}
                >

                    <p className={`${isDark ? "text-green-500" : "text-zinc-500"}`}>
                        $ whoami
                    </p>

                    <h1 className="text-xl mt-2 wrap-break-word">
                        {name}
                    </h1>

                </div>

                {/* ABOUT */}
                <div
                    className={`rounded-2xl border p-6 backdrop-blur-xl ${isDark
                        ? "border-green-500/20 bg-black/50"
                        : "border-black/10 bg-white/70"
                        }`}
                >

                    <p className={`${isDark ? "text-green-500" : "text-zinc-500"}`}>
                        $ about
                    </p>

                    <p className="mt-2 whitespace-break-spaces wrap-break-word">
                        {bio ? (
                            bio
                        ) : (
                            <span className="italic text-muted-foreground">
                                Add a bio about yourself...
                            </span>
                        )}
                    </p>

                </div>

                {/* PROJECTS */}
                <div id="projects">

                    <p className={`mb-4 ${isDark ? "text-green-500" : "text-zinc-500"}`}>
                        $ projects
                    </p>

                    <div className="space-y-4">

                        {projects.length === 0 ? (
                            <div
                                className={`flex flex-col items-center justify-center h-40 rounded-2xl border text-center ${isDark
                                    ? "border-green-500/20 bg-black/50"
                                    : "border-black/10 bg-white/70"
                                    }`}
                            >
                                <p className="text-sm">
                                    No projects added yet
                                </p>

                                <p className="text-xs opacity-70">
                                    Add your first project from dashboard
                                </p>
                            </div>
                        ) : (
                            projects.map((p, index) => (
                                <Link
                                    key={`p-${index}`}
                                    href={p.liveUrl || "#"}
                                    target="_blank"
                                    className={`block rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${isDark
                                        ? "border-green-500/20 bg-black/50 hover:shadow-green-500/10"
                                        : "border-black/10 bg-white/70 hover:shadow-black/10"
                                        }`}
                                >

                                    <div className="flex gap-4 items-start">

                                        {/* IMAGE */}
                                        <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-muted">

                                            {p.imageUrl ? (
                                                <img
                                                    src={p.imageUrl}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-[10px]">
                                                    img
                                                </div>
                                            )}

                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex-1">

                                            <p className="wrap-break-word">
                                                ▸ {p.name}
                                            </p>

                                            <p
                                                className={`text-xs mt-1 ${isDark
                                                    ? "text-green-300/70"
                                                    : "text-zinc-600"
                                                    }`}
                                            >
                                                {p.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-3">

                                                {p.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className={`text-[10px] px-2 py-1 rounded ${isDark
                                                            ? "bg-green-500/10 border border-green-500/20"
                                                            : "bg-black/5 border border-black/10"
                                                            }`}
                                                    >
                                                        {t}
                                                    </span>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </Link>
                            ))
                        )}

                    </div>

                </div>

                {/* SKILLS */}
                {techSkills && techSkills.length > 0 && (
                    <div id="skills">

                        <p className={`mb-4 ${isDark ? "text-green-500" : "text-zinc-500"}`}>
                            $ skills
                        </p>

                        <div className="space-y-4">

                            {techSkills.map((group, index) => (
                                <div
                                    key={`group-${index}`}
                                    className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.01] ${isDark
                                        ? "border-green-500/20 bg-black/50"
                                        : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <p>
                                        ▸ {group.category}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-3">

                                        {group.skills.map((t) => (
                                            <span
                                                key={t}
                                                className={`text-[10px] px-2 py-1 rounded ${isDark
                                                    ? "bg-green-500/10 border border-green-500/20"
                                                    : "bg-black/5 border border-black/10"
                                                    }`}
                                            >
                                                {t}
                                            </span>
                                        ))}

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {/* EXPERIENCE */}
                {experiences && experiences.length > 0 && (
                    <div id="experience">

                        <p className={`mb-4 ${isDark ? "text-green-500" : "text-zinc-500"}`}>
                            $ experience
                        </p>

                        <div className="space-y-4">

                            {experiences.map((exp, index) => (
                                <div
                                    key={`exp-${index}`}
                                    className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.01] ${isDark
                                        ? "border-green-500/20 bg-black/50"
                                        : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <div className="flex items-start justify-between gap-2">

                                        <p>
                                            ▸ {exp.role}
                                        </p>

                                        <span
                                            className={`text-[10px] px-2 py-1 rounded whitespace-nowrap ${isDark
                                                ? "bg-green-500/10 border border-green-500/20"
                                                : "bg-black/5 border border-black/10"
                                                }`}
                                        >
                                            {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                                        </span>

                                    </div>

                                    <p className="text-xs mt-2 opacity-70">
                                        {exp.company}
                                    </p>

                                    <p className="text-xs opacity-70">
                                        {exp.location}
                                    </p>

                                    {exp.description && (
                                        <p className="text-xs mt-2 wrap-break-word opacity-80">
                                            {exp.description}
                                        </p>
                                    )}

                                    {exp.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">

                                            {exp.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className={`text-[10px] px-2 py-1 rounded ${isDark
                                                        ? "bg-green-500/10 border border-green-500/20"
                                                        : "bg-black/5 border border-black/10"
                                                        }`}
                                                >
                                                    {t}
                                                </span>
                                            ))}

                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {/* EDUCATION */}
                {education && education.length > 0 && (
                    <div id="education">

                        <p className={`mb-4 ${isDark ? "text-green-500" : "text-zinc-500"}`}>
                            $ education
                        </p>

                        <div className="space-y-4">

                            {education.map((edu, index) => (
                                <div
                                    key={`edu-${index}`}
                                    className={`rounded-2xl border p-4 transition-all duration-300 hover:scale-[1.01] ${isDark
                                        ? "border-green-500/20 bg-black/50"
                                        : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <div className="flex items-start justify-between gap-2">

                                        <p>
                                            ▸ {edu.degree}
                                        </p>

                                        <span
                                            className={`text-[10px] px-2 py-1 rounded whitespace-nowrap ${isDark
                                                ? "bg-green-500/10 border border-green-500/20"
                                                : "bg-black/5 border border-black/10"
                                                }`}
                                        >
                                            {edu.startYear} – {edu.endYear}
                                        </span>

                                    </div>

                                    <p className="text-xs mt-2 opacity-70">
                                        {edu.institution}
                                    </p>

                                    <p className="text-xs opacity-70">
                                        {edu.location}
                                    </p>

                                    {edu.description && (
                                        <p className="text-xs mt-2 wrap-break-word opacity-80">
                                            {edu.description}
                                        </p>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {/* LINKS */}
                {(contactLinks.email ||
                    contactLinks.github ||
                    contactLinks.linkedin ||
                    contactLinks.website) && (
                        <div id="links">

                            <p className={`mb-4 ${isDark ? "text-green-500" : "text-zinc-500"}`}>
                                $ links
                            </p>

                            <div
                                className={`rounded-2xl border p-5 space-y-3 break-all ${isDark
                                    ? "border-green-500/20 bg-black/50"
                                    : "border-black/10 bg-white/70"
                                    }`}
                            >

                                {contactLinks.github && (
                                    <a
                                        href={`${contactLinks.github}`}
                                        target="_blank"
                                        className="block hover:text-green-500 transition"
                                    >
                                        ▸ github: {contactLinks.github}
                                    </a>
                                )}

                                {contactLinks.linkedin && (
                                    <a
                                        href={`${contactLinks.linkedin}`}
                                        target="_blank"
                                        className="block hover:text-green-500 transition"
                                    >
                                        ▸ linkedin: {contactLinks.linkedin}
                                    </a>
                                )}

                                {contactLinks.website && (
                                    <a
                                        href={`${contactLinks.website}`}
                                        target="_blank"
                                        className="block hover:text-green-500 transition"
                                    >
                                        ▸ website: {contactLinks.website}
                                    </a>
                                )}

                                {contactLinks.email && (
                                    <a
                                        href={`mailto:${contactLinks.email}`}
                                        className="block hover:text-green-500 transition"
                                    >
                                        ▸ email: {contactLinks.email}
                                    </a>
                                )}

                            </div>

                        </div>
                    )}

            </div>

            <Footer name={name}/>

        </div>
    );
}