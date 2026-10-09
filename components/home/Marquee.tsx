const WORDS = ["Data analytics", "Product", "UX research", "Design", "Writing"];

export default function Marquee() {
  // Two identical halves so the -50% loop is seamless.
  const half = Array.from({ length: 3 }, () => WORDS).flat();
  return (
    <div className="overflow-hidden bg-ink py-3.5 text-paper" aria-label={WORDS.join(", ")}>
      <div className="marquee-track flex w-max whitespace-nowrap" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex">
            {half.map((w, i) => (
              <span key={i} className="font-mono text-[13px] uppercase tracking-[0.14em]">
                {w}
                <span className="px-5 text-accent">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
