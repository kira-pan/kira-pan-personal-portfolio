import Image from "next/image";
import Draggable from "@/components/Draggable";

// The opening screen: who, what, and a way straight into the work.
const PILLARS = [
  { href: "#aflac", verb: "Build", line: "Data pipelines for real clients", where: "Aflac" },
  { href: "#haas", verb: "Study", line: "How people behave online", where: "Berkeley Haas research" },
  { href: "#tot", verb: "Design", line: "Products that nudge better habits", where: "tot · Cal Hacks" },
];

const btn =
  "label inline-flex min-h-[44px] items-center border border-ink px-[18px] no-underline transition-colors duration-300 ease-editorial";

export default function Hero() {
  return (
    <section aria-label="Introduction" className="container-page grid grid-cols-1 items-end gap-10 pb-12 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-16">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">Cognitive science + data science · UC Berkeley &rsquo;28</span>
        <h1 className="reveal font-serif text-[clamp(84px,17vw,168px)] font-normal leading-[0.82] tracking-[-0.045em]">
          Kira <em className="text-accent">Pan</em>
        </h1>
        <p className="max-w-[720px] text-balance font-serif text-[30px] leading-[1.06] tracking-[-0.02em] md:text-[44px]">
          Data and product, built around <em>how people actually think.</em>
        </p>
        <p className="max-w-[600px] text-[17px] leading-[1.6] text-muted">
          I build data pipelines, study how people behave online, and design tools that nudge better habits. Lately: a data
          pipeline for Aflac, research at Berkeley Haas, and tot at Cal Hacks.
        </p>
        <nav aria-label="What I do" className="grid max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group flex flex-col gap-2 border border-ink px-4 pb-4 pt-3.5 no-underline transition-colors duration-500 ease-editorial hover:bg-ink hover:text-paper"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent group-hover:text-[#E8A48F]">{p.verb} ↓</span>
              <span className="font-serif text-[24px] leading-[1.05] md:text-[26px]">{p.line}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted group-hover:text-on-ink-muted">{p.where}</span>
            </a>
          ))}
        </nav>
        <span className="font-mono text-[11px] uppercase tracking-[0.08em]">Looking for summer 2027 internships · data science, analytics + product</span>
        <div className="flex flex-wrap gap-2.5">
          <a href="#work" className={`${btn} bg-ink text-paper hover:border-accent hover:bg-accent`}>
            See the work ↓
          </a>
          <a href="/KiraPan-Resume.pdf" target="_blank" rel="noopener" className={`${btn} hover:bg-ink hover:text-paper`}>
            Resume ↗
          </a>
          <a href="mailto:kirap@berkeley.edu" className={`${btn} hover:bg-ink hover:text-paper`}>
            kirap@berkeley.edu
          </a>
        </div>
      </div>

      {/* Portrait, with one drawing that can be picked up and moved (desktop). */}
      <div className="relative mx-auto w-[70%] max-w-[420px] lg:col-span-5 lg:w-full">
        <Image
          src="/images/cover-kira-bw.png"
          alt="Portrait of Kira Pan, arms crossed, smiling"
          width={1084}
          height={1800}
          priority
          sizes="(min-width: 1024px) 420px, 70vw"
          className="photo-warm relative z-10 mx-auto h-auto w-[78%]"
        />
        <Draggable label="Pen and ink drawing of Venice by Kira" rotate={5} className="absolute right-0 top-[8%] z-20 w-[32%] max-w-[150px]">
          <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-6 bg-tape" aria-hidden="true" />
          <div className="art-frame">
            <Image src="/images/venice_drawing.jpeg" alt="" width={900} height={1191} sizes="150px" draggable={false} className="h-auto w-full" />
          </div>
        </Draggable>
        <p className="pointer-events-none absolute bottom-[16%] right-0 z-30 rotate-[-6deg] font-hand text-[22px] leading-[1.1] text-accent md:text-[24px]" aria-hidden="true">
          hi! that&rsquo;s me ↙
        </p>
      </div>
    </section>
  );
}
