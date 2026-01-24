import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";

export default function Resume() {
  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-olive-grey hover:text-ink">
          ← Back
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          Resume
        </h1>

        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
          <p className="text-lg text-ink mb-6">
            View or download my resume:
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-paper px-6 py-3 border-2 border-ink hover:bg-deep-olive transition-colors"
          >
            Open Resume PDF
          </a>
        </div>
      </div>
    </PaperBoard>
  );
}
