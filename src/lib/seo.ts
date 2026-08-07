import { SITE } from "./site";

/** Canonical site origin for absolute SEO URLs */
export const SITE_URL = "https://giaquantialabs.com";

export const DEFAULT_KEYWORDS =
  "ORIGIN, NAD+, Gia Quantia Labs, NAD+ supplement, full dose supplements, Nicotinamide Riboside, CoQ10, PQQ, Rhodiolife, transparent label, Amazon UK, Marianna Macaluso";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
};

export function pageSeo({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  ogTitle,
  ogDescription,
  type = "website",
}: PageSeoInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = `${SITE_URL}/og-image.png`;
  const ogT = ogTitle ?? title;
  const ogD = ogDescription ?? description;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE.brand },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: ogT },
      { property: "og:description", content: ogD },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE.brand },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE.brand} — ${SITE.product}` },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogT },
      { name: "twitter:description", content: ogD },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: `${SITE.brand} — ${SITE.product}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
