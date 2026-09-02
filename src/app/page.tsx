import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ResultsInstrument from "@/components/ResultsInstrument";
import Testimonials from "@/components/Testimonials";
import {
  philosophy,
  soundsLikeYou,
  ourWork,
  welcome,
  site,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      {/* =============================================== the premise ===== */}
      <section className="chapter" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <hr className="rule" />
          <div className="grid gap-10 pt-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
            <p className="eyebrow rise lg:pt-3">{philosophy.eyebrow}</p>
            <div>
              <h2 className="display d-lg rise max-w-[24ch]">
                At Boca Skin Company, we&rsquo;re firm believers that when it
                comes to skincare and beauty treatments,{" "}
                <span className="hinge" style={{ color: "var(--color-mocha)" }}>
                  there is no one-size-fits-all approach.
                </span>
              </h2>
              <p
                className="prose-bsc mt-8 rise"
                style={{ ["--d" as string]: "90ms", color: "var(--color-ink-80)" }}
              >
                {philosophy.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== does this sound like == */}
      <section
        className="chapter-tight"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
            <div className="rise lg:pt-2">
              <h2 className="display d-md max-w-[14ch]">
                {soundsLikeYou.eyebrow}
              </h2>
            </div>

            {/* the line becomes a chapter spine */}
            <ol
              className="relative pl-7 md:pl-12"
              style={{ borderLeft: "1px solid var(--color-rule)" }}
            >
              <span
                className="absolute left-[-1px] top-0 bottom-0 drawline"
                style={{ width: 1, background: "var(--color-mocha)" }}
                aria-hidden
              />
              {soundsLikeYou.items.map((it, i) => (
                <li
                  key={it.n}
                  className="rise pb-10 last:pb-0"
                  style={{ ["--d" as string]: `${i * 90}ms` }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="meta" style={{ color: "var(--color-mocha)" }}>
                      {it.n}
                    </span>
                    <h3 className="display d-sm">{it.claim}</h3>
                  </div>
                  <p
                    className="prose-bsc mt-3"
                    style={{ color: "var(--color-ink-80)" }}
                  >
                    {it.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p
            className="display d-lg mt-16 md:mt-24 max-w-[20ch] rise"
            style={{ marginInlineStart: "auto" }}
          >
            You are <span className="hinge">ready</span> to take your skin health
            to the next level.
          </p>
        </div>
      </section>

      {/* ================================================== our work ===== */}
      <section
        className="chapter"
        style={{ background: "var(--color-paper-deep)" }}
      >
        <div className="shell">
          <div className="max-w-[70ch]">
            <p className="eyebrow rise">{ourWork.eyebrow}</p>
            <p
              className="deck mt-6 rise"
              style={{ ["--d" as string]: "80ms", color: "var(--color-ink-80)" }}
            >
              {ourWork.body}
            </p>
          </div>

          <div className="mt-16 md:mt-20 flex flex-col gap-16 md:gap-24">
            {ourWork.specialties.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <article
                  key={s.n}
                  className={`grid gap-8 md:gap-14 items-center lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] ${
                    flip ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : ""
                  }`}
                >
                  <div
                    className={`relative wipe ${flip ? "lg:order-2" : ""}`}
                    style={{
                      aspectRatio: "3 / 2",
                      ["--curtain" as string]: "var(--color-paper-deep)",
                    }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1023px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>

                  <div className={flip ? "lg:order-1 lg:pr-10" : "lg:pl-6"}>
                    <div
                      className="flex items-baseline gap-4 pb-4 rise"
                      style={{ borderBottom: "1px solid var(--color-rule)" }}
                    >
                      <span className="meta" style={{ color: "var(--color-mocha)" }}>
                        {s.n}
                      </span>
                      <h3 className="display d-md">{s.title}</h3>
                    </div>
                    <p
                      className="prose-bsc mt-6 rise"
                      style={{
                        ["--d" as string]: "90ms",
                        color: "var(--color-ink-80)",
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rise">
            <Link href="/services" className="btn btn-mocha">
              Explore our services
              <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================== results ===== */}
      <ResultsInstrument />

      {/* ================================================== the room ===== */}
      <section className="chapter" style={{ background: "var(--color-paper)" }}>
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20 items-center">
            <div
              className="relative wipe"
              style={{
                aspectRatio: "3 / 2",
                ["--curtain" as string]: "var(--color-paper)",
              }}
            >
              <Image
                src="/img/room-lounge.webp"
                alt="The lounge at Boca Skin Company"
                fill
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="eyebrow rise">{welcome.eyebrow}</p>
              <h2 className="display d-lg mt-5 rise max-w-[20ch]">
                {welcome.statement}
              </h2>
              <div
                className="prose-bsc mt-7 rise"
                style={{ ["--d" as string]: "90ms", color: "var(--color-ink-80)" }}
              >
                {welcome.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4 rise">
                <Link href="/about" className="btn">
                  More about us
                </Link>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mocha"
                >
                  @bocaskincompany
                  <span aria-hidden>&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
