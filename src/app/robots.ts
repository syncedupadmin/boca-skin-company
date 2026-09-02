import type { MetadataRoute } from "next";
import { site, isLiveDomain } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  // A staging deployment must never be indexed: its canonicals would point at
  // the client's live domain and register this as a duplicate.
  if (!isLiveDomain) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/privacy-policy"] }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
