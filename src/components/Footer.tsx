import Link from "next/link";
import Image from "next/image";
import { site, nav } from "@/lib/content";

/**
 * The Consultation Line terminates here, at the booking action.
 * This is the single full mocha section on the site.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-mocha)", color: "var(--color-paper)" }}>
      <div className="shell">
        {/* booking */}
        <div className="chapter-tight grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow" style={{ color: "rgba(247,243,240,0.88)" }}>
              Begin
            </p>
            <h2 className="display d-xl mt-5 max-w-[15ch]">
              Your skin, read closely.
            </h2>
            <p className="mt-6 max-w-[54ch] deck" style={{ color: "rgba(247,243,240,0.88)" }}>
              Experience the difference of customized treatments that cater to
              your individual needs, and let your beauty shine like never
              before.
            </p>
          </div>
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-invert shrink-0"
          >
            Book a visit
            <span aria-hidden>&#8599;</span>
          </a>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid rgba(247,243,240,0.24)" }} />

        {/* directory */}
        <div className="py-14 md:py-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src="/img/logo-mocha.png"
              alt="Boca Skin Company"
              width={440}
              height={162}
              unoptimized
              className="h-[54px] w-auto"
            />
            <p
              className="meta mt-6 max-w-[30ch]"
              style={{ color: "rgba(247,243,240,0.88)" }}
            >
              {site.positioning}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow" style={{ color: "rgba(247,243,240,0.88)" }}>
              Visit
            </p>
            <a
              href={site.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block link-rule py-2.5"
              style={{ fontSize: 19, lineHeight: 1.45 }}
            >
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow" style={{ color: "rgba(247,243,240,0.88)" }}>
              Reach us
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={site.phoneHref} className="link-rule w-fit py-2.5" style={{ fontSize: 19 }}>
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-rule w-fit break-all py-2.5"
                style={{ fontSize: 15 }}
              >
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule w-fit py-2.5"
                style={{ fontSize: 19 }}
              >
                @bocaskincompany
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow" style={{ color: "rgba(247,243,240,0.88)" }}>
              Navigate
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Link href="/" className="link-rule w-fit py-2.5" style={{ fontSize: 19 }}>
                Home
              </Link>
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="link-rule w-fit py-2.5"
                  style={{ fontSize: 19 }}
                >
                  {n.label}
                </Link>
              ))}
              <Link href="/links" className="link-rule w-fit py-2.5" style={{ fontSize: 19 }}>
                Shop &amp; links
              </Link>
            </div>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid rgba(247,243,240,0.24)" }} />

        <div
          className="py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between meta"
          style={{ color: "rgba(247,243,240,0.88)" }}
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
