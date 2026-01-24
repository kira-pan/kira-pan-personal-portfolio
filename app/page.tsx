"use client";

import PaperBoard from "@/components/PaperBoard";
import StickerLink from "@/components/StickerLink";
import Image from "next/image";
import CutoutImage from "@/components/CutoutImage";
import { useState, useRef, useEffect, useMemo } from "react";

interface ImagePosition {
  top: number;
  left: number;
  rotation: number;
}

export default function Home() {
  const [imagePositions, setImagePositions] = useState<Record<string, ImagePosition>>({
    // Spread out evenly but consolidated toward center, all within safe bounds (5-80% top, 5-85% left)
    collage1: { top: 12, left: 8, rotation: -3.5 },
    collage2: { top: 15, left: 78, rotation: 2.8 },
    collage3: { top: 45, left: 6, rotation: -2.2 },
    charcoal1: { top: 65, left: 12, rotation: -1.8 },
    charcoal2: { top: 68, left: 80, rotation: 1.5 },
    recruitment1: { top: 42, left: 82, rotation: 2.2 },
    recruitment2: { top: 72, left: 48, rotation: -1.2 },
    recruitment3: { top: 28, left: 55, rotation: 2.5 },
    collage4: { top: 18, left: 68, rotation: -0.8 },
  });

  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState<Record<string, { width: number; height: number }>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Keep refs in sync with state
  useEffect(() => {
    draggingRef.current = dragging;
  }, [dragging]);
  
  useEffect(() => {
    dragOffsetRef.current = dragOffset;
  }, [dragOffset]);

  // Mobile-specific static positions for nice collage layout (within safe bounds)
  const mobilePositions: Record<string, ImagePosition> = {
    collage1: { top: 8, left: 6, rotation: -3 },
    collage2: { top: 10, left: 72, rotation: 2.5 },
    collage3: { top: 42, left: 4, rotation: -2 },
    charcoal1: { top: 65, left: 10, rotation: -1.5 },
    charcoal2: { top: 68, left: 68, rotation: 1.8 },
    recruitment1: { top: 48, left: 75, rotation: 1.2 },
    recruitment2: { top: 78, left: 42, rotation: -0.8 },
    recruitment3: { top: 28, left: 48, rotation: 2 },
    collage4: { top: 18, left: 38, rotation: -0.5 },
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Button positions (approximate, in percentage of container)
  const buttonZones = useMemo(() => [
    { top: 8, left: 4, width: 15, height: 10 }, // Portfolio
    { top: 8, left: 85, width: 15, height: 10 }, // Projects
    { top: 50, left: 2, width: 12, height: 8 }, // Publications
    { top: 85, left: 4, width: 15, height: 10 }, // Resume
    { top: 50, left: 88, width: 12, height: 8 }, // About
    { top: 85, left: 85, width: 12, height: 8 }, // Contact
  ], []);

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    if (isMobile) return;
    e.preventDefault();
    e.stopPropagation();
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    // Calculate offset from mouse position to image top-left
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    // Store actual image dimensions for boundary checking
    const imageElement = imageRefs.current[id];
    if (imageElement) {
      const imageRect = imageElement.getBoundingClientRect();
      setImageDimensions(prev => ({
        ...prev,
        [id]: {
          width: imageRect.width,
          height: imageRect.height,
        },
      }));
    }
    
    setDragOffset({ x: offsetX, y: offsetY });
    setDragging(id);
  };

  useEffect(() => {
    if (!dragging || isMobile) return;

    // Capture current values at the time the effect runs
    const currentDraggingId = dragging;
    const currentOffsetValue = dragOffset;

    const checkOverButton = (top: number, left: number, width: number = 20, height: number = 25) => {
      return buttonZones.some((zone: { top: number; left: number; width: number; height: number }) => {
        const imageRight = left + width;
        const imageBottom = top + height;
        const zoneRight = zone.left + zone.width;
        const zoneBottom = zone.top + zone.height;
        return !(imageRight < zone.left || 
                 left > zoneRight || 
                 imageBottom < zone.top || 
                 top > zoneBottom);
      });
    };

    const handleMove = (e: MouseEvent) => {
      // Use refs as fallback, but prefer captured values
      const activeId = draggingRef.current || currentDraggingId;
      const offset = dragOffsetRef.current || currentOffsetValue;
      
      if (!activeId || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      // Calculate new position: mouse position minus offset (where mouse clicked on image), converted to percentage
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      let newLeft = ((mouseX - offset.x) / containerRect.width) * 100;
      let newTop = ((mouseY - offset.y) / containerRect.height) * 100;

      // Get actual image dimensions
      const imageDim = imageDimensions[activeId];
      let imageWidthPercent = 12; // fallback estimate
      let imageHeightPercent = 15; // fallback estimate
      
      if (imageDim && containerRect.width > 0 && containerRect.height > 0) {
        // Calculate actual image size as percentage of container
        imageWidthPercent = (imageDim.width / containerRect.width) * 100;
        imageHeightPercent = (imageDim.height / containerRect.height) * 100;
      }

      // Constrain to keep entire image within container bounds
      // Allow images to go to edges (0% to 100% minus image size)
      newLeft = Math.max(0, Math.min(100 - imageWidthPercent, newLeft));
      newTop = Math.max(0, Math.min(100 - imageHeightPercent, newTop));

      // Prevent dragging over buttons
      if (!checkOverButton(newTop, newLeft, imageWidthPercent, imageHeightPercent)) {
        setImagePositions(prev => ({
          ...prev,
          [activeId]: {
            ...prev[activeId],
            top: newTop,
            left: newLeft,
          },
        }));
      }
    };

    const handleUp = () => {
      setDragging(null);
    };

    document.addEventListener("mousemove", handleMove, { passive: false });
    document.addEventListener("mouseup", handleUp);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, [dragging, dragOffset, isMobile, buttonZones]);

  const DraggableImage = ({ 
    id, 
    src, 
    alt, 
    width, 
    height, 
    className,
    defaultTop,
    defaultLeft,
    defaultRotation 
  }: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    defaultTop: number;
    defaultLeft: number;
    defaultRotation: number;
  }) => {
    // Use mobile positions on mobile, otherwise use draggable positions
    const pos = isMobile 
      ? (mobilePositions[id] || { top: defaultTop, left: defaultLeft, rotation: defaultRotation })
      : (imagePositions[id] || { top: defaultTop, left: defaultLeft, rotation: defaultRotation });
    const isDragging = dragging === id;
    
    return (
      <div
        ref={(el) => { imageRefs.current[id] = el; }}
        className={`absolute select-none ${isMobile ? 'cursor-default' : 'cursor-move'} ${isDragging ? 'opacity-90' : ''} ${className}`}
        style={{
          top: `${pos.top}%`,
          left: `${pos.left}%`,
          transform: `rotate(${pos.rotation}deg)`,
          zIndex: isDragging ? 25 : (pos.top < 50 ? 2 : 1),
          userSelect: 'none',
          pointerEvents: isMobile ? 'auto' : 'auto',
        }}
        onMouseDown={(e) => !isMobile && handleMouseDown(e, id)}
        onTouchStart={(e) => e.preventDefault()} // Prevent touch dragging on mobile
      >
        <CutoutImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
    );
  };
  return (
    <PaperBoard>
      {/* Main title area */}
      <div className="relative mb-4 md:mb-6 flex flex-col items-center justify-center">
        <div className="inline-block" style={{ transform: 'rotate(-1deg)' }}>
          <Image
            src="/images/magazine-kira.png"
            alt="Kira Pan"
            width={800}
            height={300}
            className="w-[560px] md:w-[800px] h-auto"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
      
      {/* Thin banner stripe with text - full width */}
      <div className="w-screen py-1 md:py-1.5 -mt-12 md:-mt-16 mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: '#bf6463', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)', width: '100vw' }}>
        <p className="text-base md:text-lg text-white text-center" style={{ transform: 'rotate(0.5deg)' }}>
          Data • Marketing • UX • Design
        </p>
      </div>

      {/* Intro text card - centered */}
      <div className="relative mb-4 md:mb-6 text-center" style={{ transform: 'rotate(-0.5deg)' }}>
        <div className="bg-white border-2 border-ink p-5 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] max-w-2xl mx-auto inline-block">
          <p className="text-base md:text-xl text-ink leading-relaxed">
            Hi! I&apos;m Kira, and I am currently an undergraduate student at UC Berkeley. I am pursuing my B.A. in Cognitive Science, a data science minor and my Berkeley Certificate in Design Innovation. I am passionate about data analytics, marketing, user experience and design!
          </p>
        </div>
      </div>

      {/* Handwritten note */}
      <div className="text-center mb-0 pointer-events-none select-none -mt-2 md:-mt-3">
        <p 
          className="text-sm md:text-base text-olive-grey inline-block"
          style={{ 
            transform: 'rotate(-0.3deg)',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          This site is best viewed on a desktop! Drag the images around to make your own collage.
        </p>
      </div>

      {/* Main collage area with centered photo, surrounding buttons, and chaotic overlapping portfolio images */}
      <div ref={containerRef} className="relative min-h-[600px] md:min-h-[900px] flex items-center justify-center overflow-hidden -mt-20 md:-mt-24" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        {/* Photo - centered, no container box, non-draggable */}
        <div 
          className="relative z-10 pointer-events-none select-none" 
          style={{ transform: 'rotate(-2deg)', userSelect: 'none' }}
        >
          <Image
            src="/images/kira-tranparent.png"
            alt="Kira Pan"
            width={480}
            height={600}
            className="w-[320px] md:w-[480px] pointer-events-none"
            style={{ background: 'transparent', userSelect: 'none', pointerEvents: 'none' }}
            draggable={false}
          />
        </div>

        {/* Portfolio collage images - draggable */}
        <DraggableImage
          id="collage1"
          src="/images/IMG_3848.jpeg"
          alt="Collage artwork"
          width={220}
          height={275}
          className="w-[160px] md:w-[220px]"
          defaultTop={8}
          defaultLeft={8}
          defaultRotation={-4}
        />

        <DraggableImage
          id="collage2"
          src="/images/IMG_3849.jpeg"
          alt="Collage artwork"
          width={200}
          height={250}
          className="w-[150px] md:w-[200px]"
          defaultTop={16}
          defaultLeft={85}
          defaultRotation={3}
        />

        <DraggableImage
          id="collage3"
          src="/images/IMG_3850.jpeg"
          alt="Collage artwork"
          width={240}
          height={300}
          className="w-[180px] md:w-[240px]"
          defaultTop={64}
          defaultLeft={4}
          defaultRotation={-2.5}
        />

        <DraggableImage
          id="charcoal1"
          src="/images/IMG_2955.jpeg"
          alt="Charcoal drawing"
          width={210}
          height={265}
          className="w-[160px] md:w-[210px]"
          defaultTop={75}
          defaultLeft={8}
          defaultRotation={-1.5}
        />

        <DraggableImage
          id="charcoal2"
          src="/images/IMG_3879.jpg"
          alt="Charcoal drawing"
          width={200}
          height={245}
          className="w-[150px] md:w-[200px]"
          defaultTop={80}
          defaultLeft={85}
          defaultRotation={2}
        />

        <DraggableImage
          id="recruitment1"
          src="/images/IMG_2640.jpeg"
          alt="Charcoal drawing"
          width={190}
          height={235}
          className="w-[140px] md:w-[190px]"
          defaultTop={72}
          defaultLeft={90}
          defaultRotation={1.5}
        />

        <DraggableImage
          id="recruitment2"
          src="/images/2.png"
          alt="Recruitment design"
          width={175}
          height={220}
          className="w-[130px] md:w-[175px]"
          defaultTop={96}
          defaultLeft={33.33}
          defaultRotation={-1}
        />

        <DraggableImage
          id="recruitment3"
          src="/images/front.png"
          alt="Recruitment design"
          width={205}
          height={260}
          className="w-[150px] md:w-[205px]"
          defaultTop={60}
          defaultLeft={25}
          defaultRotation={2.5}
        />

        <DraggableImage
          id="collage4"
          src="/images/74339640290__E21A547C-56D4-4CBC-B45C-FF0DA2A6E8B3.jpeg"
          alt="Collage artwork"
          width={160}
          height={200}
          className="w-[120px] md:w-[160px]"
          defaultTop={32}
          defaultLeft={50}
          defaultRotation={-0.5}
        />

        {/* Portfolio sticker - top left of photo (higher z-index to be clickable) */}
        <div 
          className="absolute pointer-events-auto" 
          style={{ top: '35%', left: '35%', transform: 'translate(-50%, -50%) rotate(-3deg)', zIndex: 20 }}
        >
          <StickerLink href="/portfolio">
            <span className="text-xl md:text-3xl font-bold text-ink group-hover:text-white transition-colors">Portfolio</span>
          </StickerLink>
        </div>

        {/* Projects sticker - top right of photo */}
        <div 
          className="absolute pointer-events-auto" 
          style={{ top: '35%', right: '35%', transform: 'translate(50%, -50%) rotate(2.5deg)', zIndex: 20 }}
        >
          <StickerLink href="/projects">
            <span className="text-xl md:text-3xl font-bold text-ink group-hover:text-white transition-colors">Projects</span>
          </StickerLink>
        </div>

        {/* Publications sticker - left side of photo */}
        <div 
          className="absolute pointer-events-auto" 
          style={{ top: '50%', left: '35%', transform: 'translate(-50%, -50%) rotate(-1.5deg)', zIndex: 20 }}
        >
          <StickerLink href="/publications">
            <span className="text-lg md:text-2xl font-bold text-ink group-hover:text-white transition-colors">Publications</span>
          </StickerLink>
        </div>

        {/* Resume sticker - bottom left of photo */}
        <div 
          className="absolute pointer-events-auto" 
          style={{ bottom: '35%', left: '35%', transform: 'translate(-50%, 50%) rotate(-2.5deg)', zIndex: 20 }}
        >
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white border-2 border-ink rounded-sm px-3 py-2 md:px-4 md:py-3 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)] transition-all cursor-pointer touch-manipulation hover:bg-[#bf6463] group"
          >
            <span className="text-xl md:text-3xl font-bold text-ink group-hover:text-white transition-colors">Resume</span>
          </a>
        </div>

        {/* About sticker - right side of photo */}
        <div 
          className="absolute pointer-events-auto" 
          style={{ top: '50%', right: '35%', transform: 'translate(50%, -50%) rotate(1.8deg)', zIndex: 20 }}
        >
          <StickerLink href="/about">
            <span className="text-lg md:text-2xl font-bold text-ink group-hover:text-white transition-colors">About</span>
          </StickerLink>
        </div>

        {/* Contact sticker - bottom right of photo */}
        <div 
          className="absolute pointer-events-auto" 
          style={{ bottom: '35%', right: '35%', transform: 'translate(50%, 50%) rotate(-1deg)', zIndex: 20 }}
        >
          <StickerLink href="/contact">
            <span className="text-lg md:text-xl font-bold text-ink group-hover:text-white transition-colors">Contact</span>
          </StickerLink>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 md:mt-16 py-6 md:py-8 border-t-2 border-ink/20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-6 md:gap-8">
            <a 
              href="https://www.linkedin.com/in/kira-z-pan" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </a>
            <a 
              href="https://github.com/kira-pan" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </a>
          </div>
          <p className="text-xs md:text-sm text-olive-grey text-center">
            © 2026 Kira Pan · <button onClick={() => setShowAboutModal(true)} className="hover:text-ink underline">About this site</button>
          </p>
        </div>
      </footer>

      {/* About This Site Modal */}
      {showAboutModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowAboutModal(false)}
        >
          <div 
            className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            <button
              onClick={() => setShowAboutModal(false)}
              className="absolute top-2 right-2 text-ink hover:text-olive-grey text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <p className="text-base md:text-lg text-ink leading-relaxed">
              This site was designed and built by me using React, Next.js, and modern development tools, including AI-assisted workflows for iteration and debugging.
            </p>
          </div>
        </div>
      )}
    </PaperBoard>
  );
}
