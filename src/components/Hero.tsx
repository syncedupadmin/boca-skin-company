import Image from "next/image";
import Link from "next/link";
import { hero, site } from "@/lib/content";

/**
 * Hero — a COLLISION composition.
 *
 * The previous version failed because the photograph sat politely beside the
 * type: a 484px rectangle on a large paper field, with a dead band between
 * the headline and the CTA. Nothing dominated, so the emptiness read as
 * unfinished rather than composed.
 *
 * Now the room is architecture-scale (61vw, full height, anchored to three
 * viewport edges) and the headline physically crosses into it. The left
 * column carries two anchors — display type at the top, a compact conversion
 * cluster at the bottom — so the space between them is tension, not vacancy.
 *
 * The headline is a single continuous line of type that crosses the image
 * boundary. An earlier version drew a second paper-colored copy clipped to
 * the image, but the room is bright beige, so the light copy had almost no
 * contrast against it. Black reads cleanly over this crop, and one unbroken
 * headline cutting the room is the stronger composition anyway.
 */
function Headline() {
  return (
    <h1 className="display d-hero max-w-[9ch] lg:max-w-[780px]">
      {hero.headlineLead} <span className="hinge">{hero.headlineItalic}</span>{" "}
      {hero.headlineTail}
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      className="relative bleed overflow-hidden"
      style={{ background: "var(--color-paper)" }}
      aria-label="Introduction"
    >
      {/* ------------------------------------------------------ desktop */}
      <div
        className="hidden lg:block relative"
        style={{ height: "min(920px, max(720px, calc(100svh - 84px)))" }}
      >
        {/* the room, anchored to top, right and bottom */}
        <div className="absolute inset-y-0 right-0" style={{ width: "61vw" }}>
          <Image
            src="/img/hero-room.webp"
            alt="The arched lounge at Boca Skin Company in Boca Raton"
            fill
            priority
            sizes="61vw"
            className="object-cover"
            style={{ objectPosition: "62% 42%" }}
          />
        </div>

        {/* one continuous headline cutting across the image boundary */}
        <div
          className="absolute z-[3] rise"
          style={{ left: "var(--gutter)", top: 128 }}
        >
          <Headline />
        </div>

        {/* conversion cluster, bottom-left */}
        <div
          className="absolute z-[2] rise"
          style={{
            left: "var(--gutter)",
            bottom: 52,
            maxWidth: 390,
            ["--d" as string]: "620ms",
          }}
        >
          <p className="eyebrow">{hero.eyebrow}</p>
          <p
            className="mt-4"
            style={{ color: "var(--color-ink-80)", fontSize: 19, lineHeight: 1.45 }}
          >
            {hero.sub}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
              Treatments
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- mobile */}
      <div className="lg:hidden">
        <div
          className="relative w-full"
          style={{ height: "clamp(350px, 46svh, 430px)" }}
        >
          <Image
            src="/img/hero-room.webp"
            alt="The arched lounge at Boca Skin Company in Boca Raton"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "60% 38%" }}
          />
        </div>

        {/* the headline crosses the bottom edge of the photograph */}
        <div className="relative z-[2] shell" style={{ marginTop: -50 }}>
          <div className="rise">
            <Headline />
          </div>
          <p
            className="mt-7 max-w-[38ch]"
            style={{ color: "var(--color-ink-80)", fontSize: 17, lineHeight: 1.5 }}
          >
            {hero.sub}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
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
              Treatments
            </Link>
          </div>
          <p className="eyebrow mt-7">{hero.eyebrow}</p>
        </div>
      </div>
    </section>
  );
}
