"use client";
import Link from "next/link";

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
    return (
        <>
            <div className="max-w-5xl mx-auto px-4 py-10 font-mono space-y-8 text-sm">

                {/* Whoami */}
                <div>
                    <p className="text-muted-foreground">$ whoami</p>
                    <h1 className="text-lg wrap-break-word">{name}</h1>
                </div>

                {/* Bio */}
                <div className="">
                    <p className="text-muted-foreground">$ about</p>
                    <p className="wrap-break-word whitespace-break-spaces">
                        {bio ? (
                            bio
                        ) : (
                            <span className="font-mono text-muted-foreground">
                                Add a bio about yourself...
                            </span>
                        )}
                    </p>
                </div>

                {/* Projects */}
                <div>
                    <p className="text-muted-foreground mb-4">$ projects</p>

                    <div className="space-y-4">
                        {projects.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                <p className="text-sm text-muted-foreground font-mono">
                                    No projects added yet
                                </p>
                                <p className="text-xs text-muted-foreground font-mono">
                                    Add your first project from dashboard
                                </p>
                            </div>
                        ) : (projects.map((p,index) => (
                            <Link
                                key={`p-${index}`}
                                href={p.liveUrl || "#"}
                                target="_blank"
                                className="block border rounded-md p-3 transition hover:scale-[1.01] hover:shadow-md"
                            >
                                <div className="flex gap-3 items-start">

                                    {/* Terminal-style Image */}
                                    <div className="w-16 h-16 bg-muted rounded-md overflow-hidden shrink-0">
                                        {p.imageUrl ? (
                                            <img
                                                src={p.imageUrl}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-[10px] text-muted-foreground">
                                                img
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <p>▸ {p.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {p.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {p.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[10px] px-2 py-1 bg-muted rounded"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        )))}
                    </div>
                </div>

                {techSkills && techSkills.length > 0 && (
                    <div>
                        <p className="text-muted-foreground mb-4">$ skills</p>

                        <div className="space-y-4">
                            {techSkills.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                    <p className="text-sm text-muted-foreground font-mono">
                                        No skills added yet
                                    </p>
                                    <p className="text-xs text-muted-foreground font-mono">
                                        Add your tech skills from dashboard
                                    </p>
                                </div>
                            ) : (
                                techSkills.map((group,index) => (
                                    <div
                                        key={`group-${index}`}
                                        className="block border rounded-md p-3 transition hover:scale-[1.01] hover:shadow-md"
                                    >
                                        <div className="flex-1">
                                            <p>▸ {group.category}</p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {group.skills.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-[10px] px-2 py-1 bg-muted rounded"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {experiences && experiences.length > 0 && (
                    <div>
                        <p className="text-muted-foreground mb-4">$ experience</p>

                        <div className="space-y-4">
                            {experiences.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                    <p className="text-sm text-muted-foreground font-mono">
                                        No experience added yet
                                    </p>
                                    <p className="text-xs text-muted-foreground font-mono">
                                        Add your work experience from dashboard
                                    </p>
                                </div>
                            ) : (
                                experiences.map((exp,index) => (
                                    <div
                                        key={`exp-${index}`}
                                        className="block border rounded-md p-3 transition hover:scale-[1.01] hover:shadow-md"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <p>▸ {exp.role}</p>
                                                <span className="text-[10px] px-2 py-1 bg-muted rounded whitespace-nowrap">
                                                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {exp.company}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {exp.location}
                                            </p>
                                            {exp.description && (
                                                <p className="text-xs text-muted-foreground mt-1 wrap-break-word">
                                                    {exp.description}
                                                </p>
                                            )}
                                            {exp.tech.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {exp.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="text-[10px] px-2 py-1 bg-muted rounded"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {education && education.length > 0 && (
                    <div>
                        <p className="text-muted-foreground mb-4">$ education</p>

                        <div className="space-y-4">
                            {education.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                    <p className="text-sm text-muted-foreground font-mono">
                                        No education added yet
                                    </p>
                                    <p className="text-xs text-muted-foreground font-mono">
                                        Add your education from dashboard
                                    </p>
                                </div>
                            ) : (
                                education.map((edu,index) => (
                                    <div
                                        key={`edu-${index}`}
                                        className="block border rounded-md p-3 transition hover:scale-[1.01] hover:shadow-md"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <p>▸ {edu.degree}</p>
                                                <span className="text-[10px] px-2 py-1 bg-muted rounded whitespace-nowrap">
                                                    {edu.startYear} – {edu.endYear}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {edu.institution}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {edu.location}
                                            </p>
                                            {edu.description && (
                                                <p className="text-xs text-muted-foreground mt-1 wrap-break-word">
                                                    {edu.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {/* Contact Links */}
                {(contactLinks.email ||
                    contactLinks.github ||
                    contactLinks.linkedin ||
                    contactLinks.website) && (
                        <div>
                            <p className="text-muted-foreground">$ links</p>

                            <div className="space-y-1 mt-2 text-xs flex flex-col break-all">
                                {contactLinks.github && (
                                    <a href={`${contactLinks.github}`} target="_blank">
                                        ▸ github: {contactLinks.github}
                                    </a>
                                )}

                                {contactLinks.linkedin && (
                                    <a href={`${contactLinks.linkedin}`} target="_blank">
                                        ▸ linkedin: {contactLinks.linkedin}
                                    </a>
                                )}

                                {contactLinks.website && (
                                    <a href={`${contactLinks.website}`} target="_blank">
                                        ▸ website: {contactLinks.website}
                                    </a>
                                )}

                                {contactLinks.email && (
                                    <a href={`mailto:${contactLinks.email}`}>
                                        ▸ email: {contactLinks.email}
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
            </div>
        </>
    );
}