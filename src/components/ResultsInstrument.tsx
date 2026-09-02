"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { results } from "@/lib/content";

/**
 * The Results Instrument.
 *
 * Honesty rules baked in:
 *  - Never auto-scrubs. Moving someone's skin without input misrepresents it.
 *  - Both frames occupy identical geometry; neither side is graded or retouched.
 *  - Cases whose source frames are not registered to each other render as a
 *    static matched pair instead of a wipe, because wiping between two
 *    different camera angles would fake a transformation that is not there.
 *  - No treatment name, session count or timeframe is shown, because the
 *    source material does not carry any.
 *
 * Layout: on desktop the stage is anchored to its own column so the
 * Consultation Line stays put and only the right edge moves as case aspect
 * changes. On mobile the heading comes before the stage and every control
 * sits after it, off the image.
 */
export default function ResultsInstrument() {
  const [i, setI] = useState(0);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const c = results[i];
  const isWipe = c.mode === "wipe";

  const setFromClientX = useCallback((clientX: number) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [dragging, setFromClientX]);

  const go = (n: number) => {
    setI((n + results.length) % results.length);
    setPos(50);
  };

  // Keep the active chip in view on the rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const chip = rail.querySelector<HTMLElement>(`[data-idx="${i}"]`);
    if (!chip) return;
    const cr = chip.getBoundingClientRect();
    const rr = rail.getBoundingClientRect();
    if (cr.left < rr.left || cr.right > rr.right) {
      rail.scrollTo({
        left: chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [i]);

  const dim = "rgba(247,243,240,0.66)";
  const hair = "rgba(247,243,240,0.22)";
  const STAGE_H = "clamp(440px, 66vh, 660px)";

  return (
    <section
      id="results"
      className="chapter"
      style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
      aria-labelledby="results-title"
    >
      <div className="shell">
        <div className="grid gap-9 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[auto_1fr] lg:items-start">
          {/* 1 — heading */}
          <div className="rise min-w-0 lg:col-start-1 lg:row-start-1">
            <p className="eyebrow" style={{ color: "var(--color-mocha-soft)" }}>
              Results
            </p>
            <h2 id="results-title" className="display d-xl mt-5 max-w-[16ch]">
              Results that <span className="hinge">speak</span> for themselves.
            </h2>
          </div>

          {/* 2 — the stage */}
          <div className="min-w-0 max-w-full lg:col-start-2 lg:row-start-1 lg:row-span-2">
            {isWipe ? (
              <div className="flex items-end justify-between mb-3 lg:hidden">
                <span className="label" style={{ color: "var(--color-mocha-soft)" }}>
                  Before
                </span>
                <span className="label" style={{ color: "var(--color-mocha-soft)" }}>
                  After
                </span>
              </div>
            ) : (
              <div className="mb-3">
                <span className="label" style={{ color: "var(--color-mocha-soft)" }}>
                  Before above &nbsp;/&nbsp; After below
                </span>
              </div>
            )}

            <div className="flex gap-4 items-stretch min-w-0 max-w-full">
              {isWipe && (
                <span
                  className="hidden lg:flex label items-start shrink-0"
                  style={{
                    color: "var(--color-mocha-soft)",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Before
                </span>
              )}

              <div
                ref={stageRef}
                className="relative select-none mx-auto lg:mx-0 wipe max-w-full"
                style={{
                  height: STAGE_H,
                  width: `calc(${STAGE_H} * ${c.ratio})`,
                  maxWidth: "100%",
                  transition: "width 520ms var(--ease-bsc)",
                  touchAction: "pan-y",
                  cursor: isWipe
                    ? dragging
                      ? "col-resize"
                      : "ew-resize"
                    : "default",
                  background: "#0a0a0a",
                  ["--curtain" as string]: "var(--color-ink)",
                }}
                onPointerDown={
                  isWipe
                    ? (e) => {
                        setDragging(true);
                        setFromClientX(e.clientX);
                      }
                    : undefined
                }
              >
                {isWipe ? (
                  <>
                    <Image
                      src={c.before}
                      alt={`Result ${c.n}, before`}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 1023px) 90vw, 34vw"
                      className="object-cover pointer-events-none"
                      draggable={false}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                    >
                      <Image
                        src={c.after}
                        alt={`Result ${c.n}, after`}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 1023px) 90vw, 34vw"
                        className="object-cover pointer-events-none"
                        draggable={false}
                      />
                    </div>

                    {/* the line is the only affordance on the image */}
                    <div
                      className="absolute top-0 bottom-0 z-[3]"
                      style={{
                        left: `${pos}%`,
                        width: 1,
                        background: "var(--color-paper)",
                        transform: "translateX(-0.5px)",
                      }}
                    >
                      <button
                        type="button"
                        role="slider"
                        aria-label={`Reveal after image for result ${c.n}`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(100 - pos)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowLeft")
                            setPos((p) => Math.max(0, p - 4));
                          if (e.key === "ArrowRight")
                            setPos((p) => Math.min(100, p + 4));
                          if (e.key === "Home") setPos(0);
                          if (e.key === "End") setPos(100);
                        }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          width: 48,
                          height: 48,
                          background: "transparent",
                          cursor: "ew-resize",
                        }}
                      >
                        <span
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block"
                          style={{
                            width: 11,
                            height: 11,
                            border: "1px solid var(--color-paper)",
                            background: "var(--color-ink)",
                          }}
                          aria-hidden
                        />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col">
                    <div className="relative flex-1">
                      <Image
                        src={c.before}
                        alt={`Result ${c.n}, before`}
                        fill
                        sizes="(max-width: 1023px) 90vw, 34vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      style={{ height: 1, background: "var(--color-paper)" }}
                      aria-hidden
                    />
                    <div className="relative flex-1">
                      <Image
                        src={c.after}
                        alt={`Result ${c.n}, after`}
                        fill
                        sizes="(max-width: 1023px) 90vw, 34vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              {isWipe && (
                <span
                  className="hidden lg:flex label items-end shrink-0"
                  style={{
                    color: "var(--color-mocha-soft)",
                    writingMode: "vertical-rl",
                  }}
                >
                  After
                </span>
              )}
            </div>
          </div>

          {/* 3 — the controls, deliberately off the image */}
          <div
            className="min-w-0 lg:col-start-1 lg:row-start-2 pt-7"
            style={{ borderTop: "1px solid rgba(247,243,240,0.2)" }}
          >
            <div className="flex items-baseline gap-4">
              <span
                className="display"
                style={{
                  fontSize: 46,
                  lineHeight: 1,
                  color: "var(--color-paper)",
                }}
              >
                {c.n}
              </span>
              <span className="meta" style={{ color: "rgba(247,243,240,0.5)" }}>
                / {String(results.length).padStart(2, "0")}
              </span>
              <span
                className="label ml-auto"
                style={{ color: "var(--color-mocha-soft)" }}
              >
                {isWipe ? "Drag to compare" : "Matched pair"}
              </span>
            </div>

            <div
              ref={railRef}
              className="mt-7 flex gap-2 overflow-x-auto no-scrollbar"
              role="tablist"
              aria-label="Result cases"
            >
              {results.map((r, idx) => (
                <button
                  key={r.id}
                  data-idx={idx}
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Result ${r.n}`}
                  onClick={() => go(idx)}
                  className="label shrink-0 px-4 py-2.5 transition-colors duration-200"
                  style={{
                    border: "1px solid",
                    borderColor: idx === i ? "var(--color-mocha-soft)" : hair,
                    background: idx === i ? "var(--color-mocha)" : "transparent",
                    color: idx === i ? "var(--color-paper)" : dim,
                  }}
                >
                  {r.n}
                </button>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => go(i - 1)}
                className="btn btn-invert !py-[12px] !px-[18px] !text-[11px]"
                aria-label="Previous result"
              >
                &#8592; Prev
              </button>
              <button
                onClick={() => go(i + 1)}
                className="btn btn-invert !py-[12px] !px-[18px] !text-[11px]"
                aria-label="Next result"
              >
                Next &#8594;
              </button>

              {isWipe && (
                <div className="flex ml-auto" style={{ border: `1px solid ${hair}` }}>
                  {(
                    [
                      ["Before", 100],
                      ["Split", 50],
                      ["After", 0],
                    ] as const
                  ).map(([lab, v]) => (
                    <button
                      key={lab}
                      onClick={() => setPos(v)}
                      aria-pressed={Math.round(pos) === v}
                      className="label px-4 py-2.5 transition-colors duration-200"
                      style={{
                        background:
                          Math.round(pos) === v
                            ? "var(--color-paper)"
                            : "transparent",
                        color:
                          Math.round(pos) === v ? "var(--color-ink)" : dim,
                      }}
                    >
                      {lab}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p
              className="mono-body mt-8 max-w-[46ch]"
              style={{ color: "rgba(247,243,240,0.55)" }}
            >
              Unretouched client photography from Boca Skin Company. Neither
              frame has been graded, smoothed or altered. Individual results
              vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
