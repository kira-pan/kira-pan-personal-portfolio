"use client";

import { useState } from "react";
import { GLANCE, type GlanceRow } from "@/lib/glance";

function Items({ row }: { row: GlanceRow }) {
  if (!row.items) return null;
  return (
    <ul className="flex flex-col gap-1">
      {row.items.map((it) => (
        <li key={it.title} className="grid grid-cols-[12px_1fr] items-baseline">
          <span className="text-[9px] text-accent" aria-hidden="true">
            ✦
          </span>
          <span>
            {it.title}
            {it.detail && (
              <>
                {/* No-break before the dot, so a wrap moves the org down whole. */}
                {" ·"} <span className="whitespace-nowrap text-muted">{it.detail}</span>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** A row that shows only its summary (the orgs) until hovered (desktop) or tapped / Enter. */
function Collapsible({ row, first }: { row: GlanceRow; first: boolean }) {
  const [open, setOpen] = useState(false);
  const id = `glance-${row.label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className={`group py-3 ${first ? "border-t border-ink" : "border-t border-hairline"}`}>
      <dt>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-[28px] w-full items-center justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {row.label}
          <span aria-hidden="true" className="text-[13px] text-accent">
            {open ? "−" : "+"}
          </span>
        </button>
      </dt>
      <dd className="mt-1 text-[14px] leading-[1.4]">
        {/* Closed: the orgs only. Open (tap or hover): the summary gives way to the full roles. */}
        <span className={`${open ? "hidden" : "block"} text-ink [@media(hover:hover)]:group-hover:hidden`}>{row.summary}</span>
        <div
          id={id}
          className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } [@media(hover:hover)]:group-hover:grid-rows-[1fr]`}
        >
          <div className="overflow-hidden">
            <div className={open ? "" : "[@media(hover:hover)]:group-hover:pt-0"}>
              <Items row={row} />
            </div>
          </div>
        </div>
      </dd>
    </div>
  );
}

/** The cover's fact sheet: one outlined box, same style as every other box on the site. */
export default function AtAGlance() {
  return (
    <aside aria-labelledby="glance-title" className="border border-ink px-[18px] pb-2 pt-4">
      <h2 id="glance-title" className="label">
        At a glance
      </h2>
      <dl className="mt-3">
        {GLANCE.map((row, i) =>
          row.summary ? (
            <Collapsible key={row.label} row={row} first={i === 0} />
          ) : (
            <div key={row.label} className={`flex flex-col gap-1.5 py-3 ${i > 0 ? "border-t border-hairline" : "border-t border-ink"}`}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{row.label}</dt>
              <dd className="flex flex-col gap-1 text-[14px] leading-[1.4]">
                <Items row={row} />
                {row.note && <span className="pl-3 text-muted">{row.note}</span>}
                {row.text && <span>{row.text}</span>}
              </dd>
            </div>
          ),
        )}
      </dl>
    </aside>
  );
}
