"use client";
import { useState, useEffect } from "react";
import PreviewPanel from "./PreviewPanel";
import EditPanel from "./EditPanel";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import type { TemplateType } from "@/types/template";
import PublishModal from "./PublishModal";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export default function DashboardClient() {
    const { data: session } = useSession();

    const [bio, setBio] = useState<string>("");
    const [status, setStatus] = useState<"idle" | "dirty" | "saved">("idle");
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
    const [username, setUsername] = useState("");
    const [isPublishModalOpen, setIsPublishModal] = useState(false);
    const [publishedUrl, setPublishedUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [publishLoading, setPublishLoading] = useState(false);

    const fetchGithubProjects = async () => {
        if (!session?.accessToken) {
            console.log("no access Token");
            return;
        }

        try {
            const res = await fetch(`/api/github?token=${session.accessToken}`);
            const data = await res.json();

            if (data.projects) {
                setProjects(data.projects);
                localStorage.setItem("gitportify-projects", JSON.stringify(data.projects));
            }

            if (data.user) {
                setName(data.user.name || "");
                setBio(data.user.bio || "");
                setAvatar(data.user.avatar || "");
                localStorage.setItem("gitportify-name", data.user.name || "");
                localStorage.setItem("gitportify-bio", data.user.bio || "");
                localStorage.setItem("gitportify-avatar", data.user.avatar || "");
            }
        } catch (err) {
            console.error("GitHub fetch failed", err);
        }
    };

    useEffect(() => {
        if (!session) return;

        const init = async () => {
            const savedProjects = localStorage.getItem("gitportify-projects");
            if (savedProjects) setProjects(JSON.parse(savedProjects));

            const savedEducation = localStorage.getItem("gitportify-education");
            if (savedEducation) setEducation(JSON.parse(savedEducation));

            const savedExperiences = localStorage.getItem("gitportify-experiences");
            if (savedExperiences) setExperiences(JSON.parse(savedExperiences));

            const savedTechSkills = localStorage.getItem("gitportify-techSkills");
            if (savedTechSkills) setTechSkills(JSON.parse(savedTechSkills));

            const savedBio = localStorage.getItem("gitportify-bio");
            if (savedBio) setBio(savedBio);

            const savedName = localStorage.getItem("gitportify-name");
            if (savedName) setName(savedName);

            const savedTemplate = localStorage.getItem("gitportify-template") as TemplateType | null;
            if (savedTemplate) setTemplate(savedTemplate);

            const savedUsername = localStorage.getItem("gitportify-username");
            if (savedUsername) setUsername(savedUsername);

            const savedContactLinks = localStorage.getItem("gitportify-contactLinks");
            if (savedContactLinks) setContactLinks(JSON.parse(savedContactLinks));

            await fetchGithubProjects();
            setLoading(false);
        };

        init();
    }, [session]);

    // Contact 
    const handleUpdateContact = (field: string, value: string) => {
        setContactLinks((prev) => ({ ...prev, [field]: value }));
        setStatus("dirty");
    };

    // Projects
    const handleAddProject = () => {
        setProjects((prev) => [
            ...prev,
            { id: Date.now(), name: "New Project", description: "Project description...", imageUrl: "", tech: [], liveUrl: "" },
        ]);
        setStatus("dirty");
    };

    const handleRemoveProject = (id: number) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
        setStatus("dirty");
    };

    const handleUpdateProject = (id: number, field: string, value: string) => {
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, [field]: value } : p));
        setStatus("dirty");
    };

    const handleAddTech = (id: number, tech: string) => {
        if (!tech.trim()) return;
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, tech: [...p.tech, tech] } : p));
        setStatus("dirty");
    };

    const handleRemoveTech = (id: number, tech: string) => {
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, tech: p.tech.filter((t: any) => t !== tech) } : p));
        setStatus("dirty");
    };

    // Education 
    const handleAddEducation = () => {
        setEducation((prev) => [
            ...prev,
            { id: Date.now(), degree: "", institution: "", location: "", startYear: "", endYear: "", description: "" },
        ]);
        setStatus("dirty");
    };

    const handleRemoveEducation = (id: number) => {
        setEducation((prev) => prev.filter((e) => e.id !== id));
        setStatus("dirty");
    };

    const handleUpdateEducation = (id: number, field: string, value: string) => {
        setEducation((prev) => prev.map((e) => e.id === id ? { ...e, [field]: value } : e));
        setStatus("dirty");
    };

    // Experience
    const handleAddExperience = () => {
        setExperiences((prev) => [
            ...prev,
            { id: Date.now(), role: "", company: "", location: "", startDate: "", endDate: "", current: false, description: "", tech: [] },
        ]);
        setStatus("dirty");
    };

    const handleRemoveExperience = (id: number) => {
        setExperiences((prev) => prev.filter((e) => e.id !== id));
        setStatus("dirty");
    };

    const handleUpdateExperience = (id: number, field: string, value: string) => {
        setExperiences((prev) =>
            prev.map((e) =>
                e.id === id
                    ? { ...e, [field]: field === "current" ? value === "true" : value }
                    : e
            )
        );
        setStatus("dirty");
    };

    const handleAddExpTech = (id: number, tech: string) => {
        if (!tech.trim()) return;
        setExperiences((prev) => prev.map((e) => e.id === id ? { ...e, tech: [...e.tech, tech] } : e));
        setStatus("dirty");
    };

    const handleRemoveExpTech = (id: number, tech: string) => {
        setExperiences((prev) => prev.map((e) => e.id === id ? { ...e, tech: e.tech.filter((t: any) => t !== tech) } : e));
        setStatus("dirty");
    };

    // Tech Skills
    const handleAddTechSkillGroup = () => {
        setTechSkills((prev) => [
            ...prev,
            { id: Date.now(), category: "", skills: [] },
        ]);
        setStatus("dirty");
    };

    const handleRemoveTechSkillGroup = (id: number) => {
        setTechSkills((prev) => prev.filter((g) => g.id !== id));
        setStatus("dirty");
    };

    const handleUpdateTechSkillGroup = (id: number, field: string, value: string) => {
        setTechSkills((prev) => prev.map((g) => g.id === id ? { ...g, [field]: value } : g));
        setStatus("dirty");
    };

    const handleAddSkill = (id: number, skill: string) => {
        if (!skill.trim()) return;
        setTechSkills((prev) => prev.map((g) => g.id === id ? { ...g, skills: [...g.skills, skill] } : g));
        setStatus("dirty");
    };

    const handleRemoveSkill = (id: number, skill: string) => {
        setTechSkills((prev) => prev.map((g) => g.id === id ? { ...g, skills: g.skills.filter((s: any) => s !== skill) } : g));
        setStatus("dirty");
    };

    // Save 
    const handleBioChange = (value: string) => {
        setBio(value);
        setStatus("dirty");
    };

    const handleSave = () => {
        localStorage.setItem("gitportify-bio", bio);
        localStorage.setItem("gitportify-name", name);
        localStorage.setItem("gitportify-avatar", avatar);
        localStorage.setItem("gitportify-template", template);
        localStorage.setItem("gitportify-username", username);
        localStorage.setItem("gitportify-projects", JSON.stringify(projects));
        localStorage.setItem("gitportify-education", JSON.stringify(education));
        localStorage.setItem("gitportify-experiences", JSON.stringify(experiences));
        localStorage.setItem("gitportify-techSkills", JSON.stringify(techSkills));
        localStorage.setItem("gitportify-contactLinks", JSON.stringify(contactLinks));
        setStatus("saved");
    };

    // ─── Publish ────────────────────────────────────────────
    const handlePublish = async () => {
        if (!username.trim()) {
            toast.error("Please enter username");
            return;
        }

        try {
            setPublishLoading(true);
            const res = await fetch("/api/portfolio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    name,
                    bio,
                    avatar,
                    template,
                    projects,
                    education,
                    experiences,
                    techSkills,
                    contactLinks,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || "Publish failed");
                return;
            }

            const url = `${window.location.origin}/portfolio/${username}`;
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
                <div className="fixed lg:absolute top-5 right-5 z-40">
                    <Button
                        variant={"secondary"}
                        onClick={handlePublish}
                        className="text-xs border px-4 py-2 fira-sans-medium rounded-md cursor-pointer"
                    >
                        {publishLoading ? "Publishing..." : "Publish"}
                    </Button>
                </div>

                <PreviewPanel
                    bio={bio}
                    avatar={avatar}
                    name={name}
                    template={template}
                    projects={projects}
                    education={education}
                    experiences={experiences}
                    techSkills={techSkills}
                    contactLinks={contactLinks}
                    loading={loading}
                />

                <EditPanel
                    bio={bio}
                    setBio={handleBioChange}
                    onSave={handleSave}
                    status={status}
                    avatar={avatar}
                    setAvatar={setAvatar}
                    name={name}
                    setName={(value) => { setName(value); setStatus("dirty"); }}
                    template={template}
                    setTemplate={(value) => {
                        setTemplate(value);
                        localStorage.setItem("gitportify-template", value);
                        setStatus("dirty");
                    }}
                    projects={projects}
                    onAddProject={handleAddProject}
                    onRemoveProject={handleRemoveProject}
                    onUpdateProject={handleUpdateProject}
                    onAddTech={handleAddTech}
                    onRemoveTech={handleRemoveTech}
                    education={education}
                    onAddEducation={handleAddEducation}
                    onRemoveEducation={handleRemoveEducation}
                    onUpdateEducation={handleUpdateEducation}
                    experiences={experiences}
                    onAddExperience={handleAddExperience}
                    onRemoveExperience={handleRemoveExperience}
                    onUpdateExperience={handleUpdateExperience}
                    onAddExpTech={handleAddExpTech}
                    onRemoveExpTech={handleRemoveExpTech}
                    techSkills={techSkills}
                    onAddTechSkillGroup={handleAddTechSkillGroup}
                    onRemoveTechSkillGroup={handleRemoveTechSkillGroup}
                    onUpdateTechSkillGroup={handleUpdateTechSkillGroup}
                    onAddSkill={handleAddSkill}
                    onRemoveSkill={handleRemoveSkill}
                    contactLinks={contactLinks}
                    onUpdateContact={handleUpdateContact}
                    username={username}
                    setUsername={(value) => { setUsername(value); setStatus("dirty"); }}
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
}