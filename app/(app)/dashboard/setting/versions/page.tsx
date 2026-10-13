"use client";
import Link from "next/link";
import { ArrowLeft, History } from "lucide-react";
import VersionCard from "@/components/dashboard/setting/VersionCard";

const releases = [
    {
        version: "v1.0.1",
        releaseDate: "13 October 2026",
        isLatest: true,
        newFeatures: [],
        improvementsAndFixes: [
            "Fixed Clerk sign-up and sign-in issues in the production environment.",
            "Improved authentication reliability and production configuration.",
            "Refined transactional email templates with consistent branding and more professional wording.",
            "Improved portfolio publication and update email notifications.",
        ],
        comingSoon: [
            "Portfolio Analytics — Track portfolio views, visitor activity, and engagement through an analytics dashboard.",
            "Additional portfolio templates and design improvements.",
        ],
    },
    {
        version: "v1.0.0",
        releaseDate: "13 October 2026",
        isLatest: false,
        newFeatures: [
            "Introduced Clerk authentication for account signup and sign-in.",
            "Added GitLab support alongside GitHub.",
            "Introduced sendGitPortifyEmail for email functionality.",
        ],
        improvementsAndFixes: [
            "Updated the database architecture.",
            "Improved the landing page and overall user experience.",
            "Refined the dashboard, profile, and settings pages.",
            "Added dedicated Privacy Policy and Terms & Conditions pages.",
        ],
        comingSoon: [
            "Portfolio Analytics — Track portfolio views, visitor activity, and engagement through an analytics dashboard.",
            "Additional portfolio templates and design improvements.",
        ],
    },
    {
        version: "v0.1.0",
        releaseDate: "April 2026 (Initial release)",
        isLatest: false,
        newFeatures: [
            "Introduced GitHub-powered developer portfolio creation.",
            "Added portfolio templates with live previews.",
            "Enabled importing GitHub profile and project information.",
            "Added portfolio customization and real-time editing.",
            "Enabled publishing portfolios with a shareable public link.",
        ],
        improvementsAndFixes: [],
        comingSoon: [],
    },
];

export default function VersionHistoryPage() {
    return (
        <main className="min-h-full w-full px-4 py-5 md:px-6 xl:px-8">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 pb-10 pt-12 md:pt-0 md:pb-0">
                {/* Header */}
                <header className="space-y-5">
                    <Link
                        href="/dashboard/setting"
                        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground fira-sans-regular"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                        Back to Setting
                    </Link>

                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                            <History className="h-6 w-6 text-violet-500" />

                            <h1 className="md:text-2xl tracking-tight text-foreground fira-sans-semibold text-xl xl:text-3xl">
                                Version History
                            </h1>
                        </div>

                        <p className="text-sm text-muted-foreground fira-sans-regular">
                            Explore the latest features, improvements, and
                            updates to GitPortify.
                        </p>
                    </div>
                </header>

                {/* Release history */}
                <section
                    aria-label="GitPortify releases"
                    className="space-y-8"
                >
                    {releases.map((release, index) => (
                        <div key={release.version}>
                            <VersionCard {...release} />

                            {index < releases.length - 1 && (
                                <div className="mt-8 border-t border-foreground/10" />
                            )}
                        </div>
                    ))}
                </section>

                {/* Footer */}
                <footer className="border-t border-foreground/10 pt-5">
                    <p className="text-xs leading-relaxed text-muted-foreground fira-sans-light">
                        Have feedback or found an issue?{" "}
                        <Link
                            href="/support/feedback"
                            className="text-violet-400 underline-offset-4 fira-sans-regular transition-colors hover:text-violet-300 hover:underline"
                        >
                            Send feedback
                        </Link>
                        .
                    </p>
                </footer>
            </div>
        </main>
    );
}
