"use client";
import Link from "next/link";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl rounded-xl border border-border bg-background shadow-sm p-6 md:p-10 text-foreground">

                {/* Header */}

                <div className="mb-10">
                    <h1 className="text-2xl md:text-3xl fira-sans-bold tracking-tight">
                        Terms & Conditions
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground fira-sans-regular">
                        Last Updated: 29 June 2026
                    </p>
                </div>

                {/* Content */}

                <div className="space-y-8 text-sm md:text-base leading-relaxed">

                    <p className="text-muted-foreground fira-sans-regular">
                        Welcome to <span className="text-foreground fira-sans-medium">GitPortify</span>.
                        By accessing or using GitPortify, you agree to comply with
                        these Terms & Conditions. If you do not agree with these
                        terms, please do not use our services.
                    </p>

                    {/* 1 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            1. Use of Service
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            GitPortify allows developers to create, customize,
                            and publish professional portfolio websites.
                            You agree to use the platform lawfully and responsibly.
                        </p>
                    </div>

                    {/* 2 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            2. User Content
                        </h2>

                        <p className="mb-2 text-muted-foreground">
                            You are solely responsible for the content you publish,
                            including:
                        </p>

                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground fira-sans-regular">
                            <li>Projects</li>
                            <li>Portfolio information</li>
                            <li>Images</li>
                            <li>Links</li>
                            <li>Descriptions</li>
                        </ul>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            You must not upload unlawful, harmful, offensive,
                            or copyrighted material without permission.
                        </p>
                    </div>

                    {/* 3 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            3. Account
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            Authentication is provided through GitHub OAuth using
                            NextAuth.js. You are responsible for maintaining the
                            security of your GitHub account.
                        </p>
                    </div>

                    {/* 4 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            4. Public Portfolios
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            Published portfolios are publicly accessible through
                            your unique GitPortify portfolio URL. You are
                            responsible for ensuring that any information you
                            publish is intended for public viewing.
                        </p>
                    </div>

                    {/* 5 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            5. Intellectual Property
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            GitPortify, including its branding, design, features,
                            and source code (unless otherwise stated), is the
                            intellectual property of GitPortify. You may not copy,
                            distribute, or modify any part of the platform without
                            prior written permission.
                        </p>
                    </div>

                    {/* 6 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            6. Limitation of Liability
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            GitPortify is provided on an "as is" and "as available"
                            basis. While we strive to provide a reliable service,
                            we do not guarantee uninterrupted availability or that
                            the platform will be free from errors.
                        </p>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            GitPortify shall not be liable for any direct,
                            indirect, incidental, or consequential damages arising
                            from your use of the platform.
                        </p>
                    </div>

                    {/* 7 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            7. Changes to These Terms
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            We may update these Terms & Conditions from time to
                            time to reflect new features, legal requirements, or
                            improvements to the platform.
                        </p>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            Continued use of GitPortify after changes become
                            effective constitutes acceptance of the revised terms.
                        </p>
                    </div>

                    {/* 8 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            8. Contact
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            If you have any questions regarding these Terms &
                            Conditions, please contact us:
                        </p>

                        <div className="flex flex-col px-1 mt-3 space-y-1 text-muted-foreground fira-sans-regular">
                            <Link href={"mailto:gitportify@gmail.com"}>gitportify@gmail.com</Link>
                            <Link href={"mailto:chouglesafdar22@gmail.com"}>chouglesafdar22@gmail.com</Link>
                        </div>
                    </div>

                    <p className="fira-sans-medium">
                        Thank you for choosing GitPortify.
                    </p>
                </div>

                {/* Footer */}

                <div className="mt-10 flex items-center gap-3 border-t pt-4 text-xs text-muted-foreground">

                    <Link
                        href="/privacy-policy"
                        className="transition hover:text-foreground fira-sans-light"
                    >
                        Privacy
                    </Link>

                    <span>|</span>

                    <Link
                        href="/signup"
                        className="transition hover:text-foreground fira-sans-light"
                    >
                        Sign Up
                    </Link>

                </div>

            </div>

        </main>
    );
}