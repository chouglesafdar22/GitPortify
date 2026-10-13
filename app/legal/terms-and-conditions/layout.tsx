import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | GitPortify",
    description:
        "Understand the terms and conditions for using GitPortify and its services.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}