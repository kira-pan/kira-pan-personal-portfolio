"use client";

import { useState } from "react";

/**
 * Shows the opening of the letter, with the rest one click away,
 * so the column stays about as tall as the "At a glance" box beside it.
 */
export default function LetterBody({ paragraphs }: { paragraphs: string[] }) {
  const [open, setOpen] = useState(false);

  // Collapsed: one paragraph on phones, two on wider screens.
  function visibility(i: number) {
    if (open || i === 0) return "";
    if (i === 1) return "hidden md:block";
    return "hidden";
  }

  return (
    <div>
      <div id="letter-body" className="mt-8 flex max-w-[640px] flex-col gap-5 text-[17px] leading-[1.65]">
        {paragraphs.map((p, i) => (
          <p key={p.slice(0, 24)} className={visibility(i)}>
            {p}
          </p>
        ))}
      </div>
      {open ? (
        <p className="mt-6 rotate-[-3deg] font-hand text-[34px] text-accent" aria-label="Signed, Kira">
          — Kira
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="letter-body"
        className="label mt-5 inline-flex min-h-[44px] items-center underline decoration-1 underline-offset-[6px] hover:text-accent"
      >
        {open ? "Show less ↑" : "Keep reading ↓"}
      </button>
    </div>
  );
}
