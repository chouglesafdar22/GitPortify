export type TemplateType =
    | "github-pro"
    | "product-landing"
    | "terminal-dev"

export interface Template {
    id: TemplateType;
    name: string;
    description: string;
    preview: string;
};

export const templates: Template[] = [
    {
        id: "github-pro",
        name: "Github-pro",
        description: "Clean Developer Portfolio like Github",
        preview: "/templates/github-pro.png"
    },
    {
        id: "product-landing",
        name: "Product-Landing",
        description: "Modern Landing page Style Portfolio",
        preview: "/templates/product-landing.png"
    },
    {
        id: "terminal-dev",
        name: "Terminal-Dev",
        description: "Terminal style Hacker Portfolio",
        preview: "/templates/terminal-dev.png"
    }
]