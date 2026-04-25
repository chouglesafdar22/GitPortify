"use client";
import Link from "next/link";
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
    }
};

export default function GithubProTemplate({
    name,
    avatar,
    bio,
    projects,
    techSkills,
    experiences,
    education,
    contactLinks
}: Props) {
    return (
        <>
            <div className="max-w-5xl mx-auto space-y-10">
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

                    <div className="w-full">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl text-foreground font-semibold">
                            {name || "Your Name"}
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-muted-foreground wrap-break-word whitespace-break-spaces">
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
                <div className="mt-5 w-full">
                    <h2 className="text-xs sm:text-sm  lg:text-lg text-foreground font-semibold mb-5">
                        Projects
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {projects.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                <p className="text-sm text-muted-foreground">
                                    No projects added yet
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Add your first project from dashboard 🚀
                                </p>
                            </div>
                        ) : (projects.map((project, index) => (
                            <Link
                                key={`project-${index}`}
                                href={project.liveUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border rounded-xl p-4 transition-all hover:scale-[1.01] hover:shadow-md"
                            >
                                <div
                                    key={`project-div-${index}`}
                                >
                                    <div className="h-40 bg-muted flex items-center justify-center text-xs text-muted-foreground">
                                        {project.imageUrl ? (
                                            <img
                                                src={project.imageUrl}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            "No Image"
                                        )}
                                    </div>
                                    <div className="p-4 space-y-1">
                                        <h3 className="font-medium text-base text-foreground">{project.name}</h3>
                                        <p className="text-xs wrap-break-word text-muted-foreground">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-[10px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                        ))}
                    </div>

                    {techSkills && techSkills.length > 0 && (
                        <div className="mt-10">
                            <h2 className="text-xs sm:text-sm lg:text-lg text-foreground font-semibold mb-5">
                                Tech Skills
                            </h2>
                            <div className="flex flex-col gap-4">
                                {techSkills.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                        <p className="text-sm text-muted-foreground">
                                            No skills added yet
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Add your tech skills from dashboard ⚡
                                        </p>
                                    </div>
                                ) : (
                                    techSkills.map((group, index) => (
                                        <div
                                            key={`skill-group-${index}`}
                                            className="border rounded-xl p-4 transition-all hover:scale-[1.01] hover:shadow-md"
                                        >
                                            <h3 className="font-medium text-base text-foreground mb-3">
                                                {group.category}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}

                    {experiences && experiences.length > 0 && (
                        <div className="mt-10">
                            <h2 className="text-xs sm:text-sm lg:text-lg text-foreground font-semibold mb-5">
                                Experience
                            </h2>
                            <div className="flex flex-col gap-4">
                                {experiences.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-40 border rounded-xl bg-muted/30 text-center">
                                        <p className="text-sm text-muted-foreground">
                                            No experience added yet
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Add your work experience from dashboard 💼
                                        </p>
                                    </div>
                                ) : (
                                    experiences.map((exp, index) => (
                                        <div
                                            key={`exp-${index}`}
                                            className="border rounded-xl p-4 transition-all hover:scale-[1.01] hover:shadow-md"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                                <div className="space-y-1">
                                                    <h3 className="font-medium text-base text-foreground">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {exp.location}
                                                    </p>
                                                    {exp.description && (
                                                        <p className="text-xs wrap-break-word text-muted-foreground pt-1">
                                                            {exp.description}
                                                        </p>
                                                    )}
                                                    {exp.tech.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 pt-1">
                                                            {exp.tech.map((tech, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-[10px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="text-[10px] px-2 py-1 rounded-md bg-muted text-muted-foreground whitespace-nowrap self-start">
                                                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}

                    {education && education.length > 0 && (
                        <div className="mt-10">
                            <h2 className="text-xs sm:text-sm lg:text-lg text-foreground font-semibold mb-5">
                                Education
                            </h2>
                            <div className="flex flex-col gap-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={`edu-${index}`}
                                        className="border rounded-xl p-4 transition-all hover:scale-[1.01] hover:shadow-md"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                            <div className="space-y-1">
                                                <h3 className="font-medium text-base text-foreground">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-muted-foreground">
                                                    {edu.institution}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {edu.location}
                                                </p>
                                                {edu.description && (
                                                    <p className="text-xs wrap-break-word text-muted-foreground pt-1">
                                                        {edu.description}
                                                    </p>
                                                )}
                                            </div>
                                            <span className="text-[10px] px-2 py-1 rounded-md bg-muted text-muted-foreground whitespace-nowrap self-start">
                                                {edu.startYear} – {edu.endYear}
                                            </span>
                                        </div>
                                    </div>
                                ))}
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
                                        href={`${contactLinks.github}`}
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
                                        href={`${contactLinks.linkedin}`}
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
                                        href={`${contactLinks.website}`}
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
            </div >
        </>
    )
};