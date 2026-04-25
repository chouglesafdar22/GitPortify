import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings | GitPortify",
    description: "Update your profile, username, and preferences",
    robots: {
    index: true,
    follow: true,
  },
};

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}