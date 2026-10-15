"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHead from "@/components/SectionHead";

// Consulting work, shown as manila folders. The front of each folder carries the tab, the client's
// logo (paper-clipped on like a business card; warm B&W, color on hover), the dates, a stamp and the
// title. Clicking the folder pulls the paper out: the description and the numbers.
// Details were already public (club Instagram); specifics stay redacted on purpose.

function Redact({ w }: { w: number }) {
  return (
    <span
      className="inline-block h-[0.9em] bg-ink align-[-0.1em]"
      style={{ width: w }}
      role="img"
      aria-label="redacted"
    />
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-[26px] leading-none sm:text-[30px]">{n}</span>
      <span className="text-[13px] leading-tight text-muted">{label}</span>
    </div>
  );
}

function Stamp({ children, red = false }: { children: React.ReactNode; red?: boolean }) {
  return (
    <span
      className={`label inline-block border-2 px-2 py-1 ${red ? "rotate-[3deg] border-accent text-accent" : "rotate-[-3deg] border-ink"}`}
    >
      {children}
    </span>
  );
}

type FileData = {
  id: string;
  tab: string;
  dates: string;
  stamp: { text: string; red?: boolean };
  title: string;
  logo: { src: string; width: number; height: number; alt: string };
  body: React.ReactNode;
  stats: { n: string; label: string }[];
};

const FILES: FileData[] = [
  {
    id: "aflac",
    tab: "File 01 · Aflac",
    dates: "Jan–Jun 2026",
    stamp: { text: "Client file", red: true },
    title: "Five years of federal filings, made into one clean dataset",
    logo: { src: "/images/logos/aflac.png", width: 480, height: 157, alt: "Aflac logo" },
    body: (
      <>
        Profiled Form 5500 data for the <Redact w={110} /> team, then built Python regex pipelines that matched messy
        carrier and broker names for <Redact w={80} />.
      </>
    ),
    stats: [
      { n: "1,200+", label: "name variants…" },
      { n: "~280", label: "…became entities" },
      { n: "96%", label: "coverage" },
    ],
  },
  {
    id: "oracle",
    tab: "File 02 · Oracle",
    dates: "Aug 2026–now",
    stamp: { text: "In progress" },
    title: "Scoring exercise form from two phone sensors, in real time",
    logo: { src: "/images/logos/oracle.png", width: 480, height: 99, alt: "Oracle logo" },
    body: (
      <>
        A streaming pipeline on OCI with pose estimation that scores reps, tempo and range of motion for{" "}
        <Redact w={120} />.
      </>
    ),
    stats: [
      { n: "2", label: "phone sensors" },
      { n: "3", label: "exercises scored" },
      { n: "<1s", label: "target latency" },
    ],
  },
];

function Folder({ f }: { f: FileData }) {
  const [open, setOpen] = useState(false);
  const panel = `case-${f.id}-contents`;
  return (
    <article className="group relative pt-[30px]">
      {/* Folder tab */}
      <span className="label absolute left-0 top-0 flex h-[31px] items-center border border-b-0 border-ink/30 bg-paper px-4">
        {f.tab}
      </span>
      <div className="border border-ink/30 bg-paper p-5 sm:px-7 sm:py-6">
        {/* Logo, clipped on like a business card. */}
        <div className="relative float-right ml-4 mt-1 w-[108px] rotate-[3deg] border border-hairline bg-frame px-3 py-3 sm:w-[132px]">
          <span aria-hidden="true" className="absolute -top-2.5 left-5 h-6 w-2.5 border-2 border-b-0 border-muted" />
          <Image src={f.logo.src} alt={f.logo.alt} width={f.logo.width} height={f.logo.height} className="feature-bw h-auto w-full" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="label text-muted">{f.dates}</span>
          <Stamp red={f.stamp.red}>{f.stamp.text}</Stamp>
        </div>
        <h3 className="mt-3.5 font-serif text-[30px] font-normal leading-[1.02] sm:text-[34px]">{f.title}</h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panel}
          onClick={() => setOpen((o) => !o)}
          className="label clear-both mt-4 inline-flex min-h-[44px] items-center text-accent underline decoration-1 underline-offset-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {open ? "Close file ↑" : "Open file ↓"}
        </button>
        {/* The paper that slides out of the folder. */}
        <div
          id={panel}
          className={`grid transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden" inert={!open}>
            <div className="mt-3 border border-hairline bg-frame p-4 sm:p-5">
              <p className="text-[15px] leading-[1.65]">{f.body}</p>
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-hairline pt-3">
                {f.stats.map((s) => (
                  <Stat key={s.label} n={s.n} label={s.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CaseFiles() {
  return (
    <section id="case-files" aria-labelledby="case-files-title" className="scroll-mt-6 bg-manila py-14 md:py-16">
      <div className="container-page">
        <SectionHead number="02" title="Case Files" page="p. 20" />
        <h2 id="case-files-title" className="sr-only">
          Case Files: consulting work
        </h2>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {FILES.map((f) => (
            <Folder key={f.id} f={f} />
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Client details redacted.</p>
      </div>
    </section>
  );
}
