import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terminal Dev — Portfolio Template | GitPortify",
    description:
        "Preview the Terminal Dev developer portfolio template from GitPortify.",
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