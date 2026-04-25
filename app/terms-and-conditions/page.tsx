import Link from "next/link";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-10">

            {/* Card */}
            <div className="w-full max-w-3xl border border-border rounded-xl bg-background shadow-sm p-6 md:p-10 text-foreground">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-sm text-muted-foreground mt-2">
                        Last updated: 26 April 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed">

                    <p className="text-muted-foreground">
                        By using GitPortify, you agree to these terms and conditions.
                    </p>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            1. Use of Service
                        </h2>
                        <p className="text-muted-foreground">
                            GitPortify allows users to create and publish portfolios. You agree to use the platform responsibly.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            2. User Content
                        </h2>
                        <p className="text-muted-foreground">
                            You are responsible for the content you publish. Do not upload illegal or harmful content.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            3. Account
                        </h2>
                        <p className="text-muted-foreground">
                            You are responsible for your account activity. Authentication is done via GitHub.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            4. Public Profiles
                        </h2>
                        <p className="text-muted-foreground">
                            Portfolios are publicly accessible through a unique link.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            5. Limitation of Liability
                        </h2>
                        <p className="text-muted-foreground">
                            We are not responsible for any loss or damage resulting from use of the platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            6. Changes
                        </h2>
                        <p className="text-muted-foreground">
                            We may update these terms at any time. Continued use means you accept changes.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base md:text-lg mb-2">
                            7. Contact
                        </h2>
                        <p className="text-muted-foreground">
                            chouglesafdar22@gmail.com <br />
                            gitportify@gmail.com
                        </p>
                    </div>

                </div>

                {/* Footer Links */}
                <div className="border-t mt-10 pt-4 flex items-center gap-3 text-sm text-muted-foreground">

                    <Link href="/privacy-policy" className="hover:text-foreground transition">
                        Privacy Policy
                    </Link>

                    <span>|</span>

                    <Link href="/signup" className="hover:text-foreground transition">
                        Back to Sign Up
                    </Link>

                </div>

            </div>
        </main>
    );
};