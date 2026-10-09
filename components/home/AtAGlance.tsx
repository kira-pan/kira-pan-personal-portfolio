import { GLANCE } from "@/lib/glance";

/** The cover's fact sheet: one outlined box, same style as every other box on the site. */
export default function AtAGlance() {
  return (
    <aside aria-labelledby="glance-title" className="border border-ink px-[18px] pb-2 pt-4">
      <h2 id="glance-title" className="label">
        At a glance
      </h2>
      <dl className="mt-3">
        {GLANCE.map((row, i) => (
          <div key={row.label} className={`flex flex-col gap-1.5 py-3 ${i > 0 ? "border-t border-hairline" : "border-t border-ink"}`}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">{row.label}</dt>
            <dd className="flex flex-col gap-1 text-[14px] leading-[1.4]">
              {row.items && (
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
                            {" ·"} <span className="whitespace-nowrap text-muted">{it.detail}</span>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {row.note && <span className="pl-3 text-muted">{row.note}</span>}
              {row.text && <span>{row.text}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
