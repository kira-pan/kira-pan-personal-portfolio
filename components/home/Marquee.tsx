import { SKILLS } from "@/lib/glance";

/** The ink band under the cover: Kira's skills, grouped Code / Analysis / Design, scrolling slowly.
 *  Hover pauses it so a skill can be read. With reduced motion it becomes a static, wrapped list. */
function Groups() {
  return (
    <>
      {SKILLS.map((g) => (
        <span key={g.group} className="flex items-center">
          <span className="pr-4 text-[#E8A48F]">{g.group}</span>
          {g.items.map((s, i) => (
            <span key={s} className="flex items-center">
              {s}
              {i < g.items.length - 1 && <span className="px-3 text-on-ink-muted">·</span>}
            </span>
          ))}
          <span className="px-6 text-accent">✦</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  const label = SKILLS.map((g) => `${g.group}: ${g.items.join(", ")}`).join(". ");
  return (
    <section aria-label="Skills" className="marquee overflow-hidden bg-ink py-3.5 font-mono text-[13px] uppercase tracking-[0.14em] text-paper">
      <p className="sr-only">{label}</p>
      {/* Moving version: two identical halves so the -50% loop is seamless. */}
      <div className="marquee-track flex w-max whitespace-nowrap" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex">
            <Groups />
          </span>
        ))}
      </div>
      {/* Reduced motion: the same skills, still, wrapping inside the page container. */}
      <div className="marquee-static container-page hidden flex-col gap-2" aria-hidden="true">
        {SKILLS.map((g) => (
          <p key={g.group}>
            <span className="pr-3 text-[#E8A48F]">{g.group}</span>
            {g.items.join(" · ")}
          </p>
        ))}
      </div>
    </section>
  );
}
