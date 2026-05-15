"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { TemplateType } from "@/types/template";

interface Props {
    bio: string;
    setBio: (value: string) => void;
    onSave: () => void;
    status: "idle" | "dirty" | "saved";
    avatar: string;
    setAvatar: (url: string) => void;
    name: string;
    setName: (value: string) => void;
    template: TemplateType;
    projects: any[];
    setTemplate: (value: TemplateType) => void;
    onAddProject: () => void;
    onRemoveProject: (id: number) => void;
    onUpdateProject: (id: number, field: string, value: string) => void;
    onAddTech: (id: number, tech: string) => void;
    onRemoveTech: (id: number, tech: string) => void;
    contactLinks: {
        email: string;
        github: string;
        linkedin: string;
        website: string;
    };
    onUpdateContact: (field: string, value: string) => void;
    username: string;
    setUsername: (value: string) => void;

    // Education
    education: any[];
    onAddEducation: () => void;
    onRemoveEducation: (id: number) => void;
    onUpdateEducation: (id: number, field: string, value: string) => void;

    // Experience
    experiences: any[];
    onAddExperience: () => void;
    onRemoveExperience: (id: number) => void;
    onUpdateExperience: (id: number, field: string, value: string) => void;
    onAddExpTech: (id: number, tech: string) => void;
    onRemoveExpTech: (id: number, tech: string) => void;

    // Tech Skills
    techSkills: any[];
    onAddTechSkillGroup: () => void;
    onRemoveTechSkillGroup: (id: number) => void;
    onUpdateTechSkillGroup: (id: number, field: string, value: string) => void;
    onAddSkill: (id: number, skill: string) => void;
    onRemoveSkill: (id: number, skill: string) => void;
}

export default function EditPanel({
    bio,
    setBio,
    onSave,
    status,
    avatar,
    setAvatar,
    name,
    setName,
    template,
    setTemplate,
    projects,
    onAddProject,
    onRemoveProject,
    onUpdateProject,
    onAddTech,
    onRemoveTech,
    contactLinks,
    onUpdateContact,
    username,
    setUsername,
    education,
    onAddEducation,
    onRemoveEducation,
    onUpdateEducation,
    experiences,
    onAddExperience,
    onRemoveExperience,
    onUpdateExperience,
    onAddExpTech,
    onRemoveExpTech,
    techSkills,
    onAddTechSkillGroup,
    onRemoveTechSkillGroup,
    onUpdateTechSkillGroup,
    onAddSkill,
    onRemoveSkill,
}: Props) {

    const [projectId, setProjectId] = useState<number | null>(null);
    const [educationId, setEducationId] = useState<number | null>(null);
    const [experienceId, setExperienceId] = useState<number | null>(null);
    const [techSkillId, setTechSkillId] = useState<number | null>(null);

    const handleAvatarUpload = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "gitportify_unsigned");

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            { method: "POST", body: formData }
        );

        const data = await res.json();
        setAvatar(data.secure_url);
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                pauseOnHover={false}
                draggable
                theme="colored"
            />

            <aside className="w-screen fixed top-0 right-0 h-screen overflow-y-auto lg:w-80 sm:p-6 p-4 border-t lg:border-t-0 space-y-6">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl fira-sans-semibold mb-4">
                    Edit Profile
                </h2>

                {status === "dirty" && (
                    <p className="text-xs text-red-500 fira-sans-light">● Unsaved changes</p>
                )}
                {status === "saved" && (
                    <p className="text-xs text-green-500 fira-sans-light">✓ Saved</p>
                )}

                {/* Template */}
                <div className="space-y-2 gap-1.5">
                    <Label className="fira-sans-medium">Template</Label>
                    <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value as TemplateType)}
                        className="w-full border rounded-md cursor-pointer px-3 py-2 text-sm bg-background fira-sans-regular"
                    >
                        <option value="github-pro">GitHub Pro</option>
                        <option value="product-landing">Product Landing</option>
                        <option value="terminal-dev">Terminal Dev</option>
                        <option value="neo-dev">Neo Dev</option>
                    </select>
                </div>

                {/* Avatar */}
                <div className="space-y-2">
                    <Label className="fira-sans-medium">Profile Image</Label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleAvatarUpload(file);
                        }}
                        className="cursor-pointer text-gray-500 text-sm border p-1.5 rounded-md fira-sans-regular"
                    />
                </div>

                {/* Name */}
                <div className="space-y-2">
                    <Label className="fira-sans-medium">Name</Label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="border rounded-md px-3 py-2 text-sm bg-background fira-sans-regular"
                    />
                </div>

                {/* Username */}
                <div className="space-y-2">
                    <Label className="fira-sans-medium">Username (Portfolio URL)</Label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="your-name"
                        className="border rounded-md px-3 py-2 text-sm bg-background fira-sans-regular"
                    />
                    <p className="text-[10px] text-muted-foreground fira-sans-light">
                        Your portfolio will be available at /portfolio/{username}
                    </p>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                    <Label className="fira-sans-medium">Bio</Label>
                    <Textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Write a bio..."
                        rows={10}
                        className="max-h-25 w-full no-scrollbar fira-sans-regular"
                    />
                </div>

                {/* Projects */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Projects</Label>
                    <Button
                        variant={"outline"}
                        onClick={onAddProject}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        + Add Project
                    </Button>
                    <div className="space-y-2">
                        {projects.map((project) => {
                            const isOpen = projectId === project.id;
                            return (
                                <div key={project.id} className="border rounded-md">
                                    <button
                                        onClick={() => setProjectId(isOpen ? null : project.id)}
                                        className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular"
                                    >
                                        <span>{project.name || "Untitled Project"}</span>
                                        <span>{isOpen ? "▾" : "▸"}</span>
                                    </button>
                                    {isOpen && (
                                        <div className="p-3 space-y-2 border-t">
                                            <input
                                                value={project.name}
                                                onChange={(e) => onUpdateProject(project.id, "name", e.target.value)}
                                                placeholder="Project name"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <input
                                                value={project.description}
                                                onChange={(e) => onUpdateProject(project.id, "description", e.target.value)}
                                                placeholder="Description"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (!file) return;
                                                    const formData = new FormData();
                                                    formData.append("file", file);
                                                    formData.append("upload_preset", "gitportify_unsigned");
                                                    const res = await fetch(
                                                        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                                                        { method: "POST", body: formData }
                                                    );
                                                    const data = await res.json();
                                                    onUpdateProject(project.id, "imageUrl", data.secure_url);
                                                }}
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <input
                                                value={project.liveUrl}
                                                onChange={(e) => onUpdateProject(project.id, "githubUrl", e.target.value)}
                                                placeholder="GitHub URL"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <div className="space-y-2">
                                                <input
                                                    placeholder="Add tech (press Enter)"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            e.preventDefault();
                                                            onAddTech(project.id, e.currentTarget.value);
                                                            e.currentTarget.value = "";
                                                        }
                                                    }}
                                                />
                                                <div className="flex flex-wrap gap-1">
                                                    {project.tech.map((tech: string) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs px-2 py-1 rounded-md bg-muted flex items-center gap-1 fira-sans-light"
                                                        >
                                                            {tech}
                                                            <button
                                                                onClick={() => onRemoveTech(project.id, tech)}
                                                                className="text-red-500 cursor-pointer fira-sans-light"
                                                            >
                                                                ×
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => onRemoveProject(project.id)}
                                                className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Education</Label>
                    <Button
                        variant={"outline"}
                        onClick={onAddEducation}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        + Add Education
                    </Button>
                    <div className="space-y-2">
                        {education.map((edu) => {
                            const isOpen = educationId === edu.id;
                            return (
                                <div key={edu.id} className="border rounded-md">
                                    <button
                                        onClick={() => setEducationId(isOpen ? null : edu.id)}
                                        className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular"
                                    >
                                        <span>{edu.degree || "Untitled Degree"}</span>
                                        <span>{isOpen ? "▾" : "▸"}</span>
                                    </button>
                                    {isOpen && (
                                        <div className="p-3 space-y-2 border-t">
                                            <input
                                                value={edu.degree}
                                                onChange={(e) => onUpdateEducation(edu.id, "degree", e.target.value)}
                                                placeholder="Degree / Certificate"
                                                className="w-full border rounded-md px-2 py-1 text-xsfira-sans-light"
                                            />
                                            <input
                                                value={edu.institution}
                                                onChange={(e) => onUpdateEducation(edu.id, "institution", e.target.value)}
                                                placeholder="Institution"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <input
                                                value={edu.location}
                                                onChange={(e) => onUpdateEducation(edu.id, "location", e.target.value)}
                                                placeholder="Location"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <div className="flex gap-2">
                                                <input
                                                    value={edu.startYear}
                                                    onChange={(e) => onUpdateEducation(edu.id, "startYear", e.target.value)}
                                                    placeholder="Start year"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                />
                                                <input
                                                    value={edu.endYear}
                                                    onChange={(e) => onUpdateEducation(edu.id, "endYear", e.target.value)}
                                                    placeholder="End year"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                />
                                            </div>
                                            <input
                                                value={edu.description}
                                                onChange={(e) => onUpdateEducation(edu.id, "description", e.target.value)}
                                                placeholder="Description (optional)"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <button
                                                onClick={() => onRemoveEducation(edu.id)}
                                                className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Experience</Label>
                    <Button
                        variant={"outline"}
                        onClick={onAddExperience}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        + Add Experience
                    </Button>
                    <div className="space-y-2">
                        {experiences.map((exp) => {
                            const isOpen = experienceId === exp.id;
                            return (
                                <div key={exp.id} className="border rounded-md">
                                    <button
                                        onClick={() => setExperienceId(isOpen ? null : exp.id)}
                                        className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular"
                                    >
                                        <span>{exp.role || "Untitled Role"}</span>
                                        <span>{isOpen ? "▾" : "▸"}</span>
                                    </button>
                                    {isOpen && (
                                        <div className="p-3 space-y-2 border-t">
                                            <input
                                                value={exp.role}
                                                onChange={(e) => onUpdateExperience(exp.id, "role", e.target.value)}
                                                placeholder="Role / Title"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <input
                                                value={exp.company}
                                                onChange={(e) => onUpdateExperience(exp.id, "company", e.target.value)}
                                                placeholder="Company"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <input
                                                value={exp.location}
                                                onChange={(e) => onUpdateExperience(exp.id, "location", e.target.value)}
                                                placeholder="Location"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <div className="flex gap-2">
                                                <input
                                                    value={exp.startDate}
                                                    onChange={(e) => onUpdateExperience(exp.id, "startDate", e.target.value)}
                                                    placeholder="Start date"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                />
                                                <input
                                                    value={exp.endDate}
                                                    onChange={(e) => onUpdateExperience(exp.id, "endDate", e.target.value)}
                                                    placeholder="End date"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    disabled={exp.current}
                                                />
                                            </div>
                                            <label className="flex items-center gap-2 text-xs cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={exp.current}
                                                    onChange={(e) => onUpdateExperience(exp.id, "current", String(e.target.checked))}
                                                    className="cursor-pointer"
                                                />
                                                Currently working here
                                            </label>
                                            <input
                                                value={exp.description}
                                                onChange={(e) => onUpdateExperience(exp.id, "description", e.target.value)}
                                                placeholder="Description (optional)"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <div className="space-y-2">
                                                <input
                                                    placeholder="Add tech (press Enter)"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            e.preventDefault();
                                                            onAddExpTech(exp.id, e.currentTarget.value);
                                                            e.currentTarget.value = "";
                                                        }
                                                    }}
                                                />
                                                <div className="flex flex-wrap gap-1">
                                                    {exp.tech.map((tech: string) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs px-2 py-1 rounded-md bg-muted flex items-center gap-1 fira-sans-light"
                                                        >
                                                            {tech}
                                                            <button
                                                                onClick={() => onRemoveExpTech(exp.id, tech)}
                                                                className="text-red-500 cursor-pointer fira-sans-light"
                                                            >
                                                                ×
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => onRemoveExperience(exp.id)}
                                                className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Skills */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Tech Skills</Label>
                    <Button
                        variant={"outline"}
                        onClick={onAddTechSkillGroup}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        + Add Skill Group
                    </Button>
                    <div className="space-y-2">
                        {techSkills.map((group) => {
                            const isOpen = techSkillId === group.id;
                            return (
                                <div key={group.id} className="border rounded-md">
                                    <button
                                        onClick={() => setTechSkillId(isOpen ? null : group.id)}
                                        className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular"
                                    >
                                        <span>{group.category || "Untitled Category"}</span>
                                        <span>{isOpen ? "▾" : "▸"}</span>
                                    </button>
                                    {isOpen && (
                                        <div className="p-3 space-y-2 border-t">
                                            <input
                                                value={group.category}
                                                onChange={(e) => onUpdateTechSkillGroup(group.id, "category", e.target.value)}
                                                placeholder="Category (e.g. Frontend, Backend)"
                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                            />
                                            <div className="space-y-2">
                                                <input
                                                    placeholder="Add skill (press Enter)"
                                                    className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            e.preventDefault();
                                                            onAddSkill(group.id, e.currentTarget.value);
                                                            e.currentTarget.value = "";
                                                        }
                                                    }}
                                                />
                                                <div className="flex flex-wrap gap-1">
                                                    {group.skills.map((skill: string) => (
                                                        <span
                                                            key={skill}
                                                            className="text-xs px-2 py-1 rounded-md bg-muted flex items-center gap-1 fira-sans-light"
                                                        >
                                                            {skill}
                                                            <button
                                                                onClick={() => onRemoveSkill(group.id, skill)}
                                                                className="text-red-500 cursor-pointer fira-sans-light"
                                                            >
                                                                ×
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => onRemoveTechSkillGroup(group.id)}
                                                className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Links */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Contact Links</Label>
                    <input
                        placeholder="Email"
                        value={contactLinks.email}
                        onChange={(e) => onUpdateContact("email", e.target.value)}
                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                    />
                    <input
                        placeholder="GitHub URL"
                        value={contactLinks.github}
                        onChange={(e) => onUpdateContact("github", e.target.value)}
                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                    />
                    <input
                        placeholder="LinkedIn URL"
                        value={contactLinks.linkedin}
                        onChange={(e) => onUpdateContact("linkedin", e.target.value)}
                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                    />
                    <input
                        placeholder="Website URL"
                        value={contactLinks.website}
                        onChange={(e) => onUpdateContact("website", e.target.value)}
                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                    />
                </div>

                <Button
                    onClick={onSave}
                    className="w-full text-base cursor-pointer fira-sans-regular"
                >
                    Save
                </Button>
            </aside>
        </>
    );
}