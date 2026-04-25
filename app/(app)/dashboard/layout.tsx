import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | GitPortify",
  description: "Manage your portfolio, projects, and publishing",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}