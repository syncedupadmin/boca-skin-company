import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ background: "var(--color-paper)" }}>
      <div className="shell pt-[160px] pb-28 min-h-[70svh] flex flex-col justify-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="display d-xl mt-5 max-w-[16ch]">
          This page has moved on.
        </h1>
        <p
          className="deck mt-6 max-w-[42ch]"
          style={{ color: "var(--color-ink-80)" }}
        >
          The page you were looking for is not here, but everything else is.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-mocha">
            Back home
          </Link>
          <Link href="/services" className="btn">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
