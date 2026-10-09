import Image from "next/image";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import { FEATURES, splitTitle, type Feature } from "@/lib/features";

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

function FeatureLink({ f }: { f: Feature }) {
  const external = f.link.href.startsWith("http");
  const cls =
    "label inline-flex min-h-[44px] items-center self-start underline decoration-1 underline-offset-[6px] hover:text-accent";
  if (f.link.href === "/#features") {
    return <span className="label inline-flex min-h-[44px] items-center text-muted">{f.link.label}</span>;
  }
  return external ? (
    <a href={f.link.href} target="_blank" rel="noopener" className={cls}>
      {f.link.label}
    </a>
  ) : (
    <Link href={f.link.href} className={cls}>
      {f.link.label}
    </Link>
  );
}

export default function Features() {
  const [lead, ...rest] = FEATURES;

  return (
    <section id="features" aria-labelledby="features-title" className="container-page scroll-mt-6 pb-24">
      <h2 id="features-title" className="sr-only">
        Features
      </h2>
      <SectionHead number="01" title="Features" page="p. 04" />

      {/* Lead feature: the story and numbers lead; the screenshot supports them. */}
      <article id={`feature-${lead.slug}`} className="grid scroll-mt-6 grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-12">
        <div className="flex flex-col gap-5 md:col-span-7">
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{lead.kicker}</span>
          <Title
            f={lead}
            className="max-w-[760px] font-serif text-[42px] font-normal leading-[0.96] tracking-[-0.025em] lg:text-[68px]"
          />
          <p className="max-w-[560px] text-[17px] leading-[1.6]">{lead.dek}</p>
          <dl className="grid grid-cols-3 gap-4 border-y border-hairline py-4">
            {[
              ["408K+", "applications"],
              ["74%", "accuracy"],
              ["9", "tech centers"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col-reverse gap-1">
                <dt className="text-[13px] text-muted">{l}</dt>
                <dd className="font-serif text-[32px] leading-none sm:text-[40px]">{n}</dd>
              </div>
            ))}
          </dl>
          <p className="font-mono text-[12px] text-muted">Python · XGBoost · Random Forest · SMOTE · Streamlit</p>
          <FeatureLink f={lead} />
        </div>
        <figure className="group self-center md:col-span-5">
          <div className="relative aspect-[16/9] overflow-hidden border border-hairline bg-ink">
            <Image
              src={lead.media.src}
              alt={lead.media.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase leading-[1.6] tracking-[0.08em] text-muted">
            {lead.media.caption}
          </figcaption>
        </figure>
      </article>

      {/* Three smaller features */}
      {/* Subgrid keeps image, kicker, title, dek and link on the same rows across all three. */}
      <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3 md:gap-y-3">
        {rest.map((f) => (
          <article
            key={f.slug}
            id={`feature-${f.slug}`}
            className="flex scroll-mt-6 flex-col gap-3 md:row-span-5 md:grid md:grid-rows-subgrid md:gap-0"
          >
            <figure className="group mb-2">
              <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-frame">
                <Image
                  src={f.media.src}
                  alt={f.media.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase leading-[1.6] tracking-[0.08em] text-muted">
                {f.media.caption}
              </figcaption>
            </figure>
            <span className="self-end pt-2 font-mono text-[12px] uppercase md:pt-4 tracking-[0.1em] text-accent">{f.kicker}</span>
            <Title f={f} className="font-serif text-[30px] font-normal leading-[1.02] tracking-[-0.01em]" />
            <p className="text-[15px] leading-[1.55] text-muted">{f.dek}</p>
            <FeatureLink f={f} />
          </article>
        ))}
      </div>

      <blockquote className="mx-auto mt-24 max-w-[900px] text-center">
        <p className="font-serif text-[32px] italic leading-[1.12] md:text-[44px]">
          &ldquo;Users understood the concept right away. The grocery list needed a clearer path.&rdquo;
        </p>
        <footer className="label mt-4 text-muted">— From PantryPal usability testing</footer>
      </blockquote>
    </section>
  );
}
