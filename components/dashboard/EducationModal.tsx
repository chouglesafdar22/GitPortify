"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Education {
    degree: string;
    institution: string;
    location: string;
    startYear: string;
    endYear: string;
    description: string;
}

interface EducationSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    education: Education[];
    selectedEducation: Education[];
    setSelectedEducation: React.Dispatch<React.SetStateAction<Education[]>>;
}

export default function EducationSelectionModal({
    isOpen,
    onClose,
    education,
    selectedEducation,
    setSelectedEducation,
}: EducationSelectionModalProps) {
    const [tempEducation, setTempEducation] = useState<Education[]>([]);

    useEffect(() => {
        if (isOpen) {
            setTempEducation(selectedEducation);
        }
    }, [isOpen, selectedEducation]);

    const handleToggleEducation = (item: Education) => {
        const exists = tempEducation.some(
            (edu) =>
                edu.institution === item.institution &&
                edu.degree === item.degree
        );

        if (exists) {
            setTempEducation((prev) =>
                prev.filter(
                    (edu) =>
                        !(
                            edu.institution === item.institution &&
                            edu.degree === item.degree
                        )
                )
            );
        } else {
            setTempEducation((prev) => [...prev, item]);
        }
    };

    const handleSaveSelection = () => {
        setSelectedEducation(tempEducation);
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
                                Select Education
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground fira-sans-regular">
                                Choose the education entries you want to display on your portfolio.
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
                        {education.length === 0 ? (
                            <div className="flex h-72 flex-col items-center justify-center text-center">
                                <h3 className="text-xl fira-sans-medium">
                                    No Education Added
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Add education entries first before selecting them.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {education.map((item, index) => {
                                    const selected = tempEducation.some(
                                        (edu) =>
                                            edu.institution === item.institution &&
                                            edu.degree === item.degree
                                    );

                                    return (
                                        <button
                                            key={`${item.institution}-${item.degree}-${index}`}
                                            type="button"
                                            onClick={() => handleToggleEducation(item)}
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

                                            {/* Degree */}
                                            <h3 className="pr-8 text-lg fira-sans-medium">
                                                {item.degree}
                                            </h3>

                                            {/* Institution */}
                                            <p className="mt-1 text-sm text-foreground">
                                                {item.institution}
                                            </p>

                                            {/* Duration */}
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {item.startYear} - {item.endYear}
                                            </p>

                                            {/* Description */}
                                            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                                                {item.description || "No description available."}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-4 border-t p-6 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Selected Education{" "}
                            <span className="font-medium text-foreground">
                                {tempEducation.length}
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