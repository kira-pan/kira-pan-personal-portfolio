import SectionHead from "@/components/SectionHead";
import { GLANCE, SKILLS } from "@/lib/glance";

// Experience, kept short: one line per degree/role (data in lib/glance.ts), then skills by group.
export default function Experience() {
  const rows = GLANCE.filter((r) => r.items);
  return (
    <section id="experience" aria-labelledby="experience-title" className="container-page scroll-mt-6 pb-4 pt-2 md:pb-6">
      <SectionHead number="02" title="Experience" page="One line each" />
      <h2 id="experience-title" className="sr-only">
        Experience
      </h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col lg:col-span-7">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-1 gap-2 border-t border-hairline py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
              <span className="pt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{r.label}</span>
              <ul className="flex flex-col gap-1.5">
                {r.items!.map((it) => (
                  <li key={it.title} className="flex gap-2.5 text-[17px] leading-[1.45]">
                    <span className="pt-[3px] text-[10px] text-accent" aria-hidden="true">
                      ✦
                    </span>
                    <span>
                      {it.title}
                      {it.detail && <span className="text-muted"> · {it.detail}</span>}
                    </span>
                  </li>
                ))}
                {r.note && <li className="pl-5 text-[15px] text-muted">{r.note}</li>}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:col-span-5">
          {SKILLS.map((g) => (
            <div key={g.group} className="flex flex-col gap-2 border-t border-ink pt-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{g.group}</span>
              <p className="text-[16px] leading-[1.6]">{g.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
