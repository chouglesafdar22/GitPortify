import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-10">

            {/* Card Container */}
            <div className="w-full max-w-3xl border border-border rounded-xl bg-background shadow-sm p-6 md:p-10 text-foreground">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl fira-sans-bold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm fira-sans-regular text-muted-foreground mt-2">
                        Last updated: 26 April 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-sm md:text-base leading-relaxed">

                    <p className="text-muted-foreground fira-sans-semibold">
                        GitPortify ("we", "our", "us") respects your privacy. This Privacy
                        Policy explains how we collect, use, and protect your information.
                    </p>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            1. Information We Collect
                        </h2>
                        <ul className="list-disc ml-5 space-y-1 fira-sans-regular text-muted-foreground">
                            <li>GitHub profile data (name, email, avatar)</li>
                            <li>Portfolio data (projects, bio, links)</li>
                            <li>Usage data (interactions, pages visited)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            2. How We Use Your Information
                        </h2>
                        <ul className="list-disc ml-5 space-y-1 fira-sans-regular text-muted-foreground">
                            <li>To create and manage your portfolio</li>
                            <li>To display your public portfolio</li>
                            <li>To improve features and performance</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            3. Authentication
                        </h2>
                        <p className="text-muted-foreground fira-sans-regular">
                            We use GitHub OAuth (NextAuth) for secure login. We do not store your GitHub password.
                        </p>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            4. Data Storage
                        </h2>
                        <p className="text-muted-foreground fira-sans-regular">
                            Your data is stored securely using MongoDB. We take reasonable measures to protect it.
                        </p>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            5. Public Data
                        </h2>
                        <p className="text-muted-foreground fira-sans-regular">
                            Your portfolio is publicly accessible via a unique URL. Avoid sharing sensitive information.
                        </p>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            6. Third-Party Services
                        </h2>
                        <p className="text-muted-foreground fira-sans-regular">
                            We use GitHub, Cloudinary, and Vercel to provide our services.
                        </p>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            7. Your Rights
                        </h2>
                        <p className="text-muted-foreground fira-sans-regular">
                            You can update or delete your data anytime through your dashboard.
                        </p>
                    </div>

                    <div>
                        <h2 className="fira-sans-medium text-base md:text-lg mb-2">
                            8. Contact
                        </h2>
                        <p className="text-muted-foreground fira-sans-regular">
                            chouglesafdar22@gmail.com <br />
                            gitportify@gmail.com
                        </p>
                    </div>

                </div>

                <div className="border-t mt-10 pt-4 flex items-center gap-3 text-xs text-muted-foreground">

                    <Link href="/terms-and-conditions" className="hover:text-foreground transition fira-sans-light">
                      Terms&Conditions
                    </Link>

                    <span>|</span>

                    <Link href="/signup" className="hover:text-foreground transition fira-sans-light">
                        SignUp
                    </Link>

                </div>

            </div>
        </main>
    );
}