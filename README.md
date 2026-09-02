# Boca Skin Company

Marketing site for [Boca Skin Company](https://www.bocaskincompany.com), an advanced
aesthetics studio in Boca Raton, Florida.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · deployed on Vercel.

## Design system

Palette and type pairing are the studio's existing brand, sampled from the live site's
computed styles rather than approximated:

| Token | Value | Role |
|---|---|---|
| `--color-ink` | `#000000` | Text, the results stage |
| `--color-mocha` | `#775D4D` | The Consultation Line, accents, the footer |
| `--color-paper` | `#F7F3F0` | Primary canvas |
| `--color-paper-deep` | `#ECE5E0` | Secondary canvas |

Display type is **EB Garamond**, standing in for the brand's Garamond Premier Pro.
Functional type is **DM Mono**, standing in for Antarctican Mono. Both originals are
Adobe Fonts and cannot be self-hosted here.

Three rules are enforced globally: **0px radius, no shadows, no gradients.** Depth comes
only from 1px rules.

### The Consultation Line

One vertical mocha rule that changes function per section: the hero image's left
boundary, the chapter spine in "Does this sound like you" and Chloe's story, the
before/after reveal handle, the seam in the mobile nav overlay, and the underline
mechanic on every link. The grid is deliberately asymmetric and never defaults to 50/50,
because the studio's whole proposition is that there is no one-size-fits-all.

## Content integrity

Every string in `src/lib/content.ts` was extracted from the live site. Nothing is
invented. In particular:

- **No prices.** They live in the Boulevard booking system and are not published on the
  source site.
- **No business hours.** The source site publishes none.
- **No downtime or intensity ratings.** Assigning those would be making a medical claim.
- **No treatment names on the before/after cases.** The source material carries none.

### Before/after handling

The eight source composites were split into sixteen frames. Orientation and direction
were verified case by case: before is the left half (side-by-side) or the top half
(stacked) in all eight. Two cases whose frames are not registered to each other render
as a static matched pair rather than a wipe, because wiping between two different camera
angles would imply a transformation that is not in the photographs. Neither side is
graded, smoothed or retouched.

## Motion

One dominant motion per viewport. Transform, opacity and a curtain reveal only. Max 24px
travel, no blur, no rotation, no parallax, no scroll hijacking. Everything resolves to a
still state and stays still. `prefers-reduced-motion` is honored.

The reveal system **fails open**: the hidden start state only applies once a blocking
inline script confirms JS is running, and a watchdog removes it if hydration never
arrives. With JS off or broken the page renders complete and static.

> Note: reveals must never clip the observed element. Clipping it to zero width hides it
> from IntersectionObserver — both ours and `next/image`'s lazy loader — so the image
> never loads and the reveal never fires. The curtain is a pseudo element for that reason.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Deployment

Push to `main` on GitHub; Vercel auto-deploys production.

---

Built by [SyncedUp Solutions](https://websites.syncedupsolutions.com).
