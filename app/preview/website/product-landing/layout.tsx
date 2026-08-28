import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Landing — Portfolio Template | GitPortify",
    description:
        "Preview the Product Landing developer portfolio template from GitPortify.",
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