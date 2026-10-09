import SectionHead from "@/components/SectionHead";

const ROLES = [
  { dates: "Sep 2024–Jan 2025", role: "General News Reporter" },
  { dates: "Jan–May 2025", role: "Business & Economy Beat Reporter" },
  { dates: "May–Aug 2025", role: "Deputy News Editor · 60+ stories edited" },
  { dates: "Sep 2025–May 2026", role: "Data Reporter", current: true },
];

const CLIPS = [
  {
    section: "City government",
    title: "‘Help deliver dreams’: Council member proposes Small Business Support Act",
    href: "https://www.dailycal.org/news/city/city-government/help-deliver-dreams-council-member-proposes-small-business-support-act/article_c12748ea-0484-11f0-90ca-cb7582a56943.html",
  },
  {
    section: "Research & ideas",
    title: "Campus researchers replicate disruptive Chinese AI for $30",
    href: "https://www.dailycal.org/news/campus/research-and-ideas/campus-researchers-replicate-disruptive-chinese-ai-for-30/article_a1cc5cd0-dee4-11ef-b8ca-171526dfb895.html",
  },
  {
    section: "Research & ideas",
    title: "Bakar Labs set to launch largest climate tech incubator",
    href: "https://www.dailycal.org/news/campus/research-and-ideas/bakar-labs-set-to-launch-largest-climate-tech-incubator/article_9179229c-f40a-11ef-8104-73cc90606097.html",
  },
];

// Until the /desk archive page exists, "all stories" goes to Kira's Daily Cal author page.
const ARCHIVE = "https://www.dailycal.org/users/profile/kira%20pan/";

export default function Desk() {
  return (
    <section id="desk" aria-labelledby="desk-title" className="container-page scroll-mt-6 py-14 md:py-16">
      <SectionHead number="03" title="The Desk" page="p. 26" />
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <h2 id="desk-title" className="text-balance font-serif text-[42px] font-normal leading-[0.96] tracking-[-0.02em] md:text-[50px]">
            From the newsroom to the <em>data desk</em>
          </h2>
          <ol className="flex flex-col gap-3 border-l border-ink pl-4">
            {ROLES.map((r) => (
              <li key={r.role}>
                <span className={`block font-mono text-[11px] uppercase tracking-[0.08em] ${r.current ? "text-accent" : "text-muted"}`}>
                  {r.dates}
                </span>
                <span className={`text-[15px] ${r.current ? "font-semibold" : ""}`}>{r.role}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="grid grid-cols-1 content-start gap-x-8 sm:grid-cols-2 lg:col-span-8">
          {CLIPS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="group flex flex-col gap-2 border-t border-ink pb-6 pt-3.5 no-underline"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{c.section}</span>
              <span className="font-serif text-[24px] leading-[1.08] decoration-1 underline-offset-4 group-hover:underline sm:text-[25px]">
                {c.title}
              </span>
            </a>
          ))}
          <a
            href={ARCHIVE}
            target="_blank"
            rel="noopener"
            className="group flex flex-col gap-2 border-t border-ink pb-6 pt-3.5 no-underline"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">The archive</span>
            <span className="font-serif text-[24px] italic leading-[1.08] group-hover:text-accent sm:text-[25px]">
              All my Daily Cal stories →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
