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

export default function EditorsLetter() {
  return (
    <section id="letter" aria-labelledby="letter-title" className="container-page pt-20 md:pt-24">
      <SectionHead title="Letter from the editor" page="p. 02" />
      {/* Magazine split: headline + signature on the left, the letter at a readable width on the right. */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-12 xl:gap-x-16">
        <div className="flex flex-col gap-5 md:col-span-5">
          <h2
            id="letter-title"
            className="text-balance font-serif text-[44px] font-normal leading-[0.98] tracking-[-0.02em] md:text-[52px] xl:text-[60px]"
          >
            How a cognitive science student ended up at the <em>data desk</em>
          </h2>
          <p className="hidden rotate-[-3deg] font-hand text-[34px] text-accent md:block" aria-label="Signed, Kira">
            — Kira
          </p>
        </div>
        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <LetterBody paragraphs={LETTER} />
        </div>
      </div>
    </section>
  );
}
