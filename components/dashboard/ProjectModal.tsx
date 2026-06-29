"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    tech: string[];
    liveUrl?: string;
}

interface ProjectSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    githubProjects: Project[];
    projects: Project[];
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

export default function ProjectSelectionModal({
    isOpen,
    onClose,
    githubProjects,
    projects,
    setProjects
}: ProjectSelectionModalProps) {

    const [tempProjects, setTempProjects] = useState<Project[]>([]);

    useEffect(() => {
        if (isOpen) {
            setTempProjects(projects);
        }
    }, [isOpen, projects]);

    const handleToggleProject = (project: Project) => {

        const exists = tempProjects.some(
            (item) => item.id === project.id
        );

        if (exists) {
            setTempProjects((prev) =>
                prev.filter((item) => item.id !== project.id)
            );
        } else {
            setTempProjects((prev) => [...prev, project]);
        }
    };

    const handleSaveSelection = () => {

        localStorage.setItem(
            "gitportify-projects",
            JSON.stringify(tempProjects)
        );

        setProjects(tempProjects);

        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            >

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-6xl rounded-2xl border bg-background shadow-2xl"
                >

                    {/* Header */}

                    <div className="flex items-center justify-between border-b p-6">

                        <div>

                            <h2 className="text-2xl fira-sans-semibold">
                                Import GitHub Projects
                            </h2>

                            <p className="mt-1 text-sm text-muted-foreground fira-sans-regular">
                                Choose the repositories you want to display on your portfolio.
                            </p>

                        </div>

                        <Button
                            variant="outline"
                            onClick={onClose}
                            className="cursor-pointer"
                        >
                            ✕
                        </Button>

                    </div>

                    {/* Body */}

                    <div className="max-h-125 overflow-y-auto p-6">

                        {githubProjects.length === 0 ? (

                            <div className="flex h-72 flex-col items-center justify-center text-center">

                                <h3 className="text-xl fira-sans-medium">
                                    No GitHub Projects
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    We couldn't find any repositories in your GitHub account.
                                </p>

                            </div>

                        ) : (

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {githubProjects.map((project) => {

                                    const selected = tempProjects.some(
                                        (item) => item.id === project.id
                                    );

                                    return (
                                        <button
                                            key={project.id}
                                            type="button"
                                            onClick={() => handleToggleProject(project)}
                                            className={`relative rounded-xl border p-4 text-left transition-all cursor-pointer
                                                ${selected
                                                    ? "border-purple-500 bg-purple-500/10"
                                                    : "border-border hover:border-purple-400"
                                                }
                                            `}
                                        >

                                            {/* Checkbox */}

                                            <div className="absolute top-4 right-4">

                                                <div
                                                    className={`flex h-5 w-5 items-center justify-center rounded border text-xs
                                                        ${selected
                                                            ? "border-purple-500 bg-purple-500 text-white"
                                                            : "border-muted-foreground"
                                                        }
                                                    `}
                                                >
                                                    {selected ? "✓" : ""}
                                                </div>

                                            </div>

                                            {/* Project Name */}

                                            <h3 className="pr-8 text-lg fira-sans-medium">
                                                {project.name}
                                            </h3>

                                            {/* Description */}

                                            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                                                {project.description || "No description available."}
                                            </p>

                                            {/* Tech Stack */}

                                            <div className="mt-4 flex flex-wrap gap-2">

                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-md bg-muted px-2 py-1 text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}

                                            </div>

                                        </button>
                                    );
                                })}

                            </div>

                        )}

                    </div>

                    {/* Footer */}

                    <div className="flex flex-col gap-4 border-t p-6 md:flex-row md:items-center md:justify-between">

                        <p className="text-sm text-muted-foreground">
                            Selected Projects{" "}
                            <span className="font-medium text-foreground">
                                {tempProjects.length}
                            </span>
                        </p>

                        <div className="flex gap-3">

                            <Button
                                variant="outline"
                                onClick={onClose}
                                className="cursor-pointer"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={handleSaveSelection}
                                className="cursor-pointer"
                            >
                                Save Selection
                            </Button>

                        </div>

                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>
    );
}
