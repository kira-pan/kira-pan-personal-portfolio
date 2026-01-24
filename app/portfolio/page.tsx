import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import CutoutImage from "@/components/CutoutImage";
import Image from "next/image";

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
            <div className="inline-block mb-4" style={{ transform: 'rotate(-1deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">DataStory: Marketing Content</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <div className="flex-shrink-0">
                <div className="bg-white border-2 border-ink p-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                  <video
                    src="/images/recruitment/coffee chat story.MP4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[280px] h-[450px] object-cover"
                  />
                </div>
              </div>
              <CutoutImage
                src="/images/recruitment/datastory feed.PNG"
                alt="DataStory feed"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/recruitment/1.png"
                alt="Recruitment design 1"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/recruitment/2.png"
                alt="Recruitment design 2"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/recruitment/front.png"
                alt="Recruitment design front"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/recruitment/back.png"
                alt="Recruitment design back"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <div className="flex-shrink-0 flex items-center justify-center ml-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(1deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Charcoal Drawings</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <CutoutImage
                src="/images/IMG_2955.jpeg"
                alt="Charcoal drawing"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/IMG_3879.jpg"
                alt="Charcoal drawing"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/IMG_2640.jpeg"
                alt="Charcoal drawing"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(1.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Recycled Material Collage</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <CutoutImage
                src="/images/IMG_3848.jpeg"
                alt="Recycled material collage"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/IMG_3849.jpeg"
                alt="Recycled material collage"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/IMG_3850.jpeg"
                alt="Recycled material collage"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/74339640290__E21A547C-56D4-4CBC-B45C-FF0DA2A6E8B3.jpeg"
                alt="Recycled material collage"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Digital Art</h2>
              </div>
            </div>
            <p className="text-lg text-olive-grey mb-6">Coming soon...</p>
          </section>
        </div>
      </div>
    </PaperBoard>
  );
}
