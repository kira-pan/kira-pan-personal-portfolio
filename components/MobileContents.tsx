"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", num: "00", title: "The cover", page: "p. 01" },
  { id: "features", num: "01", title: "Features", page: "p. 04" },
  { id: "case-files", num: "02", title: "Case Files", page: "p. 20" },
  { id: "desk", num: "03", title: "The Desk", page: "p. 26" },
  { id: "studio", num: "04", title: "Studio", page: "p. 30" },
  { id: "about", num: "05", title: "Contributor's Note", page: "p. 36" },
];

/**
 * Phones only: once you're past the cover, a bar follows you at the bottom of the screen,
 * showing where you are. Tapping it opens the contents as a sheet.
 */
export default function MobileContents() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.slice(1).forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    const letter = document.getElementById("letter");
    const onTop = () => {
      if (letter && letter.getBoundingClientRect().top > window.innerHeight * 0.5) setCurrent("top");
    };
    window.addEventListener("scroll", onTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onTop);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const here = SECTIONS.find((s) => s.id === current) ?? SECTIONS[0];

  function go(id: string) {
    setOpen(false);
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="md:hidden">
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-ink/45" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Contents"
            className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink bg-paper px-4 pb-5 pt-4"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-serif text-[34px] leading-none">
                Con<em>tents</em>
              </span>
              <button type="button" onClick={() => setOpen(false)} className="label min-h-[44px] pl-4">
                Close ✕
              </button>
            </div>
            <nav aria-label="Sections">
              {SECTIONS.map((s, i) => {
                const isHere = s.id === current;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(s.id)}
                    aria-current={isHere ? "true" : undefined}
                    className={`flex min-h-[48px] w-full items-baseline gap-3.5 py-2.5 text-left ${i === 0 ? "border-t border-ink" : "border-t border-hairline"} ${i === SECTIONS.length - 1 ? "border-b border-b-hairline" : ""} ${isHere ? "text-accent" : ""}`}
                  >
                    <span className="label w-6">{s.num}</span>
                    <span className="flex-1 font-serif text-[24px] leading-tight">
                      {s.title}
                      {isHere && <em className="text-[16px]"> — you&rsquo;re here</em>}
                    </span>
                    <span className={`label ${isHere ? "" : "text-muted"}`}>{s.page}</span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-3.5 grid grid-cols-2 gap-2">
              <a href="https://www.linkedin.com/in/kira-z-pan" target="_blank" rel="noopener" className="label border border-ink py-4 text-center no-underline">
                LinkedIn ↗
              </a>
              <a href="/KiraPan-Resume.pdf" target="_blank" rel="noopener" className="label border border-ink py-4 text-center no-underline">
                Resume ↗
              </a>
            </div>
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        tabIndex={visible ? 0 : -1}
        className={`fixed inset-x-4 bottom-4 z-30 flex h-[52px] items-center justify-between bg-ink px-4 text-paper transition-[transform,opacity] duration-500 ease-editorial ${visible && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[150%] opacity-0"}`}
      >
        <span className="label">
          <span className="text-[#E8A48F]">{here.num}</span> · {here.title}
        </span>
        <span className="label">Contents ↑</span>
      </button>
    </div>
  );
}
