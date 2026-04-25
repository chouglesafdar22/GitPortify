"use client";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="lg:mt-29 md:mt-24 sm:mt-14 mt-10 grid md:grid-cols-2 grid-cols-1 justify-center md:pt-16 pt-10 md:pb-24 pb-18 md:px-13 px-5 md:gap-4 gap-6">
            <div className="flex flex-col justify-start md:gap-5 gap-3">
                <div className="flex flex-col justify-start items-start gap-2.5">
                    <h1 className="text-foreground lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">Build your developer portfolio in minutes - powered by GitHub</h1>
                    <p className="text-foreground lg:text-2xl md:text-xl sm:text-lg text-base font-normal">Import yours projects, customize your design, and publish instantly. No setup, no hassle.</p>
                </div>
                <div className="flex justify-start items-start">
                    <Button
                        href="/signup"
                        text="Start with Free"
                        icon={<FaLongArrowAltRight />}
                        className="lg:text-lg md:text-base sm:text-sm text-xs"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-none">
                    <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-2xl"></div>
                    <div className="relative cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-black shadow-xl">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <video
                            src="https://res.cloudinary.com/dsioiddoz/video/upload/v1777121512/gitportify_ymxvyt.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-55 sm:h-70 md:h-87.5 lg:h-100 object-contain bg-black"
                        />

                    </div>
                </div>
            </div>
        </section>
    )
};