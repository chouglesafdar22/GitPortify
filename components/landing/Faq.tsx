"use client";
import { useState } from "react";
import FaqCard from "./FaqCard";

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            que: "GitPortify is 100% Free?",
            ans: "Yes, GitPortify is completely free to use. You can build, customize, and publish your portfolio without any cost."
        },
        {
            que: "GitPortify Required Coding?",
            ans: "No, GitPortify requires no coding. You can create and customize your portfolio easily using a simple interface."
        },
        {
            que: "Does GitPortify require hosting?",
            ans: "No, you don’t need to set up hosting. Your portfolio is instantly published with a shareable link."
        },
        {
            que: "Is GitPortify fast and minimal?",
            ans: "Yes, GitPortify is designed to be lightweight, fast-loading, and distraction-free for the best user experience."
        },
        {
            que: "Can I edit my portfolio after publishing?",
            ans: "Yes, you can update your portfolio anytime and changes will reflect instantly."
        },
        {
            que: "Does GitPortify use my GitHub data securely?",
            ans: "Yes, we only access necessary data and never store sensitive information."
        },
        {
            que: "Can I choose different templates?",
            ans: "Yes, you can switch between multiple modern templates anytime."
        },
        {
            que: "Is GitPortify suitable for beginners?",
            ans: "Absolutely, it’s designed for both beginners and experienced developers."
        }
    ];

    return (
        <section id="faq" className="lg:mt-7 md:mt-6 sm:mt-5 mt-4 flex flex-col justify-center items-center md:px-14 px-1 md:py-10 py-5 md:gap-3.5 gap-2">
            <div className="flex flex-col justify-center items-center md:gap-3 gap-1.5">
                <h2 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg text-center fira-sans-semibold">FAQ</h2>
                <h3 className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base text-center fira-sans-medium">Common Questions</h3>
            </div>
            <div className="flex flex-col justify-center items-center md:px-16 px-3 md:py-14 py-5 md:gap-8 gap-3.5">
                {faqs.map((faq, index) => (
                    <FaqCard
                        key={index}
                        que={faq.que}
                        ans={faq.ans}
                        isOpen={activeIndex === index}
                        onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                    />
                ))}
            </div>
        </section>
    )
}