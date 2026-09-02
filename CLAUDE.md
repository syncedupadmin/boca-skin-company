# CLAUDE.md — Boca Skin Company

Marketing site for a Boca Raton medspa. Next.js 16 App Router, React 19, Tailwind v4.
Read `README.md` for the design system. This file covers the things that will bite you.

**Deploy:** plain `git push` to `main`. This repo is its own Vercel project
(`boca-skin-company`, team `nicks-projects-f40381ea`) and auto-deploys. It is NOT part of
SyncedUpWebsites and has no deploy script.

## Do not "fix" these — they are deliberate

1. **The site is `noindex` and its canonical is self-referential.** It is serving from
   `boca-skin-company.vercel.app` while the client's Squarespace site still owns
   `bocaskincompany.com`. Indexing this would register it as a duplicate. `site.url` reads
   `NEXT_PUBLIC_SITE_URL`; `isLiveDomain` in `src/lib/content.ts` gates `robots.ts` and the
   metadata robots directive. **To launch:** point the domain at the Vercel project and set
   `NEXT_PUBLIC_SITE_URL=https://www.bocaskincompany.com`. Indexing turns itself on.

2. **There are no prices, no business hours, no downtime or intensity ratings, and no
   treatment names attached to any before/after case.** The source site publishes none of
   these. Do not add them from inference. Prices live in the Boulevard booking widget on
   purpose so they cannot go stale here. This is a medical business; an invented claim is a
   liability, not a copy improvement.

3. **Results cases 07 and 08 render as a static matched pair, not a drag slider.** Their
   source frames are not registered to each other (different camera angles), so wiping
   between them would imply a transformation that is not in the photographs.

4. **The logo PNGs are opaque lockups, not transparent art.** `logo-paper.png` is black on
   `#f7f3f0`; `logo-mocha.png` is white on `#775d4d`. That is why the header sits on paper
   and the footer on mocha. They are served `unoptimized` at ~440px because downscaling from
   a larger source dissolves the hairline serifs.

## Hard design rules, enforced globally

`0px` radius (there is a `* { border-radius: 0 !important }`), no shadows, no gradients.
Depth comes only from 1px rules. Palette is exactly `#000000 / #775D4D / #FFFFFF / #F7F3F0`.
Italic is a semantic emphasis phrase inside a display headline only — never in buttons, nav,
service names, or as decoration.

## The reveal system

Reveal classes are `.rise`, `.wipe`, `.drawline`, observed by one IntersectionObserver in
`src/components/RevealRoot.tsx`. Optional per-element delay via `--d`.

- **Never apply `clip-path` to an element you also observe.** Clipping it to zero width hides
  it from IntersectionObserver *and* from `next/image`'s lazy loader, so the image never
  loads and the reveal never fires. `.wipe` therefore reveals with a pseudo-element curtain;
  set `--curtain` to the section's own background color.
- **It fails open.** The hidden start state lives under `html.reveal-ready`, added by a
  blocking inline script in `<head>`, with a watchdog that removes it if hydration never
  signals. With JS off the page renders complete. Keep it that way.

## Content

All copy lives in `src/lib/content.ts` and was extracted from the live source site. Write
American English. No em dashes in user-facing copy.

## Checks before pushing

`npm run lint` → `npx tsc --noEmit` → `npm run build`. A push to `main` ships to production.
