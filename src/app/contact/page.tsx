import type { Metadata } from "next";
import Image from "next/image";
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
      <section style={{ background: "var(--color-paper)" }}>
        <div className="shell pt-[104px] md:pt-[150px] lg:pt-[164px] pb-14 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-20 items-end">
            <div>
              <p className="eyebrow rise">Contact</p>
              <h1 className="display d-hero mt-6 max-w-[13ch] text-balance rise">
                Any questions? We&rsquo;d love to help.
              </h1>

              <dl className="mt-12">
                {rows.map((r, i) => (
                  <div
                    key={r.k}
                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-12 py-6 rise"
                    style={{
                      borderTop: "1px solid var(--color-rule)",
                      ["--d" as string]: `${i * 60}ms`,
                    }}
                  >
                    <dt
                      className="label pt-2 w-[84px]"
                      style={{ color: "var(--color-mocha)" }}
                    >
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
                <div
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-12 py-6 rise"
                  style={{ borderTop: "1px solid var(--color-rule)" }}
                >
                  <dt
                    className="label pt-2 w-[84px]"
                    style={{ color: "var(--color-mocha)" }}
                  >
                    Booking
                  </dt>
                  <dd>
                    <a
                      href={site.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-mocha"
                    >
                      Book a visit
                      <span aria-hidden>&#8599;</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block wipe"
                style={{
                  aspectRatio: "3 / 4",
                  ["--curtain" as string]: "var(--color-paper)",
                }}
              >
                <Image
                  src="/img/room-lounge.webp"
                  alt="The lounge at Boca Skin Company in Boca Raton"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  className="object-cover"
                />
              </a>
              <p className="meta mt-3" style={{ color: "var(--color-ink-55)" }}>
                5499 N Federal Hwy Suite D, Boca Raton, FL
              </p>
            </div>
          </div>
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
