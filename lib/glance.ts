// "At a glance" fact sheet shown on the cover. Kept short on purpose: one line per fact.
// `items` get a red ✦ each; `note` is one muted line under them; `text` is a plain line.
// A row with `summary` is collapsible: closed it shows only the summary (the orgs), and it
// opens on hover (desktop) or tap/Enter to list the full roles.

export type GlanceRow = {
  label: string;
  items?: { title: string; detail?: string }[];
  note?: string;
  text?: string;
  summary?: string;
};

export const GLANCE: GlanceRow[] = [
  {
    label: "Studying",
    items: [{ title: "B.A. Cognitive Science + Data Science" }, { title: "Certificate in Design Innovation" }],
    note: "UC Berkeley '28 · 3.92 GPA · Dean's Honors List",
  },
  {
    label: "Right now",
    summary: "Oracle · Berkeley Haas · DataStory",
    items: [
      { title: "AI Consultant", detail: "Oracle" },
      { title: "Research Apprentice", detail: "Berkeley Haas" },
      { title: "Director of Marketing", detail: "DataStory Consulting" },
    ],
  },
  {
    label: "Previously",
    summary: "Aflac · Daily Cal",
    items: [
      { title: "Data Strategy Consultant", detail: "Aflac" },
      { title: "Data Reporter + Deputy News Editor", detail: "Daily Cal" },
    ],
  },
  { label: "Looking for", text: "Summer 2027 internships" },
];

/** "The toolkit" box under At a glance: one tab per department, Code open by default.
 *  Source: Kira's resume skills + tools her portfolio work shows (Oct 2026). */
export const TOOLKIT: { tab: string; items: string[] }[] = [
  {
    tab: "Code",
    items: ["Python", "SQL", "R", "JavaScript", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Streamlit", "DuckDB", "Jupyter", "Git/GitHub", "LLM / AI tools"],
  },
  {
    tab: "Analysis",
    items: [
      "Machine learning",
      "Statistics + hypothesis testing",
      "Feature engineering",
      "Model evaluation",
      "EDA",
      "Data visualization",
      "Spatial analysis (ArcGIS)",
      "Google Analytics",
      "Excel",
    ],
  },
  {
    tab: "Design",
    items: ["Figma", "UX research", "Usability testing", "Adobe CC", "Canva", "CapCut"],
  },
];
