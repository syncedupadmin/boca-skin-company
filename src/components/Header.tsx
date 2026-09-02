"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{
          background: solid || open ? "var(--color-paper)" : "transparent",
          borderBottom: `1px solid ${solid && !open ? "var(--color-rule)" : "transparent"}`,
        }}
      >
        <div className="shell flex items-center justify-between h-[68px] md:h-[84px]">
          <Link
            href="/"
            aria-label="Boca Skin Company, home"
            className="relative block shrink-0 py-2"
          >
            <Image
              src="/img/logo-paper.png"
              alt="Boca Skin Company"
              width={440}
              height={159}
              priority
              unoptimized
              className="h-[36px] md:h-[46px] w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="label link-rule py-3 text-[color:var(--color-ink)] hover:text-[color:var(--color-mocha)] transition-colors duration-200"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mocha !py-[13px] !px-[24px]"
            >
              Book a visit
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden label flex items-center gap-3 py-3.5 pl-3 -mr-1"
          >
            <span className="relative block w-[26px] h-[9px]" aria-hidden>
              <span
                className="absolute left-0 block w-full h-px bg-current transition-transform duration-300"
                style={{
                  top: 0,
                  transform: open ? "translateY(4px) rotate(15deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 block w-full h-px bg-current transition-transform duration-300"
                style={{
                  bottom: 0,
                  transform: open ? "translateY(-4px) rotate(-15deg)" : "none",
                }}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile overlay — mocha nav panel against a full-bleed image panel.
          The seam between them is the Consultation Line. */}
      <div
        id="mobile-menu"
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
          transition: "visibility 0s linear " + (open ? "0s" : "560ms"),
        }}
        aria-hidden={!open}
      >
        <div
          className="flex-1 flex flex-col justify-end"
          style={{
            background: "var(--color-mocha)",
            clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
            transition: "clip-path 620ms var(--ease-bsc)",
          }}
        >
          <nav
            className="shell pb-9 pt-[86px] flex flex-col"
            aria-label="Mobile"
          >
            {nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="display d-lg text-[color:var(--color-paper)] py-2.5 border-b"
                style={{
                  borderColor: "rgba(247,243,240,0.22)",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transition: `opacity 520ms var(--ease-bsc) ${180 + i * 60}ms, transform 520ms var(--ease-bsc) ${180 + i * 60}ms`,
                }}
              >
                {n.label}
              </Link>
            ))}

            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-invert mt-8 justify-center"
              style={{
                opacity: open ? 1 : 0,
                transition: "opacity 520ms var(--ease-bsc) 440ms",
              }}
            >
              Book a visit
            </a>

            <div
              className="mt-8 flex flex-col gap-1.5"
              style={{
                color: "rgba(247,243,240,0.88)",
                opacity: open ? 1 : 0,
                transition: "opacity 520ms var(--ease-bsc) 520ms",
              }}
            >
              <a href={site.phoneHref} className="meta link-rule py-2">
                {site.phone}
              </a>
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="meta link-rule py-2"
              >
                {site.address.street}, {site.address.city} {site.address.state}
              </a>
            </div>
          </nav>
        </div>

        {/* image panel */}
        <div
          className="relative h-[24vh] min-h-[130px] shrink-0 overflow-hidden"
          style={{
            borderTop: "1px solid var(--color-mocha)",
            clipPath: open ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
            transition: "clip-path 620ms var(--ease-bsc) 80ms",
          }}
        >
          <Image
            src="/img/room-lounge.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
