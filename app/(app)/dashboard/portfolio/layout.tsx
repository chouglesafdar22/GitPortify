import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | GitPortify",
    description: "Manage your portfolio, projects, and publishing.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}