import Image from "next/image";
import SectionHead from "@/components/SectionHead";

// Kira's own words. Don't rewrite.
const LINKS = [
  { label: "kirap@berkeley.edu", href: "mailto:kirap@berkeley.edu" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/kira-z-pan" },
  { label: "GitHub ↗", href: "https://github.com/kira-pan" },
  { label: "Resume ↗", href: "/KiraPan-Resume.pdf" },
];

export default function ContributorsNote() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-page scroll-mt-6 py-14 md:py-16">
      <SectionHead number="05" title="Contributor's Note" page="p. 36" />
      <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 md:grid-cols-12">
        <figure className="mx-auto w-[78%] max-w-[360px] -rotate-2 md:col-span-4 md:w-full">
          <div className="art-frame overflow-hidden">
            <Image
              src="/images/about/kira-hike.jpg"
              alt="Kira on a mountain trail"
              width={768}
              height={1024}
              sizes="(min-width: 768px) 30vw, 78vw"
              className="feature-bw aspect-[4/5] w-full object-cover object-[50%_70%]"
            />
          </div>
          <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Somewhere new, as usual</figcaption>
        </figure>
        <div className="flex flex-col gap-5 md:col-span-7 md:col-start-6">
          <h2 id="about-title" className="text-balance font-serif text-[34px] font-normal leading-[1.04] tracking-[-0.01em] md:text-[44px]">
            Usually looking for a new place to eat or a new place <em>to go.</em>
          </h2>
          <p className="max-w-[600px] text-[17px] leading-[1.65] text-[#3E3B35]">
            Outside of work, I&rsquo;m usually trying a new restaurant, wandering through thrift stores, planning my next
            trip, or editing little videos of my favorite moments. I also love keeping up with what&rsquo;s happening in AI
            and experimenting with new tools, mostly because I&rsquo;m curious about what people will come up with next.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.href.startsWith("http") || l.href.endsWith(".pdf") ? { target: "_blank", rel: "noopener" } : {})}
                className="label inline-flex min-h-[44px] items-center border border-ink px-3.5 no-underline transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
