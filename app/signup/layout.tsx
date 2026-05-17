import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | GitPortify",
  description: "Create your account and build your developer portfolio",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
};