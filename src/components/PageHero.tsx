import Image from "next/image";

/**
 * Interior-page hero, built on the same COLLISION rule as the homepage:
 * architecture-scale photography anchored to the top, right and bottom
 * viewport edges, with the title crossing into it.
 *
 * Deliberately shorter than the homepage hero so interior pages get to their
 * content quickly, but tall enough that the photograph is a field rather than
 * a decorative rectangle.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  deck,
  image,
  alt,
  objectPosition = "60% 45%",
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  deck?: string;
  image: string;
  alt: string;
  objectPosition?: string;
  action?: React.ReactNode;
}) {
  return (
    <section
      className="relative bleed overflow-hidden"
      style={{ background: "var(--color-paper)" }}
    >
      {/* -------------------------------------------------------- desktop */}
      <div
        className="hidden lg:block relative"
        style={{ height: "min(760px, max(560px, calc(82svh - 84px)))" }}
      >
        <div className="absolute inset-y-0 right-0" style={{ width: "54vw" }}>
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="54vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>

        {/* One vertically-centred cluster. The homepage hero can afford two
            anchors because it is full height; at 650px that same split just
            opens a void in the middle of the left column. */}
        <div
          className="absolute z-[3] inset-y-0 flex flex-col justify-center rise"
          style={{ left: "var(--gutter)", maxWidth: "min(34vw, 470px)" }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display d-hero mt-4">{title}</h1>
          {deck && (
            <p
              className="mt-6"
              style={{ fontSize: "clamp(20px, 1.6vw, 25px)", lineHeight: 1.3 }}
            >
              {deck}
            </p>
          )}
          {sub && (
            <p
              className="mt-4"
              style={{ color: "var(--color-ink-80)", fontSize: 17, lineHeight: 1.5 }}
            >
              {sub}
            </p>
          )}
          {action && <div className="mt-8">{action}</div>}
        </div>
      </div>

      {/* --------------------------------------------------------- mobile */}
      <div className="lg:hidden">
        <div
          className="relative w-full"
          style={{ height: "clamp(280px, 38svh, 380px)" }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
        {/* The title crosses the photograph's bottom edge; the eyebrow does
            not. Pulling the whole block up put a mocha label on a light beige
            photo, where it was unreadable. */}
        <div className="relative z-[2] shell pt-7">
          <div className="rise">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display d-hero mt-4">{title}</h1>
            {deck && (
              <p className="mt-5 max-w-[26ch]" style={{ fontSize: 21, lineHeight: 1.3 }}>
                {deck}
              </p>
            )}
          </div>
          {sub && (
            <p
              className="mt-6 max-w-[40ch]"
              style={{ color: "var(--color-ink-80)", fontSize: 17, lineHeight: 1.5 }}
            >
              {sub}
            </p>
          )}
          {action && <div className="mt-6">{action}</div>}
        </div>
      </div>
    </section>
  );
}
