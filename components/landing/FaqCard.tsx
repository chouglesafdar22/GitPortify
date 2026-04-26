"use client";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface FaqProps {
    que: string;
    ans: string;
    isOpen:boolean;
    onClick:()=>void;
}

export default function FaqCard({ que, ans, isOpen, onClick }: FaqProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:w-2xl w-xs rounded-2xl flex flex-col justify-center items-start md:px-7 px-1.5 md:py-5 py-4 gap-2 bg-[#51149C]">
            <div
                className="w-full flex justify-between items-center text-left cursor-pointer"
                onClick={onClick}
                 aria-expanded={isOpen}
            >
                <h4 className="text-white lg:text-xl md:text-lg sm:text-base text-sm">{que}</h4>
                <span
                    className="text-white lg:text-2xl md:text-xl sm:text-lg text-base text-center">
                    {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
                </span>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} flex overflow-hidden transition-all duration-300 justify-start items-start text-left`}>
                <p className="text-gray-400 lg:text-lg md:text-base sm:text-sm text-xs text-left">{ans}</p>
            </div>
        </div>
    )
};
