"use client";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl rounded-xl border border-border bg-background shadow-sm p-6 md:p-10 text-foreground">

                {/* Header */}

                <div className="mb-10">
                    <h1 className="text-2xl md:text-3xl fira-sans-bold tracking-tight">
                        Privacy Policy
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground fira-sans-regular">
                        Last Updated: 29 June 2026
                    </p>
                </div>

                {/* Content */}

                <div className="space-y-8 text-sm md:text-base leading-relaxed">

                    <p className="text-muted-foreground fira-sans-regular">
                        Welcome to <span className="text-foreground fira-sans-medium">GitPortify</span>.
                        Your privacy is important to us. This Privacy Policy explains
                        what information we collect, how we use it, and the choices you
                        have regarding your data when using GitPortify.
                    </p>

                    {/* 1 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            1. Information We Collect
                        </h2>

                        <p className="mb-2 text-muted-foreground">
                            When you sign in with GitHub, we may collect:
                        </p>

                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground fira-sans-regular">
                            <li>GitHub profile information (name, username, email address, avatar)</li>
                            <li>Portfolio information you create (bio, projects, links)</li>
                            <li>Usage information necessary to improve GitPortify's performance and reliability</li>
                        </ul>
                    </div>

                    {/* 2 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            2. How We Use Your Information
                        </h2>

                        <p className="mb-2 text-muted-foreground">
                            We use your information to:
                        </p>

                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground fira-sans-regular">
                            <li>Authenticate your account using GitHub OAuth.</li>
                            <li>Create and manage your developer portfolio.</li>
                            <li>Publish your portfolio to your public GitPortify URL.</li>
                            <li>Improve platform performance, reliability, and user experience.</li>
                            <li>Provide customer support when required.</li>
                        </ul>
                    </div>

                    {/* 3 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            3. GitHub Authentication
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            GitPortify uses <strong>GitHub OAuth</strong> through
                            <strong> NextAuth.js</strong> for secure authentication.
                        </p>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            We <strong>never</strong> receive or store your GitHub
                            password. Authentication is handled securely by GitHub.
                        </p>
                    </div>

                    {/* 4 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            4. Data Storage
                        </h2>

                        <p className="mb-2 text-muted-foreground">
                            Your portfolio data is securely stored using MongoDB.
                            This may include:
                        </p>

                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground fira-sans-regular">
                            <li>Portfolio username</li>
                            <li>Bio</li>
                            <li>Projects</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Experience</li>
                            <li>Contact links</li>
                        </ul>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            Reasonable security measures are implemented to protect
                            your information.
                        </p>
                    </div>
                    {/* 5 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            5. Public Portfolio
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            Your published portfolio is publicly accessible using your
                            unique GitPortify portfolio URL.
                        </p>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            Please avoid publishing confidential or sensitive personal
                            information.
                        </p>
                    </div>

                    {/* 6 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            6. Third-Party Services
                        </h2>

                        <p className="mb-2 text-muted-foreground">
                            GitPortify relies on trusted third-party services,
                            including:
                        </p>

                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground fira-sans-regular">
                            <li>GitHub</li>
                            <li>MongoDB</li>
                            <li>Cloudinary</li>
                            <li>Vercel</li>
                        </ul>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            Each service has its own privacy practices.
                        </p>
                    </div>

                    {/* 7 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            7. Your Rights
                        </h2>

                        <p className="mb-2 text-muted-foreground">
                            You may:
                        </p>

                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground fira-sans-regular">
                            <li>Update your portfolio information.</li>
                            <li>Change your portfolio username (subject to availability).</li>
                            <li>Delete your account and associated portfolio at any time through your account settings.</li>
                        </ul>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            Deleting your account permanently removes your portfolio
                            and stored account information.
                        </p>
                    </div>

                    {/* 8 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            8. Data Retention
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            We retain your data only while your GitPortify account
                            remains active.
                        </p>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            Once you permanently delete your account, your stored
                            portfolio data and account information are removed from
                            our database.
                        </p>
                    </div>

                    {/* 9 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            9. Changes to this Privacy Policy
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            We may update this Privacy Policy from time to time to
                            reflect improvements, new features, or legal
                            requirements.
                        </p>

                        <p className="mt-2 text-muted-foreground fira-sans-regular">
                            The latest version will always be available on this page.
                        </p>
                    </div>

                    {/* 10 */}

                    <div>
                        <h2 className="mb-2 text-base md:text-lg fira-sans-medium">
                            10. Contact
                        </h2>

                        <p className="text-muted-foreground fira-sans-regular">
                            If you have any questions regarding this Privacy Policy,
                            please contact us:
                        </p>

                        <div className="flex flex-col px-1 mt-3 space-y-1 text-muted-foreground fira-sans-regular">
                            <Link href={"mailto:gitportify@gmail.com"}>gitportify@gmail.com</Link>
                            <Link href={"mailto:chouglesafdar22@gmail.com"}>chouglesafdar22@gmail.com</Link>
                        </div>
                    </div>

                    <p className="fira-sans-medium">
                        Thank you for using GitPortify.
                    </p>
                </div>

                {/* Footer */}

                <div className="mt-10 flex items-center gap-3 border-t pt-4 text-xs text-muted-foreground">

                    <Link
                        href="/terms-and-conditions"
                        className="transition hover:text-foreground fira-sans-light"
                    >
                        Terms
                    </Link>

                    <span>|</span>

                    <Link
                        href="/signup"
                        className="transition hover:text-foreground fira-sans-light"
                    >
                        SignUp
                    </Link>
                </div>
            </div>
        </main>
    );
}