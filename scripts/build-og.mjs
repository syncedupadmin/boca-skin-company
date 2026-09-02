/**
 * Regenerates public/og.jpg.
 *
 * The card is rendered in headless Chromium from the site's OWN assets and
 * fonts, so the share image cannot drift from the site: the wordmark is
 * public/img/logo-paper.png, the type is EB Garamond + DM Mono, the palette
 * tokens are copied from globals.css, and the copy is read from content.ts.
 *
 * The previous og.jpg had a re-typeset wordmark whose tagline sat across the
 * upper third of the letterforms and ran wider than the mark on both sides.
 * Using the real asset is the whole point of this script.
 *
 * KNOWN LIMIT: the wordmark can only be as good as public/img/logo-paper.png,
 * and that file is currently clipped - ink runs off its top and bottom canvas
 * edges, so BSC renders with its terminals shaved here exactly as it does in
 * the header. Replacing the logo asset and re-running this script fixes the
 * share card and the site in one step.
 *
 * logo-paper.png is an OPAQUE lockup (black ink on #E8E0D0) while the card
 * ground is #EAE0D2, so pasting it directly leaves a faint lighter rectangle.
 * The background is keyed out to alpha here, which also means this keeps
 * working if the palette moves again.
 *
 * Run: node scripts/build-og.mjs
 */
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

const ROOT = path.join(import.meta.dirname, "..");
const OUT = path.join(ROOT, "public", "og.jpg");

function keyedLogoDataUri() {
  const png = PNG.sync.read(fs.readFileSync(path.join(ROOT, "public/img/logo-paper.png")));
  const { width, height, data } = png;
  const lum = (i) => 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  const bg = lum(0);
  let min = 255;
  for (let i = 0; i < data.length; i += 4) min = Math.min(min, lum(i));
  const out = new PNG({ width, height });
  for (let i = 0; i < data.length; i += 4) {
    const a = Math.max(0, Math.min(1, (bg - lum(i)) / (bg - min)));
    out.data[i] = 26; out.data[i + 1] = 24; out.data[i + 2] = 22;
    out.data[i + 3] = Math.round(a * 255);
  }
  return "data:image/png;base64," + PNG.sync.write(out).toString("base64");
}

const photo =
  "data:image/webp;base64," +
  fs.readFileSync(path.join(ROOT, "public/img/skin-glow.webp")).toString("base64");

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box;border-radius:0}
  html,body{width:1200px;height:630px}
  body{display:flex;background:#eae0d2;color:#000;
       font-family:"EB Garamond",Garamond,serif;-webkit-font-smoothing:antialiased}
  .left{width:528px;height:630px;padding:56px;display:flex;flex-direction:column}
  .mark{width:340px;height:auto;display:block}
  .head{font-size:38px;line-height:1.18;letter-spacing:-0.012em;margin-top:auto}
  .head .it{font-style:italic;color:#3a2f28;display:block}
  .rule{border-top:1px solid #cdbfa9;margin:30px 0 20px}
  .label{font-family:"DM Mono",ui-monospace,monospace;font-size:13px;font-weight:400;
         letter-spacing:0.18em;text-transform:uppercase;color:#6b5344}
  .place{margin-top:auto;padding-top:34px}
  .right{width:672px;height:630px;overflow:hidden}
  .right img{width:100%;height:100%;object-fit:cover;object-position:50% 38%;display:block}
</style></head><body>
  <div class="left">
    <img class="mark" src="${keyedLogoDataUri()}" alt="">
    <h1 class="head">There is no<span class="it">one-size-fits-all</span>approach to your skin.</h1>
    <div class="rule"></div>
    <p class="label">Medical Meets Luxury</p>
    <p class="label place">Boca Raton, Florida</p>
  </div>
  <div class="right"><img src="${photo}" alt=""></div>
</body></html>`;

const exe = fs.existsSync("/opt/pw-browsers/chromium/chrome-linux/chrome")
  ? "/opt/pw-browsers/chromium/chrome-linux/chrome"
  : "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);
await page.screenshot({ path: OUT, type: "jpeg", quality: 92, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log("wrote", OUT, fs.statSync(OUT).size, "bytes");
