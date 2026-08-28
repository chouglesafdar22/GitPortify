"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ContactLinks {
    email: string;
    github: string;
    linkedin: string;
    website: string;
}

type ContactType = "email" | "github" | "linkedin" | "website";

interface ContactCard {
    type: ContactType;
    value: string;
}

interface ContactLinksSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    contactLinks: ContactLinks;
    selectedContactLinks: ContactLinks;
    setSelectedContactLinks: React.Dispatch<React.SetStateAction<ContactLinks>>;
}

export default function ContactLinksSelectionModal({
    isOpen,
    onClose,
    contactLinks,
    selectedContactLinks,
    setSelectedContactLinks,
}: ContactLinksSelectionModalProps) {
    const availableLinks = useMemo<ContactCard[]>(
        () =>
            (Object.entries(contactLinks) as [ContactType, string][])
                .filter(([, value]) => value && value.trim() !== "")
                .map(([type, value]) => ({ type, value })),
        [contactLinks]
    );

    const [tempSelected, setTempSelected] = useState<ContactType[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        const selected: ContactType[] = (Object.entries(selectedContactLinks) as [
            ContactType,
            string
        ][])
            .filter(([, value]) => value && value.trim() !== "")
            .map(([type]) => type);

        setTempSelected(selected);
    }, [isOpen, selectedContactLinks]);

    const handleToggleContactLink = (type: ContactType) => {
        setTempSelected((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handleSaveSelection = () => {
        const updated: ContactLinks = {
            email: "",
            github: "",
            linkedin: "",
            website: "",
        };

        for (const type of tempSelected) {
            updated[type] = contactLinks[type];
        }

        setSelectedContactLinks(updated);
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
                                Select Contact Links
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground fira-sans-regular">
                                Choose which contact links you want to display on your portfolio.
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
                        {availableLinks.length === 0 ? (
                            <div className="flex h-72 flex-col items-center justify-center text-center">
                                <h3 className="text-xl fira-sans-medium">
                                    No Contact Links
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Add contact links first before selecting them.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {availableLinks.map((link) => {
                                    const selected = tempSelected.includes(link.type);

                                    return (
                                        <button
                                            key={link.type}
                                            type="button"
                                            onClick={() => handleToggleContactLink(link.type)}
                                            className={`relative rounded-xl border p-4 text-left transition-all cursor-pointer ${selected
                                                    ? "border-purple-500 bg-purple-500/10"
                                                    : "border-border hover:border-purple-400"
                                                }`}
                                        >
                                            {/* Checkbox */}
                                            <div className="absolute top-4 right-4">
                                                <div
                                                    className={`flex h-5 w-5 items-center justify-center rounded border text-xs ${selected
                                                            ? "border-purple-500 bg-purple-500 text-white"
                                                            : "border-muted-foreground"
                                                        }`}
                                                >
                                                    {selected ? "✓" : ""}
                                                </div>
                                            </div>

                                            {/* Type */}
                                            <h3 className="pr-8 text-lg capitalize fira-sans-medium">
                                                {link.type}
                                            </h3>

                                            {/* Value */}
                                            <p className="mt-2 break-all text-sm text-muted-foreground">
                                                {link.value}
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
                            Selected Contact Links{" "}
                            <span className="font-medium text-foreground">
                                {tempSelected.length}
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