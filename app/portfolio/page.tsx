import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import CutoutImage from "@/components/CutoutImage";

export default function Portfolio() {
  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-olive-grey hover:text-ink">
          ← Back
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          Portfolio
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-deep-olive mb-4">DataStory: Marketing Content</h2>
            <p className="text-lg text-olive-grey mb-6">Coming soon...</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-deep-olive mb-4">Charcoal Drawings</h2>
            <div className="flex flex-wrap gap-6">
              <CutoutImage
                src="/images/IMG_2955.jpeg"
                alt="Charcoal drawing"
                width={300}
                height={400}
              />
              <CutoutImage
                src="/images/IMG_3879.jpg"
                alt="Charcoal drawing"
                width={300}
                height={400}
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-deep-olive mb-4">Digital Art</h2>
            <p className="text-lg text-olive-grey mb-6">Coming soon...</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-deep-olive mb-4">Recycled Material Collage</h2>
            <p className="text-lg text-olive-grey mb-6">Coming soon...</p>
          </section>
        </div>
      </div>
    </PaperBoard>
  );
}
