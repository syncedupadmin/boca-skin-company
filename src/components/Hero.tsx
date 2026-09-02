import Image from "next/image";
import Link from "next/link";
import { hero, site } from "@/lib/content";

/**
 * Hero. Geometry is final at 0ms — nothing here shifts layout.
 * Sequence: the Consultation Line draws down, the photograph opens from it,
 * the headline rises, then everything is still.
 *
 * Mobile and desktop are different compositions, not one layout scaled down.
 * On a phone the proposition comes first and the photograph follows it; the
 * claim must not sit below the fold behind a picture.
 */
export default function Hero() {
  return (
    <section
      className="relative"
      style={{ background: "var(--color-paper)" }}
      aria-label="Introduction"
    >
      <div className="shell">
        <div
          className="
            grid
            pt-[100px] pb-14
            md:pt-[140px] md:pb-20
            lg:grid-cols-[minmax(0,1fr)_clamp(300px,34vw,540px)]
            lg:grid-rows-[auto_auto] lg:items-end
            lg:min-h-[100svh] lg:pt-[140px] lg:pb-[76px]
          "
        >
          {/* 1 — the proposition */}
          <div className="lg:col-start-1 lg:row-start-1 lg:pr-[clamp(24px,4vw,88px)] lg:self-end">
            <p className="eyebrow rise" style={{ ["--d" as string]: "300ms" }}>
              {hero.eyebrow}
            </p>

            <h1 className="display d-hero mt-5 md:mt-7 max-w-[13ch] text-balance">
              <span className="block rise" style={{ ["--d" as string]: "360ms" }}>
                {hero.headlineLead}
              </span>
              <span
                className="block hinge rise"
                style={{ ["--d" as string]: "430ms", color: "var(--color-mocha)" }}
              >
                {hero.headlineItalic}
              </span>
              <span className="block rise" style={{ ["--d" as string]: "500ms" }}>
                {hero.headlineTail}
              </span>
            </h1>
          </div>

          {/* 2 — the photograph, opening from the Consultation Line */}
          <div className="relative my-9 lg:my-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-end">
            <div
              className="absolute left-0 top-0 bottom-0 hidden lg:block drawline"
              style={{
                width: 1,
                background: "var(--color-mocha)",
                ["--d" as string]: "80ms",
              }}
              aria-hidden
            />

            <div
              className="relative lg:ml-[clamp(28px,3vw,56px)] wipe"
              style={{
                aspectRatio: "4 / 5",
                ["--d" as string]: "140ms",
                ["--curtain" as string]: "var(--color-paper)",
              }}
            >
              <Image
                src="/img/hero-treatment.webp"
                alt="An aesthetician performing a device-led treatment at Boca Skin Company"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 34vw"
                className="object-cover"
              />
            </div>

            <p
              className="meta mt-3 lg:ml-[clamp(28px,3vw,56px)] rise"
              style={{ color: "var(--color-ink-55)", ["--d" as string]: "900ms" }}
            >
              Boca Raton, Florida
            </p>
          </div>

          {/* 3 — the detail */}
          <div
            className="flex flex-col gap-7 rise lg:col-start-1 lg:row-start-2 lg:pr-[clamp(24px,4vw,88px)] lg:pt-10"
            style={{ ["--d" as string]: "700ms" }}
          >
            <p className="deck max-w-[40ch]" style={{ color: "var(--color-ink-80)" }}>
              {hero.sub}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={site.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mocha"
              >
                Book a visit
                <span aria-hidden>&#8599;</span>
              </a>
              <Link href="/services" className="btn">
                Explore treatments
              </Link>
            </div>

            <p className="label" style={{ color: "var(--color-ink-55)" }}>
              {hero.positioning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
