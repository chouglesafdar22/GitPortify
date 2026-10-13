import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "@/components/providers/theme-provider";
import Providers from "@/components/providers/Providers";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitportify.vercel.app"),

  title: "GitPortify — Developer Portfolio Builder",
  description: "Build, customize, and publish your developer portfolio with GitPortify. Turn your GitHub or GitLab profile into a professional portfolio in minutes.",

  keywords: [
    "developer portfolio builder",
    "GitHub portfolio",
    "GitLab portfolio",
    "developer portfolio",
    "portfolio website builder",
    "developer portfolio templates",
    "programmer portfolio",
    "Next.js portfolio",
  ],

  applicationName: "GitPortify",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://gitportify.vercel.app",
    siteName: "GitPortify",
    title: "GitPortify — Developer Portfolio Builder",
    description:
      "Build, customize, and publish your developer portfolio using your GitHub or GitLab profile.",
  },

  twitter: {
    card: "summary_large_image",
    title: "GitPortify — Developer Portfolio Builder",
    description:
      "Build and publish your developer portfolio with GitHub or GitLab.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        data-scroll-behavior="smooth"
      >
        <head>
          <meta
            name="google-site-verification"
            content="CmKds10cZMZYH-iisKQPsLzG9KgAGEq8aQxA0ru8q1I"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </head>

        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased scroll-smooth`}
        >
          <Providers>
            <ThemeProvider>
              <TooltipProvider>
                {children}
              </TooltipProvider>
            </ThemeProvider>
          </Providers>

          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
