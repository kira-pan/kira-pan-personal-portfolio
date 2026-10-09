"use client";

import { useState } from "react";
import SectionHead from "@/components/SectionHead";

// The storyline, told once near the top. Collapsed to a one-line teaser so Features are
// easy to reach; the full letter opens in place. Letter copy is Kira's own words — don't rewrite.

const LETTER = [
  "I study cognitive science because I’ve always been interested in how people think, make decisions, and respond to the world around them. Reporting for The Daily Californian gave me a different way to explore that. I learned how to ask better questions, figure out what actually matters in a story, fact-check everything, and explain it clearly.",
  "A lot of the stories I was most drawn to had data behind them, which is how I ended up at the data desk. From there, I started getting more interested in what you could do with the numbers themselves: building a model to predict patent approvals, turning years of federal filings into a usable dataset for Aflac, working on real-time motion scoring for Oracle, and now researching at Haas how people respond to AI-generated content.",
  "At the same time, I’ve never really wanted to choose between the analytical and creative sides of what I like. I draw, edit videos, design, and like building things people can actually use. For PantryPal, that meant designing around real students and testing what worked instead of just assuming I knew what they wanted.",
  "I think that’s the thread through most of what I do. I’m interested in people first: what they pay attention to, what they need, and why they make the choices they do. Data helps me understand that more clearly, and design and storytelling help me turn what I find into something useful.",
];

export default function EditorsLetter() {
  const [open, setOpen] = useState(false);

  return (
    <section id="letter" aria-labelledby="letter-title" className="container-page pt-12 md:pt-14">
      <SectionHead title="Letter from the editor" page="p. 02" compact />
      <div className="grid grid-cols-1 items-end gap-x-12 gap-y-5 lg:grid-cols-12">
        <h2
          id="letter-title"
          className="text-balance font-serif text-[36px] font-normal leading-none tracking-[-0.02em] md:text-[44px] lg:col-span-7"
        >
          How a cognitive science student ended up at the <em>data desk</em>
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-4 lg:col-span-5 lg:flex-nowrap">
          <p className="max-w-[360px] text-[15px] leading-[1.5] text-muted">
            Why I study how people think, what the newsroom taught me, and how it led to data.
          </p>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="letter-body"
            className="label min-h-[44px] flex-none border border-ink px-4 transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            {open ? "Close ↑" : "Read the letter ↓"}
          </button>
        </div>
      </div>

      <div id="letter-body" hidden={!open}>
        <div className="mt-7 gap-12 text-[17px] leading-[1.65] md:columns-2">
          {LETTER.map((p) => (
            <p key={p.slice(0, 24)} className="mb-[18px] break-inside-avoid-column">
              {p}
            </p>
          ))}
        </div>
        <p className="rotate-[-3deg] text-right font-hand text-[30px] text-accent" aria-label="Signed, Kira">
          Kira
        </p>
      </div>
    </section>
  );
}
