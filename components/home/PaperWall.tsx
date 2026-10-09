import Zoomable from "@/components/Zoomable";

// "On paper": drawings and collage. Desktop: a loose row that tilts on hover; click to enlarge.
// Phones: a swipeable strip (tap to enlarge).
const PIECES = [
  { src: "/images/studio/charcoal-portrait.jpg", w: 675, h: 900, alt: "Charcoal portrait", label: "Charcoal — portrait", rotate: -4, offset: "md:mt-0" },
  { src: "/images/venice_drawing.jpeg", w: 900, h: 1191, alt: "Pen and ink drawing of a Venice canal", label: "Pen & ink — Venice", rotate: 3, offset: "md:mt-6" },
  { src: "/images/IMG_2955.jpeg", w: 900, h: 1199, alt: "Charcoal still life by a window", label: "Charcoal — window", rotate: -2, offset: "md:mt-0" },
  { src: "/images/studio/london.jpg", w: 607, h: 900, alt: "Pen and ink drawing of St Paul's Cathedral, London", label: "Pen & ink — London", rotate: 4, offset: "md:mt-8" },
  { src: "/images/studio/collage.jpg", w: 750, h: 1000, alt: "Collage of cut-out newspaper and magazine print", label: "Collage — recycled print", rotate: -5, offset: "md:mt-2" },
];

export default function PaperWall() {
  return (
    <div>
      <div className="mb-6 flex items-baseline justify-between gap-4 border-t border-paper/25 pt-3">
        <span className="label">01 — On paper</span>
        <span className="rotate-[-3deg] font-hand text-[22px] text-[#E8A48F] md:text-[24px]" aria-hidden="true">
          click any piece to look closer ↓
        </span>
      </div>
      <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:justify-between md:overflow-visible md:px-0 md:pb-0">
        {PIECES.map((p) => (
          <figure
            key={p.src}
            className={`w-[58vw] max-w-[260px] flex-none snap-center md:w-[17%] md:max-w-none ${p.offset}`}
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <Zoomable src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 768px) 17vw, 58vw" framed />
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">{p.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
