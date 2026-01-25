import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import CutoutImage from "@/components/CutoutImage";
import Image from "next/image";

export default function Portfolio() {
  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 bg-white border-2 border-ink rounded-sm px-2 py-1.5 md:px-3 md:py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)] transition-all cursor-pointer hover:bg-[#bf6463] group"
        >
          <span className="text-sm md:text-base font-bold text-ink group-hover:text-white transition-colors">← Back</span>
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
              <a 
                href="https://www.datastoryberkeley.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <CutoutImage
                  src="/images/datastory-website-thumbnail.png"
                  alt="DataStory website"
                  width={250}
                  height={350}
                  className=""
                />
                <div className="absolute inset-0 bg-[#bf6463]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl md:text-2xl font-bold">Visit Our Website</span>
                </div>
              </a>
              <div className="flex-shrink-0">
                <div className="bg-white border-2 border-ink p-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]" style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/recruitment/datastory feed.PNG"
                    alt="DataStory feed"
                    width={250}
                    height={350}
                    className="object-contain max-h-full max-w-full"
                    style={{ height: '350px', width: 'auto' }}
                  />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white border-2 border-ink p-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                  <video
                    src="/images/recruitment/coffee chat story.MP4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[350px] w-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white border-2 border-ink p-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                  <video
                    src="/images/Recruitment-Timeline.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[350px] w-auto object-contain"
                  />
                </div>
              </div>
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
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Digital Art</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <CutoutImage
                src="/images/KiraPan_Bird_Calling_Poster.jpg"
                alt="Bird Calling digital art poster"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <div className="flex-shrink-0" style={{ filter: 'drop-shadow(1px 1px 0px #151515) drop-shadow(-1px -1px 0px #151515) drop-shadow(1px -1px 0px #151515) drop-shadow(-1px 1px 0px #151515) drop-shadow(4px 4px 0px rgba(21,21,21,0.15))' }}>
                <Image
                  src="/images/cssa-sticker.png"
                  alt="CSSA sticker"
                  width={300}
                  height={300}
                  className="object-contain"
                  style={{ background: 'transparent' }}
                />
              </div>
              <div className="flex-shrink-0" style={{ filter: 'drop-shadow(1px 1px 0px #151515) drop-shadow(-1px -1px 0px #151515) drop-shadow(1px -1px 0px #151515) drop-shadow(-1px 1px 0px #151515) drop-shadow(4px 4px 0px rgba(21,21,21,0.15))' }}>
                <Image
                  src="/images/roxie-sticker.png"
                  alt="Roxie sticker"
                  width={300}
                  height={300}
                  className="object-contain"
                  style={{ background: 'transparent' }}
                />
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
            <div className="inline-block mb-4" style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Pen & Ink Drawings</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <CutoutImage
                src="/images/london_postcard.jpg"
                alt="London postcard pen & ink drawing"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/venice_drawing.jpeg"
                alt="Venice pen & ink drawing"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/KiraPan_Lineart.jpeg"
                alt="Line art pen & ink drawing"
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
        </div>
      </div>
    </PaperBoard>
  );
}
