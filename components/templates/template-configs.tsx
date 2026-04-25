import type { TemplateType } from "@/types/template";

export const templateConfigs: Record<
    TemplateType,
    {
        showNavbar: boolean;
        showContactLinks: boolean;
        allowThemeToggle: boolean;
    }
> = {
    "github-pro": {
        showNavbar: true,
        showContactLinks: true,
        allowThemeToggle: true
    },
    "product-landing": {
        showNavbar: true,
        showContactLinks: true,
        allowThemeToggle: true
    },
    "terminal-dev": {
        showNavbar: false,
        showContactLinks: true,
        allowThemeToggle: false
    }
};