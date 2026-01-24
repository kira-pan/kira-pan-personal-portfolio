"use client";

import PaperBoard from "@/components/PaperBoard";
import StickerLink from "@/components/StickerLink";
import Image from "next/image";
import CutoutImage from "@/components/CutoutImage";
import { useState, useRef, useEffect } from "react";

interface ImagePosition {
  top: number;
  left: number;
  rotation: number;
}

export default function Home() {
  const [imagePositions, setImagePositions] = useState<Record<string, ImagePosition>>({
    collage1: { top: 8, left: 8, rotation: -4 },
    collage2: { top: 16, left: 0, rotation: 3 },
    collage3: { top: 64, left: 4, rotation: -2.5 },
    charcoal1: { top: 0, left: 8, rotation: -1.5 },
    charcoal2: { top: 0, left: 0, rotation: 2 },
    recruitment1: { top: 72, left: 0, rotation: 1.5 },
    recruitment2: { top: 96, left: 33.33, rotation: -1 },
    recruitment3: { top: 0, left: 25, rotation: 2.5 },
    collage4: { top: 32, left: 50, rotation: -0.5 },
  });

  const [dragging, setDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobile-specific static positions for nice collage layout
  const mobilePositions: Record<string, ImagePosition> = {
    collage1: { top: 5, left: 5, rotation: -3 },
    collage2: { top: 8, left: 75, rotation: 2.5 },
    collage3: { top: 45, left: 2, rotation: -2 },
    charcoal1: { top: 70, left: 8, rotation: -1.5 },
    charcoal2: { top: 75, left: 70, rotation: 1.8 },
    recruitment1: { top: 50, left: 80, rotation: 1.2 },
    recruitment2: { top: 85, left: 40, rotation: -0.8 },
    recruitment3: { top: 30, left: 50, rotation: 2 },
    collage4: { top: 15, left: 40, rotation: -0.5 },
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
  const buttonZones = [
    { top: 8, left: 4, width: 15, height: 10 }, // Portfolio
    { top: 8, left: 85, width: 15, height: 10 }, // Projects
    { top: 50, left: 2, width: 12, height: 8 }, // Publications
    { top: 85, left: 4, width: 15, height: 10 }, // Resume
    { top: 50, left: 88, width: 12, height: 8 }, // About
    { top: 85, left: 85, width: 12, height: 8 }, // Contact
  ];

  const isOverButton = (top: number, left: number, width: number = 20, height: number = 25) => {
    // Check if image rectangle overlaps with any button zone
    return buttonZones.some(zone => {
      const imageRight = left + width;
      const imageBottom = top + height;
      const zoneRight = zone.left + zone.width;
      const zoneBottom = zone.top + zone.height;
      
      // Check for rectangle overlap
      return !(imageRight < zone.left || 
               left > zoneRight || 
               imageBottom < zone.top || 
               top > zoneBottom);
    });
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    if (isMobile) return; // Disable dragging on mobile
    e.preventDefault();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setDragging(id);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLeft = ((e.clientX - containerRect.left - dragOffset.x) / containerRect.width) * 100;
    const newTop = ((e.clientY - containerRect.top - dragOffset.y) / containerRect.height) * 100;

    // Estimate image size in percentage (approximate based on typical image sizes)
    const imageWidthPercent = 15; // ~200-300px out of ~2000px container
    const imageHeightPercent = 20; // ~300-400px out of ~2000px container

    // Prevent dragging over buttons
    if (!isOverButton(newTop, newLeft, imageWidthPercent, imageHeightPercent)) {
      setImagePositions(prev => ({
        ...prev,
        [dragging]: {
          ...prev[dragging],
          top: Math.max(0, Math.min(95, newTop)),
          left: Math.max(0, Math.min(95, newLeft)),
        },
      }));
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [dragging, dragOffset]);

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
      <div className="relative mb-4 md:mb-6 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-ink mb-3 md:mb-4 inline-block" style={{ transform: 'rotate(-1deg)' }}>
          KIRA PAN
        </h1>
        <br />
        <p className="text-lg md:text-2xl text-deep-olive inline-block" style={{ transform: 'rotate(0.5deg)' }}>
          Data • Marketing • UX • Design
        </p>
      </div>

      {/* Intro text card - centered */}
      <div className="relative mb-4 md:mb-6 text-center" style={{ transform: 'rotate(-0.5deg)' }}>
        <div className="bg-white border-2 border-ink p-5 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] max-w-2xl mx-auto inline-block">
          <p className="text-base md:text-xl text-ink leading-relaxed">
            Hi! I'm Kira, an undergraduate student at UC Berkeley passionate about data analytics,
            marketing, user experience, and design. I love turning insights into stories and systems.
          </p>
        </div>
      </div>

      {/* Handwritten note */}
      <div className="text-center mb-8 md:mb-12 pointer-events-none select-none -mt-2 md:-mt-3">
        <p 
          className="text-sm md:text-base text-olive-grey inline-block"
          style={{ 
            fontFamily: "'Nanum Pen Script', cursive",
            transform: 'rotate(-0.3deg)',
            userSelect: 'none',
            pointerEvents: 'none',
            fontWeight: 400
          }}
        >
          This site is best viewed on a desktop! Drag the images around to make your own collage.
        </p>
      </div>

      {/* Main collage area with centered photo, surrounding buttons, and chaotic overlapping portfolio images */}
      <div ref={containerRef} className="relative min-h-[600px] md:min-h-[900px] flex items-center justify-center overflow-hidden">
        {/* Photo - centered, no container box, non-draggable */}
        <div 
          className="relative z-10 pointer-events-none select-none" 
          style={{ transform: 'rotate(-2deg)', userSelect: 'none' }}
        >
          <Image
            src="/images/kira-tranparent.png"
            alt="Kira Pan"
            width={400}
            height={500}
            className="w-[280px] md:w-[400px] pointer-events-none"
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
          src="/images/1.png"
          alt="Recruitment design"
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
          className="absolute top-8 left-4 md:top-16 md:left-12 pointer-events-auto" 
          style={{ transform: 'rotate(-3deg)', zIndex: 20 }}
        >
          <StickerLink href="/portfolio">
            <span className="text-xl md:text-3xl font-bold text-ink">Portfolio</span>
          </StickerLink>
        </div>

        {/* Projects sticker - top right of photo */}
        <div 
          className="absolute top-8 right-4 md:top-16 md:right-12 pointer-events-auto" 
          style={{ transform: 'rotate(2.5deg)', zIndex: 20 }}
        >
          <StickerLink href="/projects">
            <span className="text-xl md:text-3xl font-bold text-ink">Projects</span>
          </StickerLink>
        </div>

        {/* Publications sticker - left side of photo */}
        <div 
          className="absolute top-1/2 left-2 md:top-1/2 md:left-8 pointer-events-auto" 
          style={{ transform: 'translateY(-50%) rotate(-1.5deg)', zIndex: 20 }}
        >
          <StickerLink href="/publications">
            <span className="text-lg md:text-2xl font-bold text-ink">Publications</span>
          </StickerLink>
        </div>

        {/* Resume sticker - bottom left of photo */}
        <div 
          className="absolute bottom-8 left-4 md:bottom-16 md:left-12 pointer-events-auto" 
          style={{ transform: 'rotate(-2.5deg)', zIndex: 20 }}
        >
          <StickerLink href="/resume">
            <span className="text-xl md:text-3xl font-bold text-ink">Resume</span>
          </StickerLink>
        </div>

        {/* About sticker - right side of photo */}
        <div 
          className="absolute top-1/2 right-2 md:top-1/2 md:right-8 pointer-events-auto" 
          style={{ transform: 'translateY(-50%) rotate(1.8deg)', zIndex: 20 }}
        >
          <StickerLink href="/about">
            <span className="text-lg md:text-2xl font-bold text-ink">About</span>
          </StickerLink>
        </div>

        {/* Contact sticker - bottom right of photo */}
        <div 
          className="absolute bottom-8 right-4 md:bottom-16 md:right-12 pointer-events-auto" 
          style={{ transform: 'rotate(-1deg)', zIndex: 20 }}
        >
          <StickerLink href="/contact">
            <span className="text-lg md:text-xl font-bold text-ink">Contact</span>
          </StickerLink>
        </div>
      </div>
    </PaperBoard>
  );
}
