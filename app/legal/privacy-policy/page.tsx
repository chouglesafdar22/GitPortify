"use client";
import Link from "next/link";

const sectionClass = "scroll-mt-24";
const headingClass =
    "fira-sans-medium mb-3 text-lg text-foreground sm:text-xl";
const paragraphClass =
    "fira-sans-regular text-sm leading-7 text-muted-foreground sm:text-base";
const listClass =
    "mt-3 list-disc fira-sans-regular space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base";
const internalLinkClass =
    "fira-sans-medium text-violet-400 underline decoration-violet-400/30 underline-offset-4 transition-colors hover:text-violet-300";
const externalLinkClass = internalLinkClass;

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 sm:py-14 lg:px-8">
            <article className="mx-auto w-full max-w-4xl">
                <header className="mb-8 border-b border-foreground/10 pb-8 sm:mb-10">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 fira-sans-regular text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <span aria-hidden="true">←</span>
                        Back to GitPortify
                    </Link>

                    <p className="mb-3 text-xs fira-sans-medium uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
                        Legal information
                    </p>

                    <h1 className="fira-sans-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 text-sm fira-sans-light text-muted-foreground">
                        Last updated: 12 October 2026
                    </p>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground fira-sans-regular sm:text-base">
                        This Privacy Policy explains how GitPortify may collect, use,
                        store, and disclose information when you use our developer
                        portfolio platform. It also describes the choices available to you
                        and how to contact us with privacy-related questions.
                    </p>
                </header>

                <div className="space-y-9 sm:space-y-10">
                    <section className={sectionClass}>
                        <h2 className={headingClass}>1. Information We Collect</h2>
                        <p className={paragraphClass}>
                            Depending on the features you use, the information you provide,
                            and the permissions granted, GitPortify may process the following
                            categories of information:
                        </p>
                        <ul className={listClass}>
                            <li>
                                <strong className="text-foreground fira-sans-regular">
                                    Account and authentication information:
                                </strong>{" "}
                                information made available through Clerk and the identity
                                provider you select, such as your name, username, email
                                address, provider identifier, and avatar, depending on the
                                configuration and permissions.
                            </li>
                            <li>
                                <strong className="text-foreground fira-sans-regular">
                                    Developer profile information:
                                </strong>{" "}
                                information obtained through GitHub or GitLab where enabled,
                                subject to the integration implemented and permissions
                                granted.
                            </li>
                            <li>
                                <strong className="text-foreground fira-sans-regular">Portfolio content:</strong>{" "}
                                information you add or manage, such as your biography,
                                projects, skills, education, experience, and links.
                            </li>
                            <li>
                                <strong className="text-foreground fira-sans-regular">
                                    Technical and usage information:
                                </strong>{" "}
                                information processed to operate, secure, troubleshoot, and
                                improve the service, where applicable.
                            </li>
                        </ul>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>2. How We Use Information</h2>
                        <p className={paragraphClass}>Information may be used to:</p>
                        <ul className={listClass}>
                            <li>Authenticate users and manage accounts through Clerk.</li>
                            <li>
                                Complete sign-in through supported GitHub and GitLab identity
                                provider options.
                            </li>
                            <li>
                                Import or display permitted developer profile and project
                                information, where those features are enabled.
                            </li>
                            <li>Create, customize, and publish developer portfolios.</li>
                            <li>Operate, maintain, secure, and improve GitPortify.</li>
                            <li>
                                Respond to support requests and service-related inquiries.
                            </li>
                            <li>
                                Meet applicable legal obligations and address misuse of the
                                service.
                            </li>
                        </ul>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>3. Clerk, GitHub, and GitLab</h2>
                        <p className={paragraphClass}>
                            GitPortify uses Clerk to support authentication and account
                            management. GitHub and GitLab are the identity provider options
                            available through the sign-up and sign-in flow. When you choose
                            one of these options, the provider processes the authentication
                            request and shares the information needed to complete the
                            configured sign-in process.
                        </p>
                        <p className={`mt-3 ${paragraphClass}`}>
                            Authentication through GitHub or GitLab does not automatically
                            mean GitPortify can access every repository or all information
                            in your provider account. Any additional developer profile or
                            project information accessed by GitPortify depends on the
                            features implemented and the permissions granted.
                        </p>
                        <p className={`mt-3 ${paragraphClass}`}>
                            These providers have their own privacy practices. You can review
                            their policies here:
                        </p>
                        <ul className={listClass}>
                            <li>
                                <a
                                    href="https://clerk.com/legal/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={externalLinkClass}
                                >
                                    Clerk Privacy Policy
                                </a>
                                {" · "}
                                <a
                                    href="https://clerk.com/legal/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={externalLinkClass}
                                >
                                    Clerk Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={externalLinkClass}
                                >
                                    GitHub Privacy Statement
                                </a>
                                {" · "}
                                <a
                                    href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={externalLinkClass}
                                >
                                    GitHub Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://about.gitlab.com/privacy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={externalLinkClass}
                                >
                                    GitLab Privacy Policy
                                </a>
                                {" · "}
                                <a
                                    href="https://about.gitlab.com/terms/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={externalLinkClass}
                                >
                                    GitLab Terms of Use
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>4. Data Storage and Security</h2>
                        <p className={paragraphClass}>
                            GitPortify uses its configured infrastructure and service
                            providers to operate the platform and store information where
                            necessary. Portfolio data may include usernames, biographies,
                            projects, skills, education, experience, and contact links.
                        </p>
                        <p className={`mt-3 ${paragraphClass}`}>
                            Reasonable security measures should be used to protect
                            information against unauthorized access, loss, alteration, or
                            disclosure. However, no online service or electronic storage
                            method can guarantee absolute security.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>5. Public Portfolios</h2>
                        <p className={paragraphClass}>
                            When you publish a portfolio, its published content may be
                            accessible to anyone with the portfolio URL and may be
                            discoverable through search engines or other services.
                        </p>
                        <p className={`mt-3 ${paragraphClass}`}>
                            Only publish information you are comfortable making public. Avoid
                            including passwords, authentication tokens, confidential business
                            information, private repository details, or other sensitive
                            personal information in public portfolio content.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>6. Third-Party Services</h2>
                        <p className={paragraphClass}>
                            GitPortify may rely on third-party providers for authentication,
                            hosting, database storage, image delivery, and other
                            functionality. Depending on the features currently in use,
                            these providers may include Clerk, GitHub, GitLab, MongoDB,
                            Cloudinary, and Vercel.
                        </p>
                        <p className={`mt-3 ${paragraphClass}`}>
                            Third-party services operate under their own terms and privacy
                            policies. Their handling of information is governed by their
                            respective practices. The providers listed here should be checked
                            against the services actually used by the live application.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>7. Your Choices and Rights</h2>
                        <p className={paragraphClass}>
                            Depending on your location and applicable law, you may have
                            rights regarding your personal information. Available options
                            may include:
                        </p>
                        <ul className={listClass}>
                            <li>Reviewing and correcting portfolio information.</li>
                            <li>Managing the information displayed on your public portfolio.</li>
                            <li>
                                Reviewing or revoking provider permissions through the relevant
                                provider, where available.
                            </li>
                            <li>
                                Requesting access to, correction of, or deletion of personal
                                information, where applicable.
                            </li>
                        </ul>
                        <p className={`mt-3 ${paragraphClass}`}>
                            For account or data requests, contact us using the details in the
                            Contact section below. Account deletion and data-removal options
                            depend on the functionality currently available in GitPortify.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>8. Data Retention</h2>
                        <p className={paragraphClass}>
                            Information may be retained for as long as needed to provide the
                            service, maintain account records, resolve disputes, protect the
                            platform, or meet legal obligations. Retention periods may vary
                            by data type and purpose.
                        </p>
                        <p className={`mt-3 ${paragraphClass}`}>
                            If you request account or data deletion, some information may
                            remain temporarily in backups or records where retention is
                            necessary or legally permitted.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>9. Cookies and Similar Technologies</h2>
                        <p className={paragraphClass}>
                            GitPortify and its service providers may use cookies or similar
                            technologies for authentication, session management, security,
                            or other platform functionality. The specific technologies used
                            depend on the application&apos;s configuration.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>10. Children&apos;s Privacy</h2>
                        <p className={paragraphClass}>
                            GitPortify is not intended to be used in a way that violates
                            applicable laws concerning children&apos;s privacy. If you
                            believe personal information has been provided inappropriately,
                            contact us so the matter can be reviewed.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>11. Changes to This Policy</h2>
                        <p className={paragraphClass}>
                            We may revise this Privacy Policy as GitPortify evolves or when
                            operational or legal requirements change. Updates will be
                            published on this page with a revised update date.
                        </p>
                    </section>

                    <section className={sectionClass}>
                        <h2 className={headingClass}>12. Contact</h2>
                        <p className={paragraphClass}>
                            For privacy questions, requests, or concerns, contact GitPortify:
                        </p>
                        <div className="mt-4 flex flex-col items-start gap-3">
                            <a
                                href="mailto:gitportify@gmail.com"
                                className={internalLinkClass}
                            >
                                gitportify@gmail.com
                            </a>
                        </div>
                    </section>
                </div>

                <footer className="mt-12 border-t border-foreground/10 pt-6 sm:mt-14">
                    <p className="text-sm leading-7 text-muted-foreground">
                        Please also review our{" "}
                        <Link
                            href="/legal/terms-and-conditions"
                            className={internalLinkClass}
                        >
                            Terms &amp; Conditions
                        </Link>
                        . You can return to the{" "}
                        <Link href="/" className={internalLinkClass}>
                            home page
                        </Link>
                        ,{" "}
                        <Link href="/signup" className={internalLinkClass}>
                            create an account
                        </Link>
                        , or{" "}
                        <Link href="/signin" className={internalLinkClass}>
                            sign in
                        </Link>
                        .
                    </p>

                    <p className="mt-5 text-xs text-muted-foreground fira-sans-light">
                        © {new Date().getFullYear()} GitPortify. All rights reserved.
                    </p>
                </footer>
            </article>
        </main>
    );
}