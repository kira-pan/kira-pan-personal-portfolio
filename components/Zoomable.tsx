"use client";

import Image from "next/image";
import { useRef } from "react";

/**
 * A Studio piece: tilts slightly and comes into color on hover; click (or tap) to see it large.
 * `framed` = artwork with the off-white border; stickers pass framed={false} to stay die-cut.
 */
export default function Zoomable({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
  imgClassName = "",
  framed = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  imgClassName?: string;
  framed?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label={`Enlarge: ${alt}`}
        className={`zoomable group block w-full cursor-zoom-in text-left ${className}`}
      >
        <span className={`block overflow-hidden ${framed ? "art-frame" : ""}`}>
          <Image src={src} alt={alt} width={width} height={height} sizes={sizes} draggable={false} className={`feature-bw h-auto w-full ${imgClassName}`} />
        </span>
      </button>
      <dialog
        ref={ref}
        onClick={() => ref.current?.close()}
        className="m-auto max-h-[92vh] max-w-[92vw] cursor-zoom-out bg-transparent p-0 backdrop:bg-ink/90"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="90vw"
            className={`h-auto max-h-[80vh] w-auto max-w-[86vw] ${framed ? "border-[8px] border-frame bg-frame" : ""}`}
          />
          <span className="label text-on-ink-muted">Click anywhere to close</span>
        </div>
      </dialog>
    </>
  );
}
