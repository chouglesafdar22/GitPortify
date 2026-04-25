"use client";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

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
    }
};

export default function ProductLandingTemplate({
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
        <>
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

                {/* Hero */}
                <div className="flex flex-col items-center gap-5">
                    <div className="w-28 h-28 rounded-full bg-muted overflow-hidden">
                        {avatar && (
                            <img
                                src={avatar}
                                alt={name}
                                className="w-full h-full object-cover transition duration-300"
                            />
                        )}
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl text-foreground font-semibold">{name}</h1>
                        <p className="text-muted-foreground text-xs sm:text-sm lg:text-lg max-w-xl mx-auto wrap-break-word whitespace-break-spaces">
                            {bio ? (
                                bio
                            ) : (
                                <span className="italic text-muted-foreground">
                                    Add a bio about yourself...
                                </span>
                            )}

                        </p>
                    </div>
                </div>

                {/* Projects */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                            <p className="text-sm text-muted-foreground">
                                No projects added yet
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Add your first project from dashboard
                            </p>
                        </div>
                    ) : (projects.map((p, index) => (
                        <Link
                            key={`p-${index}`}
                            href={p.liveUrl || "#"}
                            target="_blank"
                            className="border rounded-xl overflow-hidden hover:shadow-sm transition  hover:scale-[1.01]"
                        >
                            <div className="h-40 bg-muted flex items-center justify-center text-xs">
                                {p.imageUrl ? (
                                    <img
                                        src={p.imageUrl}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium">{p.name}</h3>
                                <p className="text-xs text-muted-foreground">
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t: string) => (
                                        <span
                                            key={t}
                                            className="text-[10px] px-2 py-1 bg-muted rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    )))}
                </div>

                {techSkills && techSkills.length > 0 && (
                    <div className="w-full">
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-foreground font-semibold mb-5">
                            Tech Skills
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {techSkills.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                    <p className="text-sm text-muted-foreground">
                                        No skills added yet
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Add your tech skills from dashboard
                                    </p>
                                </div>
                            ) : (
                                techSkills.map((group,index) => (
                                    <div
                                        key={`group-${index}`}
                                        className="border rounded-xl overflow-hidden hover:shadow-sm transition hover:scale-[1.01]"
                                    >
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-medium">{group.category}</h3>
                                            <div className="flex flex-wrap gap-2">
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
                    <div className="w-full">
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-foreground font-semibold mb-5">
                            Experience
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {experiences.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                    <p className="text-sm text-muted-foreground">
                                        No experience added yet
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Add your work experience from dashboard
                                    </p>
                                </div>
                            ) : (
                                experiences.map((exp,index) => (
                                    <div
                                        key={`exp-${index}`}
                                        className="border rounded-xl overflow-hidden hover:shadow-sm transition hover:scale-[1.01]"
                                    >
                                        <div className="p-4 space-y-2">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-medium">{exp.role}</h3>
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
                                                <p className="text-xs text-muted-foreground wrap-break-word">
                                                    {exp.description}
                                                </p>
                                            )}
                                            {exp.tech.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-1">
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
                    <div className="w-full">
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-foreground font-semibold mb-5">
                            Education
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {education.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                    <p className="text-sm text-muted-foreground">
                                        No education added yet
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Add your education from dashboard
                                    </p>
                                </div>
                            ) : (
                                education.map((edu,index) => (
                                    <div
                                        key={`edu-${index}`}
                                        className="border rounded-xl overflow-hidden hover:shadow-sm transition hover:scale-[1.01]"
                                    >
                                        <div className="p-4 space-y-2">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-medium">{edu.degree}</h3>
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
                                                <p className="text-xs text-muted-foreground wrap-break-word">
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

                {(contactLinks.email || contactLinks.github || contactLinks.linkedin || contactLinks.website) && (
                    <div className="mt-10">
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-foreground font-semibold mb-3">
                            Get in Touch
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {contactLinks.email && (
                                <Link
                                    href={`mailto:${contactLinks.email}`}
                                    className="flex flex-row justify-center items-center text-sm border gap-1 px-3 py-1.5 text-foreground rounded-md hover:bg-muted"
                                >
                                    <span><MdOutlineMailOutline /></span>
                                    <span>Email</span>
                                </Link>
                            )}

                            {contactLinks.github && (
                                <Link
                                    href={`https://${contactLinks.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row justify-center items-center text-sm border gap-1 px-3 py-1.5 text-foreground rounded-md hover:bg-muted"
                                >
                                    <span><IoLogoGithub /></span>
                                    <span>GitHub</span>
                                </Link>
                            )}

                            {contactLinks.linkedin && (
                                <Link
                                    href={`https://${contactLinks.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row justify-center items-center text-sm border gap-1 px-3 py-1.5 text-foreground rounded-md hover:bg-muted"
                                >
                                    <span><FaLinkedin /></span>
                                    <span>LinkedIn</span>
                                </Link>
                            )}

                            {contactLinks.website && (
                                <Link
                                    href={`https://${contactLinks.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row justify-center items-center text-sm border gap-1 px-3 py-1.5 text-foreground rounded-md hover:bg-muted"
                                >
                                    <span><TbWorld /></span>
                                    <span>Website</span>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}