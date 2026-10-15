"use client";

import { useRef, useState } from "react";
import { TOOLKIT } from "@/lib/glance";

/** Skills box under At a glance: boxed tabs (Code / Analysis / Design), Code open by default.
 *  Accessible tabs: arrow keys move between them. Chips are plain text boxes, not buttons. */
export default function Toolkit() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + TOOLKIT.length) % TOOLKIT.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section aria-labelledby="toolkit-title" className="border border-ink px-[18px] pb-4 pt-4">
      <h2 id="toolkit-title" className="label border-b border-ink pb-3">
        The toolkit
      </h2>
      <div role="tablist" aria-label="Skill areas" className="mt-3 flex gap-1.5">
        {TOOLKIT.map((t, i) => (
          <button
            key={t.tab}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`toolkit-tab-${i}`}
            aria-selected={active === i}
            aria-controls="toolkit-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`label min-h-[36px] border border-ink px-3 transition-colors duration-[600ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              active === i ? "bg-ink text-paper" : "text-ink hover:bg-ink/10"
            }`}
          >
            {t.tab}
          </button>
        ))}
      </div>
      <ul
        id="toolkit-panel"
        role="tabpanel"
        aria-labelledby={`toolkit-tab-${active}`}
        className="mt-3 flex min-h-[96px] flex-wrap content-start gap-1.5"
      >
        {TOOLKIT[active].items.map((s) => (
          <li key={s} className="border border-ink px-2 py-[3px] text-[13px] leading-[1.3]">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
