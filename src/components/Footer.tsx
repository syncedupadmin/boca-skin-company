import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/lib/content";

/**
 * The booking footer is a destination, not a thin strip. Black field, the CTA
 * set at display scale as a ruled text link rather than a button, and the neon
 * sign used as an environmental fragment cut by the right viewport edge.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const dim = "rgba(255,255,255,0.88)";
  const hair = "rgba(234,224,210,0.24)";

  return (
    <footer style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}>
      {/* ------------------------------------------------ booking field */}
      <div className="relative bleed overflow-hidden">
        {/* neon fragment, partially cut by the right edge */}
        <div
          className="pointer-events-none absolute right-0 bottom-0"
          style={{
            width: "min(62vw, 520px)",
            height: "min(46vh, 520px)",
            opacity: 0.9,
          }}
          aria-hidden
        >
          <Image
            src="/img/neon-fragment.webp"
            alt=""
            fill
            sizes="38vw"
            className="object-cover"
            style={{ objectPosition: "40% 50%" }}
          />
        </div>

        <div
          className="shell relative z-[2] flex flex-col justify-end"
          style={{
            minHeight: "clamp(420px, 70vh, 720px)",
            paddingTop: "clamp(72px, 9vw, 120px)",
            paddingBottom: "clamp(40px, 4vw, 56px)",
          }}
        >
          <p className="eyebrow" style={{ color: "var(--color-mocha-soft)" }}>
            Begin
          </p>

          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="display mt-6 w-fit"
            style={{
              fontSize: "clamp(46px, 8vw, 112px)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
              borderBottom: "1px solid var(--color-mocha-soft)",
              paddingBottom: "0.08em",
            }}
          >
            Book a visit <span aria-hidden>&#8599;</span>
          </a>

          <p
            className="mt-8 max-w-[44ch]"
            style={{ color: dim, fontSize: 18, lineHeight: 1.5 }}
          >
            Experience the difference of customized treatments that cater to
            your individual needs, and let your beauty shine like never before.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-3">
            <a href={site.phoneHref} className="link-rule py-2" style={{ fontSize: 21 }}>
              {site.phone}
            </a>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule py-2"
              style={{ fontSize: 21 }}
            >
              {site.address.street}, {site.address.city} {site.address.state}{" "}
              {site.address.zip}
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- utility */}
      <div className="shell" style={{ borderTop: `1px solid var(--color-mocha)` }}>
        <div className="py-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/img/logo-mocha.png"
              alt="Boca Skin Company"
              width={440}
              height={162}
              unoptimized
              className="h-[46px] w-auto"
            />
            <p className="meta mt-5" style={{ color: dim }}>
              {site.positioning}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow" style={{ color: "var(--color-mocha-soft)" }}>
              Reach us
            </p>
            <div className="mt-4 flex flex-col">
              <a
                href={`mailto:${site.email}`}
                className="link-rule w-fit break-all py-2"
                style={{ fontSize: 17 }}
              >
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule w-fit py-2"
                style={{ fontSize: 17 }}
              >
                @bocaskincompany
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow" style={{ color: "var(--color-mocha-soft)" }}>
              Navigate
            </p>
            <div className="mt-4 flex flex-col">
              <Link href="/" className="link-rule w-fit py-2" style={{ fontSize: 17 }}>
                Home
              </Link>
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="link-rule w-fit py-2"
                  style={{ fontSize: 17 }}
                >
                  {n.label}
                </Link>
              ))}
              <Link href="/links" className="link-rule w-fit py-2" style={{ fontSize: 17 }}>
                Shop &amp; links
              </Link>
            </div>
          </div>
        </div>

        <div
          className="py-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between meta"
          style={{ color: dim, borderTop: `1px solid ${hair}` }}
        >
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="link-rule">
              Privacy Policy
            </Link>
            <span>
              Powered by{" "}
              <a
                href="https://websites.syncedupsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule"
                style={{ color: "var(--color-paper)" }}
              >
                SyncedUp Solutions
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
