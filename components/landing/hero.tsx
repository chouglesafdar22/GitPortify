"use client";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Badge from "./Badge";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="lg:mt-32 md:mt-28 sm:mt-18 mt-14 pt-20 pb-30 md:px-13 px-5"
        >
            <div className="mx-auto max-w-7xl">
                {/* Top Content */}
                <div className="flex flex-col items-center text-center gap-5">
                    <Badge />
                    <div className="max-w-4xl flex flex-col gap-3">
                        <h1 className="text-foreground xl:text-5xl md:text-4xl text-3xl fira-sans-bold">
                            Build your developer portfolio in minutes - powered by GitHub
                        </h1>
                        <p className="text-foreground xl:text-xl md:text-lg text-base fira-sans-regular">
                            Import your projects, customize your design, and publish instantly.
                            No setup, no hassle.
                        </p>
                    </div>
                    <Button
                        href="/signup"
                        text="Create Portfolio Free"
                        icon={<FaLongArrowAltRight />}
                        contentClassName="xl:text-xl md:text-lg text-base md:py-4 py-3 md:px-5 px-3.5"
                    />
                </div>

                {/* Dashboard Image */}
                <div className="mt-10 relative -mx-2 sm:mx-0">
                    <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-3xl" />
                    <div className="relative overflow-hidden rounded-xl border border-background/10 shadow-2xl">
                        <Image
                            src="/images/dashboard-preview.png"
                            alt="GitPortify Dashboard"
                            width={1200}
                            height={800}
                            priority
                            className="w-full h-full rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};