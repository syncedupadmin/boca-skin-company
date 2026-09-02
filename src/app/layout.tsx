import type { Metadata, Viewport } from "next";
import { EB_Garamond, DM_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealRoot from "@/components/RevealRoot";
import { site, isLiveDomain } from "@/lib/content";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const DESC =
  "Boca Skin Company is an advanced aesthetics studio in Boca Raton, Florida. HydraFacial, Morpheus8, SkinPen microneedling, Clear + Brilliant, chemical peels and IV therapy, customized to your skin.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boca Skin Company | Medical Meets Luxury, Boca Raton FL",
    template: "%s | Boca Skin Company",
  },
  description: DESC,
  applicationName: site.name,
  keywords: [
    "medspa Boca Raton",
    "HydraFacial Boca Raton",
    "Morpheus8 Boca Raton",
    "microneedling Boca Raton",
    "chemical peel Boca Raton",
    "Clear and Brilliant laser",
    "aesthetician Boca Raton",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Boca Skin Company | Medical Meets Luxury",
    description: DESC,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boca Skin Company | Medical Meets Luxury",
    description: DESC,
  },
  robots: isLiveDomain
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#F7F3F0",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  additionalType: "https://schema.org/HealthAndBeautyBusiness",
  name: site.name,
  description: DESC,
  url: site.url,
  telephone: `+1-${site.phone}`,
  email: site.email,
  image: `${site.url}/img/room-lounge.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    "Boca Raton, FL",
    "Delray Beach, FL",
    "Deerfield Beach, FL",
    "Parkland, FL",
    "Highland Beach, FL",
  ],
  sameAs: [site.instagram],
  hasMap: site.maps,
  slogan: site.positioning,
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: site.booking,
      inLanguage: "en-US",
    },
    result: { "@type": "Reservation", name: "Appointment" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${garamond.variable} ${dmMono.variable}`}>
      <head>
        {/* Blocking, pre-paint. Arms the reveal system only when JS actually
            runs, so no-JS and slow-JS visitors get the finished page instead
            of a blank one. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              `document.documentElement.classList.add('reveal-ready');` +
              // Watchdog: if hydration never reaches RevealRoot, drop the class
              // so the page shows itself rather than staying blank.
              `setTimeout(function(){if(!window.__bscReveal){` +
              `document.documentElement.classList.remove('reveal-ready')}},2500);`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link label">
          Skip to content
        </a>
        <RevealRoot />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
