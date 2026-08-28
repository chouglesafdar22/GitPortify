"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Experience {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    tech: string[];
}

interface ExperienceSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    experiences: Experience[];
    selectedExperiences: Experience[];
    setSelectedExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
}

export default function ExperienceSelectionModal({
    isOpen,
    onClose,
    experiences,
    selectedExperiences,
    setSelectedExperiences,
}: ExperienceSelectionModalProps) {
    const [tempExperiences, setTempExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        if (isOpen) {
            setTempExperiences(selectedExperiences);
        }
    }, [isOpen, selectedExperiences]);

    const handleToggleExperience = (experience: Experience) => {
        const exists = tempExperiences.some(
            (item) =>
                item.company === experience.company &&
                item.role === experience.role
        );

        if (exists) {
            setTempExperiences((prev) =>
                prev.filter(
                    (item) =>
                        !(
                            item.company === experience.company &&
                            item.role === experience.role
                        )
                )
            );
        } else {
            setTempExperiences((prev) => [...prev, experience]);
        }
    };

    const handleSaveSelection = () => {
        localStorage.setItem(
            "gitportify-experiences",
            JSON.stringify(tempExperiences)
        );

        setSelectedExperiences(tempExperiences);
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
                                Select Experience
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground fira-sans-regular">
                                Choose the experience entries you want to display on your portfolio.
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
                        {experiences.length === 0 ? (
                            <div className="flex h-72 flex-col items-center justify-center text-center">
                                <h3 className="text-xl fira-sans-medium">
                                    No Experience Added
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Add experience entries first before selecting them.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {experiences.map((experience, index) => {
                                    const selected = tempExperiences.some(
                                        (item) =>
                                            item.company === experience.company &&
                                            item.role === experience.role
                                    );

                                    return (
                                        <button
                                            key={`${experience.company}-${experience.role}-${index}`}
                                            type="button"
                                            onClick={() =>
                                                handleToggleExperience(experience)
                                            }
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

                                            {/* Role */}
                                            <h3 className="pr-8 text-lg fira-sans-medium">
                                                {experience.role}
                                            </h3>

                                            {/* Company */}
                                            <p className="mt-1 text-sm text-foreground">
                                                {experience.company}
                                            </p>

                                            {/* Duration */}
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {experience.startDate} - {experience.current ? "Present" : experience.endDate}
                                            </p>

                                            {/* Description */}
                                            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                                                {experience.description ||
                                                    "No description available."}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {experience.tech.map((tech, techIndex) => (
                                                    <span
                                                        key={`${tech}-${techIndex}`}
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
                            Selected Experience{" "}
                            <span className="font-medium text-foreground">
                                {tempExperiences.length}
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