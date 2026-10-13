"use client";
import { SignUp, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    // const { isLoaded, isSignedIn } = useUser();
    // const router = useRouter();

    // useEffect(() => {
    //     if (!isLoaded) return;

    //     if (isSignedIn) {
    //         router.replace("/dashboard");
    //     }
    // }, [isLoaded, isSignedIn, router]);

    return (
        <div className="relative flex min-h-screen items-center justify-center px-5 py-10">
            {/* Background */}
            <div className="absolute inset-0 rounded-4xl bg-purple-600/10 blur-3xl" />

            {/* Signup Card */}
            <div
                className="
                    relative
                    w-full flex flex-col justify-center items-center max-w-sm rounded-2xl border border-foreground/10 bg-background/80 p-6 shadow-md backdrop-blur-xl sm:max-w-md
                "
            >
                {/* Header */}
                <div className="mb-2 space-y-1 text-center">
                    <h2 className="text-xl fira-sans-semibold md:text-2xl xl:text-3xl">
                        Welcome to GitPortify
                    </h2>

                    {/* <p className="text-base text-muted-foreground fira-sans-medium md:text-lg xl:text-xl">
                        Build your developer portfolio instantly
                    </p> */}
                </div>

                {/* Clerk Signup */}
                <SignUp
                    routing="path"
                    path="/signup"
                    signInUrl="/signin"
                    forceRedirectUrl="/dashboard"
                    appearance={{
                        variables: {
                            colorPrimary: "#7c3aed",
                            colorBackground: "transparent",
                            colorForeground: "var(--foreground)",
                            colorMutedForeground: "var(--muted-foreground)",
                            colorInput: "transparent",
                            colorInputForeground: "var(--foreground)",
                            colorBorder: "var(--border)",
                            borderRadius: "0.75rem",
                        },

                        elements: {
                            card: `
                                 w-full
                                 bg-transparent
                                 border-0
                                 shadow-none
                                 p-0
                            `,

                            header: `
                                 md:px-4
                                 px-1
                                 pt-1.5
                                 pb-1
                            `,

                            logoBox: `
                                mb-1.5
                                flex
                                justify-center
                            `,

                            logoImage: `
                                h-18
                                w-18
                                rounded-xl
                            `,

                            headerTitle: `
                                text-lg
                                font-semibold
                                text-foreground
                                md:text-xl
                                xl:text-2xl
                                fira-sans-semibold
                            `,

                            headerSubtitle: `
                                mt-1
                                text-sm
                                text-muted-foreground
                                md:text-base
                                xl:text-lg
                                fira-sans-regular
                            `,

                            socialButtons: `
                                w-full
                                gap-4
                                px-6
                            `,

                            socialButtonsBlockButton: `
                                h-11
                                rounded-xl
                                border
                                border-foreground/10
                                bg-transparent
                                text-foreground
                                transition-all
                                duration-200
                                hover:border-purple-500/30
                                hover:bg-purple-500/10
                            `,

                            socialButtonsBlockButtonText: `
                                text-sm
                                fira-sans-medium
                                md:text-base
                                xl:text-xl
                            `,

                            dividerLine: "bg-border",

                            dividerText: `
                                text-xs
                                text-muted-foreground
                            `,

                            main: `
                                pb-3
                            `,

                            footerAction: "block",

                            footer: `
                                border-t
                                border-foreground/10
                                bg-foreground/5
                                md:px-6
                                px-1.5
                                md:py-5
                                py-1.5
                            `,

                            footerActionLink: `
                                fira-sans-medium
                                text-foreground
                                transition-colors
                                hover:text-purple-400
                            `,
                        },

                        options: {
                            logoImageUrl: "/logo/GitPortify - logo.png",
                            logoPlacement: "inside",
                            socialButtonsPlacement: "top",
                            socialButtonsVariant: "blockButton",
                            showOptionalFields: false,
                            termsPageUrl: "/legal/terms-and-conditions",
                            privacyPageUrl: "/legal/privacy-policy",
                        },
                    }}
                />

                {/* Terms */}
                <p className="mt-2 text-center text-[10px] md:text-xs xl:text-sm leading-relaxed text-muted-foreground fira-sans-light">
                    By continuing, you agree to our Privacy & Terms.
                </p>
            </div>
        </div>
    );
};