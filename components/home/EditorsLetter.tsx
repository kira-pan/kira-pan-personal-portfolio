import SectionHead from "@/components/SectionHead";

// The storyline, told once, near the top: interests → experience → what ties it together.
// DRAFT COPY — Kira to edit into her own voice.

const GLANCE = [
  {
    label: "Studying",
    lines: ["B.A. Cognitive Science + Data Science", "UC Berkeley, expected 2028", "3.92 GPA · Dean's Honors List"],
  },
  {
    label: "Right now",
    lines: [
      "AI Consultant, Oracle",
      "Research Apprentice, Haas School of Business",
      "Director of Marketing, DataStory Consulting",
    ],
  },
  {
    label: "Previously",
    lines: [
      "Data Strategy Consultant, Aflac",
      "Data Reporter + Deputy News Editor, The Daily Californian",
    ],
  },
  {
    label: "Works in",
    lines: ["Python · SQL · R · pandas · scikit-learn", "XGBoost · Streamlit · ArcGIS", "Figma · Adobe Creative Suite"],
  },
  { label: "Looking for", lines: ["Summer 2027 internships"] },
];

export default function EditorsLetter() {
  return (
    <section id="letter" aria-labelledby="letter-title" className="container-page pt-20 md:pt-24">
      <SectionHead title="Letter from the editor" page="p. 02" />
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2
            id="letter-title"
            className="max-w-[720px] font-serif text-[44px] font-normal leading-[0.98] tracking-[-0.02em] md:text-[64px]"
          >
            How a cognitive science student ended up at the <em>data desk</em>
          </h2>
          <div className="mt-8 flex max-w-[640px] flex-col gap-5 text-[17px] leading-[1.65]">
            <p>
              I study cognitive science because I want to know how people think and decide. Reporting for
              The Daily Californian taught me the other half: how to find the story in what people tell you,
              check it, and explain it clearly on deadline.
            </p>
            <p>
              The stories I kept coming back to had data in them, so I moved to the data desk, and then into
              the work behind the numbers: a model that predicts patent approvals, pipelines that turned five
              years of federal filings into one clean dataset for Aflac, real-time motion scoring for Oracle,
              and research at Haas on how AI-generated videos change what people watch.
            </p>
            <p>
              I still draw, edit video and design things for people, like PantryPal, which I tested with
              students. This issue collects all of it. The thread through every page: figure out what people
              actually need, get the data right, and make the answer easy to see.
            </p>
          </div>
          <p className="mt-6 rotate-[-3deg] font-hand text-[34px] text-accent" aria-label="Signed, Kira">
            — Kira
          </p>
        </div>

        <aside aria-label="At a glance" className="md:col-span-5 lg:col-span-4 lg:col-start-9">
          <h3 className="label mb-1">At a glance</h3>
          <dl>
            {GLANCE.map((g, i) => (
              <div
                key={g.label}
                className={`grid grid-cols-[110px_1fr] gap-4 py-4 ${i === 0 ? "border-t border-ink" : "border-t border-hairline"}`}
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{g.label}</dt>
                <dd className="flex flex-col gap-1 text-[15px] leading-[1.4]">
                  {g.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
