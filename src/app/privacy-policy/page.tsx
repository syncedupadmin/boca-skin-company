import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Boca Skin Company, LLC collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section style={{ background: "var(--color-paper)" }}>
      <div className="shell pt-[104px] md:pt-[150px] lg:pt-[164px] pb-20 md:pb-28">
        <p className="eyebrow">Legal</p>
        <h1 className="display d-xl mt-5">Privacy Policy</h1>

        <div className="prose-bsc mt-10" style={{ color: "var(--color-ink-80)" }}>
          <p>
            This Privacy Notice for Boca Skin Company, LLC (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;), describes how and why we
            might access, collect, store, use, and/or share
            (&ldquo;process&rdquo;) your personal information when you use our
            services (&ldquo;Services&rdquo;), including when you:
          </p>
        </div>

        <ul className="mt-8 max-w-[62ch]">
          {[
            "Visit our website at bocaskincompany.com or any website of ours that links to this Privacy Notice.",
            "Engage with us in other related ways, including any sales, marketing or events.",
          ].map((t) => (
            <li
              key={t}
              className="py-5"
              style={{
                borderTop: "1px solid var(--color-rule)",
                color: "var(--color-ink-80)",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        <div
          className="mt-10 p-7 max-w-[62ch]"
          style={{ border: "1px solid var(--color-mocha)" }}
        >
          <p className="eyebrow">Mobile information</p>
          <p className="mt-3" style={{ color: "var(--color-ink-80)" }}>
            No mobile information or personally identifiable information will be
            shared with third parties/affiliates for marketing/promotional
            purposes.
          </p>
        </div>

        <p
          className="mono-body mt-10 max-w-[62ch]"
          style={{ color: "var(--color-ink-55)" }}
        >
          Questions about this notice? Email{" "}
          <a href={`mailto:${site.email}`} className="link-rule link-rule-on">
            {site.email}
          </a>{" "}
          or call{" "}
          <a href={site.phoneHref} className="link-rule link-rule-on">
            {site.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
