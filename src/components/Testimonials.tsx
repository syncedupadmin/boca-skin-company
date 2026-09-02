"use client";

import { useState } from "react";
import { testimonials, site } from "@/lib/content";

/**
 * Testimonials as an interface, not eight decorative quote cards.
 * Desktop is a 7/5 split: one quote at display scale on the left, all eight
 * names as a dense selectable index on the right. Eight rows pressed together
 * is the density; the large quote is the mass.
 * Mobile is a native scroll-snap filmstrip — no JS carousel, no dots.
 */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const active = testimonials[i];

  return (
    <section
      className="pad-lg"
      style={{ background: "var(--color-paper-deep)" }}
      aria-labelledby="reviews-title"
    >
      <div className="shell">
        <div className="flex items-baseline justify-between gap-6 pb-8">
          <h2 id="reviews-title" className="display d-md">
            In their own words
          </h2>
          <a
            href={site.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="label link-rule shrink-0 py-3"
            style={{ color: "var(--color-mocha)" }}
          >
            Read on Google &#8599;
          </a>
        </div>

        {/* ------------------------------------------------------ desktop */}
        <div
          className="hidden lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16"
          style={{ borderTop: "1px solid var(--color-rule)" }}
        >
          <blockquote
            className="pt-12 pr-6 flex flex-col justify-between"
            style={{ minHeight: 460 }}
          >
            <p
              key={active.name}
              className="display"
              style={{
                fontSize: "clamp(34px, 3.1vw, 46px)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
              }}
            >
              {active.quote}
            </p>
            <footer className="label mt-10" style={{ color: "var(--color-mocha)" }}>
              {active.name}
            </footer>
          </blockquote>

          <ul role="tablist" aria-label="Client reviews">
            {testimonials.map((t, idx) => (
              <li key={t.name}>
                <button
                  role="tab"
                  aria-selected={idx === i}
                  onClick={() => setI(idx)}
                  onMouseEnter={() => setI(idx)}
                  className="w-full text-left px-5 flex items-center justify-between gap-4 drow"
                  style={{
                    height: 62,
                    borderBottom: "1px solid var(--color-rule)",
                    background: idx === i ? "var(--color-ink)" : "transparent",
                    color: idx === i ? "var(--color-paper)" : "var(--color-ink)",
                  }}
                >
                  <span style={{ fontSize: 21 }}>{t.name}</span>
                  <span
                    className="label"
                    style={{
                      opacity: idx === i ? 1 : 0.35,
                      color: idx === i ? "var(--color-mocha-soft)" : "inherit",
                    }}
                  >
                    Read
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------------- mobile */}
        <div
          className="lg:hidden -mx-[var(--gutter)] px-[var(--gutter)] flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pt-8"
          style={{ borderTop: "1px solid var(--color-rule)" }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="shrink-0 snap-start flex flex-col justify-between"
              style={{
                width: "calc(100vw - 76px)",
                border: "1px solid var(--color-mocha)",
                padding: "26px 22px",
                minHeight: 280,
              }}
            >
              <p style={{ fontSize: 19, lineHeight: 1.42 }}>{t.quote}</p>
              <figcaption
                className="label mt-6"
                style={{ color: "var(--color-mocha)" }}
              >
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="label lg:hidden mt-4" style={{ color: "var(--color-ink-55)" }}>
          Swipe &#8594;
        </p>
      </div>
    </section>
  );
}
