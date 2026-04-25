"use client";
import GithubProTemplate from "./GithubProTemplate";
import ProductLandingTemplate from "./ProductLandingTemplate";
import TerminalDevTemplate from "./TerminalDevTemplate";
import type { TemplateType } from "@/types/template";

interface TemplateRendererProps {
    template: TemplateType;
    bio: string;
    avatar: string;
    name: string;
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
}

export default function TemplateRenderer(props: TemplateRendererProps) {
    switch (props.template) {
        case "github-pro":
            return <GithubProTemplate {...props} />;

        case "product-landing":
            return <ProductLandingTemplate {...props} />;

        case "terminal-dev":
            return <TerminalDevTemplate {...props} />;

        default:
            return <GithubProTemplate {...props} />;
    }
}