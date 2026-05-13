"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
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

export default function GithubProTemplate({
    name,
    avatar,
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
        const savedTheme = localStorage.getItem("githubpro-theme") as "dark" | "light";

        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);

        localStorage.setItem("githubpro-theme", newTheme);
    };

    const isDark = theme === "dark";

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${isDark
                    ? "bg-[#09090b] text-white"
                    : "bg-[#f7f7f7] text-black"
                }`}
        >

            {/* NAVBAR */}
            <header className="sticky top-5 z-50 flex justify-center px-4 py-4">

                <nav
                    className={`w-full max-w-5xl rounded-full border backdrop-blur-xl px-6 py-3 transition-colors duration-300 ${isDark
                            ? "bg-white/3 border-white/10"
                            : "bg-black/3 border-black/10"
                        }`}
                >

                    <div className="flex items-center justify-between">

                        <Link
                            href="#home"
                            className="text-sm md:text-base font-semibold tracking-wide"
                        >
                            {name || "Portfolio"}
                        </Link>

                        {/* DESKTOP NAV */}
                        <div
                            className={`hidden md:flex items-center gap-6 text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"
                                }`}
                        >

                            <a href="#projects" className="hover:text-purple-500 transition">
                                Projects
                            </a>

                            <a href="#skills" className="hover:text-purple-500 transition">
                                Skills
                            </a>

                            <a href="#experience" className="hover:text-purple-500 transition">
                                Experience
                            </a>

                            <a href="#education" className="hover:text-purple-500 transition">
                                Education
                            </a>

                            <a href="#contact" className="hover:text-purple-500 transition">
                                Contact
                            </a>

                            {/* THEME */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full border transition cursor-pointer ${isDark
                                        ? "border-white/10 bg-white/3 hover:bg-white/6"
                                        : "border-black/10 bg-black/3 hover:bg-black/6"
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
                                    ? "bg-black/40 border-white/10"
                                    : "bg-white border-black/10"
                                }`}
                        >

                            <a href="#projects" onClick={() => setOpen(false)}>
                                Projects
                            </a>

                            <a href="#skills" onClick={() => setOpen(false)}>
                                Skills
                            </a>

                            <a href="#experience" onClick={() => setOpen(false)}>
                                Experience
                            </a>

                            <a href="#education" onClick={() => setOpen(false)}>
                                Education
                            </a>

                            <a href="#contact" onClick={() => setOpen(false)}>
                                Contact
                            </a>

                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-2"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                Change Theme
                            </button>

                        </div>
                    )}

                </nav>

            </header>

            {/* MAIN */}
            <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">

                {/* HERO */}
                <div
                    id="home"
                    className={`flex flex-col items-center gap-5 rounded-3xl border p-8 backdrop-blur-xl ${isDark
                            ? "border-white/10 bg-white/3"
                            : "border-black/10 bg-white/70"
                        }`}
                >

                    <div className="relative">

                        <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>

                        <div className="relative w-28 h-28 rounded-full bg-muted overflow-hidden border border-white/10">
                            {avatar && (
                                <img
                                    src={avatar}
                                    alt={name}
                                    className="w-full h-full object-cover transition duration-300"
                                />
                            )}
                        </div>

                    </div>

                    <div className="w-full text-center space-y-3">

                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                            {name || "Your Name"}
                        </h1>

                        <p
                            className={`text-sm sm:text-base lg:text-lg whitespace-break-spaces max-w-2xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"
                                }`}
                        >
                            {bio ? (
                                bio
                            ) : (
                                <span className="italic">
                                    Add a bio about yourself...
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                {/* PROJECTS */}
                <div id="projects" className="space-y-5">

                    <h2 className="text-lg lg:text-2xl font-semibold">
                        Projects
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-5">

                        {projects.length === 0 ? (
                            <div
                                className={`flex flex-col items-center justify-center h-40 rounded-2xl border text-center ${isDark
                                        ? "border-white/10 bg-white/3"
                                        : "border-black/10 bg-white/70"
                                    }`}
                            >
                                <p className="text-sm text-muted-foreground">
                                    No projects added yet
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Add your first project from dashboard 🚀
                                </p>
                            </div>
                        ) : (
                            projects.map((project, index) => (
                                <Link
                                    key={`project-${index}`}
                                    href={project.liveUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 ${isDark
                                            ? "border-white/10 bg-white/3"
                                            : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <div className="h-52 bg-muted flex items-center justify-center text-xs text-muted-foreground overflow-hidden">

                                        {project.imageUrl ? (
                                            <img
                                                src={project.imageUrl}
                                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                            />
                                        ) : (
                                            "No Image"
                                        )}

                                    </div>

                                    <div className="p-5 space-y-3">

                                        <h3 className="font-semibold text-lg">
                                            {project.name}
                                        </h3>

                                        <p
                                            className={`text-sm ${isDark
                                                    ? "text-zinc-400"
                                                    : "text-zinc-600"
                                                }`}
                                        >
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-[10px] px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}

                                        </div>

                                    </div>

                                </Link>
                            ))
                        )}

                    </div>

                </div>

                {/* SKILLS */}
                {techSkills && techSkills.length > 0 && (
                    <div id="skills" className="space-y-5">

                        <h2 className="text-lg lg:text-2xl font-semibold">
                            Tech Skills
                        </h2>

                        <div className="flex flex-col gap-4">

                            {techSkills.map((group, index) => (
                                <div
                                    key={`skill-group-${index}`}
                                    className={`rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${isDark
                                            ? "border-white/10 bg-white/3"
                                            : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <h3 className="font-semibold text-lg mb-4">
                                        {group.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">

                                        {group.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                            >
                                                {skill}
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
                    <div id="experience" className="space-y-5">

                        <h2 className="text-lg lg:text-2xl font-semibold">
                            Experience
                        </h2>

                        <div className="flex flex-col gap-4">

                            {experiences.map((exp, index) => (
                                <div
                                    key={`exp-${index}`}
                                    className={`rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${isDark
                                            ? "border-white/10 bg-white/3"
                                            : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                        <div className="space-y-2">

                                            <h3 className="font-semibold text-lg">
                                                {exp.role}
                                            </h3>

                                            <p
                                                className={`${isDark
                                                        ? "text-zinc-400"
                                                        : "text-zinc-600"
                                                    }`}
                                            >
                                                {exp.company}
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                {exp.location}
                                            </p>

                                            {exp.description && (
                                                <p
                                                    className={`text-sm ${isDark
                                                            ? "text-zinc-400"
                                                            : "text-zinc-600"
                                                        }`}
                                                >
                                                    {exp.description}
                                                </p>
                                            )}

                                            {exp.tech.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">

                                                    {exp.tech.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-[10px] px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}

                                                </div>
                                            )}

                                        </div>

                                        <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap self-start">
                                            {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                                        </span>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {/* EDUCATION */}
                {education && education.length > 0 && (
                    <div id="education" className="space-y-5">

                        <h2 className="text-lg lg:text-2xl font-semibold">
                            Education
                        </h2>

                        <div className="flex flex-col gap-4">

                            {education.map((edu, index) => (
                                <div
                                    key={`edu-${index}`}
                                    className={`rounded-2xl border p-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${isDark
                                            ? "border-white/10 bg-white/3"
                                            : "border-black/10 bg-white/70"
                                        }`}
                                >

                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                        <div className="space-y-2">

                                            <h3 className="font-semibold text-lg">
                                                {edu.degree}
                                            </h3>

                                            <p
                                                className={`${isDark
                                                        ? "text-zinc-400"
                                                        : "text-zinc-600"
                                                    }`}
                                            >
                                                {edu.institution}
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                {edu.location}
                                            </p>

                                            {edu.description && (
                                                <p
                                                    className={`text-sm ${isDark
                                                            ? "text-zinc-400"
                                                            : "text-zinc-600"
                                                        }`}
                                                >
                                                    {edu.description}
                                                </p>
                                            )}

                                        </div>

                                        <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap self-start">
                                            {edu.startYear} – {edu.endYear}
                                        </span>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {/* CONTACT */}
                {(contactLinks.email ||
                    contactLinks.github ||
                    contactLinks.linkedin ||
                    contactLinks.website) && (
                        <div id="contact" className="space-y-5">

                            <h2 className="text-lg lg:text-2xl font-semibold">
                                Get in Touch
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {contactLinks.email && (
                                    <Link
                                        href={`mailto:${contactLinks.email}`}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${isDark
                                                ? "border-white/10 bg-white/3 hover:bg-white/6"
                                                : "border-black/10 bg-white hover:bg-black/3"
                                            }`}
                                    >
                                        <MdOutlineMailOutline />
                                        Email
                                    </Link>
                                )}

                                {contactLinks.github && (
                                    <Link
                                        href={contactLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${isDark
                                                ? "border-white/10 bg-white/3 hover:bg-white/6"
                                                : "border-black/10 bg-white hover:bg-black/3"
                                            }`}
                                    >
                                        <IoLogoGithub />
                                        GitHub
                                    </Link>
                                )}

                                {contactLinks.linkedin && (
                                    <Link
                                        href={contactLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${isDark
                                                ? "border-white/10 bg-white/3 hover:bg-white/6"
                                                : "border-black/10 bg-white hover:bg-black/3"
                                            }`}
                                    >
                                        <FaLinkedin />
                                        LinkedIn
                                    </Link>
                                )}

                                {contactLinks.website && (
                                    <Link
                                        href={contactLinks.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${isDark
                                                ? "border-white/10 bg-white/3 hover:bg-white/6"
                                                : "border-black/10 bg-white hover:bg-black/3"
                                            }`}
                                    >
                                        <TbWorld />
                                        Website
                                    </Link>
                                )}

                            </div>

                        </div>
                    )}
            </div>

            <Footer name={name}/>

        </div>
    );
}