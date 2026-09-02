import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { serviceCategories, servicesIntro, site } from "@/lib/content";

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
          <div className="grid items-end pt-[104px] pb-10 md:pt-[150px] md:pb-14 lg:grid-cols-[minmax(0,1fr)_30vw] lg:pt-[160px] lg:pb-16">
            <div className="lg:pr-[6vw] order-2 lg:order-1">
              <p className="eyebrow rise">{servicesIntro.eyebrow}</p>
              <h1 className="display d-hero mt-6 max-w-[17ch] text-balance rise">
                We&rsquo;ll help you achieve your unique beauty goals,{" "}
                <span className="hinge" style={{ color: "var(--color-mocha)" }}>
                  one personalized treatment
                </span>{" "}
                at a time.
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
                className="absolute left-0 top-0 bottom-0 hidden lg:block drawline"
                style={{ width: 1, background: "var(--color-mocha)" }}
                aria-hidden
              />
              <div
                className="relative lg:ml-[max(24px,2.5vw)] wipe"
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
            <p className="eyebrow">The index</p>
            <p className="meta" style={{ color: "var(--color-ink-55)" }}>
              {serviceCategories.length} collections
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
                  <div className="grid gap-4 md:gap-8 md:grid-cols-[auto_minmax(0,1.05fr)_minmax(0,1fr)_auto] md:items-baseline">
                    <span
                      className="meta"
                      style={{ color: "var(--color-mocha)" }}
                    >
                      {cat.n}
                    </span>

                    {/* the category name is the navigation */}
                    <h2 className="display d-lg transition-colors duration-300 group-hover:text-[color:var(--color-mocha)]">
                      {cat.title}
                    </h2>

                    <p
                      className="mono-body max-w-[46ch]"
                      style={{ color: "var(--color-ink-55)" }}
                    >
                      {cat.blurb}
                    </p>

                    <span
                      className="label whitespace-nowrap"
                      style={{ color: "var(--color-mocha)" }}
                    >
                      {String(countOptions(cat)).padStart(2, "0")} options{" "}
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &#8594;
                      </span>
                    </span>
                  </div>

                  <p
                    className="meta mt-4 md:ml-[calc(2ch+2rem)]"
                    style={{ color: "var(--color-ink-55)" }}
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
            className="mono-body mt-10 max-w-[62ch]"
            style={{ color: "var(--color-ink-55)" }}
          >
            Pricing and availability are held in our booking system so they are
            never out of date here. Select a treatment to see live options, or
            call us at{" "}
            <a href={site.phoneHref} className="link-rule link-rule-on">
              {site.phone}
            </a>{" "}
            if you would rather talk it through first.
          </p>
        </div>
      </section>
    </>
  );
}
