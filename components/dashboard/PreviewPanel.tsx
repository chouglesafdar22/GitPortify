"use client";
import type { TemplateType } from "@/types/template";
import TemplateRenderer from "@/components/templates/TemplateRenderer";

interface Props {
    bio: string;
    avatar: string;
    name: string;
    template: TemplateType;
    projects: {
        id: number;
        name: string;
        description: string;
        imageUrl: string;
        tech: string[];
        liveUrl?: string;
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
    techSkills: {
        id: number;
        category: string;
        skills: string[];
    }[];
    contactLinks: {
        email: string;
        github: string;
        linkedin: string;
        website: string;
    };
    loading?: boolean;
}

export default function PreviewPanel({
    bio,
    avatar,
    name,
    template,
    projects,
    education,
    experiences,
    techSkills,
    contactLinks,
    loading
}: Props) {

    if (loading) {
        return (
            <section className="w-dvw lg:w-full lg:flex-1 border-r p-4 sm:p-6">
                <div className="animate-pulse space-y-4">
                    <div className="flex flex-col gap-2.5 justify-center items-center">
                        <div className="w-24 h-24 rounded-full bg-muted" />
                        <div className="h-4 w-40 bg-muted rounded" />
                        <div className="h-3 w-60 bg-muted rounded" />
                    </div>
                    <div className="h-4 w-36 bg-muted rounded" />
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-32 bg-muted rounded-xl" />
                        ))}
                    </div>
                    <div className="h-4 w-36 bg-muted rounded" />
                    <div className="flex flex-wrap gap-4 mt-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-6 w-14 bg-muted rounded-xl" />
                        ))}
                    </div>
                    <div className="h-4 w-36 bg-muted rounded" />
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        {[1, 2].map((i) => (
                            <div key={i} className="h-32 bg-muted rounded-xl" />
                        ))}
                    </div>
                    <div className="h-4 w-36 bg-muted rounded" />
                    <div className="flex flex-wrap gap-4 mt-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-6 w-16 bg-muted rounded-xl" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="w-dvw lg:w-full lg:flex-1 border-r p-4 md:p-6">
                <div className="h-full rounded-xl md:p-6 p-0  transition-all duration-300">
                    <TemplateRenderer
                        key={template}
                        template={template}
                        name={name}
                        bio={bio}
                        avatar={avatar}
                        projects={projects}
                        education={education}
                        experiences={experiences}
                        techSkills={techSkills}
                        contactLinks={contactLinks}
                    />
                </div>
            </section>
        </>
    );
}