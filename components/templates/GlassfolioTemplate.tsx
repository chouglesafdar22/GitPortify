"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineMailOutline, MdArrowOutward } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { Menu, X, Circle } from "lucide-react";
import Footer from "../portfolio/Footer";

interface Props {
    name: string;
    avatar: string;
    role?: string;
    bio: string;
    availabilityStatus?: string; // e.g. "Available for work" — omit to hide the badge
    githubUsername?: string;

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

// Deterministic PRNG (seeded) so the contribution graph renders identically
// on server and client — avoids hydration mismatches from Math.random().
function mulberry32(seed: number) {
    return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const NAV_LINKS = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#activity", label: "Activity" },
    { href: "#contact", label: "Contact" },
];

export default function GlassfolioTemplate({
    name,
    avatar,
    role,
    bio,
    availabilityStatus = "Available for work",
    githubUsername,
    projects,
    techSkills,
    experiences,
    education,
    contactLinks,
}: Props) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Contribution graph: 52 weeks x 7 days, seeded so it's stable across renders.
    const contributions = useMemo(() => {
        const rand = mulberry32(1337);
        return Array.from({ length: 52 }, () =>
            Array.from({ length: 7 }, () => {
                const r = rand();
                if (r > 0.88) return 4;
                if (r > 0.72) return 3;
                if (r > 0.5) return 2;
                if (r > 0.3) return 1;
                return 0;
            })
        );
    }, []);

    const levelStyles = [
        "bg-white/5",
        "bg-[#8B5CF6]/25",
        "bg-[#8B5CF6]/45",
        "bg-[#8B5CF6]/70",
        "bg-[#8B5CF6]",
    ];

    const stats = [
        { label: "Projects", value: String(projects.length) },
        { label: "Skills", value: String(techSkills.reduce((a, g) => a + g.skills.length, 0)) },
        { label: "Roles", value: String(experiences.length) },
    ];

    return (
        <div className="min-h-screen bg-[#09090B] text-white selection:bg-[#8B5CF6]/30 relative">
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.85); }
                }
                html { scroll-behavior: smooth; }
            `}</style>

            {/* AMBIENT GLOW BACKGROUND */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full bg-linear-to-br from-[#8B5CF6]/25 via-[#6366F1]/15 to-transparent blur-[120px]" />
                <div className="absolute bottom-0 -right-40 w-150 h-150 rounded-full bg-[#6366F1]/15 blur-[110px]" />
                <div className="absolute inset-0 bg-[#09090B]/40" />
            </div>

            {/* NAVBAR */}
            <header className="sticky top-5 z-30 flex justify-center px-4 py-4">
                <nav
                    className={`w-full max-w-5xl rounded-full border backdrop-blur-xl px-6 py-3 transition-all duration-300 ${scrolled ? "bg-white/6 border-white/12 shadow-lg shadow-black/20" : "bg-white/3 border-white/8"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <Link href="#home" className="text-sm md:text-base font-semibold tracking-wide">
                            {name || "Portfolio"}
                        </Link>

                        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                            {NAV_LINKS.map((l) => (
                                <a key={l.href} href={l.href} className="hover:text-[#A78BFA] transition-colors">
                                    {l.label}
                                </a>
                            ))}
                        </div>

                        <button onClick={() => setOpen(!open)} className="md:hidden">
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {open && (
                        <div className="md:hidden mt-5 rounded-2xl border border-white/1 bg-black/40 p-5 flex flex-col gap-4">
                            {NAV_LINKS.map((l) => (
                                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    )}
                </nav>
            </header>

            {/* HERO */}
            <section id="home" className="relative flex flex-col items-center justify-center text-center px-4 min-h-[92vh] pt-10">
                {availabilityStatus && (
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-xl">
                        <Circle size={8} className="fill-[#8B5CF6] text-[#8B5CF6]" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
                        {availabilityStatus}
                    </div>
                )}

                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#8B5CF6]/25 blur-3xl rounded-full" />
                    <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-white/12 bg-white/6">
                        {avatar && <img src={avatar} alt={name} className="w-full h-full object-cover" />}
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
                    {name || "Your Name"}
                </h1>

                {role && (
                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#A78BFA] font-medium">
                        {role}
                    </p>
                )}

                <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-zinc-400 whitespace-break-spaces">
                    {bio || <span className="italic">Add a bio about yourself...</span>}
                </p>

                {/* FLOATING GLASS STAT CARDS */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            style={{ animation: `float 5s ease-in-out ${i * 0.6}s infinite` }}
                            className="rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl px-6 py-4 min-w-27.5"
                        >
                            <p className="text-2xl font-bold">{s.value}</p>
                            <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">
                {/* PROJECTS */}
                <div id="projects" className="space-y-5">
                    <h2 className="text-lg lg:text-2xl font-semibold">Featured Projects</h2>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {projects.length === 0 ? (
                            <div className="col-span-full flex flex-col items-center justify-center h-40 rounded-3xl border border-white/12 bg-white/6 text-center">
                                <p className="text-sm text-zinc-400">No projects added yet</p>
                                <p className="text-xs text-zinc-500">Add your first project from dashboard 🚀</p>
                            </div>
                        ) : (
                            projects.map((project, index) => (
                                <Link
                                    key={`project-${index}`}
                                    href={project.liveUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group rounded-3xl border border-white/12 bg-white/6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:border-[#8B5CF6]/30"
                                >
                                    <div className="h-52 bg-white/3 flex items-center justify-center text-xs text-zinc-500 overflow-hidden">
                                        {project.imageUrl ? (
                                            <img src={project.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                        ) : (
                                            "No Image"
                                        )}
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="font-semibold text-lg">{project.name}</h3>
                                            <MdArrowOutward className="text-zinc-500 group-hover:text-[#A78BFA] transition-colors shrink-0" />
                                        </div>

                                        <p className="text-sm text-zinc-400">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[10px] px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20"
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

                {/* SKILLS GRID */}
                {techSkills && techSkills.length > 0 && (
                    <div id="skills" className="space-y-5">
                        <h2 className="text-lg lg:text-2xl font-semibold">Skills</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {techSkills.map((group, index) => (
                                <div
                                    key={`skill-group-${index}`}
                                    className="rounded-3xl border border-white/12 bg-white/6 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:border-[#8B5CF6]/30"
                                >
                                    <h3 className="font-semibold text-base mb-4">{group.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20"
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

                {/* EXPERIENCE TIMELINE */}
                {experiences && experiences.length > 0 && (
                    <div id="experience" className="space-y-5">
                        <h2 className="text-lg lg:text-2xl font-semibold">Experience</h2>

                        <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-1.75 before:top-2 before:bottom-2 before:w-px before:bg-linear-to-b before:from-[#8B5CF6]/60 before:via-white/12 before:to-transparent">
                            {experiences.map((exp, index) => (
                                <div key={`exp-${index}`} className="relative">
                                    <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-[#09090B] border-2 border-[#8B5CF6]" />

                                    <div className="rounded-3xl border border-white/12 bg-white/6 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:border-[#8B5CF6]/30">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div className="space-y-2">
                                                <h3 className="font-semibold text-lg">{exp.role}</h3>
                                                <p className="text-zinc-400">{exp.company}</p>
                                                <p className="text-sm text-zinc-500">{exp.location}</p>

                                                {exp.description && (
                                                    <p className="text-sm text-zinc-400">{exp.description}</p>
                                                )}

                                                {exp.tech.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {exp.tech.map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-[10px] px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#A78BFA] border border-[#8B5CF6]/20"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <span className="text-xs px-3 py-1 rounded-full bg-white/6 text-zinc-400 whitespace-nowrap self-start border border-white/1">
                                                {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* EDUCATION */}
                {education && education.length > 0 && (
                    <div id="education" className="space-y-5">
                        <h2 className="text-lg lg:text-2xl font-semibold">Education</h2>

                        <div className="flex flex-col gap-4">
                            {education.map((edu, index) => (
                                <div
                                    key={`edu-${index}`}
                                    className="rounded-3xl border border-white/12 bg-white/6 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:border-[#8B5CF6]/30"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-lg">{edu.degree}</h3>
                                            <p className="text-zinc-400">{edu.institution}</p>
                                            <p className="text-sm text-zinc-500">{edu.location}</p>

                                            {edu.description && (
                                                <p className="text-sm text-zinc-400">{edu.description}</p>
                                            )}
                                        </div>

                                        <span className="text-xs px-3 py-1 rounded-full bg-white/6 text-zinc-400 whitespace-nowrap self-start border border-white/1">
                                            {edu.startYear} – {edu.endYear}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* GITHUB ACTIVITY */}
                <div id="activity" className="space-y-5">
                    <div className="flex items-center justify-between gap-3">
                        <h2 className="text-lg lg:text-2xl font-semibold">GitHub Activity</h2>
                        {githubUsername && (
                            <Link
                                href={`https://github.com/${githubUsername}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-zinc-400 hover:text-[#A78BFA] transition-colors flex items-center gap-1"
                            >
                                @{githubUsername} <MdArrowOutward size={12} />
                            </Link>
                        )}
                    </div>

                    <div className="rounded-3xl border border-white/12 bg-white/6 p-5 overflow-x-auto">
                        <div className="flex gap-1 w-max">
                            {contributions.map((week, wi) => (
                                <div key={wi} className="flex flex-col gap-1">
                                    {week.map((level, di) => (
                                        <div key={di} className={`w-2.5 h-2.5 rounded-[3px] ${levelStyles[level]}`} />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-[10px] text-zinc-500">
                            <span>Less</span>
                            {levelStyles.map((c, i) => (
                                <div key={i} className={`w-2.5 h-2.5 rounded-[3px] ${c}`} />
                            ))}
                            <span>More</span>
                        </div>
                    </div>
                </div>

                {/* CONTACT */}
                {(contactLinks.email || contactLinks.github || contactLinks.linkedin || contactLinks.website) && (
                    <div id="contact" className="space-y-5">
                        <h2 className="text-lg lg:text-2xl font-semibold">Get in Touch</h2>

                        <div className="flex flex-wrap gap-3">
                            {contactLinks.email && (
                                <Link
                                    href={`mailto:${contactLinks.email}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/12 bg-white/6 hover:bg-white/1 hover:border-[#8B5CF6]/30 transition-all"
                                >
                                    <MdOutlineMailOutline /> Email
                                </Link>
                            )}

                            {contactLinks.github && (
                                <Link
                                    href={contactLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/12 bg-white/6 hover:bg-white/1 hover:border-[#8B5CF6]/30 transition-all"
                                >
                                    <IoLogoGithub /> GitHub
                                </Link>
                            )}

                            {contactLinks.linkedin && (
                                <Link
                                    href={contactLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/12 bg-white/6 hover:bg-white/1 hover:border-[#8B5CF6]/30 transition-all"
                                >
                                    <FaLinkedin /> LinkedIn
                                </Link>
                            )}

                            {contactLinks.website && (
                                <Link
                                    href={contactLinks.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/12 bg-white/6 hover:bg-white/1 hover:border-[#8B5CF6]/30 transition-all"
                                >
                                    <TbWorld /> Website
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <Footer name={name} />
        </div>
    );
}
