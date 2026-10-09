// One source of truth for the four features: cover lines + Features section.
// Titles say plainly what each project is; personality lives in the design.
// Order matters: the first entry is the lead (PantryPal, Kira's solo project).

export type Feature = {
  slug: string;
  num: string; // 01–04, shown in red italic
  page: string; // magazine page on the cover
  kicker: string; // short category under the number
  coverTitle: string;
  title: string;
  italic: string; // phrase in `title` set in italic
  dek: string; // on small cards this shows on hover (and under the title on phones)
  /** `position`: object-position for the 4:3 crop; `halves`: labels for a side-by-side image. */
  image: { src: string; width: number; height: number; alt: string; position?: string; halves?: [string, string] };
  credit?: string;
  link: { href: string; label: string } | null; // null = case study coming soon
};

export const LEAD_PROCESS = ["Persona + problem", "Wireframes", "User testing", "Next iteration"];
export const LEAD_TOOLS = "Balsamiq · Miro · Figma · UX research";

export const FEATURES: Feature[] = [
  {
    slug: "pantrypal",
    num: "01",
    page: "P. 04",
    kicker: "Product design · UX research · Solo project · 2026",
    coverTitle: "PantryPal: a meal planner for first-time cooks",
    title: "PantryPal: a meal-planning app for students cooking for the first time",
    italic: "cooking for the first time",
    dek: "Planning meals on a student budget eats up time and often ends in wasted food. I designed PantryPal on my own, from a notebook sketch to a tested prototype: tell it what's in your pantry, what you can spend and how much time you have, and it plans your week and builds a cost-estimated grocery list.",
    image: {
      src: "/images/features/pantrypal-wireframes.png",
      width: 1500,
      height: 670,
      alt: "Four PantryPal screens: swap a meal, the weekly plan, the grocery list and a saved plan",
    },
    link: null,
  },
  {
    slug: "patent-dashboard",
    num: "02",
    page: "P. 08",
    kicker: "Machine learning",
    coverTitle: "Predicting patent approval from 408,000 applications",
    title: "Predicting patent approval from 408,000 USPTO applications",
    italic: "patent approval",
    dek: "With a partner, I trained a model that estimates approval odds on day one (74% accuracy) and built a Streamlit dashboard around it.",
    image: {
      src: "/images/features/patent-dashboard.jpg",
      width: 1600,
      height: 902,
      alt: "The patent dashboard returning a 13.1% estimated allowance probability",
      position: "left top",
    },
    link: { href: "https://github.com/kira-pan/predictive-patent-dashboard", label: "See the code ↗" },
  },
  {
    slug: "cup-fee",
    num: "03",
    page: "P. 12",
    kicker: "Reporting · Daily Cal",
    coverTitle: "Berkeley's 25-cent cup fee: more reusables, uneven compliance",
    title: "Berkeley's 25-cent cup fee: more reusables, uneven compliance",
    italic: "uneven compliance",
    dek: "Reporting on whether the city's disposable cup fee changed habits, and why some shops struggled to follow it.",
    image: { src: "/images/features/cup-fee.jpg", width: 1793, height: 1155, alt: "Three disposable cups on a table" },
    credit: "Photo: The Daily Californian Photo Department",
    link: {
      href: "https://www.dailycal.org/news/city/local-businesses/berkeley-s-25-cent-disposable-cup-fee-encourages-reusables-faces-compliance-challenges/article_5913a2f3-dda1-4fa5-a63a-ed10e6e22db6.html",
      label: "Read the story ↗",
    },
  },
  {
    slug: "paradise",
    num: "04",
    page: "P. 16",
    kicker: "GIS · Spatial analysis",
    coverTitle: "Mapping how Paradise rebuilt after the Camp Fire",
    title: "Mapping how Paradise rebuilt after the 2018 Camp Fire",
    italic: "rebuilt",
    dek: "With two teammates, I combined building permits, Census housing and population data, and fire perimeters into an ArcGIS StoryMap of the town's recovery, 2019–2025.",
    image: {
      src: "/images/features/paradise-before-after.jpg",
      width: 1988,
      height: 1116,
      alt: "Satellite view of Paradise, California: May 2018 on the left, December 2019 on the right",
      halves: ["Before", "After"],
    },
    link: { href: "https://arcg.is/0TPXXi2", label: "Open the StoryMap ↗" },
  },
];

/** Splits a title around its italic phrase so it can be rendered with <em>. */
export function splitTitle(f: Pick<Feature, "title" | "italic">) {
  const i = f.title.indexOf(f.italic);
  if (i < 0) return { before: f.title, em: "", after: "" };
  return { before: f.title.slice(0, i), em: f.italic, after: f.title.slice(i + f.italic.length) };
}
