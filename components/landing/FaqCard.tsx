"use client";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface FaqProps {
    que: string;
    ans: string;
    isOpen: boolean;
    onClick: () => void;
}

export default function FaqCard({ que, ans, isOpen, onClick }: FaqProps) {
    return (
        <div className="md:w-2xl w-xs rounded-2xl flex flex-col justify-center items-start md:px-6 px-3 md:py-5 py-4 gap-2 bg-foreground/5 border border-foreground/10 backdrop-blur-xl">
            <div
                className="w-full flex justify-between items-center text-left cursor-pointer"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h4 className="text-foreground lg:text-xl md:text-lg sm:text-base text-sm fira-sans-medium">{que}</h4>
                <span
                    className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base text-center fira-sans-medium">
                    {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
                </span>
            </div>
            <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden 
                    ${isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-2"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-muted-foreground lg:text-lg md:text-base sm:text-sm text-xs text-left fira-sans-regular">{ans}</p>
                </div>
            </div>
        </div>
    )
};
