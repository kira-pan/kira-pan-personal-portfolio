// "At a glance" fact sheet shown on the cover. Kept short on purpose: one line per degree/role.
// `items` get a red ✦ each; `note` is one muted line under them; `text` is a plain line.

export type GlanceRow = {
  label: string;
  items?: { title: string; detail?: string }[];
  note?: string;
  text?: string;
};

export const GLANCE: GlanceRow[] = [
  {
    label: "Studying",
    items: [{ title: "B.A. Cognitive Science + Data Science" }, { title: "Certificate in Design Innovation" }],
    note: "UC Berkeley '28 · 3.92 GPA · Dean's Honors List",
  },
  {
    label: "Right now",
    items: [
      { title: "AI Consultant", detail: "Oracle" },
      { title: "Research Apprentice", detail: "Berkeley Haas" },
      { title: "Director of Marketing", detail: "DataStory Consulting" },
    ],
  },
  {
    label: "Previously",
    items: [
      { title: "Data Strategy Consultant", detail: "Aflac" },
      { title: "Data Reporter + Deputy News Editor", detail: "Daily Cal" },
    ],
  },
  { label: "Looking for", text: "Summer 2027 internships" },
];
