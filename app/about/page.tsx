import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import CutoutImage from "@/components/CutoutImage";

export default function About() {
  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-olive-grey hover:text-ink">
          ← Back
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          About
        </h1>

        <div className="space-y-6">
          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <p className="text-lg md:text-xl text-ink leading-relaxed mb-4">
              Hi! I&apos;m Kira, an undergraduate student at UC Berkeley passionate about data analytics,
              marketing, user experience, and human-centered design.
            </p>
            <p className="text-lg text-ink leading-relaxed">
              Outside of school, I love to do all things creative, including editing my website, journaling, collaging, drawing, and crocheting. I also enjoy dance, trying new restaurants, and traveling!
            </p>
          </div>
          
          {/* Image Gallery */}
          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <div className="flex items-center gap-4 overflow-x-auto pb-4">
              <CutoutImage
                src="/images/about_1.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_2.jpg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_3.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_4.jpg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_5.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_6.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_7.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_8.jpg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </PaperBoard>
  );
}
