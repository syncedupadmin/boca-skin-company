import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Boca Skin Company was founded by aesthetician Chloe Elliott in Boca Raton, Florida. Meet Chloe and Jordan, and the thinking behind a medspa built around customization.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { chloe, jordan, teamWork } = about;

  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section style={{ background: "var(--color-paper)" }}>
        <div className="shell pt-[104px] md:pt-[150px] lg:pt-[164px] pb-14 md:pb-20">
          <p className="eyebrow rise">{about.eyebrow}</p>
          <h1 className="display d-xl mt-6 max-w-[26ch] text-balance rise">
            {about.headline}
          </h1>
          <p
            className="deck mt-7 max-w-[52ch] rise"
            style={{ ["--d" as string]: "90ms", color: "var(--color-ink-80)" }}
          >
            {about.sub}
          </p>

          <div
            className="relative mt-12 md:mt-16 wipe"
            style={{
              aspectRatio: "16 / 9",
              ["--curtain" as string]: "var(--color-paper)",
            }}
          >
            <Image
              src="/img/room-busts.webp"
              alt="Inside Boca Skin Company"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- chloe */}
      <section
        className="chapter"
        style={{ background: "var(--color-paper-deep)" }}
      >
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
            <div className="lg:sticky lg:top-[120px] lg:self-start">
              <div
                className="relative wipe"
                style={{
                  aspectRatio: "4 / 5",
                  ["--curtain" as string]: "var(--color-paper-deep)",
                }}
              >
                <Image
                  src={chloe.image}
                  alt={`${chloe.name}, ${chloe.role}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 32vw"
                  className="object-cover"
                />
              </div>
              <p className="label mt-4" style={{ color: "var(--color-mocha)" }}>
                {chloe.name} &mdash; {chloe.role}
              </p>
            </div>

            <div>
              <h2 className="display d-lg max-w-[24ch] rise">{chloe.lead}</h2>
              <div
                className="prose-bsc mt-7 rise"
                style={{ color: "var(--color-ink-80)" }}
              >
                {chloe.body.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>

              {/* the line becomes a chapter spine */}
              <ol
                className="relative mt-12 pl-7 md:pl-12"
                style={{ borderLeft: "1px solid var(--color-rule)" }}
              >
                <span
                  className="absolute left-[-1px] top-0 bottom-0 drawline"
                  style={{ width: 1, background: "var(--color-mocha)" }}
                  aria-hidden
                />
                {chloe.chapters.map((ch, i) => (
                  <li
                    key={ch.k}
                    className="rise pb-9 last:pb-0"
                    style={{ ["--d" as string]: `${i * 70}ms` }}
                  >
                    <h3 className="display d-sm">
                      <span className="hinge" style={{ color: "var(--color-mocha)" }}>
                        {ch.k}
                      </span>
                    </h3>
                    <p
                      className="prose-bsc mt-2"
                      style={{ color: "var(--color-ink-80)" }}
                    >
                      {ch.body}
                    </p>
                  </li>
                ))}
              </ol>

              <div
                className="mt-12 pt-9"
                style={{ borderTop: "1px solid var(--color-rule)" }}
              >
                <p className="eyebrow rise">{chloe.solidified.title}</p>
                <ul className="mt-5 flex flex-col sm:flex-row sm:gap-10">
                  {chloe.solidified.points.map((p) => (
                    <li key={p} className="display d-sm py-2 rise">
                      {p}
                    </li>
                  ))}
                </ul>
                <p
                  className="prose-bsc mt-7 rise"
                  style={{ color: "var(--color-ink-80)" }}
                >
                  {chloe.solidified.close}
                </p>
                <p className="display d-md mt-7 max-w-[36ch] rise">
                  {chloe.solidified.legacy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- jordan */}
      <section className="chapter" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] lg:gap-20">
            <div className="lg:order-2 lg:sticky lg:top-[120px] lg:self-start">
              <div
                className="relative wipe"
                style={{
                  aspectRatio: "4 / 5",
                  ["--curtain" as string]: "var(--color-paper)",
                }}
              >
                <Image
                  src={jordan.image}
                  alt={`${jordan.name}, ${jordan.role}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 32vw"
                  className="object-cover"
                />
              </div>
              <p className="label mt-4" style={{ color: "var(--color-mocha)" }}>
                {jordan.name} &mdash; {jordan.role}
              </p>
            </div>

            <div className="lg:order-1">
              <h2 className="display d-xl rise">{jordan.name}</h2>
              <div
                className="prose-bsc mt-7 rise"
                style={{ color: "var(--color-ink-80)" }}
              >
                {jordan.body.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <p className="display d-md mt-9 max-w-[34ch] rise">
                {jordan.close}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ team work */}
      <section
        className="chapter"
        style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
      >
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 items-center">
            <div
              className="relative wipe"
              style={{
                aspectRatio: "4 / 5",
                ["--curtain" as string]: "var(--color-ink)",
              }}
            >
              <Image
                src="/img/team-duo.webp"
                alt="Chloe and Jordan of Boca Skin Company"
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="eyebrow rise" style={{ color: "var(--color-mocha-soft)" }}>
                Together
              </p>
              <h2 className="display d-xl mt-5 rise">
                Our <span className="hinge">(team)</span> work.
              </h2>
              <div
                className="prose-bsc mt-7 rise"
                style={{ color: "rgba(247,243,240,0.82)" }}
              >
                {teamWork.body.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4 rise">
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
        </div>
      </section>
    </>
  );
}
