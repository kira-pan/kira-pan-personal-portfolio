import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";

export default function Contact() {
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
          Contact
        </h1>

        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
          <p className="text-lg text-ink mb-6">
            Get in touch! I&apos;d love to hear from you.
          </p>
          <p className="text-base text-ink">
            Email: <a href="mailto:kirap@berkeley.edu" className="text-deep-olive hover:text-ink underline">kirap@berkeley.edu</a>
          </p>
        </div>
      </div>
    </PaperBoard>
  );
}
