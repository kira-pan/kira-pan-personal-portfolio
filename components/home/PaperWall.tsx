"use client";

import Image from "next/image";
import { useState } from "react";
import Draggable from "@/components/Draggable";

// "On paper": drawings and collage. Desktop: a loose, draggable row. Phones: a swipeable strip.
const PIECES = [
  { src: "/images/studio/charcoal-portrait.jpg", w: 675, h: 900, alt: "Charcoal portrait", label: "Charcoal — portrait", rotate: -4, offset: "md:mt-0" },
  { src: "/images/venice_drawing.jpeg", w: 900, h: 1191, alt: "Pen and ink drawing of a Venice canal", label: "Pen & ink — Venice", rotate: 3, offset: "md:mt-6" },
  { src: "/images/IMG_2955.jpeg", w: 900, h: 1199, alt: "Charcoal still life by a window", label: "Charcoal — window", rotate: -2, offset: "md:mt-0" },
  { src: "/images/studio/london.jpg", w: 607, h: 900, alt: "Pen and ink drawing of St Paul's Cathedral, London", label: "Pen & ink — London", rotate: 4, offset: "md:mt-8" },
  { src: "/images/studio/collage.jpg", w: 750, h: 1000, alt: "Collage of cut-out newspaper and magazine print", label: "Collage — recycled print", rotate: -5, offset: "md:mt-2" },
];

export default function PaperWall() {
  const [resetKey, setResetKey] = useState(0);

  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between gap-4 border-t border-paper/25 pt-3">
        <span className="label">01 — On paper</span>
        <span className="hidden items-baseline gap-5 md:flex">
          <span className="rotate-[-3deg] font-hand text-[24px] text-[#E8A48F]" aria-hidden="true">
            go on, rearrange them ↓
          </span>
          <button
            type="button"
            onClick={() => setResetKey((k) => k + 1)}
            className="label min-h-[44px] text-on-ink-muted underline decoration-1 underline-offset-[6px] hover:text-paper"
          >
            Reset
          </button>
        </span>
      </div>
      <div
        key={resetKey}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:justify-between md:overflow-visible md:px-0 md:pb-0"
      >
        {PIECES.map((p) => (
          <Draggable
            key={p.src}
            label={p.label}
            rotate={p.rotate}
            className={`w-[58vw] max-w-[260px] flex-none snap-center md:w-[17%] md:max-w-none ${p.offset}`}
          >
            <figure>
              <div className="art-frame overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 768px) 17vw, 58vw"
                  draggable={false}
                  className="feature-bw h-auto w-full"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">{p.label}</figcaption>
            </figure>
          </Draggable>
        ))}
      </div>
    </div>
  );
}
