import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";

export default function Projects() {
  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-olive-grey hover:text-ink">
          ← Back
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          Projects
        </h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <h2 className="text-3xl font-bold text-ink mb-4">Predictive Patent Application Dashboard</h2>
            <p className="text-lg text-ink leading-relaxed mb-4">
              This project is an interactive Streamlit dashboard developed with my partner as part of a project 
              examining how USPTO Office Actions influence the likelihood that a patent application receives an 
              allowance. I utilized machine learning techniques and Streamlit to build the final front-end dashboard.
            </p>
            <p className="text-base text-olive-grey">
              The code is available on my Github as well.
            </p>
          </div>
        </div>
      </div>
    </PaperBoard>
  );
}
