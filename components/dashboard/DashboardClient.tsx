"use client";
import { useState, useEffect } from "react";
import PreviewPanel from "./PreviewPanel";
import EditPanel from "./EditPanel";
import Footer from "./Footer";
import type { TemplateType } from "@/types/template";
import PublishModal from "./PublishModal";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Button from "../landing/Button";
import GuideBarButton from "../layout/GuideBarButton";

export default function DashboardClient() {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [template, setTemplate] = useState<TemplateType>("github-pro");
    const [projects, setProjects] = useState<any[]>([]);
    const [education, setEducation] = useState<any[]>([]);
    const [experiences, setExperiences] = useState<any[]>([]);
    const [techSkills, setTechSkills] = useState<any[]>([]);
    const [contactLinks, setContactLinks] = useState({
        email: "",
        github: "",
        linkedin: "",
        website: "",
    });
    const { data: session } = useSession();
    const [selectedProjects, setSelectedProjects] = useState<any[]>([]);
    const [selectedExp, setSelectedExp] = useState<any[]>([]);
    const [selectedTS, setSelectedTS] = useState<any[]>([]);
    const [selectedEdu, setSelectedEdu] = useState<any[]>([]);
    const [selectedCl, setSelectedCl] = useState({
        email: "",
        github: "",
        linkedin: "",
        website: ""
    });
    const [publishLoading, setPublishLoading] = useState(false);
    const [publishedUrl, setPublishedUrl] = useState("");
    const [isPublishModalOpen, setIsPublishModal] = useState(false);

    const fetchPortfolio = async () => {
        try {
            const response = await fetch("/api/portfolio");
            const data = await response.json();
            const portfolio = data.portfolio

            if (!portfolio) {
                return;
            };

            if (portfolio.avatar) {
                setAvatar(portfolio.avatar);
            };

            if (portfolio.name) {
                setName(portfolio.name)
            };

            if (portfolio.username) {
                setUsername(portfolio.username);
            };

            if (portfolio.bio) {
                setBio(portfolio.bio)
            };

            if (portfolio.projects) {
                setProjects(portfolio.projects);
            };

            if (portfolio.education) {
                setEducation(portfolio.education);
            };

            if (portfolio.experiences) {
                setExperiences(portfolio.experiences);
            };

            if (portfolio.techSkills) {
                setTechSkills(portfolio.techSkills);
            };

            if (portfolio.contactLinks) {
                setContactLinks(portfolio.contactLinks);
            };

        } catch (err) {
            console.error("GitHub fetch failed", err);
        }
    };

    const fetchWebsite = async () => {
        try {
            const response = await fetch("/api/website");
            const data = await response.json();
            const website = data.website

            if (!website) {
                return;
            };

            if (website.template) {
                setTemplate(website.template)
            }

            if (website.projects) {
                setSelectedProjects(website.projects);
            };

            if (website.education) {
                setSelectedEdu(website.education);
            };

            if (website.experiences) {
                setSelectedExp(website.experiences);
            };

            if (website.techSkills) {
                setSelectedTS(website.techSkills);
            };

            if (website.contactLinks) {
                setSelectedCl(website.contactLinks);
            };

        } catch (err) {
            console.error("GitHub fetch failed", err);
        }
    };

    useEffect(() => {
        if (!session) return;

        const init = async () => {
            fetchPortfolio();
            fetchWebsite();
            setLoading(false);
        };

        init();
    }, [session]);

    // ─── Publish ────────────────────────────────────────────
    const handlePublish = async () => {

        if (!avatar || !name || !bio || !username || selectedProjects.length === 0 || selectedTS.length === 0 || selectedEdu.length === 0 || Object.values(selectedCl).filter(Boolean).length === 0) {
            toast.error("Please complete all required fields before saving.");
            return;
        };

        try {
            setPublishLoading(true);
            const res = await fetch("/api/website", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    name,
                    bio,
                    avatar,
                    template,
                    projects: selectedProjects,
                    education: selectedEdu,
                    experiences: selectedExp,
                    techSkills: selectedTS,
                    contactLinks: selectedCl,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || "Publish failed");
                return;
            }

            const url = `${window.location.origin}/p/${username}`;
            setPublishedUrl(url);
            setIsPublishModal(true);
            toast.success("Portfolio published 🚀");

        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setPublishLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row relative h-fit">
                <div className="fixed lg:absolute top-5 right-6 z-40">
                    <Button
                        onClick={handlePublish}
                        contentClassName="text-xs md:text-sm xl:text-base border px-3 py-1.5 fira-sans-medium rounded-md cursor-pointer"
                        text={publishLoading ? "Publishing..." : "Publish"}
                    />
                </div>

                <div className="fixed bottom-5 left-6 z-40">
                    <GuideBarButton />
                </div>

                <PreviewPanel
                    bio={bio}
                    avatar={avatar}
                    name={name}
                    template={template}
                    projects={selectedProjects}
                    education={selectedEdu}
                    experiences={selectedExp}
                    techSkills={selectedTS}
                    contactLinks={selectedCl}
                    loading={loading}
                />

                <EditPanel
                    bio={bio}
                    avatar={avatar}
                    name={name}
                    template={template}
                    setTemplate={(value) => {
                        setTemplate(value);
                    }}
                    projects={projects}
                    selectedProjects={selectedProjects}
                    setSelectedProjects={setSelectedProjects}
                    education={education}
                    setSelectedEdu={setSelectedEdu}
                    selectedEdu={selectedEdu}
                    experiences={experiences}
                    setSelectedExp={setSelectedExp}
                    selectedExp={selectedExp}
                    techSkills={techSkills}
                    setSelectedTS={setSelectedTS}
                    selectedTS={selectedTS}
                    contactLinks={contactLinks}
                    setSelectedCl={setSelectedCl}
                    selectedCl={selectedCl}
                    username={username}
                />
            </div>

            <Footer />

            <PublishModal
                isOpen={isPublishModalOpen}
                onClose={() => setIsPublishModal(false)}
                portfolioUrl={publishedUrl}
                name={name}
            />
        </>
    );
};