import Image from "next/image";
import Link from "next/link";
import Draggable from "@/components/Draggable";
import NowPlaying from "@/components/home/NowPlaying";

const COVER_LINES = [
  {
    page: "P. 04 / Feature",
    title: "408,000 patents and one question",
    dek: "Can a model predict USPTO approval before months of review?",
    href: "/#features",
  },
  {
    page: "P. 08 / Data desk",
    title: "What a 25-cent cup fee actually changed",
    dek: "Reusables, compliance and Berkeley's disposable cup fee, for The Daily Californian.",
    href: "/#features",
  },
  {
    page: "P. 12 / Maps",
    title: "Paradise, after the fire",
    dek: "Six years of rebuilding permits after the 2018 Camp Fire, mapped.",
    href: "/#features",
  },
  {
    page: "P. 16 / Product",
    title: "Dinner for the first-time cook",
    dek: "PantryPal, a meal planner for real student life.",
    href: "/#features",
  },
];

export default function Cover() {
  return (
    <section aria-label="Cover" className="container-page pt-4 sm:pt-6">
      {/* Masthead. Kira's portrait overlaps its lower half, like a magazine cover. */}
      <h1 className="reveal relative z-0 whitespace-nowrap text-center font-serif text-[24vw] font-normal leading-[0.8] tracking-[-0.045em] md:text-[clamp(96px,19vw,280px)]">
        Kira <em className="text-accent">Pan</em>
      </h1>
      <div className="relative z-0 mt-3 border-t-2 border-ink" />

      <div className="grid grid-cols-1 gap-x-10 gap-y-10 pb-16 pt-6 md:grid-cols-12 md:pb-20">
        {/* Left: what this is + cover lines */}
        <div className="order-2 flex flex-col gap-7 md:order-1 md:col-span-4 lg:col-span-3">
          <p className="font-serif text-[26px] leading-[1.12] sm:text-[28px]">
            A personal magazine about data, the people behind it, and the things I draw by hand.
          </p>
          <div className="flex flex-col gap-6">
            <span className="label">In this issue</span>
            {COVER_LINES.map((line) => (
              <Link
                key={line.title}
                href={line.href}
                className="group flex flex-col gap-1.5 border-t border-hairline pt-3.5 no-underline"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
                  {line.page}
                </span>
                <span className="font-serif text-[28px] leading-[1.04] decoration-1 underline-offset-4 group-hover:underline">
                  {line.title}
                </span>
                <span className="text-[15px] leading-[1.45] text-muted">{line.dek}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Center: portrait with two drawings that can be picked up */}
        <div className="relative order-1 -mt-[34vw] self-start md:order-2 md:col-span-5 md:-mt-[19vw] lg:col-span-6 min-[1500px]:-mt-[290px]">
          <div className="relative mx-auto w-[86%] max-w-[560px] md:w-[92%]">
            <Image
              src="/images/kira-tranparent.png"
              alt="Kira Pan"
              width={1080}
              height={1350}
              priority
              sizes="(min-width: 768px) 45vw, 86vw"
              className="relative z-10 h-auto w-full"
            />
          </div>

          <Draggable
            label="Charcoal drawing by Kira"
            rotate={-6}
            className="absolute bottom-[4%] left-0 z-20 w-[30%] max-w-[190px]"
          >
            <div className="art-frame">
              <Image
                src="/images/IMG_2955.jpeg"
                alt=""
                width={1169}
                height={1558}
                sizes="190px"
                draggable={false}
                className="h-auto w-full"
              />
            </div>
          </Draggable>

          <Draggable
            label="Pen and ink drawing of Venice by Kira"
            rotate={5}
            className="absolute right-0 top-[38%] z-20 w-[26%] max-w-[170px]"
          >
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-6 bg-tape" aria-hidden="true" />
            <div className="art-frame">
              <Image
                src="/images/venice_drawing.jpeg"
                alt=""
                width={2325}
                height={3076}
                sizes="170px"
                draggable={false}
                className="h-auto w-full"
              />
            </div>
          </Draggable>

          <p
            className="pointer-events-none absolute right-[1%] top-[70%] z-30 hidden max-w-[170px] rotate-[-5deg] font-hand text-[26px] leading-[1.05] text-accent md:block"
            aria-hidden="true"
          >
            that&rsquo;s me! drag the drawings around ↙
          </p>
        </div>

        {/* Right: video + what I'm doing now */}
        <div className="order-3 flex flex-col gap-6 md:col-span-3">
          <p className="label text-muted">Cognitive Science + Data Science · UC Berkeley &rsquo;28</p>
          <NowPlaying />
          <div className="flex flex-col gap-2.5 border border-ink p-[18px]">
            <span className="label">Currently</span>
            <p className="text-[15px] leading-[1.5]">
              Researching AI-generated content on YouTube at Haas. AI consulting with Oracle. Drawing in
              charcoal and video editing on weekends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
