"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TechSkill {
    category: string;
    skills: string[];
}

interface TechSkillsSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    techSkills: TechSkill[];
    selectedTechSkills: TechSkill[];
    setSelectedTechSkills: React.Dispatch<React.SetStateAction<TechSkill[]>>;
}

export default function TechSkillsSelectionModal({
    isOpen,
    onClose,
    techSkills,
    selectedTechSkills,
    setSelectedTechSkills,
}: TechSkillsSelectionModalProps) {
    const [tempTechSkills, setTempTechSkills] = useState<TechSkill[]>([]);

    useEffect(() => {
        if (isOpen) {
            setTempTechSkills(selectedTechSkills);
        }
    }, [isOpen, selectedTechSkills]);

    const handleToggleTechSkill = (techSkill: TechSkill) => {
        const exists = tempTechSkills.some(
            (item) => item.category === techSkill.category
        );

        if (exists) {
            setTempTechSkills((prev) =>
                prev.filter((item) => item.category !== techSkill.category)
            );
        } else {
            setTempTechSkills((prev) => [...prev, techSkill]);
        }
    };

    const handleSaveSelection = () => {
        setSelectedTechSkills(tempTechSkills);
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
                                Select Tech Skills
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground fira-sans-regular">
                                Choose the skill categories you want to display on your portfolio.
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
                        {techSkills.length === 0 ? (
                            <div className="flex h-72 flex-col items-center justify-center text-center">
                                <h3 className="text-xl fira-sans-medium">
                                    No Tech Skills
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Add tech skill categories first before selecting them.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {techSkills.map((techSkill, index) => {
                                    const selected = tempTechSkills.some(
                                        (item) =>
                                            item.category === techSkill.category
                                    );

                                    return (
                                        <button
                                            key={`${techSkill.category}-${index}`}
                                            type="button"
                                            onClick={() =>
                                                handleToggleTechSkill(techSkill)
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

                                            {/* Category */}
                                            <h3 className="pr-8 text-lg fira-sans-medium">
                                                {techSkill.category}
                                            </h3>

                                            {/* Skills */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {techSkill.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={`${skill}-${skillIndex}`}
                                                        className="rounded-md bg-muted px-2 py-1 text-xs"
                                                    >
                                                        {skill}
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
                            Selected Categories{" "}
                            <span className="font-medium text-foreground">
                                {tempTechSkills.length}
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