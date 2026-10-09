import Link from "next/link";

const ENTRIES = [
  { n: "01", title: "Features", dek: "Data and product stories, start to finish", page: "p. 04", href: "/#features" },
  { n: "02", title: "Case Files", dek: "Consulting for Oracle and Aflac", page: "p. 20", href: "/#case-files" },
  { n: "03", title: "The Desk", dek: "Reporting and editing at The Daily Californian", page: "p. 26", href: "/#desk" },
  { n: "04", title: "Studio", dek: "Charcoal, ink, collage, video", page: "p. 30", href: "/#studio" },
  { n: "05", title: "Contributor's Note", dek: "About me, resume, contact", page: "p. 36", href: "/#about" },
];

export default function Contents() {
  return (
    <section aria-labelledby="contents-title" className="container-page grid grid-cols-1 gap-x-16 gap-y-8 py-20 md:grid-cols-3 md:py-24">
      <h2
        id="contents-title"
        className="font-serif text-[64px] font-normal leading-[0.9] tracking-[-0.03em] md:text-[104px]"
      >
        Con<em>tents</em>
      </h2>
      <ol className="md:col-span-2">
        {ENTRIES.map((e, i) => (
          <li key={e.n}>
            <Link
              href={e.href}
              className={`group flex items-baseline gap-4 py-4 no-underline sm:gap-6 ${
                i === 0 ? "border-t border-ink" : "border-t border-hairline"
              } ${i === ENTRIES.length - 1 ? "border-b border-b-hairline" : ""}`}
            >
              <span className="w-7 shrink-0 font-mono text-[13px]">{e.n}</span>
              <span className="flex flex-1 flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="font-serif text-[30px] leading-none transition-colors duration-300 group-hover:text-accent sm:text-[34px]">
                  {e.title}
                </span>
                <span className="text-[15px] text-muted">{e.dek}</span>
              </span>
              <span className="shrink-0 font-mono text-[13px]">{e.page}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
