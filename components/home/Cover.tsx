import Image from "next/image";
import Link from "next/link";
import Draggable from "@/components/Draggable";
import AtAGlance from "@/components/home/AtAGlance";
import { FEATURES } from "@/lib/features";

export default function Cover() {
  return (
    <section aria-label="Cover" className="container-page pt-4 sm:pt-6">
      {/* Masthead. Kira's portrait overlaps its lower half, like a magazine cover. */}
      <h1 className="reveal relative z-0 whitespace-nowrap text-center font-serif text-[24vw] font-normal leading-[0.8] tracking-[-0.045em] lg:text-[clamp(96px,19vw,280px)]">
        Kira <em className="text-accent">Pan</em>
      </h1>
      <div className="relative z-0 mt-3 border-t-2 border-ink" />

      <div className="grid grid-cols-1 gap-x-10 gap-y-10 pb-16 pt-6 sm:grid-cols-2 lg:grid-cols-12 lg:pb-20">
        {/* Left: cover lines */}
        <div className="order-3 flex flex-col gap-7 lg:order-1 lg:col-span-3">
          <div className="flex flex-col gap-6">
            <span className="label">In this issue</span>
            {FEATURES.map((f) => (
              <Link
                key={f.slug}
                href={`/#feature-${f.slug}`}
                className="group flex flex-col gap-1.5 border-t border-hairline pt-3.5 no-underline"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
                  {f.page} / {f.kicker.split(" · ")[0]}
                </span>
                <span className="font-serif text-[25px] leading-[1.06] decoration-1 underline-offset-4 group-hover:underline">
                  {f.coverTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Center: portrait with two drawings that can be picked up */}
        <div className="order-1 -mt-[15vw] flex flex-col gap-8 self-start sm:col-span-2 lg:order-2 lg:-mt-[9vw] lg:col-span-5 min-[1500px]:-mt-[135px]">
        <div className="relative">
          <div className="relative mx-auto w-[54%] max-w-[340px] lg:w-[68%]">
            <Image
              src="/images/cover-kira-bw.png"
              alt="Portrait of Kira Pan, arms crossed, smiling"
              width={1084}
              height={1800}
              priority
              sizes="(min-width: 768px) 340px, 54vw"
              className="photo-warm relative z-10 h-auto w-full"
            />
          </div>

          <Draggable
            label="Charcoal drawing by Kira"
            rotate={-6}
            className="absolute bottom-[8%] left-0 z-20 w-[28%] max-w-[180px]"
          >
            <div className="art-frame">
              <Image
                src="/images/IMG_2955.jpeg"
                alt=""
                width={1169}
                height={1558}
                sizes="180px"
                draggable={false}
                className="h-auto w-full"
              />
            </div>
          </Draggable>

          <Draggable
            label="Pen and ink drawing of Venice by Kira"
            rotate={5}
            className="absolute right-0 top-[30%] z-20 w-[25%] max-w-[160px]"
          >
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-6 bg-tape" aria-hidden="true" />
            <div className="art-frame">
              <Image
                src="/images/venice_drawing.jpeg"
                alt=""
                width={2325}
                height={3076}
                sizes="160px"
                draggable={false}
                className="h-auto w-full"
              />
            </div>
          </Draggable>

          <p
            className="pointer-events-none absolute right-[1%] top-[64%] z-30 hidden max-w-[160px] rotate-[-5deg] font-hand text-[26px] leading-[1.05] text-accent lg:block"
            aria-hidden="true"
          >
            that&rsquo;s me! drag the drawings around ↙
          </p>
        </div>

          {/* The cover line: who this is, said plainly, right under the portrait. */}
          <figure className="mx-auto flex max-w-[440px] flex-col gap-3 text-center">
            <figcaption className="label order-first text-accent">The portfolio of Kira Pan</figcaption>
            <blockquote className="text-balance font-serif text-[22px] italic leading-[1.2] sm:text-[24px]">
              &ldquo;I&rsquo;m a data science and cognitive science student at UC Berkeley. I use data to
              understand people, and design and storytelling to make what I find useful.&rdquo;
            </blockquote>
          </figure>
        </div>

        {/* Right: fact sheet */}
        <div className="order-2 lg:order-3 lg:col-span-4">
          <AtAGlance />
        </div>
      </div>
    </section>
  );
}
