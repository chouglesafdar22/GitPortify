"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

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

export default function NeoDevTemplate({
    name,
    avatar,
    bio,
    projects,
    techSkills,
    experiences,
    education,
    contactLinks,
}: Props) {
    return (
        <div className="min-h-screen bg-[#09090b] text-white">

            {/* NAVBAR */}
            <header className="sticky top-5 z-50 flex justify-center px-4">

                <nav className="w-full max-w-4xl rounded-full border border-white/10 bg-white/3 backdrop-blur-xl px-6 py-3">

                    <div className="flex items-center justify-between">

                        {/* LOGO */}
                        <Link
                            href="#home"
                            className="text-sm md:text-base font-semibold tracking-wide"
                        >
                            {name || "Portfolio"}
                        </Link>

                        {/* LINKS */}
                        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                            <a
                                href="#projects"
                                className="hover:text-white transition"
                            >
                                Projects
                            </a>
                            <a
                                href="#skills"
                                className="hover:text-white transition"
                            >
                                Skills
                            </a>
                            <a
                                href="#experience"
                                className="hover:text-white transition"
                            >
                                Experience
                            </a>
                            <a
                                href="#education"
                                className="hover:text-white transition"
                            >
                                Education
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-white transition"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-20">

                {/* HERO */}
                <section id="home" className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">

                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-30 rounded-full"></div>

                                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/10">
                                    {avatar && (
                                        <img
                                            src={avatar}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                                    Open to Work
                                </span>

                                <h1 className="text-3xl md:text-5xl font-bold">
                                    {name}
                                </h1>
                            </div>
                        </div>

                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                            {bio || "Add your bio from dashboard..."}
                        </p>

                        <div className="flex flex-wrap gap-3">

                            {contactLinks.github && (
                                <Link
                                    href={contactLinks.github}
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
                                >
                                    <IoLogoGithub />
                                    GitHub
                                </Link>
                            )}

                            {contactLinks.linkedin && (
                                <Link
                                    href={contactLinks.linkedin}
                                    target="_blank"
                                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
                                >
                                    <FaLinkedin />
                                    LinkedIn
                                </Link>
                            )}

                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-cyan-500/20 blur-3xl rounded-3xl"></div>

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                            <div className="grid grid-cols-2 gap-4">

                                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                                    <p className="text-zinc-500 text-sm">Projects</p>
                                    <h3 className="text-3xl font-bold">
                                        {projects.length}
                                    </h3>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                                    <p className="text-zinc-500 text-sm">Skills</p>
                                    <h3 className="text-3xl font-bold">
                                        {techSkills.length}
                                    </h3>
                                </div>

                            </div>

                        </div>
                    </motion.div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="space-y-8">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Featured Projects
                        </h2>

                        <p className="text-zinc-500 mt-2">
                            Some of my selected work and case studies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {projects.map((project) => (
                            <motion.div
                                whileHover={{ y: -5 }}
                                key={project.id}
                                className="group rounded-3xl border border-white/10 bg-white/3 overflow-hidden hover:border-purple-500/30 transition-all"
                            >

                                <div className="h-52 bg-zinc-900 overflow-hidden">

                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-zinc-500">
                                            No Image
                                        </div>
                                    )}

                                </div>

                                <div className="p-6 space-y-4">

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {project.name}
                                        </h3>

                                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">

                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>

                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            className="inline-flex text-sm text-purple-400 hover:text-purple-300"
                                        >
                                            View Project →
                                        </Link>
                                    )}

                                </div>
                            </motion.div>
                        ))}

                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="space-y-8">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Tech Stack
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6">

                        {techSkills.map((group) => (
                            <div
                                key={group.id}
                                className="rounded-3xl border border-white/10 bg-white/3 p-6"
                            >

                                <h3 className="text-lg font-semibold mb-4">
                                    {group.category}
                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {group.skills.map((skill, index) => (
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            key={index}
                                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}

                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="space-y-8">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Experience
                        </h2>
                    </div>

                    <div className="space-y-6">

                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className="relative pl-8 border-l border-white/10"
                            >

                                <div className="absolute -left-1.75 top-2 w-3 h-3 rounded-full bg-purple-500"></div>

                                <div className="rounded-2xl border border-white/10 bg-white/3 p-6">

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {exp.role}
                                            </h3>

                                            <p className="text-zinc-400 text-sm">
                                                {exp.company} • {exp.location}
                                            </p>
                                        </div>

                                        <span className="text-xs text-zinc-500">
                                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                        </span>

                                    </div>

                                    {exp.description && (
                                        <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    )}

                                </div>
                            </div>
                        ))}

                    </div>
                </section>

                {/* EDUCATION */}
                <section id="education" className="space-y-8">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Education
                        </h2>
                    </div>

                    <div className="space-y-6">

                        {education.map((edu) => (
                            <div
                                key={edu.id}
                                className="rounded-2xl border border-white/10 bg-white/3 p-6"
                            >

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-zinc-400 text-sm">
                                            {edu.institution}
                                        </p>
                                    </div>

                                    <span className="text-xs text-zinc-500">
                                        {edu.startYear} - {edu.endYear}
                                    </span>

                                </div>

                            </div>
                        ))}

                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="space-y-8">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Contact
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-4">

                        {contactLinks.email && (
                            <Link
                                href={`mailto:${contactLinks.email}`}
                                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 transition flex items-center gap-3"
                            >
                                <MdOutlineMailOutline />
                                Email
                            </Link>
                        )}

                        {contactLinks.github && (
                            <Link
                                href={contactLinks.github}
                                target="_blank"
                                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 transition flex items-center gap-3"
                            >
                                <IoLogoGithub />
                                GitHub
                            </Link>
                        )}

                        {contactLinks.linkedin && (
                            <Link
                                href={contactLinks.linkedin}
                                target="_blank"
                                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 transition flex items-center gap-3"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </Link>
                        )}

                        {contactLinks.website && (
                            <Link
                                href={contactLinks.website}
                                target="_blank"
                                className="px-5 py-3 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 transition flex items-center gap-3"
                            >
                                <TbWorld />
                                Website
                            </Link>
                        )}

                    </div>
                </section>

            </div>
        </div>
    );
}