"use client";

import Image from "next/image";
import { useRef } from "react";

/** A video still that opens the full edit, with sound, in a lightbox. */
export default function FilmTile({
  src,
  poster,
  duration,
  title,
  italic,
  credit,
}: {
  src: string;
  poster: string;
  duration: string;
  title: string;
  italic?: string;
  credit: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function open() {
    dialogRef.current?.showModal();
    videoRef.current?.play().catch(() => {});
  }
  function close() {
    videoRef.current?.pause();
    dialogRef.current?.close();
  }

  return (
    <figure>
      <button
        type="button"
        onClick={open}
        aria-label={`Play ${title}${italic ? " " + italic : ""} with sound`}
        className="group relative block w-full overflow-hidden text-left"
      >
        <Image
          src={poster}
          alt=""
          width={960}
          height={540}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="feature-bw aspect-video w-full object-cover group-hover:scale-[1.03]"
        />
        <span className="label absolute bottom-3 left-3 bg-ink px-2.5 py-1.5 text-paper">▶ {duration}</span>
      </button>
      <figcaption className="mt-2.5">
        <span className="block font-serif text-[22px]">
          {title}
          {italic && (
            <>
              {" "}
              <em>{italic}</em>
            </>
          )}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">{credit}</span>
      </figcaption>

      <dialog
        ref={dialogRef}
        onClose={() => videoRef.current?.pause()}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(1100px,94vw)] bg-transparent p-0 text-paper"
        aria-label={title}
      >
        <div className="flex items-center justify-between pb-3">
          <span className="label">{credit}</span>
          <button type="button" onClick={close} className="label min-h-[44px] px-2 hover:text-accent">
            Close ✕
          </button>
        </div>
        <video ref={videoRef} className="block w-full bg-ink" src={src} poster={poster} controls playsInline preload="none" />
      </dialog>
    </figure>
  );
}
