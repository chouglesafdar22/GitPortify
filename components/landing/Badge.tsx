import React from 'react';

export default function Badge() {
    return (
        <div className="w-fit flex items-center gap-3 rounded-full border border-white/10 bg-background/70 backdrop-blur-xl px-4 py-2 shadow-[0_0_40px_rgba(109,40,217,0.12)] hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(109,40,217,0.18)] transition-all duration-300">
            <div className="flex -space-x-2">
                <div className="md:w-8 w-6 md:h-8 h-6 rounded-full border-2 border-background bg-[#6D28D9] flex items-center justify-center text-white xl:text-sm md:text-xs text-[10px] fira-sans-medium">
                    GP
                </div>
                <div className="md:w-8 w-6 md:h-8 h-6 rounded-full border-2 border-background bg-[#1E1B4B] flex items-center justify-center text-white xl:text-sm md:text-xs text-[10px] fira-sans-medium">
                    {"</>"}
                </div>
                <div className="md:w-8 w-6 md:h-8 h-6 rounded-full border-2 border-background bg-[#312E81] flex items-center justify-center text-white xl:text-sm md:text-xs text-[10px] fira-sans-medium">
                    DEV
                </div>
            </div>
            <p className="fira-sans-medium xl:text-base md:text-sm text-xs text-muted-foreground">
                Turn your GitHub profile into a modern portfolio instantly
            </p>
        </div>
    )
};
