import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Boca Skin Company was founded by aesthetician Chloe Elliott in Boca Raton, Florida. Meet Chloe and Jordan, and the thinking behind a medspa built around customization.",
  alternates: { canonical: "/about" },
};

/**
 * The founder story is the longest body copy on the site. Left as four
 * consecutive paragraphs it became four full phone screens of unbroken text,
 * which is the same "text document" failure the homepage had.
 *
 * So the page alternates material the whole way down: portrait field, mocha
 * statement, dense chapter cluster, second portrait field, black team field.
 * No run of prose is allowed to fill a viewport on its own.
 */
export default function AboutPage() {
  const { chloe, jordan, teamWork } = about;

  return (
    <>
      <PageHero
        eyebrow="About BSC"
        title="About"
        deck={about.headline}
        sub={about.sub}
        image="/img/hero-busts.webp"
        alt="Inside Boca Skin Company"
        objectPosition="55% 45%"
      />

      {/* ------------------------------------------- chloe, portrait field */}
      <section className="bleed" style={{ background: "var(--color-paper-deep)" }}>
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div
            className="relative lg:w-[46vw] shrink-0"
            style={{ minHeight: "clamp(400px, 62svh, 720px)" }}
          >
            <Image
              src={chloe.image}
              alt={`${chloe.name}, ${chloe.role}`}
              fill
              sizes="(max-width: 1023px) 100vw, 46vw"
              className="object-cover"
              style={{ objectPosition: "49% 20%" }}
            />
            <p
              className="absolute bottom-0 left-0 label slab"
              style={{ color: "var(--color-mocha)", padding: "16px 20px" }}
            >
              {chloe.name}, {chloe.role}
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center px-[var(--gutter)] py-[clamp(48px,6vw,88px)]">
            <h2 className="display d-lg max-w-[20ch] rise">{chloe.lead}</h2>
            <div
              className="mt-7 max-w-[52ch] rise"
              style={{ color: "var(--color-ink-80)", fontSize: 18, lineHeight: 1.55 }}
            >
              {chloe.body.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 first:mt-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ chapter cluster */}
      <section className="pad-lg" style={{ background: "var(--color-paper)" }}>
        <div className="shell lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,8fr)] lg:gap-16">
          <p className="eyebrow lg:sticky lg:top-[120px] lg:self-start">
            Her story
          </p>

          <ol className="mt-8 lg:mt-0" style={{ borderTop: "1px solid var(--color-mocha)" }}>
            {chloe.chapters.map((ch, i) => (
              <li
                key={ch.k}
                className="grid gap-2 md:grid-cols-[130px_minmax(0,1fr)] md:gap-8 py-8 rise"
                style={{
                  borderBottom: "1px solid var(--color-mocha)",
                  ["--d" as string]: `${i * 60}ms`,
                }}
              >
                <h3
                  className="display"
                  style={{ fontSize: "clamp(26px, 2.2vw, 32px)", color: "var(--color-mocha)" }}
                >
                  {ch.k}
                </h3>
                <p
                  className="max-w-[58ch]"
                  style={{ fontSize: 18, lineHeight: 1.55, color: "var(--color-ink-80)" }}
                >
                  {ch.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------- mocha statement */}
      <section
        className="bleed"
        style={{ background: "var(--color-mocha)", color: "#ffffff" }}
      >
        <div
          className="shell pad-lg flex flex-col justify-center"
          style={{ minHeight: "clamp(340px, 42vw, 520px)" }}
        >
          <h2
            className="display rise"
            style={{
              fontSize: "clamp(30px, 4.2vw, 62px)",
              lineHeight: 0.98,
              letterSpacing: "-0.028em",
              maxWidth: "20ch",
            }}
          >
            {chloe.solidified.legacy}
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row sm:gap-14 gap-4 rise">
            {chloe.solidified.points.map((pt) => (
              <p
                key={pt}
                className="display"
                style={{ fontSize: "clamp(20px, 1.8vw, 26px)", color: "rgba(255,255,255,0.88)" }}
              >
                {pt}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------ jordan, portrait field */}
      <section className="bleed" style={{ background: "var(--color-paper)" }}>
        <div className="flex flex-col lg:flex-row-reverse lg:items-stretch">
          <div
            className="relative lg:w-[46vw] shrink-0"
            style={{ minHeight: "clamp(400px, 62svh, 720px)" }}
          >
            <Image
              src={jordan.image}
              alt={`${jordan.name}, ${jordan.role}`}
              fill
              sizes="(max-width: 1023px) 100vw, 46vw"
              className="object-cover"
              style={{ objectPosition: "52% 16%" }}
            />
            <p
              className="absolute bottom-0 right-0 label slab"
              style={{ color: "var(--color-mocha)", padding: "16px 20px" }}
            >
              {jordan.name}, {jordan.role}
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center px-[var(--gutter)] py-[clamp(48px,6vw,88px)]">
            <h2 className="display d-xl rise">{jordan.name}</h2>
            <div
              className="mt-7 max-w-[52ch] rise"
              style={{ color: "var(--color-ink-80)", fontSize: 18, lineHeight: 1.55 }}
            >
              {jordan.body.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 first:mt-0">
                  {p}
                </p>
              ))}
            </div>
            <p className="display d-md mt-8 max-w-[28ch] rise">{jordan.close}</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ team field */}
      <section
        className="bleed"
        style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div
            className="relative lg:w-[50vw] shrink-0"
            style={{ minHeight: "clamp(400px, 66svh, 760px)" }}
          >
            <Image
              src="/img/team-duo.webp"
              alt="Chloe and Jordan of Boca Skin Company"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "50% 26%" }}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center px-[var(--gutter)] py-[clamp(56px,6vw,96px)]">
            <h2 className="display d-xl rise">{teamWork.title}</h2>
            <div
              className="mt-7 max-w-[46ch] rise"
              style={{ color: "rgba(247,243,240,0.88)", fontSize: 18, lineHeight: 1.55 }}
            >
              {teamWork.body.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 first:mt-0">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3 rise">
              <Link href="/services" className="btn btn-invert">
                Explore our services
              </Link>
              <a
                href={site.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-invert"
              >
                Book a visit
                <span aria-hidden>&#8599;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
