import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";

export default function Contact() {
  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-olive-grey hover:text-ink">
          ← Back
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          Contact
        </h1>

        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
          <p className="text-lg text-ink mb-6">
            Get in touch! I&apos;d love to hear from you.
          </p>
          <p className="text-base text-olive-grey">
            Contact information coming soon...
          </p>
        </div>
      </div>
    </PaperBoard>
  );
}
