import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      {/* ---------------------------------------------------------- hero */}
      <section style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <div className="grid items-end pt-[104px] pb-10 md:pt-[150px] md:pb-14 lg:grid-cols-[minmax(0,1fr)_clamp(260px,26vw,430px)] lg:pt-[160px] lg:pb-16">
            <div className="lg:pr-[clamp(24px,4vw,88px)] order-2 lg:order-1">
              <h1 className="display d-hero mt-6 max-w-[17ch] text-balance rise">
                We&rsquo;ll help you achieve your unique beauty goals, one
                personalized treatment at a time.
              </h1>
              <div className="mt-9 flex flex-wrap gap-4 rise">
                <a
                  href={site.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mocha"
                >
                  Book a visit
                  <span aria-hidden>&#8599;</span>
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
              <div
                className="relative lg:ml-[clamp(24px,2.5vw,48px)] wipe"
                style={{
                  aspectRatio: "3 / 4",
                  ["--curtain" as string]: "var(--color-paper)",
                }}
              >
                <Image
                  src="/img/room-bath.webp"
                  alt="A treatment suite at Boca Skin Company"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 28vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- the index */}
      <section
        className="chapter-tight"
        style={{ background: "var(--color-paper)" }}
      >
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
                      fontSize: 13,
                      lineHeight: 1.8,
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
            <a href={site.phoneHref} className="link-rule link-rule-on">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
