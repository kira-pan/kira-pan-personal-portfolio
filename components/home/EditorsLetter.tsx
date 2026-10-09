import SectionHead from "@/components/SectionHead";
import LetterBody from "@/components/home/LetterBody";

const LETTER = [
  "I study cognitive science because I’ve always been interested in how people think, make decisions, and respond to the world around them. Reporting for The Daily Californian gave me a different way to explore that. I learned how to ask better questions, figure out what actually matters in a story, fact-check everything, and explain it clearly.",
  "A lot of the stories I was most drawn to had data behind them, which is how I ended up at the data desk. From there, I started getting more interested in what you could do with the numbers themselves: building a model to predict patent approvals, turning years of federal filings into a usable dataset for Aflac, working on real-time motion scoring for Oracle, and now researching at Haas how people respond to AI-generated content.",
  "At the same time, I’ve never really wanted to choose between the analytical and creative sides of what I like. I draw, edit videos, design, and like building things people can actually use. For PantryPal, that meant designing around real students and testing what worked instead of just assuming I knew what they wanted.",
  "I think that’s the thread through most of what I do. I’m interested in people first: what they pay attention to, what they need, and why they make the choices they do. Data helps me understand that more clearly, and design and storytelling help me turn what I find into something useful.",
];

// The storyline, told once, near the top: interests → experience → what ties it together.
// Letter copy is Kira's own words (final). Don't rewrite it.

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
          <LetterBody paragraphs={LETTER} />
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
