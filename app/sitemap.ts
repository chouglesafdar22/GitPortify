import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://gitportify.vercel.app",
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://gitportify.vercel.app/signup"
        },
        {
            url: "https://gitportify.vercel.app/privacy-policy"
        },
        {
            url: "https://gitportify.vercel.app/terms-and-conditions"
        },
    ];
};