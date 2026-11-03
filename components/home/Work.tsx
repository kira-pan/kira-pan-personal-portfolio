import Image from "next/image";
import SectionHead from "@/components/SectionHead";
import { AflacDiagram, HaasDiagram } from "@/components/home/Diagrams";
import { CASES, MORE_WORK, splitItalic, type Case } from "@/lib/work";

function Media({ c }: { c: Case }) {
  const m = c.media;
  return (
    <figure className="flex flex-col gap-2.5">
      {m.kind === "diagram" ? (
        // On phones the figure keeps a readable size and scrolls sideways (an intentional strip).
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[640px] sm:min-w-0">{m.diagram === "aflac" ? <AflacDiagram /> : <HaasDiagram />}</div>
        </div>
      ) : m.framed ? (
        <div className="art-frame overflow-hidden">
          <Image src={m.src} alt={m.alt} width={m.width} height={m.height} sizes="(min-width: 1024px) 55vw, 100vw" className="feature-bw aspect-[3/2] w-full object-cover" />
        </div>
      ) : (
        <Image src={m.src} alt={m.alt} width={m.width} height={m.height} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full border border-hairline" />
      )}
      <figcaption className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        {m.caption}
        {m.kind === "diagram" && <span className="sm:hidden"> · swipe →</span>}
      </figcaption>
    </figure>
  );
}

function CaseRow({ c, index }: { c: Case; index: number }) {
  const t = splitItalic(c.title, c.italic);
  const flip = index % 2 === 1; // alternate the side the figure sits on
  return (
    <article id={c.id} className={`grid scroll-mt-6 grid-cols-1 items-start gap-8 py-12 md:py-14 lg:grid-cols-12 lg:gap-12 ${index > 0 ? "border-t border-hairline" : ""}`}>
      <div className={`flex flex-col gap-5 lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
        <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">
          {String(index + 1).padStart(2, "0")} · {c.kicker}
        </span>
        <h3 className="text-balance font-serif text-[34px] font-normal leading-[1.02] tracking-[-0.025em] md:text-[44px]">
          {t.before}
          {t.em && <em>{t.em}</em>}
          {t.after}
        </h3>
        <span className="font-mono text-[11px] uppercase leading-[1.7] tracking-[0.08em] text-muted">{c.meta}</span>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-2.5 text-[16px] leading-[1.55] sm:grid-cols-[120px_1fr]">
          {c.facts.map((f) => (
            <div key={f.label} className="contents">
              <dt className="pt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{f.label}</dt>
              <dd className="mb-2 sm:mb-0">{f.text}</dd>
            </div>
          ))}
        </dl>
        {c.stats && (
          <div className={`flex gap-3 ${c.stats.length === 1 ? "max-w-[220px]" : ""}`}>
            {c.stats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col gap-1 border border-ink px-4 py-3.5">
                <span className="font-serif text-[40px] leading-none tracking-[-0.03em] md:text-[44px]">{s.value}</span>
                <span className="font-mono text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        )}
        {c.tools && <span className="font-mono text-[11px] uppercase leading-[1.7] tracking-[0.08em] text-muted">{c.tools}</span>}
        {c.links && (
          <div className="flex flex-wrap gap-x-6">
            {c.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" className="label inline-flex min-h-[44px] items-center underline decoration-1 underline-offset-[6px] hover:text-accent">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={`lg:col-span-7 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
        <Media c={c} />
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="container-page scroll-mt-6 pb-16 pt-4 md:pb-20">
      <SectionHead number="01" title="Selected work" page="4 projects" />
      <h2 id="work-title" className="sr-only">
        Selected work
      </h2>
      {CASES.map((c, i) => (
        <CaseRow key={c.id} c={c} index={i} />
      ))}

      <div className="flex flex-col gap-6 border-t border-hairline pt-7">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="label">More work</span>
          <span className="rotate-[-3deg] font-hand text-[22px] text-accent md:text-[24px]" aria-hidden="true">
            more to look through ↓
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_WORK.map((w) => (
            <a key={w.href} href={w.href} target="_blank" rel="noopener" className="group flex flex-col gap-2.5 no-underline">
              <span className="block overflow-hidden border border-hairline bg-frame">
                <Image
                  src={w.image.src}
                  alt={w.image.alt}
                  width={w.image.width}
                  height={w.image.height}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className={`feature-bw aspect-[4/3] w-full group-hover:scale-[1.03] ${w.image.contain ? "object-contain" : "object-cover"}`}
                />
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{w.kicker}</span>
              <span className="font-serif text-[26px] leading-[1.05] decoration-1 underline-offset-4 group-hover:underline">{w.title}</span>
              <span className="font-mono text-[11px] uppercase leading-[1.6] tracking-[0.08em] text-muted">{w.meta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
