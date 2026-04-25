import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | GitPortify",
  description: "Choose and customize your portfolio templates",
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}