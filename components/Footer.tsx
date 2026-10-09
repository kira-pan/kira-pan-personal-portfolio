export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page flex flex-wrap items-end justify-between gap-x-10 gap-y-6 pb-12 pt-10">
        <p className="font-serif text-[56px] leading-[0.95] tracking-[-0.02em] sm:text-[72px]">
          Let&rsquo;s make <em className="text-accent">something.</em>
        </p>
        <p className="max-w-[340px] font-mono text-[11px] uppercase leading-[1.7] tracking-[0.08em] text-muted">
          Colophon — Set in Instrument Serif, Hanken Grotesk &amp; Geist Mono. Margin notes in
          Kira&rsquo;s own handwriting. Drawings, photos and code by Kira Pan, 2026.
        </p>
      </div>
    </footer>
  );
}
