import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | GitPortify",
  description: "Manage your portfolio, profile, templates, and analytics.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}