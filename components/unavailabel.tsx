"use client";
import Button from "./landing/Button";

export default function Unavailabel() {
    return (
        <div className="relative min-h-dvh flex items-center justify-center px-5">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-4xl"></div>
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg w-full border rounded-2xl flex flex-col justify-center items-center text-center px-10 md:px-20 py-10 md:py-20 shadow-md">
                <div className="flex flex-col justify-center items-center text-center gap-2.5 px-1">
                    <h2 className="fira-sans-medium text-foreground xl:text-3xl md:text-2xl text-xl">
                        Signup Temporarily Unavailable
                    </h2>
                    <h5 className="fira-sans-regular text-left wrap-break-word text-muted-foreground xl:text-2xl md:text-xl text-lg">
                        We're currently improving GitPortify and have temporarily paused new registrations.
                    </h5>
                    <h5 className="fira-sans-regular text-left wrap-break-word text-muted-foreground xl:text-2xl md:text-xl text-lg">
                        Please check back soon. Thank you for your patience and support.
                    </h5>
                    <Button
                        text="Go Home"
                        href="/"
                        className="w-full"
                        contentClassName="w-full xl:text-lg md:text-base text-sm"
                    />
                </div>
            </div>
        </div>
    )
};