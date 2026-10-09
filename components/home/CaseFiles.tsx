import SectionHead from "@/components/SectionHead";

// Consulting work. Details were already public (club Instagram); specifics stay redacted on purpose.

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
      className={`label border-2 px-2 py-1 ${red ? "rotate-[3deg] border-accent text-accent" : "rotate-[-3deg] border-ink"}`}
    >
      {children}
    </span>
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-3.5 border border-ink/30 bg-paper p-5 sm:px-7 sm:py-6">
            <div className="flex flex-wrap-reverse items-center justify-between gap-3">
              <span className="label">File 01 · Aflac · Jan–Jun 2026</span>
              <Stamp red>Client file</Stamp>
            </div>
            <h3 className="font-serif text-[30px] font-normal leading-[1.02] sm:text-[34px]">
              Five years of federal filings, made into one clean dataset
            </h3>
            <p className="text-[15px] leading-[1.65]">
              Profiled Form 5500 data for the <Redact w={110} /> team, then built Python regex pipelines that matched
              messy carrier and broker names for <Redact w={80} />.
            </p>
            <div className="grid grid-cols-3 gap-3 border-t border-hairline pt-3">
              <Stat n="1,200+" label="name variants…" />
              <Stat n="~280" label="…became entities" />
              <Stat n="96%" label="coverage" />
            </div>
          </article>
          <article className="flex flex-col gap-3.5 border border-ink/30 bg-paper p-5 sm:px-7 sm:py-6">
            <div className="flex flex-wrap-reverse items-center justify-between gap-3">
              <span className="label">File 02 · Oracle · Aug 2026–now</span>
              <Stamp>In progress</Stamp>
            </div>
            <h3 className="font-serif text-[30px] font-normal leading-[1.02] sm:text-[34px]">
              Scoring exercise form from two phone sensors, in real time
            </h3>
            <p className="text-[15px] leading-[1.65]">
              A streaming pipeline on OCI with pose estimation that scores reps, tempo and range of motion for{" "}
              <Redact w={120} />.
            </p>
            <div className="grid grid-cols-3 gap-3 border-t border-hairline pt-3">
              <Stat n="2" label="phone sensors" />
              <Stat n="3" label="exercises scored" />
              <Stat n="<1s" label="target latency" />
            </div>
          </article>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Client details redacted.</p>
      </div>
    </section>
  );
}
