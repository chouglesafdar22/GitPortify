"use client";
import FeatureCard from "./FeatureCard";
import { IoLogoGithub } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { FaLink } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

export default function Feature() {
    return (
        <section id="features" className="lg:mt-7 md:mt-6 sm:mt-5 mt-4 flex flex-col justify-center items-center md:px-14 px-5 md:py-10 py-5 md:gap-8 gap-6 md:pb-26 pb-21">
            <h2 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg text-center fira-sans-semibold">Features</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center md:px-3.5 px-2 md:py-11 py-5 md:gap-8 gap-6">
                <FeatureCard
                    icon={<IoLogoGithub />}
                    title={"Auto import from GitHub"}
                    desc={"Import your projects, profile, and data instantly from GitHub. No manual setup - everything is ready in seconds"}
                />
                <FeatureCard
                    icon={<GrTemplate />}
                    title={"Multiple modern templates"}
                    desc={"Choose from beautifully designed templates built for developers. Switch styles anytime to match your personal brand."}
                />
                <FeatureCard
                    icon={<FaLink />}
                    title={"Shareable portfolio link"}
                    desc={"Get a unique public link to showcase your work. Share it anywhere — recruiters, clients, or social platforms."}
                />
                <FeatureCard
                    icon={<FaRegEdit />}
                    title={"Real-time editing"}
                    desc={"Update your portfolio and see changes instantly. No reloads, no delays — just smooth live editing."}
                />
            </div>
        </section>
    )
}