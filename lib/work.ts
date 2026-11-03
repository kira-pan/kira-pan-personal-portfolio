// Selected work on the home page (v3, recruiter-first). Every line here is a fact Kira gave.
// Rule: no placeholders ship. If a detail is missing, leave the line out; add it later.

export type Case = {
  id: string;
  kicker: string;
  title: string;
  italic: string; // phrase in `title` set in italic
  meta: string;
  facts: { label: string; text: string }[];
  stats?: { value: string; label: string }[];
  tools?: string;
  links?: { href: string; label: string }[];
  media:
    | { kind: "diagram"; diagram: "aflac" | "haas"; caption: string }
    | { kind: "image"; src: string; width: number; height: number; alt: string; caption: string; framed?: boolean };
};

export const CASES: Case[] = [
  {
    id: "aflac",
    kicker: "Data engineering · Client: Aflac",
    title: "An annual pipeline that turns federal benefits filings into a clean broker map for Aflac",
    italic: "clean broker map",
    meta: "Data Strategy Consultant · Jan–Jun 2026 · Consulting team",
    facts: [
      {
        label: "We built",
        text: "An end-to-end Google Cloud pipeline: scrape DOL EFAST2 filings, extract brokers with Gemini batch calls, sort firms from people, normalize names, and test every run.",
      },
      {
        label: "My part",
        text: "I built the Gemini batch extraction, and the matching that ties a broker's name variants and merged firms back to one parent company.",
      },
    ],
    stats: [
      { value: "~90%", label: "Lower cost with batch AI calls" },
      { value: "92%+", label: "Carrier match rate" },
    ],
    tools: "GCP · Vertex AI / Gemini · Playwright · spaCy · Regex",
    media: { kind: "diagram", diagram: "aflac", caption: "Fig. 1 — The pipeline, end to end" },
  },
  {
    id: "haas",
    kicker: "Data science · Research",
    title: "Does AI-generated content change how viewers engage with creators?",
    italic: "engage with creators?",
    meta: "Research Apprentice · Berkeley Haas · Prof. Olivia Natan",
    facts: [
      { label: "The question", text: "How AI-generated content affects engagement with YouTube creators." },
      {
        label: "What I do",
        text: "Clean the data and find patterns in SQL, DuckDB and R; hand-label comments to benchmark GPT sentiment classifiers; help build a combined classifier.",
      },
      { label: "Status", text: "Ongoing. Methods shown here; findings stay with the paper." },
    ],
    tools: "SQL · DuckDB · R · GPT classifiers · Regression",
    links: [{ href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6885980", label: "Working paper on SSRN ↗" }],
    media: { kind: "diagram", diagram: "haas", caption: "Fig. 2 — Four ways we test it (methods only)" },
  },
  {
    id: "tot",
    kicker: "Product · Cal Hacks 13.0",
    title: "tot: a Chrome extension that asks students one question before Claude answers",
    italic: "one question",
    meta: "Oct 2026 · Team of 4 · Ideation, product design, user testing, demo + pitch",
    facts: [
      {
        label: "The problem",
        text: "It's easy to hand your thinking to AI. tot turns a pause into a nudge: one question first, then Claude builds on your answer.",
      },
      {
        label: "What I did",
        text: "Led ideation, designed the popup and brand, tested with 20+ students, made the demo video and pitched to the judges.",
      },
    ],
    stats: [{ value: "20+", label: "Students tested" }],
    links: [
      { href: "https://youtu.be/uZSEl36D6to", label: "Watch the demo ↗" },
      { href: "https://github.com/alexanderzhao2007/calhacks", label: "Code ↗" },
    ],
    media: {
      kind: "image",
      src: "/images/features/tot-popup.jpg",
      width: 1308,
      height: 784,
      alt: "tot's popup over Claude: “Which integration technique would you try first, and what feature of the expression suggests it?” with a box to type your thinking, Skip and Submit",
      caption: "Fig. 3 — The popup: one question, one quiet Skip",
    },
  },
  {
    id: "cup-fee",
    kicker: "Data reporting · The Daily Californian",
    title: "Berkeley's 25-cent cup fee: more reusables, uneven compliance",
    italic: "uneven compliance",
    meta: "Reporter · The Daily Californian",
    facts: [
      { label: "The question", text: "Did the city's disposable cup fee change habits, and why did some shops struggle to follow it?" },
      { label: "What I found", text: "More people bringing reusables, but compliance varied from shop to shop." },
    ],
    links: [
      {
        href: "https://www.dailycal.org/news/city/local-businesses/berkeley-s-25-cent-disposable-cup-fee-encourages-reusables-faces-compliance-challenges/article_5913a2f3-dda1-4fa5-a63a-ed10e6e22db6.html",
        label: "Read the story ↗",
      },
    ],
    media: {
      kind: "image",
      src: "/images/features/cup-fee.jpg",
      width: 1793,
      height: 1155,
      alt: "Three disposable cups on a table",
      caption: "Photo: The Daily Californian Photo Department",
      framed: true,
    },
  },
];

/** The smaller "More work" row. */
export const MORE_WORK = [
  {
    href: "https://pantrypal.kira-pan.com",
    kicker: "Product design · Solo",
    title: "PantryPal: a meal planner for first-time cooks",
    meta: "3 interviews → 9-screen flow → 2 think-alouds → V2 · Case study ↗",
    image: { src: "/images/features/pantrypal-wireframes.png", width: 1500, height: 670, alt: "Four PantryPal screens", contain: true },
  },
  {
    href: "https://github.com/kira-pan/predictive-patent-dashboard",
    kicker: "Machine learning · With a partner",
    title: "Predicting patent approval from 408,000 USPTO applications",
    meta: "74% accuracy · Streamlit dashboard · Code ↗",
    image: { src: "/images/features/patent-cover.jpg", width: 1200, height: 900, alt: "The USPTO Patent Allowance Prediction Dashboard home screen" },
  },
  {
    href: "https://arcg.is/0TPXXi2",
    kicker: "GIS · Spatial analysis",
    title: "Mapping how Paradise rebuilt after the Camp Fire",
    meta: "With two teammates · StoryMap ↗",
    image: { src: "/images/features/paradise-before-after.jpg", width: 1988, height: 1116, alt: "Satellite view of Paradise, California, before and after the Camp Fire" },
  },
];

/** Splits a title around its italic phrase so it can be rendered with <em>. */
export function splitItalic(title: string, italic: string) {
  const i = title.indexOf(italic);
  if (i < 0) return { before: title, em: "", after: "" };
  return { before: title.slice(0, i), em: italic, after: title.slice(i + italic.length) };
}
