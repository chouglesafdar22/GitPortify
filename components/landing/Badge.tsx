import React from 'react';

export default function Badge() {
    return (
        <div className="w-fit flex items-center gap-3 rounded-full border border-white/10 bg-background/70 backdrop-blur-xl px-4 py-2 shadow-[0_0_40px_rgba(109,40,217,0.12)]">

            <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-background bg-[#6D28D9] flex items-center justify-center text-white text-[10px] fira-sans-bold">
                    GP
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-[#1E1B4B] flex items-center justify-center text-white text-[10px] fira-sans-bold">
                    {"</>"}
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-[#312E81] flex items-center justify-center text-white text-[10px] fira-sans-bold">
                    DEV
                </div>
            </div>
            <p className="fira-sans-medium text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                Turn your GitHub profile into a modern portfolio instantly
            </p>
        </div>
    )
};
