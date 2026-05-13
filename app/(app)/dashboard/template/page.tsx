"use client";
import { useEffect, useState } from "react";
import { templates, TemplateType } from "@/app/data/templates";
import Footer from "@/components/dashboard/Footer";

export default function TemplatesPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("gitportify-template") as TemplateType | null;
        if (saved) setSelectedTemplate(saved);
    }, []);

    const handleSelect = (id: TemplateType) => {
        localStorage.setItem("gitportify-template", id);
        setSelectedTemplate(id);
    };

    return (
        <>
            <div className="p-7 space-y-10 min-h-screen animate-in fade-in duration-500">
                <h1 className="text-lg sm:text-xl lg:text-2xl px-16 font-semibold">
                    Templates
                </h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {templates.map((template) => {
                        const isSelceted = selectedTemplate === template.id;
                        return (
                            <div
                                key={template.id}
                                className={`rounded-xl border overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 p-2.5 ${isSelceted ? "border-violet-500 scale-[1.02]" : "border-border"
                                    }`}
                            >
                                <div className="h-40 bg-muted flex items-center justify-center">
                                    {template.preview ? (
                                        <img
                                            src={template.preview}
                                            alt={template.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-muted-foreground text-xs">
                                            No Preview
                                        </span>
                                    )}
                                </div>
                                <div className="p-4 space-y-2">
                                    <h2 className="font-medium text-foreground">
                                        {template.name}
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        {template.description}
                                    </p>
                                </div>
                                <div className="p-2.5">
                                <button
                                    onClick={() => handleSelect(template.id)}
                                    className={`w-full mt-2 text-sm px-3 py-2 rounded-md border transition-all duration-200 active:scale-95 cursor-pointer ${isSelceted
                                        ? "bg-violet-600 text-white border-violet-600"
                                        : "hover:bg-muted hover:scale-[1.02]"
                                        }`}
                                >
                                    {isSelceted ? "Selected" : "Use Template"}
                                </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
};