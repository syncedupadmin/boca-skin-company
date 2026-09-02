import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { serviceCategories, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HydraFacial, Morpheus8, SkinPen microneedling, Clear + Brilliant, DMK Enzyme Therapy, seven chemical peels, combination treatments and IV therapy at Boca Skin Company in Boca Raton, FL.",
  alternates: { canonical: "/services" },
};

function countOptions(cat: (typeof serviceCategories)[number]) {
  return cat.treatments.reduce(
    (n, t) => n + (t.items?.length ?? t.tiers?.length ?? 1),
    0,
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore our services"
        title="Services"
        deck="We'll help you achieve your unique beauty goals, one personalized treatment at a time."
        image="/img/hero-bath.webp"
        alt="A treatment suite at Boca Skin Company"
        objectPosition="55% 40%"
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

      {/* ------------------------------------------------------- the index */}
      <section className="pad-lg" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <div
            className="flex items-baseline justify-between pb-5"
            style={{ borderBottom: "1px solid var(--color-rule)" }}
          >
            <p className="eyebrow">All treatments</p>
            <p className="meta" style={{ color: "var(--color-ink-55)" }}>
              {serviceCategories.length} categories
            </p>
          </div>

          <ul>
            {serviceCategories.map((cat, i) => (
              <li
                key={cat.slug}
                className="rise"
                style={{ ["--d" as string]: `${Math.min(i, 6) * 55}ms` }}
              >
                <Link
                  href={`/services/${cat.slug}`}
                  className="group block py-8 md:py-10"
                  style={{ borderBottom: "1px solid var(--color-rule)" }}
                >
                  <div className="grid gap-4 md:gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_auto] md:items-baseline">
                    {/* the category name is the navigation */}
                    <h2 className="display d-lg transition-colors duration-300 group-hover:text-[color:var(--color-mocha)]">
                      {cat.title}
                    </h2>

                    <p
                      className="max-w-[46ch]"
                      style={{ fontSize: 17, lineHeight: 1.5, color: "var(--color-ink-80)" }}
                    >
                      {cat.blurb}
                    </p>

                    <span
                      className="label whitespace-nowrap"
                      style={{ color: "var(--color-mocha)" }}
                    >
                      {countOptions(cat)} treatments{" "}
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &#8594;
                      </span>
                    </span>
                  </div>

                  <p
                    className="meta mt-4"
                    style={{
                      color: "var(--color-ink-55)",
                      fontSize: 14,
                      lineHeight: 1.85,
                    }}
                  >
                    {cat.treatments
                      .flatMap((t) => t.items ?? t.tiers?.map((x) => x.name) ?? [t.name])
                      .join("  /  ")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <p
            className="mt-10 max-w-[62ch]"
            style={{ fontSize: 17, color: "var(--color-ink-80)" }}
          >
            Not sure which is right for you? Call us at{" "}
            <a href={site.phoneHref} className="link-rule link-rule-on inline-block py-2">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
