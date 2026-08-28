import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Minimal Resume — Portfolio Template | GitPortify",
    description:
        "Preview the Minimal Resume developer portfolio template from GitPortify.",
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