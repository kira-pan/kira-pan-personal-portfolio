import Image from "next/image";
import Link from "next/link";
import SectionHead from "@/components/SectionHead";
import LoopVideo from "@/components/LoopVideo";
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

      {/* Lead feature */}
      <article id={`feature-${lead.slug}`} className="grid scroll-mt-6 grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-12">
        <figure className="md:col-span-7">
          <div className="overflow-hidden border border-hairline bg-ink">
            <LoopVideo
              src={lead.media.src}
              poster={lead.media.poster}
              label={lead.media.alt}
              className="block aspect-[16/9] w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase leading-[1.6] tracking-[0.08em] text-muted">
            {lead.media.caption}
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center gap-5 md:col-span-5">
          <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{lead.kicker}</span>
          <Title
            f={lead}
            className="font-serif text-[40px] font-normal leading-[0.98] tracking-[-0.02em] lg:text-[52px]"
          />
          <p className="max-w-[480px] text-[17px] leading-[1.6]">{lead.dek}</p>
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
      </article>

      {/* Three smaller features */}
      <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
        {rest.map((f) => (
          <article key={f.slug} id={`feature-${f.slug}`} className="flex scroll-mt-6 flex-col gap-3">
            <figure className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-frame">
                <Image
                  src={f.media.src}
                  alt={f.media.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
                {f.slug === "pantrypal" && (
                  <Image
                    src="/images/features/pantrypal/icon.png"
                    alt="The finished PantryPal app icon"
                    width={321}
                    height={315}
                    className="absolute bottom-4 right-4 w-[26%] rotate-[4deg]"
                  />
                )}
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase leading-[1.6] tracking-[0.08em] text-muted">
                {f.slug === "pantrypal" ? "From the first logo sketch to the app icon" : f.media.caption}
              </figcaption>
            </figure>
            <span className="mt-2 font-mono text-[12px] uppercase tracking-[0.1em] text-accent">{f.kicker}</span>
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
