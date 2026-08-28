"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { TemplateType } from "@/types/template";
import ProjectSelectionModal from "./ProjectModal";
import ExperienceSelectionModal from "./ExperienceModal";
import TechSkillsSelectionModal from "./TechSkillsModal";
import EducationSelectionModal from "./EducationModal";
import ContactLinksSelectionModal from "./ContactLinksModal";

interface Props {
    bio: string;
    avatar: string;
    name: string;
    username: string;
    template: TemplateType;
    setTemplate: (value: TemplateType) => void;
    projects: any[];
    selectedProjects: any[];
    setSelectedProjects: React.Dispatch<React.SetStateAction<any[]>>;
    education: any[];
    selectedEdu: any[];
    setSelectedEdu: React.Dispatch<React.SetStateAction<any[]>>;
    experiences: any[];
    selectedExp: any[];
    setSelectedExp: React.Dispatch<React.SetStateAction<any[]>>;
    techSkills: any[];
    selectedTS: any[];
    setSelectedTS: React.Dispatch<React.SetStateAction<any[]>>;
    contactLinks: {
        email: string;
        github: string;
        linkedin: string;
        website: string;
    };
    selectedCl: {
        email: string;
        github: string;
        linkedin: string;
        website: string;
    };
    setSelectedCl: React.Dispatch<
        React.SetStateAction<{
            email: string;
            github: string;
            linkedin: string;
            website: string;
        }>
    >;
}

export default function EditPanel({
    template,
    setTemplate,
    avatar,
    name,
    username,
    bio,
    projects,
    setSelectedProjects,
    selectedProjects,
    experiences,
    setSelectedExp,
    selectedExp,
    education,
    selectedEdu,
    setSelectedEdu,
    techSkills,
    setSelectedTS,
    selectedTS,
    contactLinks,
    setSelectedCl,
    selectedCl
}: Props) {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [isExpModalOpen, setIsExpModalOpen] = useState(false);
    const [isTSModalOpen, setIsTSModalOpen] = useState(false);
    const [isEduModalOpen, setIsEduModalOpen] = useState(false);
    const [isCLModalOpen, setIsCLModalOpen] = useState(false);

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

            <aside className="w-screen lg:sticky lg:h-screen lg:overflow-y-auto lg:w-80 sm:p-6 p-4 border-t lg:border-t-0 space-y-6">
                <h2 className="xl:text-2xl md:text-xl text-lg fira-sans-semibold mb-4">
                    Edit Panel
                </h2>

                {/* <div className="space-y-2 gap-1.5">
                    <Label className="fira-sans-medium">Type</Label>
                    <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value as TemplateType)}
                        className="w-full border rounded-md cursor-pointer px-3 py-2 text-sm bg-background fira-sans-regular"
                    >
                        <option>Website</option>
                        <option>Resume</option>
                        <option>Cover letter</option>
                    </select>
                </div> */}


                {/* Template */}
                <div className="space-y-2 gap-1.5">
                    <Label className="fira-sans-medium">Template</Label>
                    <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value as TemplateType)}
                        className="w-full border rounded-md cursor-pointer px-3 py-2 text-sm bg-background fira-sans-regular"
                    >
                        <option value="minimal-resume">Minimal Resume (New)</option>
                        <option value="glassfolio">Glassfolio (New)</option>
                        <option value="neo-dev">Neo Dev</option>
                        <option value="terminal-dev">Terminal Dev</option>
                        <option value="product-landing">Product Landing</option>
                        <option value="github-pro">GitHub Pro</option>
                    </select>
                </div>

                {/* Avatar */}
                <div className="space-y-2">
                    <p className="fira-sans-medium">
                        Avatar
                    </p>
                    <div className="mt-1 rounded-md no-scrollbar fira-sans-regular border px-3 py-2 text-sm overflow-hidden overflow-x-scroll">
                        {avatar}
                    </div>
                </div>

                {/* Name */}
                <div className="space-y-2">
                    <p className="fira-sans-medium">
                        Name
                    </p>
                    <div className="mt-1 rounded-md fira-sans-regular border px-3 py-2 text-sm">
                        {name}
                    </div>
                </div>

                {/* Username */}
                <div className="space-y-2">
                    <div>
                        <p className="fira-sans-medium">
                            Username
                        </p>
                        <div className="mt-1 rounded-md fira-sans-regular border px-3 py-2 text-sm">
                            {username || "Add username from Dashboard"}
                        </div>
                    </div>
                    <p className="text-[10px] text-muted-foreground fira-sans-light">
                        Your portfolio will be available at /portfolio/{username}
                    </p>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                    <div>
                        <p className="fira-sans-medium">
                            Bio
                        </p>
                        <div className="mt-1 rounded-md fira-sans-regular border px-3 py-2 text-sm">
                            {bio}
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Projects</Label>
                    <Button
                        variant={"outline"}
                        onClick={() => setIsProjectModalOpen(true)}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        <span>Select GitHub Projects</span>
                        <span className="rounded-md bg-muted flex justify-center items-center px-1.5 py-1 text-xs">
                            {selectedProjects.length}/{projects.length}
                        </span>
                    </Button>
                </div>

                {/* Experiences */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Experiences</Label>
                    <Button
                        variant={"outline"}
                        onClick={() => setIsExpModalOpen(true)}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        <span>Select Experiences</span>
                        <span className="rounded-md bg-muted flex justify-center items-center px-1.5 py-1 text-xs">
                            {selectedExp.length}/{experiences.length}
                        </span>
                    </Button>
                </div>

                {/* Tech Skills */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Tech Skills</Label>
                    <Button
                        variant={"outline"}
                        onClick={() => setIsTSModalOpen(true)}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        <span>Select Tech Skills</span>
                        <span className="rounded-md bg-muted flex justify-center items-center px-1.5 py-1 text-xs">
                            {selectedTS.length}/{techSkills.length}
                        </span>
                    </Button>
                </div>

                {/* Educations */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Educations</Label>
                    <Button
                        variant={"outline"}
                        onClick={() => setIsEduModalOpen(true)}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        <span>Select Educations</span>
                        <span className="rounded-md bg-muted flex justify-center items-center px-1.5 py-1 text-xs">
                            {selectedEdu.length}/{education.length}
                        </span>
                    </Button>
                </div>

                {/* ContactLinks */}
                <div className="space-y-3 pt-6 border-t">
                    <Label className="fira-sans-medium">Contacts</Label>
                    <Button
                        variant={"outline"}
                        onClick={() => setIsCLModalOpen(true)}
                        className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                    >
                        <span>Select Contact Links</span>
                        <span className="rounded-md bg-muted flex justify-center items-center px-1.5 py-1 text-xs">
                            {Object.values(selectedCl).filter(Boolean).length}/{Object.values(contactLinks).filter(Boolean).length}
                        </span>
                    </Button>
                </div>
            </aside>

            <ProjectSelectionModal
                isOpen={isProjectModalOpen}
                onClose={() => setIsProjectModalOpen(false)}
                githubProjects={projects}
                projects={selectedProjects}
                setProjects={setSelectedProjects}
            />

            <ExperienceSelectionModal
                isOpen={isExpModalOpen}
                onClose={() => setIsExpModalOpen(false)}
                experiences={experiences}
                selectedExperiences={selectedExp}
                setSelectedExperiences={setSelectedExp}
            />

            <TechSkillsSelectionModal
                isOpen={isTSModalOpen}
                onClose={() => setIsTSModalOpen(false)}
                techSkills={techSkills}
                selectedTechSkills={selectedTS}
                setSelectedTechSkills={setSelectedTS}
            />

            <EducationSelectionModal
                isOpen={isEduModalOpen}
                onClose={() => setIsEduModalOpen(false)}
                education={education}
                selectedEducation={selectedEdu}
                setSelectedEducation={setSelectedEdu}
            />

            <ContactLinksSelectionModal
                isOpen={isCLModalOpen}
                onClose={() => setIsCLModalOpen(false)}
                contactLinks={contactLinks}
                selectedContactLinks={selectedCl}
                setSelectedContactLinks={setSelectedCl}
            />
        </>
    );
};