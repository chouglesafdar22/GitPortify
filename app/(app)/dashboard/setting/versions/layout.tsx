import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Version History | GitPortify",
    description:
        "Explore GitPortify release notes, new features, improvements, bug fixes, and upcoming updates.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function VersionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}