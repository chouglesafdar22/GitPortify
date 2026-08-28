import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GitHub Pro — Portfolio Template | GitPortify",
    description:
        "Preview the GitHub Pro developer portfolio template from GitPortify.",
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