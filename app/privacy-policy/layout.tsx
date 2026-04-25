import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GitPortify",
  description: "Read how GitPortify collects, uses, and protects your personal information and data.",
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
};