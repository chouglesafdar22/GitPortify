"use client";
import StepCard from "./StepCard";

export default function Step() {
    return (
        <section id="steps" className="lg:mt-7 md:mt-6 sm:mt-5 mt-4 flex flex-col justify-center items-center md:py-9 py-5 md:px-16 px-0 md:gap-15 gap-7">
            <h2 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg text-center font-semibold">How it's work</h2>
            <div className="flex flex-col justify-center items-center md:py-5 py-2.5 md:px-20 px-0 md:gap-7 gap-6">
                <StepCard
                    video="/videos/gitportify_v1.mp4"
                    title="Connect GitHub:"
                    desc="Securely Sign in with your GitHub account and instantly import your profile and projects."
                />
                <StepCard
                    video="/videos/gitportify_v2.mp4"
                    title="Edit & Customize:"
                    desc="Personalize your portfolio with your bio, projects, and choose a template that fits your style."
                    reverse
                />
                <StepCard
                    video="/videos/gitportify_v3.mp4"
                    title="Publish Instantly:"
                    desc="Launch your portfolio in one click and get a shareable public link to showcase your work."
                />
            </div>
        </section>
    )
};