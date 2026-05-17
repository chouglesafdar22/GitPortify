import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Feedback | GitPortify",
    description: "Share your feedback, report bugs, and suggest new features for GitPortify.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function FeedbackLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
};