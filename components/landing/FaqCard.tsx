"use client";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface FaqProps {
    que: string;
    ans: string;
    isOpen: boolean;
    onClick: () => void;
}

export default function FaqCard({ que, ans, isOpen, onClick }: FaqProps) {
    return (
        <div className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-violet-500/30 sm:px-6 sm:py-5 cursor-pointer">
            <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="fira-sans-medium text-base text-foreground md:text-lg xl:text-xl">
                    {que}
                </h3>

                <span className="shrink-0 text-2xl fira-sans-regular text-foreground">
                    {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
                </span>
            </button>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                    ? "mt-3 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="fira-sans-regular text-sm leading-7 text-muted-foreground md:text-base xl:text-lg">
                        {ans}
                    </p>
                </div>
            </div>
        </div>
    );
}
