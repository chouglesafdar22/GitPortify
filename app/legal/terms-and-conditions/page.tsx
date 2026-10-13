"use client"
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

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 sm:py-14 lg:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <header className="mb-8 border-b border-foreground/10 pb-8 sm:mb-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center fira-sans-regular gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Back to GitPortify
          </Link>

          <p className="mb-3 text-xs fira-sans-medium uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
            Legal information
          </p>

          <h1 className="fira-sans-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-4 text-sm fira-sans-light text-muted-foreground">
            Last updated: 12 October 2026
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 fira-sans-regular text-muted-foreground sm:text-base">
            These Terms &amp; Conditions explain the rules that apply when you
            access or use GitPortify. By using the service, you agree to these
            terms. If you do not agree, please do not use GitPortify.
          </p>
        </header>

        <div className="space-y-9 sm:space-y-10">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. About GitPortify</h2>
            <p className={paragraphClass}>
              GitPortify helps developers create, customize, and publish
              portfolio websites using supported features and integrations.
              Features may change as the platform develops, and not every
              feature may be available at all times.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Eligibility and Accounts</h2>
            <p className={paragraphClass}>
              You must be legally permitted to use GitPortify under the laws
              that apply to you. You agree to provide accurate information when
              requested and to keep your account information reasonably up to
              date.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              GitPortify uses <strong>Clerk</strong> to support account
              authentication and management. Through the available sign-up and
              sign-in options, you can authenticate using supported
              <strong> GitHub</strong> or <strong>GitLab</strong> options.
              Authentication availability depends on the options currently
              enabled in the application.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              When you choose GitHub or GitLab to sign in, that provider
              processes the authentication request and shares the information
              required to complete sign-in, subject to the permissions and
              configuration in place. Your use of these services is also
              governed by their own terms and policies.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              You are responsible for protecting access to your account and for
              activity carried out through it. If you suspect unauthorized
              access, take appropriate steps to secure your account and contact
              us.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>3. Acceptable Use</h2>
            <p className={paragraphClass}>
              You agree to use GitPortify lawfully and responsibly. You must
              not:
            </p>
            <ul className={listClass}>
              <li>
                Use the platform for unlawful, fraudulent, misleading, or
                deceptive activities.
              </li>
              <li>
                Upload or publish content that infringes another person&apos;s
                intellectual property, privacy, or other rights.
              </li>
              <li>
                Distribute malicious code or attempt to compromise the
                platform, its users, or its infrastructure.
              </li>
              <li>
                Attempt to gain unauthorized access to accounts, systems, or
                data.
              </li>
              <li>
                Abuse, disrupt, reverse engineer, or interfere with the service
                except where applicable law permits such activity.
              </li>
              <li>
                Use GitPortify in a way that violates the applicable terms or
                policies of a service you connect to it.
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Your Content and Responsibilities</h2>
            <p className={paragraphClass}>
              You remain responsible for the content you submit, import,
              customize, or publish through GitPortify. This may include
              profile information, projects, images, descriptions, links,
              skills, education, and work experience.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              You must have the rights and permissions needed to use and publish
              your content. You are responsible for ensuring that it is
              accurate, lawful, and appropriate for its intended audience.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              You grant GitPortify permission to process, store, display, and
              publish the content you provide to the extent reasonably
              necessary to operate the features you choose. This permission
              does not transfer ownership of your content to GitPortify.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>5. Authentication and Third-Party Providers</h2>
            <p className={paragraphClass}>
              Clerk provides authentication functionality for GitPortify, while
              GitHub and GitLab are the supported identity providers available
              through the sign-in flow. Clerk, GitHub, and GitLab are
              independent services and are not owned or controlled by
              GitPortify.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              Authentication does not necessarily mean that GitPortify can
              access all of your repositories or all information in your
              provider account. Any additional profile or project information
              accessed by GitPortify depends on the features you use, the
              integration configuration, and the permissions granted.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              Please review the providers&apos; terms and privacy information:
            </p>
            <ul className={listClass}>
              <li>
                <a
                  href="https://clerk.com/legal/terms"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={externalLinkClass}
                >
                  Clerk Terms of Service
                </a>
                {" · "}
                <a
                  href="https://clerk.com/legal/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={externalLinkClass}
                >
                  Clerk Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={externalLinkClass}
                >
                  GitHub Terms of Service
                </a>
                {" · "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={externalLinkClass}
                >
                  GitHub Privacy Statement
                </a>
              </li>
              <li>
                <a
                  href="https://about.gitlab.com/terms/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={externalLinkClass}
                >
                  GitLab Terms of Use
                </a>
                {" · "}
                <a
                  href="https://about.gitlab.com/privacy/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={externalLinkClass}
                >
                  GitLab Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>6. Public Portfolios</h2>
            <p className={paragraphClass}>
              When you publish a portfolio, the content you choose to publish
              may be publicly accessible through its portfolio URL. Visitors
              may view or share that content, and search engines or other
              third-party services may discover it.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              Review your portfolio before publishing. Do not publish
              passwords, access tokens, confidential business information,
              private repository details, or sensitive personal information.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>7. Intellectual Property</h2>
            <p className={paragraphClass}>
              GitPortify and its original branding, interface, software, and
              platform materials are protected by applicable intellectual
              property laws, except for content and components belonging to
              third parties or provided under separate licenses.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              You may not copy, redistribute, or commercially exploit
              GitPortify&apos;s protected materials without appropriate
              authorization. You retain the rights you hold in your own
              content, subject to the permissions needed to provide the
              features you use.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. Third-Party Services</h2>
            <p className={paragraphClass}>
              GitPortify may rely on third-party services for authentication,
              hosting, data storage, image delivery, and other functionality.
              Those services are operated by their respective providers and
              are subject to their own terms, privacy policies, and
              availability.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              We do not control third-party services and cannot guarantee their
              availability or continued operation. To the extent permitted by
              applicable law, GitPortify is not responsible for interruptions
              or changes originating from those providers.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>9. Service Availability and Changes</h2>
            <p className={paragraphClass}>
              We aim to keep GitPortify useful and reliable, but we do not
              guarantee that the service will always be available,
              uninterrupted, secure, or error-free.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              We may update, modify, suspend, or discontinue features as the
              platform evolves. Where appropriate, we will take reasonable
              steps to communicate material changes.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>
              10. Disclaimer and Limitation of Liability
            </h2>
            <p className={paragraphClass}>
              To the extent permitted by applicable law, GitPortify is provided
              on an &quot;as is&quot; and &quot;as available&quot; basis,
              without a guarantee that the service will meet every requirement
              or remain uninterrupted.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              To the extent permitted by applicable law, GitPortify disclaims
              liability for losses arising from the use of, or inability to
              use, the service. Nothing in these terms excludes or limits
              liability where such exclusion or limitation is prohibited by
              law.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>11. Suspension and Termination</h2>
            <p className={paragraphClass}>
              We may restrict, suspend, or terminate access where reasonably
              necessary to address violations of these terms, security
              concerns, misuse, or legal obligations.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              You may stop using GitPortify at any time. Account closure and
              data deletion depend on the functionality available in the
              service and the practices described in our{" "}
              <Link href="/legal/privacy-policy" className={internalLinkClass}>
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>12. Privacy</h2>
            <p className={paragraphClass}>
              Your use of GitPortify is also subject to our{" "}
              <Link href="/legal/privacy-policy" className={internalLinkClass}>
                Privacy Policy
              </Link>
              , which explains how information is collected, used, stored, and
              handled, including information processed through Clerk and the
              GitHub or GitLab sign-in flow.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>13. Changes to These Terms</h2>
            <p className={paragraphClass}>
              We may update these terms as the service develops or when
              operational or legal requirements change. The revised version
              will be published on this page with an updated date.
            </p>
            <p className={`mt-3 ${paragraphClass}`}>
              Where required by applicable law, we will provide notice of
              material changes or obtain any necessary consent. Updated terms
              apply from the date they take effect, subject to applicable law.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>14. Governing Law</h2>
            <p className={paragraphClass}>
              These terms are subject to applicable law. The governing law and
              dispute-resolution provisions should be finalized based on the
              operator&apos;s legal jurisdiction and applicable
              consumer-protection requirements.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>15. Contact</h2>
            <p className={paragraphClass}>
              If you have questions or concerns about these Terms &amp;
              Conditions, contact GitPortify:
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
            <Link href="/legal/privacy-policy" className={internalLinkClass}>
              Privacy Policy
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

