"use client"
import type { ReactNode } from "react";

export interface VersionSection {
    title: string;
    items: ReactNode[];
}

export interface VersionCardProps {
    version: string;
    releaseDate: string;
    note?: ReactNode;
    newFeatures?: VersionSection["items"];
    improvementsAndFixes?: VersionSection["items"];
    comingSoon?: VersionSection["items"];
    isLatest?: boolean;
}

export default function VersionCard({
    version,
    releaseDate,
    note,
    newFeatures = [],
    improvementsAndFixes = [],
    comingSoon = [],
    isLatest = false,
}: VersionCardProps) {
    const hasContent =
        note !== undefined ||
        newFeatures.length > 0 ||
        improvementsAndFixes.length > 0 ||
        comingSoon.length > 0;

    const renderSection = (
        title: string,
        items: ReactNode[],
    ) => {
        if (items.length === 0) return null;

        return (
            <section className="space-y-1">
                <h3 className="text-base text-foreground fira-sans-semibold">
                    {title}
                </h3>

                <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground fira-sans-medium sm:text-base">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-1.5"
                        >
                            <span
                                aria-hidden="true"
                                className="shrink-0 fira-sans-regular"
                            >
                                •
                            </span>

                            <span className="min-w-0 fira-sans-regular">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        );
    };

    return (
        <article
            aria-labelledby={`version-${version}`}
            className="space-y-5"
        >
            {/* Version and release date */}
            <header className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                    <h2
                        id={`version-${version}`}
                        className="text-lg tracking-tight text-foreground fira-sans-semibold"
                    >
                        {version}
                    </h2>

                    {isLatest && (
                        <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400 fira-sans-medium">
                            Latest
                        </span>
                    )}
                </div>

                <p className="text-sm text-muted-foreground fira-sans-regular sm:text-base">
                    Release date: {releaseDate}
                </p>
            </header>

            {/* Optional release note */}
            {note !== undefined && (
                <section className="space-y-1">
                    <h3 className="text-base text-foreground fira-sans-semibold">
                        Note
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground fira-sans-regular sm:text-base">
                        {note}
                    </p>
                </section>
            )}

            {/* Release sections */}
            {renderSection("New Features", newFeatures)}

            {renderSection(
                "Improvements and Bug Fixes",
                improvementsAndFixes,
            )}

            {renderSection("Coming Soon", comingSoon)}

            {!hasContent && (
                <p className="text-sm text-muted-foreground fira-sans-regular">
                    No additional release notes available.
                </p>
            )}
        </article>
    );
}
