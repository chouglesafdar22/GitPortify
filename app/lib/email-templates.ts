const BRAND = "GitPortify";
const DASHBOARD_URL = "https://gitportify.vercel.app/dashboard";
const ACCENT = "#7c3aed";

function emailLayout(content: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
        <title>${BRAND}</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f8;padding:24px 12px;">
            <tr>
                <td align="center">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
                        <tr>
                            <td style="background:#171717;padding:28px 24px;text-align:center;">
                                <div style="font-size:24px;font-weight:700;color:#ffffff;">${BRAND}</div>
                                <div style="font-size:13px;color:#d4d4d8;margin-top:8px;">Build your developer portfolio</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:32px 24px;">
                                ${content}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:20px 24px;background:#fafafa;text-align:center;border-top:1px solid #eeeeee;">
                                <p style="margin:0;font-size:12px;line-height:20px;color:#71717a;">
                                    © ${new Date().getFullYear()} <a link="https://gitportify.vercel.app">${BRAND}</a>. All rights reserved.
                                </p>
                                <p style="margin:6px 0 0;font-size:12px;color:#71717a;">
                                    You're receiving this email because you used GitPortify.
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
    return `
        <table role="presentation" cellspacing="0" cellpadding="0" style="margin:28px 0;">
            <tr>
                <td bgcolor="${ACCENT}" style="border-radius:8px;">
                    <a href="${DASHBOARD_URL}" style="display:inline-block;padding:13px 22px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;border-radius:8px;">
                        ${label}
                    </a>
                </td>
            </tr>
        </table>`;
}

export function welcomeEmail(name: string) {
    const safeName = escapeHtml(name);

    return emailLayout(`
        <h1 style="margin:0 0 16px;font-size:26px;line-height:34px;">Welcome to GitPortify!</h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:25px;color:#52525b;">Hi ${safeName},</p>
        <p style="margin:0;font-size:15px;line-height:25px;color:#52525b;">
            Thanks for joining GitPortify. We're excited to help you turn your GitHub/GitLab profile and projects into a portfolio you can share with the world.
        </p>
        ${dashboardButton("Explore your dashboard")}
        <p style="margin:0;font-size:14px;line-height:24px;color:#71717a;">
            We're glad you're here. Happy building!
        </p>
    `);
};


export function websitePublishedEmail(name: string, url: string) {
    return `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222;line-height:1.6">
            <h2>Your website is live! 🎉</h2>
            <p>Hi ${name},</p>
            <p>Congratulations! Your website has been successfully published on GitPortify.</p>
            <p><a href="${url}" style="display:inline-block;padding:12px 20px;background:#4f46e5;color:#fff;text-decoration:none;border-radius:6px">View your website</a></p>
            <p>Your live website: <a href="${url}">${url}</a></p>
            <p>Thank you for building with GitPortify!</p>
            <p>— The GitPortify Team</p>
        </div>
    `;
}

export function websiteUpdatedEmail(name: string, url: string) {
    return `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222;line-height:1.6">
            <h2>Your website has been updated successfully</h2>
            <p>Hi ${name},</p>
            <p>Your latest changes have been saved and published successfully on GitPortify.</p>
            <p><a href="${url}" style="display:inline-block;padding:12px 20px;background:#4f46e5;color:#fff;text-decoration:none;border-radius:6px">View your updated website</a></p>
            <p>Your live website: <a href="${url}">${url}</a></p>
            <p>Keep building something great!</p>
            <p>— The GitPortify Team</p>
        </div>
    `;
}


export function signInEmail(name: string) {
    const safeName = escapeHtml(name);

    return emailLayout(`
        <h1 style="margin:0 0 16px;font-size:26px;line-height:34px;">Sign-in successful</h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:25px;color:#52525b;">Hi ${safeName},</p>
        <p style="margin:0;font-size:15px;line-height:25px;color:#52525b;">
            You successfully signed in to your GitPortify account. You can continue managing your developer portfolio from your dashboard.
        </p>
        ${dashboardButton("Open GitPortify")}
        <p style="margin:0;font-size:14px;line-height:24px;color:#71717a;">
            If you don't recognize this activity, please review your account security. Clerk may also send a separate notification about a new device.
        </p>
    `);
}

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
}
