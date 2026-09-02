import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Boca Skin Company at 5499 N Federal Hwy Suite D, Boca Raton, FL 33487. Call 954-674-8173 or book online.",
  alternates: { canonical: "/contact" },
};

const rows = [
  { k: "Visit", v: `${site.address.street}\n${site.address.city}, ${site.address.state} ${site.address.zip}`, href: site.maps, ext: true },
  { k: "Call", v: site.phone, href: site.phoneHref, ext: false },
  { k: "Email", v: site.email, href: `mailto:${site.email}`, ext: false },
  { k: "Instagram", v: "@bocaskincompany", href: site.instagram, ext: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        deck="Any questions? We&rsquo;d love to help."
        image="/img/hero-bath.webp"
        alt="Inside Boca Skin Company"
        objectPosition="52% 44%"
        action={
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-mocha"
          >
            Book a visit
            <span aria-hidden>&#8599;</span>
          </a>
        }
      />

      {/* details */}
      <section className="pad-lg" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <dl style={{ borderTop: "1px solid var(--color-rule)" }}>
            {rows.map((r) => (
              <div
                key={r.k}
                className="drow grid grid-cols-[110px_minmax(0,1fr)] gap-6 md:gap-12 items-center px-0 lg:px-5 rise"
                style={{ borderBottom: "1px solid var(--color-rule)", minHeight: 104 }}
              >
                <dt className="label" style={{ color: "var(--color-mocha)" }}>
                  {r.k}
                </dt>
                <dd className="min-w-0">
                  <a
                    href={r.href}
                    target={r.ext ? "_blank" : undefined}
                    rel={r.ext ? "noopener noreferrer" : undefined}
                    className="display d-sm link-rule whitespace-pre-line break-words max-w-full py-2.5 inline-block"
                  >
                    {r.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Finding us */}
      <section style={{ background: "var(--color-mocha)", color: "var(--color-paper)" }}>
        <div className="shell chapter-tight">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="label" style={{ color: "rgba(247,243,240,0.88)" }}>
                Finding us
              </p>
              <p className="display d-lg mt-6 max-w-[18ch]">
                {site.address.street}, {site.address.city}, {site.address.state}{" "}
                {site.address.zip}
              </p>
            </div>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-invert shrink-0"
            >
              Get directions
              <span aria-hidden>&#8599;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
