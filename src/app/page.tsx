import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { philosophy, soundsLikeYou, ourWork, welcome, site } from "@/lib/content";

/**
 * The homepage alternates MATERIAL, not just content:
 *   paper + dominant room  →  mocha typographic field  →  paper diagnostic
 *   cluster  →  edge-to-edge image pair  →  full-bleed interior with an
 *   attached slab  →  review interface  →  black booking destination.
 *
 * The previous build ran paper/serif/paragraph/rule the whole way down, which
 * is why it still felt templated after the obvious ornaments were removed.
 */
export default function Home() {
  return (
    <>
      <Hero />

      {/* ============================================ mocha field ======== */}
      {/* Mass without another photograph: scale and color do the work. */}
      <section
        className="bleed"
        style={{ background: "var(--color-mocha)", color: "#ffffff" }}
      >
        <div
          className="shell pad-lg flex flex-col justify-center"
          style={{ minHeight: "clamp(360px, 46vw, 560px)" }}
        >
          <h2
            className="display rise"
            style={{
              fontSize: "clamp(38px, 5.4vw, 80px)",
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              maxWidth: "17ch",
            }}
          >
            {philosophy.statement}
          </h2>
          <p
            className="mt-8 rise"
            style={{
              maxWidth: "48ch",
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.88)",
              ["--d" as string]: "90ms",
            }}
          >
            {philosophy.body}
          </p>
        </div>
      </section>

      {/* ======================================= diagnostic cluster ====== */}
      <section className="pad-lg" style={{ background: "var(--color-paper)" }}>
        <div className="shell lg:grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <h2 className="display d-lg max-w-[11ch] rise">
              {soundsLikeYou.eyebrow}
            </h2>
            <p
              className="display mt-10 max-w-[16ch] rise"
              style={{ fontSize: "clamp(24px, 2vw, 30px)", lineHeight: 1.1, color: "var(--color-mocha)" }}
            >
              {soundsLikeYou.close}
            </p>
          </div>

          <ul className="mt-10 lg:mt-0" style={{ borderTop: "1px solid var(--color-mocha)" }}>
            {soundsLikeYou.items.map((it) => (
              <li
                key={it.claim}
                className="drow flex flex-col justify-center px-0 lg:px-6 py-8 lg:py-0"
                style={{
                  borderBottom: "1px solid var(--color-mocha)",
                  minHeight: 190,
                }}
              >
                <h3 className="display" style={{ fontSize: "clamp(26px, 2.7vw, 40px)", lineHeight: 1.04 }}>
                  {it.claim}
                </h3>
                <p
                  className="drow-sub mt-3 max-w-[62ch]"
                  style={{ fontSize: 17, lineHeight: 1.5, color: "var(--color-ink-55)" }}
                >
                  {it.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* ========================================= specialty diptych ===== */}
      {/* Two panels, edge to edge, no page margins. Hovering one gives it
          more room, which is the selection behaving like selection. */}
      <section className="bleed" aria-label="Our specialties">
        <div
          className="panels flex flex-col lg:flex-row"
          style={{ background: "var(--color-ink)" }}
        >
          {ourWork.specialties.map((s, idx) => (
            <article
              key={s.title}
              className="panel relative overflow-hidden flex-1"
              style={{
                minHeight: "clamp(420px, 62svh, 760px)",
                borderLeft: idx === 1 ? "1px solid var(--color-ink)" : undefined,
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
              {/* copy sits in a flush slab attached to the bottom edge */}
              <div
                className="absolute bottom-0 left-0 max-w-[380px]"
                style={{ background: "var(--color-paper)", padding: "24px 26px" }}
              >
                <h3 className="display" style={{ fontSize: "clamp(26px, 2.4vw, 38px)", lineHeight: 1.04 }}>
                  {s.title}
                </h3>
                <p
                  className="mt-2"
                  style={{ fontSize: 16, lineHeight: 1.5, color: "var(--color-ink-80)" }}
                >
                  {s.lead}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================ the room =========== */}
      {/* Full-bleed interior touching every edge, with the welcome text as a
          slab pinned into the bottom-left corner. Not centered text on a photo. */}
      <section className="bleed relative" aria-label="Inside Boca Skin Company">
        <div
          className="relative w-full"
          style={{ height: "clamp(470px, 78vh, 820px)" }}
        >
          <Image
            src="/img/room-wide.webp"
            alt="A treatment suite at Boca Skin Company"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 46%" }}
          />
        </div>

        <div className="shell">
          <div
            className="slab relative z-[2]"
            style={{ marginTop: "clamp(-96px, -6vw, -48px)", maxWidth: 500 }}
          >
            <h2 className="display d-md">{welcome.statement}</h2>
            <div className="mt-5" style={{ color: "var(--color-ink-80)", fontSize: 17, lineHeight: 1.55 }}>
              <p>{welcome.body[0]}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
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
      </section>

      {/* ====================================== bridge to services ======= */}
      <section className="pad-md" style={{ background: "var(--color-paper)" }}>
        <div className="shell lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:items-end">
          <p className="display d-md max-w-[22ch] rise">{ourWork.body}</p>
          <div className="mt-8 lg:mt-0 lg:justify-self-end rise">
            <Link href="/services" className="btn btn-mocha">
              Explore our services
              <span aria-hidden>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
