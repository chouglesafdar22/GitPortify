import transporter from "@/app/lib/mailer";

export async function sendGitPortifyEmail({
    to,
    subject,
    html,
}: {
    to: string;
    subject: string;
    html: string;
}) {
    const smtpUser = process.env.SMTP_USER;

    if (!smtpUser) {
        throw new Error("SMTP_USER is missing.");
    }

    return transporter.sendMail({
        from: `GitPortify <${smtpUser}>`,
        to,
        subject,
        html,
    });
}

