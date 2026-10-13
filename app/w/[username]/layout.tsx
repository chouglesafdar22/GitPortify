import type { Metadata } from "next";
import { connectDB } from "@/app/lib/mongodb";
import Portfolio from "@/app/models/Portfolio";

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
    try {
        await connectDB();

        const { username } = await params;

        const safeUsername = username.toLowerCase();

        const portfolio = await Portfolio.findOne({ username: safeUsername }).lean();

        if (!portfolio) {
            return {
                title: "Portfolio Not Found | GitPortify",
                description: "This portfolio does not exist.",
                robots: { index: false },
            };
        }

        const name = portfolio.name || safeUsername;
        const description =
            portfolio.bio || "Developer portfolio built with GitPortify";

        const baseUrl =
            process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

        const image = portfolio.avatar || "/default-avatar.png";

        return {
            title: `${name} | Portfolio`,
            description,

            openGraph: {
                title: `${name} | Portfolio`,
                description,
                url: `${baseUrl}/portfolio/${username}`,
                siteName: "GitPortify",
                images: [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: name,
                    },
                ],
                type: "website",
            },

            twitter: {
                card: "summary_large_image",
                title: `${name} | Portfolio`,
                description,
                images: [image],
            },
        };
    } catch (error) {
        console.error("Metadata error:", error);

        return {
            title: "GitPortify",
            description: "Modern developer portfolio SaaS",
        };
    }
}

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}