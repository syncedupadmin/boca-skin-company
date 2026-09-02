"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole document. Server components opt in
 * by adding .rise / .wipe / .drawline plus an optional --d delay; nothing
 * else needs a client boundary.
 *
 * Elements resolve once and are then unobserved, so nothing re-animates on
 * scroll-back. Motion doctrine: it settles and stays settled.
 */
export default function RevealRoot() {
  useEffect(() => {
    const SEL = ".rise, .wipe, .drawline";

    // Tell the head watchdog we made it, so it leaves the class in place.
    (window as unknown as { __bscReveal?: boolean }).__bscReveal = true;

    const revealAll = () =>
      document.querySelectorAll(SEL).forEach((el) => el.classList.add("is-in"));

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    const scan = () => {
      document.querySelectorAll(SEL).forEach((el) => {
        if (el.classList.contains("is-in")) return;
        // Anything already on screen at mount resolves immediately so the
        // hero never waits on a scroll event.
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
          el.classList.add("is-in");
          return;
        }
        io.observe(el);
      });
    };

    const raf = requestAnimationFrame(scan);
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
