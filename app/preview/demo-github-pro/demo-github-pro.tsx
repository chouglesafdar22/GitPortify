"use client";
import GithubProTemplate from "@/components/templates/GithubProTemplate";

export default function DemoGithubProPage() {
    return (
        <GithubProTemplate
            name="Safdar Chougle"
            avatar="https://avatars.githubusercontent.com/u/168744912?v=4"
            bio="MERN Stack Web Developer | Next.js & Tailwind CSS | Building Scalable Web Applications"

            projects={[
                {
                    id: 1,
                    name: "GitPortify",
                    description:
                        "Modern developer portfolio SaaS that helps developers create and publish portfolio websites instantly.",
                    imageUrl:
                        "/images/gitportify-preview.png",
                    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
                    liveUrl: "https://gitportify.vercel.app",
                },
                {
                    id: 2,
                    name: "Modern Ecommerce",
                    description:
                        "Production-ready ecommerce platform with authentication, admin dashboard, and order management.",
                    imageUrl:
                        "/images/ecommerce-preview.png",
                    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
                    liveUrl: "#",
                },
            ]}

            techSkills={[
                {
                    id: 1,
                    category: "Frontend",
                    skills: [
                        "Next.js",
                        "React.js",
                        "TypeScript",
                        "Tailwind CSS",
                    ],
                },
                {
                    id: 2,
                    category: "Backend",
                    skills: [
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "REST APIs",
                    ],
                },
            ]}

            experiences={[
                {
                    id: 1,
                    role: "Full-Stack Web Developer",
                    company: "GitPortify",
                    location: "Remote",
                    startDate: "2026",
                    endDate: "",
                    current: true,
                    description:
                        "Building modern portfolio SaaS experiences, templates, and scalable frontend systems.",
                    tech: [
                        "Next.js",
                        "Tailwind CSS",
                        "MongoDB",
                    ],
                },
            ]}

            education={[
                {
                    id: 1,
                    degree: "Bachelor of Computer Science",
                    institution: "University of Mumbai",
                    location: "Chiplun, India",
                    startYear: "2023",
                    endYear: "2026",
                    description:
                        "Focused on software engineering and full-stack web development.",
                },
            ]}

            contactLinks={{
                email: "safdar@example.com",
                github: "https://github.com/chouglesafdar22",
                linkedin: "https://linkedin.com",
                website: "https://gitportify.vercel.app",
            }}
        />
    );
};
