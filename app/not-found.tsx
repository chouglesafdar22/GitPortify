"use client";
import Button from "@/components/landing/Button";
import { useUser } from "@clerk/nextjs";

export default function Not_Found() {
    const { isLoaded, isSignedIn } = useUser();

    const homeHref = isSignedIn ? "/dashboard" : "/";

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="relative min-h-dvh flex items-center justify-center px-5">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-4xl"></div>

            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg w-full border rounded-2xl flex flex-col justify-center items-center text-center px-5 md:px-10 py-5 md:py-10 shadow-md">
                <div className="flex flex-col justify-center items-center text-center gap-3.5 px-1">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/20">
                        <span className="xl:text-3xl md:text-2xl text-xl fira-sans-bold text-purple-400">
                            404
                        </span>
                    </div>

                    <h2 className="fira-sans-medium text-foreground xl:text-3xl md:text-2xl text-xl">
                        Page Not Found
                    </h2>

                    <h5 className="fira-sans-regular text-center wrap-break-word text-muted-foreground xl:text-2xl md:text-xl text-lg">
                        Sorry, the page you’re looking for doesn’t exist or has been moved.
                    </h5>

                    <Button
                        text="Go Home"
                        href={homeHref}
                        className="w-full mt-3"
                        contentClassName="w-full xl:text-lg md:text-base text-sm"
                    />
                </div>
            </div>
        </div>
    );
}