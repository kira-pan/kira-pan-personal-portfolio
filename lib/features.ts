// One source of truth for the four features: used by the cover lines and the Features section.
// Titles say plainly what each project is; personality lives in the deks and the design.

export type Feature = {
  slug: string;
  page: string; // magazine page number on the cover
  kicker: string; // what kind of work, at a glance
  coverTitle: string; // short version for the cover
  title: string; // full, plain-language headline
  italic: string; // the phrase in `title` set in italic
  dek: string;
  /** `halves`: labels for a side-by-side image, left then right. */
  media: { kind: "image"; src: string; alt: string; caption: string; halves?: [string, string] };
  link: { href: string; label: string };
};

export const FEATURES: Feature[] = [
  {
    slug: "patent-dashboard",
    page: "P. 04",
    kicker: "Machine learning · Dashboard · Nov 2025–Jan 2026",
    coverTitle: "Predicting patent approval from 408,000 applications",
    title: "Predicting patent approval from 408,000 USPTO applications",
    italic: "patent approval",
    dek: "Patent applicants wait months to learn if they'll be approved. With a partner, I trained a model on USPTO records to estimate the odds on day one, and built a dashboard anyone can use.",
    media: {
      kind: "image",
      src: "/images/features/patent-dashboard.jpg",
      alt: "The patent allowance dashboard showing a 13.1% estimated allowance probability and suggested next steps",
      caption: "The Streamlit dashboard returning an estimate and suggested next steps",
    },
    link: { href: "https://github.com/kira-pan/predictive-patent-dashboard", label: "See the code ↗" },
  },
  {
    slug: "cup-fee",
    page: "P. 08",
    kicker: "Reporting · City policy · The Daily Californian",
    coverTitle: "Berkeley's 25-cent cup fee: more reusables, uneven compliance",
    title: "Berkeley's 25-cent cup fee: more reusables, uneven compliance",
    italic: "uneven compliance",
    dek: "Reporting on whether the city's disposable cup fee changed habits, and why some shops struggled to follow it.",
    media: {
      kind: "image",
      src: "/images/features/cup-fee.jpg",
      alt: "Three disposable cups on a table",
      caption: "Photo: The Daily Californian Photo Department",
    },
    link: {
      href: "https://www.dailycal.org/news/city/local-businesses/berkeley-s-25-cent-disposable-cup-fee-encourages-reusables-faces-compliance-challenges/article_5913a2f3-dda1-4fa5-a63a-ed10e6e22db6.html",
      label: "Read the story ↗",
    },
  },
  {
    slug: "paradise",
    page: "P. 12",
    kicker: "GIS · Spatial analysis · Summer 2026",
    coverTitle: "Mapping how Paradise rebuilt after the Camp Fire",
    title: "Mapping how Paradise rebuilt after the 2018 Camp Fire",
    italic: "rebuilt",
    dek: "With two teammates, I combined building permits, Census housing and population data, and fire perimeters into an ArcGIS StoryMap of the town's recovery from 2019 to 2025.",
    media: {
      kind: "image",
      src: "/images/features/paradise-before-after.jpg",
      alt: "Satellite view of Paradise, California, before and after the Camp Fire, split side by side",
      caption: "Satellite view: May 2018 (left) and Dec 2019 (right)",
      halves: ["Before", "After"],
    },
    link: { href: "https://arcg.is/0TPXXi2", label: "Open the StoryMap ↗" },
  },
  {
    slug: "pantrypal",
    page: "P. 16",
    kicker: "Product design · UX research · 2026",
    coverTitle: "PantryPal: a meal planner for first-time cooks",
    title: "PantryPal: a meal-planning app for students cooking for the first time",
    italic: "cooking for the first time",
    dek: "From a notebook sketch to a tested prototype: plan a week of meals around what's already in your pantry, your budget and your time.",
    media: {
      kind: "image",
      src: "/images/features/pantrypal-logo.jpg",
      alt: "The PantryPal logo: a smiling P in a chef's hat, with the tagline Meal Planning Made for Real Student Life",
      caption: "The PantryPal brand mark, designed alongside the app",
    },
    link: { href: "/#features", label: "Case study coming soon" },
  },
];

/** Splits a title around its italic phrase so it can be rendered with <em>. */
export function splitTitle(f: Pick<Feature, "title" | "italic">) {
  const i = f.title.indexOf(f.italic);
  if (i < 0) return { before: f.title, em: "", after: "" };
  return { before: f.title.slice(0, i), em: f.italic, after: f.title.slice(i + f.italic.length) };
}
