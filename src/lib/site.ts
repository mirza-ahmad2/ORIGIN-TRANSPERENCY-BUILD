export const SITE = {
  brand: "Gia Quantia Labs",
  product: "ORIGIN",
  wordmark: "Gia Quantia",
  tagline: "Those who demand better tend to find it.",
  url: "https://giaquantialabs.com",
  sparkList: "https://list.giaquantialabs.com",
  newsletter: "https://morethansurviving.substack.com",
  social: {
    instagram: "https://instagram.com/giaquantialabs",
    linkedin:
      "https://www.linkedin.com/in/marianna-macaluso-6a1155a1/?skipRedirect=true",
    email: "Add here",
    facebook: "Add here",
    twitter: "Add here",
  },
  poweredBy: {
    label: "Powered by The Innovations",
    url: "https://theinnovations.tech/",
  },
  disclaimer:
    "Food supplement. Not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use if pregnant, breastfeeding, or taking medication.",
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/formula", label: "The Formula" },
  { to: "/who-its-for", label: "Who It's For" },
  { to: "/founder", label: "Founder" },
  { to: "/spark-list", label: "Spark List" },
] as const;

export const INGREDIENTS = [
  {
    name: "Nicotinamide Riboside",
    pair: "with TMG",
    dose: "300 mg",
    rationale:
      "A precursor studied for supporting cellular NAD+. Paired one-to-one with Trimethylglycine because raising NAD+ pathways can draw on the body's methyl donors — we account for it on the label.",
  },
  {
    name: "Trans-Resveratrol",
    pair: "with BioPerine®",
    dose: "Standardised",
    rationale:
      "Standardised trans-resveratrol, paired with black pepper extract studied for improving polyphenol bioavailability. Two ingredients that are consistently studied together — so we include them together.",
  },
  {
    name: "Coenzyme Q10",
    pair: "ubiquinone",
    dose: "100 mg",
    rationale:
      "A meaningful, adult-dose 100 mg of ubiquinone-form CoQ10 — studied for its role in mitochondrial energy production. Not a dusting.",
  },
  {
    name: "PQQ",
    pair: "paired with CoQ10",
    dose: "10 mg",
    rationale:
      "Pyrroloquinoline quinone at a clinically studied 10 mg, alongside CoQ10 because the two are researched most often as a pair, not in isolation.",
  },
  {
    name: "Rhodiolife®",
    pair: "clinically standardised Rhodiola",
    dose: "Full dose",
    rationale:
      "The standardised, patented Rhodiola rosea extract chosen because standardisation is how we know what's actually in the capsule — not a generic 'proprietary blend' Rhodiola.",
  },
  {
    name: "L-Theanine",
    pair: "with Rhodiolife®",
    dose: "Full dose",
    rationale:
      "Paired with Rhodiolife® — the two are studied together for a calmer quality of focus. We keep them paired here for the same reason.",
  },
  {
    name: "Quercetin",
    pair: "standalone",
    dose: "Full dose",
    rationale:
      "A polyphenol studied for supporting cellular health. Included on its own merits — not as filler behind a hero ingredient.",
  },
] as const;

/** True when a social/contact value is still a placeholder */
export function isPlaceholderLink(value: string) {
  return value.trim().toLowerCase() === "add here";
}
