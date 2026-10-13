"use client";
import { FaGithub, FaGitlab } from "react-icons/fa";

export default function Badge() {
    return (
        <div className="group flex w-fit items-center gap-3 rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-[0_0_40px_rgba(109,40,217,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(109,40,217,0.18)]">
            <div className="flex items-center -space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-[#6D28D9] text-white md:h-8 md:w-8 fira-sans-medium">
                    <FaGithub className="text-xs md:text-sm" />
                </div>

                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-[#FC6D26] text-white md:h-8 md:w-8 fira-sans-medium">
                    <FaGitlab className="text-xs md:text-sm" />
                </div>
            </div>

            <p className="fira-sans-medium text-xs text-muted-foreground md:text-sm xl:text-base">
                From GitHub or GitLab to your own portfolio
            </p>
        </div>
    );
};
