"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * First-visit loader ("Printing the fall issue").
 * Whether it shows is decided before paint by the inline script in app/layout.tsx, which sets
 * <html data-loader="on"> on the first visit of a session (skipped for reduced motion).
 * Kira's own work only (no photos of her); stickers stay die-cut, without a frame.
 */
const PAGES = [
  { src: "/images/studio/charcoal-portrait.jpg", w: 675, h: 900, framed: true },
  { src: "/images/studio/sticker-datastory.png", w: 643, h: 700, framed: false },
  { src: "/images/venice_drawing.jpeg", w: 900, h: 1191, framed: true },
  { src: "/images/studio/london.jpg", w: 607, h: 900, framed: true },
  { src: "/images/studio/sticker-cssa.png", w: 600, h: 600, framed: false },
  { src: "/images/IMG_2955.jpeg", w: 900, h: 1199, framed: true },
  { src: "/images/studio/collage.jpg", w: 750, h: 1000, framed: true },
  { src: "/images/studio/sticker-roxie.png", w: 600, h: 600, framed: false },
  { src: "/images/studio/bird-calling.jpg", w: 695, h: 900, framed: true },
];
const REST = [-5, 4, -2, 6, -4, 3, -6, 2, -1];
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

export default function Loader() {
  const [active, setActive] = useState(false);
  const [t, setT] = useState(0);
  const [lifted, setLifted] = useState(false);
  const total = useRef(2500);
  const raf = useRef<number | null>(null);
  const timers = useRef<number[]>([]);
  const done = useRef(false);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    if (raf.current) cancelAnimationFrame(raf.current);
    setT(total.current);
    timers.current.push(
      window.setTimeout(() => setLifted(true), 250),
      window.setTimeout(() => {
        document.documentElement.removeAttribute("data-loader");
        setActive(false);
      }, 250 + 900),
    );
  }, []);

  useEffect(() => {
    if (document.documentElement.getAttribute("data-loader") !== "on") return;
    try {
      sessionStorage.setItem("kp-loader-seen", "1");
    } catch {}
    total.current = window.matchMedia("(max-width: 759px)").matches ? 1500 : 2500;
    document.documentElement.setAttribute("data-loader", "running");
    setActive(true);
    const t0 = performance.now();
    const tick = (now: number) => {
      const e = now - t0;
      if (e >= total.current) return finish();
      setT(e);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    const ts = timers.current;
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      ts.forEach(clearTimeout);
    };
  }, [finish]);

  if (!active) return null;

  const TOTAL = total.current;
  const beat = (TOTAL - 250) / PAGES.length;
  const p = Math.min(1, t / TOTAL);
  const pct = Math.round((1 - Math.pow(1 - p, 2)) * 100);
  const n = PAGES.length;

  return (
    <div
      id="loader"
      role="status"
      aria-label="Loading Kira Pan's portfolio. Click to skip."
      onClick={finish}
      className="fixed inset-0 z-[100] cursor-pointer select-none overflow-hidden border-b-2 border-ink bg-paper text-ink"
      style={{ transform: lifted ? "translateY(-100%)" : "translateY(0)", transition: `transform 850ms ${EASE}` }}
    >
      <div className="label absolute left-4 right-4 top-5 flex justify-between sm:left-10 sm:right-10 sm:top-8">
        <span>Kira Pan — Vol. 04</span>
        <span>Fall Issue 2026</span>
      </div>

      {/* The stack: whole pages, never cropped. The top page flies off to the side every beat. */}
      <div className="absolute left-1/2 top-[44%] sm:top-1/2" aria-hidden="true">
        {PAGES.map((pg, i) => {
          const gone = t >= (i + 1) * beat;
          const dir = i % 2 === 0 ? -1 : 1;
          const transform = gone
            ? `translate(-50%, -50%) translate(${dir * 110}vw, -140px) rotate(${dir * 38}deg)`
            : `translate(-50%, -50%) rotate(${REST[i]}deg)`;
          return (
            <div
              key={pg.src}
              className={`photo-warm absolute left-0 top-0 ${pg.framed ? "border-[8px] border-frame bg-frame" : ""}`}
              style={{
                width: pg.framed ? "min(240px, 52vw)" : "min(270px, 58vw)",
                zIndex: n - i,
                opacity: gone ? 0 : 1,
                transform,
                transition: `transform 650ms ${EASE}, opacity 650ms ${EASE}`,
              }}
            >
              <Image src={pg.src} alt="" width={pg.w} height={pg.h} sizes="270px" loading="eager" className="block h-auto w-full" />
            </div>
          );
        })}
        <span
          className="absolute left-[150px] top-[-170px] hidden rotate-[-5deg] whitespace-nowrap font-hand text-[28px] text-accent sm:block"
        >
          {t >= TOTAL - 300 ? "ready!" : "flipping through…"}
        </span>
      </div>

      <div className="absolute bottom-6 left-4 flex flex-col gap-2 sm:bottom-10 sm:left-10">
        <span className="font-serif text-[24px] italic sm:text-[34px]">Printing the fall issue</span>
        <span className="label text-muted">Click anywhere to skip</span>
      </div>
      <div className="absolute bottom-20 right-4 flex items-baseline gap-2 sm:bottom-4 sm:right-10 sm:gap-3">
        <span className="font-serif text-[96px] leading-[0.85] tracking-[-0.04em] sm:text-[220px]">
          {String(pct).padStart(3, "0")}
        </span>
        <span className="label text-[13px] text-muted">/100</span>
      </div>
      <div className="absolute bottom-0 left-0 h-[3px] bg-accent" style={{ width: `${pct}%` }} />
    </div>
  );
}
