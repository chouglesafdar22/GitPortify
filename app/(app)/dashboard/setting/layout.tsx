import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings | GitPortify",
    description:
        "Manage your GitPortify account settings, preferences, and profile information.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}