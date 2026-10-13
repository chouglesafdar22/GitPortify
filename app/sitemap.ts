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
            url: "https://gitportify.vercel.app/signin"
        },
        {
            url: "https://gitportify.vercel.app/templates"
        },
        {
            url: "https://gitportify.vercel.app/legal/privacy-policy"
        },
        {
            url: "https://gitportify.vercel.app/legal/terms-and-conditions"
        },
    ];
};