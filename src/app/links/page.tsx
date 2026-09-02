import type { Metadata } from "next";
import Image from "next/image";
import { shopLinks, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Book, shop our professional skincare lines, buy a gift card, view financing or leave a review for Boca Skin Company.",
  alternates: { canonical: "/links" },
};

export default function LinksPage() {
  return (
    <section style={{ background: "var(--color-paper)" }}>
      <div className="shell pt-[104px] md:pt-[150px] lg:pt-[164px] pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="eyebrow rise">Links</p>
            <h1 className="display d-xl mt-5 max-w-[12ch] rise">
              Everything in <span className="hinge">one</span> place.
            </h1>
            <div
              className="relative mt-9 wipe"
              style={{
                aspectRatio: "4 / 5",
                ["--curtain" as string]: "var(--color-paper)",
              }}
            >
              <Image
                src="/img/bsc-neon.webp"
                alt="Boca Skin Company"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul>
            {shopLinks.map((l, i) => (
              <li
                key={l.href}
                className="rise"
                style={{ ["--d" as string]: `${Math.min(i, 8) * 45}ms` }}
              >
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-7"
                  style={{ borderTop: "1px solid var(--color-rule)" }}
                >
                  <span className="display d-md transition-colors duration-300 group-hover:text-[color:var(--color-mocha)]">
                    {l.label}
                  </span>
                  <span className="label" style={{ color: "var(--color-mocha)" }}>
                    {l.note}{" "}
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      &#8599;
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mono-body mt-14 max-w-[62ch]"
          style={{ color: "var(--color-ink-55)" }}
        >
          Questions before you book? Call{" "}
          <a href={site.phoneHref} className="link-rule link-rule-on">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="link-rule link-rule-on">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
