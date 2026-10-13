const BRAND = "GitPortify";
const BASE_URL = "https://gitportify.vercel.app";
const DASHBOARD_URL = `${BASE_URL}/dashboard`;
const ACCENT = "#7c3aed";

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[character];
    });
};

function emailLayout(content: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
        <title>${BRAND}</title>
    </head>
    <body style="margin:0;padding:0;background-color:#f4f4f8;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f4f8;">
            <tr>
                <td align="center" style="padding:32px 12px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:14px;overflow:hidden;">
                        <tr>
                            <td align="center" style="background-color:#171717;padding:28px 24px;">
                                <a href="${BASE_URL}" style="color:#ffffff;text-decoration:none;font-size:24px;font-weight:700;">
                                    ${BRAND}
                                </a>
                                <p style="margin:8px 0 0;color:#d4d4d8;font-size:13px;line-height:20px;">
                                    Build your developer portfolio
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:32px 24px;">
                                ${content}
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding:20px 24px;background-color:#fafafa;border-top:1px solid #eeeeee;">
                                <p style="margin:0;font-size:12px;line-height:20px;color:#71717a;">
                                    &copy; ${new Date().getFullYear()}
                                    <a href="${BASE_URL}" style="color:#52525b;text-decoration:none;font-weight:600;">${BRAND}</a>.
                                    All rights reserved.
                                </p>
                                <p style="margin:6px 0 0;font-size:12px;line-height:19px;color:#71717a;">
                                    You're receiving this email because you are using GitPortify.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`;
}

function dashboardButton(label: string) {
    const safeLabel = escapeHtml(label);

    return `
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:26px 0;">
            <tr>
                <td align="center" bgcolor="${ACCENT}" style="border-radius:8px;">
                    <a href="${DASHBOARD_URL}" style="display:inline-block;padding:13px 22px;color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;font-weight:700;border-radius:8px;">
                        ${safeLabel}
                    </a>
                </td>
            </tr>
        </table>`;
}

function websiteButton(label: string, url: string) {
    const safeLabel = escapeHtml(label);
    const safeUrl = escapeHtml(url);

    return ` 
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:26px 0;">
            <tr>
                <td align="center" bgcolor="${ACCENT}" style="border-radius:8px;">
                    <a href="${safeUrl}" style="display:inline-block;padding:13px 22px;color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;font-weight:700;border-radius:8px;">
                        ${safeLabel}
                    </a>
                </td>
            </tr>
        </table>`;
}

export function welcomeEmail(name: string) {
    const safeName = escapeHtml(name);

    return ` emailLayout(
        <h1 style="margin:0 0 18px;font-size:26px;line-height:34px;color:#18181b;">
            Welcome to GitPortify!
        </h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:25px;color:#52525b;">
            Hi ${safeName},
        </p>
        <p style="margin:0;font-size:15px;line-height:25px;color:#52525b;">
            Thanks for joining GitPortify. We're excited to help you turn your GitHub or GitLab profile and projects into a developer portfolio you can share with the world.
        </p>
        ${dashboardButton("Explore your dashboard")}
        <p style="margin:0;font-size:14px;line-height:24px;color:#71717a;">
            We're glad you're here. Happy building!
        </p>
    )`;
}

export function websitePublishedEmail(name: string, url: string) {
    const safeName = escapeHtml(name);
    const safeUrl = escapeHtml(url);

    return ` emailLayout(
        <h1 style="margin:0 0 18px;font-size:26px;line-height:34px;color:#18181b;">
            Your portfolio website is live!
        </h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:25px;color:#52525b;">
            Hi ${safeName},
        </p>
        <p style="margin:0;font-size:15px;line-height:25px;color:#52525b;">
            Congratulations! Your GitPortify portfolio website has been published successfully and is ready to share.
        </p>
        ${websiteButton("View your portfolio", url)}
        <p style="margin:0 0 8px;font-size:14px;line-height:23px;color:#71717a;">
            Your portfolio link:
        </p>
        <p style="margin:0;font-size:14px;line-height:23px;overflow-wrap:anywhere;">
            <a href="${safeUrl}" style="color:${ACCENT};text-decoration:underline;">${safeUrl}</a>
        </p>
        <p style="margin:20px 0 0;font-size:14px;line-height:24px;color:#71717a;">
            Thank you for choosing GitPortify. We wish you continued success in showcasing your work!
        </p>
    )`;
}

export function websiteUpdatedEmail(name: string, url: string) {
    const safeName = escapeHtml(name);
    const safeUrl = escapeHtml(url);

    return ` emailLayout(
        <h1 style="margin:0 0 18px;font-size:26px;line-height:34px;color:#18181b;">
            Your portfolio website has been updated
        </h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:25px;color:#52525b;">
            Hi ${safeName},
        </p>
        <p style="margin:0;font-size:15px;line-height:25px;color:#52525b;">
            Your latest changes have been saved and published successfully. Your portfolio website is up to date and ready for visitors.
        </p>
        ${websiteButton("View your updated portfolio", url)}
        <p style="margin:0 0 8px;font-size:14px;line-height:23px;color:#71717a;">
            Your portfolio link:
        </p>
        <p style="margin:0;font-size:14px;line-height:23px;overflow-wrap:anywhere;">
            <a href="${safeUrl}" style="color:${ACCENT};text-decoration:underline;">${safeUrl}</a>
        </p>
        <p style="margin:20px 0 0;font-size:14px;line-height:24px;color:#71717a;">
            Thank you for choosing GitPortify. We wish you continued success with your portfolio!
        </p>
    )`;
}

export function signInEmail(name: string) {
    const safeName = escapeHtml(name);

    return ` emailLayout(
        <h1 style="margin:0 0 18px;font-size:26px;line-height:34px;color:#18181b;">
            Sign-in successful
        </h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:25px;color:#52525b;">
            Hi ${safeName},
        </p>
        <p style="margin:0;font-size:15px;line-height:25px;color:#52525b;">
            You've successfully signed in to your GitPortify account. You can now continue managing your developer portfolio from your dashboard.
        </p>
        ${dashboardButton("Open GitPortify")}
        <p style="margin:0;font-size:14px;line-height:24px;color:#71717a;">
            If you don't recognize this activity, review your account security and secure your account if necessary. Clerk may also send a separate security notification for a new device.
        </p>
    )`;
}
