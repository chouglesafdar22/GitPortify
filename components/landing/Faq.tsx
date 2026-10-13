"use client";
import { useState } from "react";
import FaqCard from "./FaqCard";

const faqs = [
    {
        que: "Is GitPortify free to use?",
        ans: "GitPortify is currently free to use. You can create and customize your developer portfolio without a subscription."
    },
    {
        que: "Does GitPortify support GitHub and GitLab?",
        ans: "Yes. GitPortify supports both GitHub and GitLab, allowing you to build a portfolio using your developer profile and projects."
    },
    {
        que: "Do I need coding skills to create a portfolio?",
        ans: "No coding is required for the portfolio creation workflow. You can customize your portfolio using GitPortify's available tools and templates."
    },
    {
        que: "Do I need to arrange my own hosting?",
        ans: "No separate hosting setup is required. You can publish your portfolio through GitPortify and share its public link."
    },
    {
        que: "Can I edit my portfolio after publishing?",
        ans: "Yes. You can update your portfolio after publishing. The changes become visible according to the publishing workflow."
    },
    {
        que: "Can I choose and change portfolio templates?",
        ans: "You can choose from the available portfolio templates. Template-switching behavior depends on the options currently supported by GitPortify."
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <section
            id="faq"
            className="flex flex-col items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
            <div className="flex flex-col items-center gap-3">
                <p className="fira-sans-medium text-sm uppercase tracking-[0.2em] text-violet-500 md:text-base xl:text-lg">
                    FAQ
                </p>

                <h2 className="fira-sans-semibold text-center text-2xl text-foreground md:text-3xl xl:text-4xl">
                    Everything you need to know.
                </h2>

                <p className="fira-sans-regular max-w-xl text-center text-sm leading-7 text-muted-foreground md:text-base xl:text-xl">
                    Quick answers to help you get started with GitPortify.
                </p>
            </div>

            <div className="flex w-full max-w-3xl flex-col gap-5">
                {faqs.map((faq, index) => (
                    <FaqCard
                        key={faq.que}
                        que={faq.que}
                        ans={faq.ans}
                        isOpen={activeIndex === index}
                        onClick={() =>
                            setActiveIndex(activeIndex === index ? -1 : index)
                        }
                    />
                ))}
            </div>
        </section>
    );
}