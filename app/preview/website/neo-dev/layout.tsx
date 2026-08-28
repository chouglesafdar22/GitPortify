import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Neo Dev — Portfolio Template | GitPortify",
    description:
        "Preview the Neo Dev developer portfolio template from GitPortify.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function GitHubProPreviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}