import Image from "next/image";
import SectionHead from "@/components/SectionHead";
import PaperWall from "@/components/home/PaperWall";
import FilmTile from "@/components/home/FilmTile";
import Zoomable from "@/components/Zoomable";

// Studio: three groups so the range reads at a glance — on paper, on screen, on film.
// Everything sits in warm black and white and turns to color on hover (or as it scrolls into view on phones).

function GroupHead({ label, note }: { label: string; note?: string }) {
  return (
    <div className="mb-6 mt-12 flex items-baseline justify-between gap-4 border-t border-paper/25 pt-3 md:mt-16">
      <span className="label">{label}</span>
      {note && <span className="hidden font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted sm:inline">{note}</span>}
    </div>
  );
}

const STICKERS = [
  { src: "/images/studio/sticker-datastory.png", w: 643, h: 700, alt: "DataStory sticker: a bear leaning on the DataStory logo", rot: "-rotate-[4deg]" },
  { src: "/images/studio/sticker-cssa.png", w: 600, h: 600, alt: "Cognitive Science Students Association sticker", rot: "rotate-[5deg]" },
];

export default function Studio() {
  return (
    <section id="studio" aria-labelledby="studio-title" className="scroll-mt-6 bg-ink py-14 text-paper md:py-16">
      <div className="container-page">
        <SectionHead number="04" title="Studio" page="p. 30" onInk />
        <h2 id="studio-title" className="text-balance font-serif text-[44px] font-normal leading-[0.94] tracking-[-0.02em] md:text-[64px]">
          Things I make, <em>on paper, on screen and on film</em>
        </h2>

        <div className="mt-10">
          <PaperWall />
        </div>

        <GroupHead label="02 — On screen" />
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-12">
          <figure className="md:col-span-5">
            <a
              href="https://www.datastoryberkeley.org/"
              target="_blank"
              rel="noopener"
              aria-label="Visit the DataStory website (opens in a new tab)"
              className="group block overflow-hidden border border-paper/25"
            >
              <Image
                src="/images/studio/datastory-site.jpg"
                alt="The DataStory at Berkeley website homepage"
                width={1200}
                height={786}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="feature-bw h-auto w-full"
              />
            </a>
            <figcaption className="mt-2.5 flex items-start justify-between gap-3">
              <span>
                <span className="block font-serif text-[22px]">DataStory website</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">
                  Designed, built + maintained by me
                </span>
              </span>
              <a
                href="https://www.datastoryberkeley.org/"
                target="_blank"
                rel="noopener"
                className="label inline-flex min-h-[44px] items-center text-paper underline decoration-1 underline-offset-[6px] hover:text-accent"
              >
                Visit ↗
              </a>
            </figcaption>
          </figure>

          <figure className="md:col-span-4">
            <div className="grid grid-cols-3 items-center gap-3 md:grid-cols-2 md:gap-4">
              {STICKERS.map((s) => (
                <div key={s.src} className={s.rot}>
                  <Zoomable src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="200px" />
                </div>
              ))}
              <div className="-rotate-2 md:col-span-2 md:w-[62%] md:justify-self-center">
                <Zoomable src="/images/studio/sticker-roxie.png" alt="Roxie Market storefront sticker" width={600} height={600} sizes="200px" />
              </div>
            </div>
            <figcaption className="mt-2.5">
              <span className="block font-serif text-[22px]">Stickers</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">
                For DataStory, the Cog Sci Students Association and Roxie Market
              </span>
            </figcaption>
          </figure>

          <figure className="w-[70%] md:col-span-3 md:w-auto">
            <Zoomable
              src="/images/studio/bird-calling.jpg"
              alt="Bird Calling Contest event poster with swallows and roses"
              width={695}
              height={900}
              sizes="(min-width: 768px) 22vw, 100vw"
              className="border border-paper/25"
            />
            <figcaption className="mt-2.5">
              <span className="block font-serif text-[22px]">Bird Calling Contest</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">Event poster · digital illustration</span>
            </figcaption>
          </figure>
        </div>

        <GroupHead label="03 — On film" note="Videos I've edited · tap to play" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FilmTile
            src="/videos/yosemite.mp4"
            poster="/videos/yosemite-poster.jpg"
            duration="0:52"
            title="Yosemite,"
            italic="with the club"
            credit="For: DataStory · I did: filming, editing, sound"
          />
          {/* Placeholder until the next edit is finished */}
          <figure>
            <div className="relative flex aspect-video flex-col justify-end gap-1.5 border border-paper/25 bg-[#1F1D1A] p-5">
              <span className="label absolute right-4 top-4 rotate-[4deg] border-2 border-accent px-2.5 py-1 text-[#E8A48F]">
                Currently editing
              </span>
              <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted" aria-hidden="true">
                ● Rec · 00:00:41:12
              </span>
              <div className="relative flex flex-col gap-1.5" aria-hidden="true">
                <div className="flex h-4 gap-[3px]">
                  {[["3", "#6F7F86"], ["2", "#8A9A7B"], ["4", "#6F7F86"], ["1", "#A68B6C"], ["3", "#8A9A7B"], ["2", "#3A3733"]].map(([f, c], i) => (
                    <span key={i} style={{ flex: Number(f), background: c }} />
                  ))}
                </div>
                <div className="flex h-4 gap-[3px]">
                  {[["5", "#4E6B5A"], ["2", "#3A3733"], ["6", "#4E6B5A"], ["2", "#3A3733"]].map(([f, c], i) => (
                    <span key={i} style={{ flex: Number(f), background: c }} />
                  ))}
                </div>
                <div className="flex h-2.5 gap-[3px]">
                  <span style={{ flex: 12, background: "#5A564E" }} />
                  <span style={{ flex: 3, background: "#3A3733" }} />
                </div>
                <span className="absolute -bottom-1 -top-2.5 left-[62%] w-0.5 bg-accent" />
              </div>
            </div>
            <figcaption className="mt-2.5">
              <span className="block font-serif text-[22px]">
                Next cut, <em>still in the edit bay</em>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">Coming soon · check back next week</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
