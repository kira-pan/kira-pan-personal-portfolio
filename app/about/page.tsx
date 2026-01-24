import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";

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
              marketing, user experience, and design. I love turning insights into stories and systems.
            </p>
            <p className="text-lg text-ink leading-relaxed">
              I&apos;m interested in the intersection of data, storytelling, and human-centered design. 
              Whether it&apos;s analyzing patterns, creating compelling narratives, or designing intuitive 
              experiences, I enjoy bringing together analytical thinking and creative expression.
            </p>
          </div>
        </div>
      </div>
    </PaperBoard>
  );
}
