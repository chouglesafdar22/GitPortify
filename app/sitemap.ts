import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://gitportify.vercel.app",
            lastModified: new Date(),
            changeFrequency:"weekly",
            priority:1,
        },
        {
            url: "https://gitportify.vercel.app/signup",
            lastModified: new Date(),
        },
        {
            url: "https://gitportify.vercel.app/privacy-policy",
            lastModified: new Date(),
        },
        {
            url: "https://gitportify.vercel.app/terms-and-conditions",
            lastModified: new Date(),
        },
    ];
};