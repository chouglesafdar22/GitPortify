"use client";
import Button from "@/components/landing/Button";
import { useSession } from "next-auth/react";

export default function Not_Found() {
    const { data: session } = useSession();

    const homeHref = session ? "/dashboard" : "/"

    return (
        <section className="flex flex-col justify-center h-screen w-screen items-center text-center px-10 md:px-20 py-10 md:py-20">
            <div className="flex flex-col justify-center items-center text-center gap-2.5 px-1">
                <h2 className="fira-sans-medium text-foreground xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base">404 - Not Found</h2>
                <h5 className="fira-sans-regular text-center wrap-break-word text-muted-foreground xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm">Sorry, the page you’re looking for doesn’t exist or has been moved.</h5>
                <Button text="Go Home" href={homeHref}/>
            </div>
        </section>
    );
};