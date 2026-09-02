import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceCategories, site } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: `${cat.blurb} At Boca Skin Company in Boca Raton, Florida.`,
    alternates: { canonical: `/services/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const idx = serviceCategories.findIndex((c) => c.slug === slug);
  const next = serviceCategories[(idx + 1) % serviceCategories.length];

  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section style={{ background: "var(--color-paper)" }}>
        <div className="shell pt-[104px] md:pt-[150px] lg:pt-[160px]">
          <Link
            href="/services"
            className="label link-rule"
            style={{ color: "var(--color-mocha)" }}
          >
            &#8592; All services
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20 mt-10 md:mt-14 items-end">
            <div>
              <p className="eyebrow rise">Collection {cat.n}</p>
              <h1 className="display d-hero mt-5 max-w-[14ch] text-balance rise">
                {cat.title}
              </h1>
              <p
                className="deck mt-7 max-w-[46ch] rise"
                style={{ ["--d" as string]: "90ms", color: "var(--color-ink-80)" }}
              >
                {cat.blurb}
              </p>
              <div className="mt-9 rise">
                <a
                  href={site.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mocha"
                >
                  Book this treatment
                  <span aria-hidden>&#8599;</span>
                </a>
              </div>
            </div>

            {cat.image && (
              <div
                className="relative wipe"
                style={{
                  aspectRatio: "4 / 3",
                  ["--curtain" as string]: "var(--color-paper)",
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- the treatments */}
      <section className="chapter" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <div className="flex flex-col">
            {cat.treatments.map((t, i) => (
              <article
                key={t.name}
                className="grid gap-5 md:gap-10 md:grid-cols-[auto_minmax(0,0.65fr)_minmax(0,1.2fr)] py-10 md:py-14 rise"
                style={{
                  borderTop: "1px solid var(--color-rule)",
                  ["--d" as string]: `${Math.min(i, 5) * 60}ms`,
                }}
              >
                <span className="meta" style={{ color: "var(--color-mocha)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="display d-md md:sticky md:top-[110px] md:self-start">
                  {t.name}
                </h2>

                <div>
                  {t.body && (
                    <p className="prose-bsc" style={{ color: "var(--color-ink-80)" }}>
                      {t.body}
                    </p>
                  )}

                  {t.tiers && (
                    <div className="mt-8 flex flex-col">
                      {t.tiers.map((tier) => (
                        <div
                          key={tier.name}
                          className="py-6 first:pt-0"
                          style={{ borderTop: "1px solid var(--color-rule)" }}
                        >
                          <h3 className="display d-sm">{tier.name}</h3>
                          <p
                            className="prose-bsc mt-2"
                            style={{ color: "var(--color-ink-80)" }}
                          >
                            {tier.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {t.items && (
                    <ul className="mt-2 grid gap-0 sm:grid-cols-2">
                      {t.items.map((it) => (
                        <li
                          key={it}
                          className="py-3.5"
                          style={{ borderBottom: "1px solid var(--color-rule)" }}
                        >
                          <span style={{ fontSize: 21 }}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* next collection */}
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-baseline justify-between gap-6 pt-10 mt-4"
            style={{ borderTop: "1px solid var(--color-rule)" }}
          >
            <span className="label" style={{ color: "var(--color-mocha)" }}>
              Next collection
            </span>
            <span className="display d-md transition-colors duration-300 group-hover:text-[color:var(--color-mocha)]">
              {next.title}{" "}
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                &#8594;
              </span>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
