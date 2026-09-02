import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { shopLinks, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Book, shop our professional skincare lines, buy a gift card, view financing or leave a review for Boca Skin Company.",
  alternates: { canonical: "/links" },
};

export default function LinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Links"
        title="Everything in one place"
        deck="Book, shop the lines we carry, buy a gift card or leave a review."
        image="/img/room-retail.webp"
        alt="The retail shelves at Boca Skin Company"
        objectPosition="42% 50%"
      />

      <section className="pad-lg" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
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

          <p
            className="mt-14 max-w-[62ch]"
            style={{ color: "var(--color-ink-55)" }}
          >
            Questions before you book? Call{" "}
            <a href={site.phoneHref} className="link-rule link-rule-on inline-block py-2">
              {site.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="link-rule link-rule-on inline-block py-2">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
