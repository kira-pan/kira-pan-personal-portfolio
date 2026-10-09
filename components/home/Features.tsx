import Image from "next/image";
import SectionHead from "@/components/SectionHead";
import { FEATURES, LEAD_PROCESS, LEAD_TOOLS, splitTitle, type Feature } from "@/lib/features";

function Title({ f, className }: { f: Feature; className: string }) {
  const t = splitTitle(f);
  return (
    <h3 className={className}>
      {t.before}
      {t.em && <em>{t.em}</em>}
      {t.after}
    </h3>
  );
}

function Num({ n }: { n: string }) {
  return <span className="font-serif text-[34px] italic leading-none text-accent">{n}</span>;
}

/** Small feature card: image + number + title. The description appears over the image on hover
 *  (desktop) and under the title on touch screens. */
function Card({ f }: { f: Feature }) {
  const external = f.link?.href.startsWith("http");
  const Wrapper = f.link ? "a" : "div";
  return (
    <Wrapper
      id={`feature-${f.slug}`}
      {...(f.link ? { href: f.link.href, ...(external ? { target: "_blank", rel: "noopener" } : {}) } : {})}
      className="fcard group flex scroll-mt-6 flex-col gap-2.5 no-underline"
    >
      <div className="relative overflow-hidden border border-hairline">
        <Image
          src={f.image.src}
          alt={f.image.alt}
          width={f.image.width}
          height={f.image.height}
          sizes="(min-width: 768px) 30vw, 100vw"
          className="feature-bw aspect-[4/3] w-full object-cover group-hover:scale-[1.03]"
          style={f.image.position ? { objectPosition: f.image.position } : undefined}
        />
        {f.image.halves && (
          <div className="pointer-events-none absolute inset-x-0 top-0 grid grid-cols-2" aria-hidden="true">
            {f.image.halves.map((h) => (
              <span key={h} className="justify-self-start bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-paper">
                {h}
              </span>
            ))}
          </div>
        )}
        {/* Hover overlay (only where hovering exists) */}
        <div className="fcard-overlay absolute inset-0 hidden flex-col justify-end gap-3 bg-ink/90 p-6 text-paper">
          <p className="text-[16px] leading-[1.55]">{f.dek}</p>
          {f.link && <span className="label underline decoration-1 underline-offset-[6px]">{f.link.label}</span>}
          {f.credit && <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">{f.credit}</span>}
        </div>
      </div>
      <div className="mt-1 flex items-baseline gap-3">
        <Num n={f.num} />
        <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{f.kicker}</span>
      </div>
      <Title
        f={f}
        className="font-serif text-[28px] font-normal leading-[1.04] decoration-1 underline-offset-[5px] group-hover:underline"
      />
      {/* Touch screens: no hover, so the description sits under the title instead. */}
      <div className="fcard-touch flex flex-col gap-2">
        <p className="text-[15px] leading-[1.55] text-muted">{f.dek}</p>
        {f.credit && <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{f.credit}</span>}
        {f.link && <span className="label inline-flex min-h-[44px] items-center underline decoration-1 underline-offset-[6px]">{f.link.label}</span>}
      </div>
    </Wrapper>
  );
}

export default function Features() {
  const [lead, ...rest] = FEATURES;

  return (
    <section id="features" aria-labelledby="features-title" className="container-page scroll-mt-6 pb-20 pt-14 md:pt-16">
      <h2 id="features-title" className="sr-only">
        Features
      </h2>
      <SectionHead number="01" title="Features" page="p. 04" />

      {/* Lead: PantryPal, Kira's solo project */}
      <article id={`feature-${lead.slug}`} className="grid scroll-mt-6 grid-cols-1 items-center gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-6">
          <div className="flex items-baseline gap-3">
            <Num n={lead.num} />
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{lead.kicker}</span>
          </div>
          <Title
            f={lead}
            className="text-balance font-serif text-[40px] font-normal leading-[0.96] tracking-[-0.025em] lg:text-[56px] xl:text-[60px]"
          />
          <p className="max-w-[560px] text-[17px] leading-[1.6]">{lead.dek}</p>
          <ol className="grid grid-cols-2 gap-3 border-y border-hairline py-3.5 sm:grid-cols-4" aria-label="Process">
            {LEAD_PROCESS.map((step, i) => (
              <li key={step} className="flex flex-col gap-1">
                <span className={`font-serif text-[30px] leading-none ${i === LEAD_PROCESS.length - 1 ? "text-accent" : ""}`}>
                  0{i + 1}
                </span>
                <span className="text-[13px] text-muted">{step}</span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[12px] text-muted">{LEAD_TOOLS}</span>
            <span className="label text-muted">Case study coming soon</span>
          </div>
        </div>
        <figure className="lg:col-span-6">
          <Image
            src={lead.image.src}
            alt={lead.image.alt}
            width={lead.image.width}
            height={lead.image.height}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            Swap a meal → the week → the grocery list → saved
          </figcaption>
        </figure>
      </article>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
        {rest.map((f) => (
          <Card key={f.slug} f={f} />
        ))}
      </div>

      <blockquote className="mx-auto mt-16 max-w-[860px] text-center">
        <p className="font-serif text-[30px] italic leading-[1.12] md:text-[38px]">
          &ldquo;Users understood the concept right away. The grocery list needed a clearer path.&rdquo;
        </p>
        <footer className="label mt-3 text-muted">— From PantryPal usability testing</footer>
      </blockquote>
    </section>
  );
}
