"use client";
import { useState } from "react";
import Button from "@/components/landing/Button";
import { IoLogoGithub } from "react-icons/io";
import { signIn } from "next-auth/react";
import Footer from "@/components/dashboard/Footer";
import Link from "next/link";

export default function SignupPage() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className="relative min-h-dvh flex items-center justify-center px-5">
                <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-4xl"></div>
                <div className="relative max-w-sm sm:max-w-md lg:max-w-lg w-full border rounded-2xl p-6 space-y-4 shadow-md">
                    <div className="text-center space-y-1">
                        <h1 className="text-xl font-semibold">
                            Welcome to Gitportify
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Build your developer portfolio instantly
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <Button
                            icon={!loading && <IoLogoGithub />}
                            text={loading ? "Continuing with GitHub..." : "Continue with GitHub"}
                            onClick={() => {
                                setLoading(true);
                                signIn("github", { callbackUrl: "/dashboard" });
                            }}
                            reverse
                            className="min-w-full lg:text-lg md:text-base sm:text-sm text-xs md:py-4 py-3 md:px-5 px-3.5"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <div className="flex-1 h-px bg-border" />
                        <span>GitHub Required</span>
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                        By continuing, you agree to our <Link href={"/terms-and-conditions"} className="hover:text-foreground transition">Terms&Conditions</Link> & <Link href={"/privacy-policy"} className="hover:text-foreground transition">Privacy Policy</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
};