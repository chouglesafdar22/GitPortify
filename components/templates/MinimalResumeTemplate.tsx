"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineMailOutline, MdArrowOutward } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Footer from "../portfolio/Footer";

/**
 * Design tokens — kept inline via Tailwind arbitrary values so this file is
 * drop-in without touching tailwind.config.
 *
 * Paper      #FBFBF9   background
 * Ink        #17181C   primary text
 * Ink soft   #5B5E66   secondary text
 * Line       #E1E0DA   hairline rules / borders
 * Accent     #1F5C4E   pine ink — used sparingly (links, current-role mark)
 *
 * Type: a serif for the name/section labels, a plain sans for body copy,
 * and a monospace for dates/eyebrows — the three roles the design system
 * calls for. Falls back to Tailwind's default font-serif/font-sans/font-mono
 * stacks; swap in next/font (e.g. Source Serif 4 / Inter / JetBrains Mono)
 * for the real thing.
 */

interface Props {
    name: string;
    avatar: string;
    title?: string; // e.g. "Senior Frontend Engineer"
    bio: string; // one-line summary
    resumeUrl?: string; // optional link to a downloadable PDF

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

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#5B5E66]">
            {children}
        </p>
    );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 mb-6">
            <h2 className="font-serif text-xl text-[#17181C] shrink-0">{children}</h2>
            <div className="h-px flex-1 bg-[#E1E0DA]" />
        </div>
    );
}

export default function MinimalResumeTemplate({
    name,
    avatar,
    title,
    bio,
    resumeUrl,
    projects,
    techSkills,
    experiences,
    education,
    contactLinks,
}: Props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FBFBF9] text-[#17181C]">
            {/* NAV — plain text, hairline underline on scroll, no pills/glass */}
            <header
                className={`sticky top-0 z-30 bg-[#FBFBF9]/90 backdrop-blur-sm transition-shadow duration-300 ${
                    scrolled ? "shadow-[0_1px_0_0_#E1E0DA]" : ""
                }`}
            >
                <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="#top" className="font-serif text-sm">
                        {name || "Portfolio"}
                    </Link>

                    <nav className="hidden sm:flex items-center gap-5 font-mono text-[11px] uppercase tracking-wider text-[#5B5E66]">
                        {NAV_LINKS.map((l) => (
                            <a key={l.href} href={l.href} className="hover:text-[#1F5C4E] transition-colors">
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {resumeUrl && (
                        <Link
                            href={contactLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[11px] uppercase tracking-wider border border-[#17181C] px-3 py-1.5 hover:bg-[#17181C] hover:text-[#FBFBF9] transition-colors"
                        >
                            Resume
                        </Link>
                    )}
                </div>
            </header>

            <main id="top" className="max-w-2xl mx-auto px-6">
                {/* HEADER */}
                <section className="pt-14 pb-10 flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="w-20 h-20 shrink-0 overflow-hidden border border-[#E1E0DA] bg-[#F1F0EB]">
                        {avatar && <img src={avatar} alt={name} className="w-full h-full object-cover grayscale" />}
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-serif text-3xl sm:text-4xl leading-tight">
                            {name || "Your Name"}
                        </h1>
                        {title && (
                            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#1F5C4E]">
                                {title}
                            </p>
                        )}
                    </div>
                </section>

                {/* ABOUT — one-line summary */}
                <section id="about" className="pb-12 border-t border-[#E1E0DA] pt-8">
                    <p className="text-base sm:text-lg text-[#3A3C42] leading-relaxed max-w-xl">
                        {bio || <span className="italic text-[#5B5E66]">Add a one-line summary about yourself...</span>}
                    </p>
                </section>

                {/* EXPERIENCE */}
                {experiences && experiences.length > 0 && (
                    <section id="experience" className="pb-14">
                        <SectionHeading>Experience</SectionHeading>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={`exp-${index}`} className="grid grid-cols-[minmax(0,88px)_1fr] sm:grid-cols-[110px_1fr] gap-4 sm:gap-6">
                                    <div className="font-mono text-[11px] text-[#5B5E66] pt-1 leading-relaxed">
                                        <div>{exp.startDate}</div>
                                        <div>{exp.current ? "Present" : exp.endDate}</div>
                                    </div>

                                    <div className="space-y-1.5 border-l border-[#E1E0DA] pl-4 sm:pl-6 relative">
                                        {exp.current && (
                                            <span className="absolute left-[3.5px] top-2 w-1.5 h-1.5 rounded-full bg-[#1F5C4E]" />
                                        )}

                                        <h3 className="font-serif text-lg leading-snug">
                                            {exp.role} <span className="text-[#5B5E66] font-sans text-base">— {exp.company}</span>
                                        </h3>

                                        <p className="text-xs text-[#5B5E66]">{exp.location}</p>

                                        {exp.description && (
                                            <p className="text-sm text-[#3A3C42] leading-relaxed pt-1">{exp.description}</p>
                                        )}

                                        {exp.tech.length > 0 && (
                                            <p className="text-xs text-[#5B5E66] pt-1.5">
                                                {exp.tech.join(" · ")}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* EDUCATION */}
                {education && education.length > 0 && (
                    <section id="education" className="pb-14">
                        <SectionHeading>Education</SectionHeading>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={`edu-${index}`} className="grid grid-cols-[minmax(0,88px)_1fr] sm:grid-cols-[110px_1fr] gap-4 sm:gap-6">
                                    <div className="font-mono text-[11px] text-[#5B5E66] pt-1 leading-relaxed">
                                        <div>{edu.startYear}</div>
                                        <div>{edu.endYear}</div>
                                    </div>

                                    <div className="space-y-1.5 border-l border-[#E1E0DA] pl-4 sm:pl-6">
                                        <h3 className="font-serif text-lg leading-snug">
                                            {edu.degree} <span className="text-[#5B5E66] font-sans text-base">— {edu.institution}</span>
                                        </h3>
                                        <p className="text-xs text-[#5B5E66]">{edu.location}</p>
                                        {edu.description && (
                                            <p className="text-sm text-[#3A3C42] leading-relaxed pt-1">{edu.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* TECHNICAL SKILLS — grouped, plain text rows, no pill badges */}
                {techSkills && techSkills.length > 0 && (
                    <section id="skills" className="pb-14">
                        <SectionHeading>Technical Skills</SectionHeading>

                        <div className="space-y-3">
                            {techSkills.map((group, index) => (
                                <div key={`skill-group-${index}`} className="grid grid-cols-[minmax(0,88px)_1fr] sm:grid-cols-[110px_1fr] gap-4 sm:gap-6">
                                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#5B5E66] pt-0.5">
                                        {group.category}
                                    </p>
                                    <p className="text-sm text-[#3A3C42] leading-relaxed">
                                        {group.skills.join(" · ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* PROJECTS */}
                <section id="projects" className="pb-14">
                    <SectionHeading>Projects</SectionHeading>

                    {projects.length === 0 ? (
                        <div className="border border-dashed border-[#E1E0DA] py-10 text-center">
                            <p className="text-sm text-[#5B5E66]">No projects added yet</p>
                            <p className="text-xs text-[#8A8D94]">Add your first project from dashboard 🚀</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-[#E1E0DA] border-t border-b border-[#E1E0DA]">
                            {projects.map((project, index) => (
                                <Link
                                    key={`project-${index}`}
                                    href={project.liveUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start justify-between gap-4 py-5 hover:bg-[#F1F0EB]/50 -mx-2 px-2 transition-colors"
                                >
                                    <div className="space-y-1.5">
                                        <h3 className="font-serif text-lg leading-snug group-hover:text-[#1F5C4E] transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-[#3A3C42] leading-relaxed max-w-md">
                                            {project.description}
                                        </p>
                                        {project.tech.length > 0 && (
                                            <p className="text-xs text-[#5B5E66]">{project.tech.join(" · ")}</p>
                                        )}
                                    </div>

                                    <MdArrowOutward className="mt-1.5 shrink-0 text-[#5B5E66] group-hover:text-[#1F5C4E] transition-colors" />
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                {/* CONTACT FOOTER */}
                {(contactLinks.email || contactLinks.github || contactLinks.linkedin || contactLinks.website) && (
                    <section id="contact" className="pb-16">
                        <SectionHeading>Contact</SectionHeading>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-3 font-mono text-xs uppercase tracking-wider text-[#5B5E66]">
                            {contactLinks.email && (
                                <Link href={`mailto:${contactLinks.email}`} className="flex items-center gap-1.5 hover:text-[#1F5C4E] transition-colors">
                                    <MdOutlineMailOutline /> Email
                                </Link>
                            )}
                            {contactLinks.github && (
                                <>
                                    <span className="text-[#E1E0DA]">/</span>
                                    <Link href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#1F5C4E] transition-colors">
                                        <IoLogoGithub /> GitHub
                                    </Link>
                                </>
                            )}
                            {contactLinks.linkedin && (
                                <>
                                    <span className="text-[#E1E0DA]">/</span>
                                    <Link href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#1F5C4E] transition-colors">
                                        <FaLinkedin /> LinkedIn
                                    </Link>
                                </>
                            )}
                            {contactLinks.website && (
                                <>
                                    <span className="text-[#E1E0DA]">/</span>
                                    <Link href={contactLinks.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#1F5C4E] transition-colors">
                                        <TbWorld /> Website
                                    </Link>
                                </>
                            )}
                        </div>
                    </section>
                )}
            </main>

            <Footer name={name} />
        </div>
    );
}
