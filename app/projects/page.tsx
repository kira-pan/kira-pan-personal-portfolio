"use client";

import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 22;
  const [currentTemplateImage, setCurrentTemplateImage] = useState(1);
  const totalTemplateImages = 13;

  const nextImage = () => {
    setCurrentImage((prev) => (prev >= totalImages ? 1 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev <= 1 ? totalImages : prev - 1));
  };

  const nextTemplateImage = () => {
    setCurrentTemplateImage((prev) => (prev >= totalTemplateImages ? 1 : prev + 1));
  };

  const prevTemplateImage = () => {
    setCurrentTemplateImage((prev) => (prev <= 1 ? totalTemplateImages : prev - 1));
  };

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
            <p className="text-base text-olive-grey mb-6">
              The code is available on my <a href="https://github.com/kira-pan/predictive-patent-dashboard" target="_blank" rel="noopener noreferrer" className="text-deep-olive hover:text-ink underline">Github</a> as well.
            </p>
            
            {/* Image Carousel */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="relative w-full h-[350px] md:h-[400px] bg-paper flex items-center justify-center overflow-hidden">
                <Image
                  src={`/images/jcp_${currentImage}.png`}
                  alt={`Dashboard screenshot ${currentImage}`}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border-2 border-ink px-3 py-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <span className="text-sm font-bold text-ink">{currentImage} / {totalImages}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <h2 className="text-3xl font-bold text-ink mb-4">DataStory Slideshow Template</h2>
            <p className="text-lg text-ink leading-relaxed mb-4">
              Slideshow template designed from scratch for our consulting organization to utilize for general meetings and when presenting our final deliverables to clients.
            </p>
            
            {/* Image Carousel */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="relative w-full h-[350px] md:h-[400px] bg-paper flex items-center justify-center overflow-hidden">
                <Image
                  src={`/images/template_${currentTemplateImage}.png`}
                  alt={`Template slide ${currentTemplateImage}`}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevTemplateImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTemplateImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border-2 border-ink px-3 py-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <span className="text-sm font-bold text-ink">{currentTemplateImage} / {totalTemplateImages}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PaperBoard>
  );
}
