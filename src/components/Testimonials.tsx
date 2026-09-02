import { testimonials, site } from "@/lib/content";

/** Static. No carousel, no auto-advance — the words do the work. */
export default function Testimonials() {
  return (
    <section className="chapter" style={{ background: "var(--color-paper-deep)" }}>
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-20">
          <div className="rise lg:sticky lg:top-[120px] lg:self-start">
            <h2 className="display d-xl max-w-[12ch]">
              In their own words.
            </h2>
            <a
              href={site.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mocha mt-9"
            >
              Read reviews
              <span aria-hidden>&#8599;</span>
            </a>
          </div>

          <ul className="grid gap-0 sm:grid-cols-2 sm:gap-x-10">
            {testimonials.map((t, i) => (
              <li
                key={t.name}
                className="rise py-8 first:pt-0 sm:[&:nth-child(2)]:pt-0"
                style={{
                  borderTop: "1px solid var(--color-rule)",
                  ["--d" as string]: `${Math.min(i, 5) * 60}ms`,
                }}
              >
                <p style={{ fontSize: 19, lineHeight: 1.48 }}>{t.quote}</p>
                <p className="label mt-4" style={{ color: "var(--color-mocha)" }}>
                  {t.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
