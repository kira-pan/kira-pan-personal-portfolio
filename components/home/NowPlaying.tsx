"use client";

import { useEffect, useRef, useState } from "react";

/** The cover's video box: a muted loop that opens the full edit, with sound, in a lightbox. */
export default function NowPlaying() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) loopRef.current?.pause();
  }, []);

  function open() {
    dialogRef.current?.showModal();
    fullRef.current?.play().catch(() => {});
  }

  function close() {
    fullRef.current?.pause();
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Play the Yosemite trip video with sound"
        className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink text-left text-paper"
      >
        <video
          ref={loopRef}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          src="/videos/yosemite-loop.mp4"
          poster="/videos/yosemite-poster.jpg"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <span className="label absolute inset-x-0 top-0 flex justify-between bg-ink/75 px-5 py-3">
          <span>
            <span className="text-accent" aria-hidden="true">●</span> Now playing
          </span>
          <span>Sound on ↗</span>
        </span>
        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-ink/75 px-5 pb-5 pt-4">
          <span className="font-serif text-[30px] leading-[1.02]">
            Yosemite, <em>with the club</em>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-on-ink-muted">
            Edited by me · DataStory marketing
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => fullRef.current?.pause()}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(1100px,94vw)] bg-transparent p-0 text-paper"
        aria-label="Yosemite Fall 2026 video"
      >
        <div className="flex items-center justify-between pb-3">
          <span className="label">DataStory — Yosemite Fall 2026 · Edited by Kira Pan</span>
          <button type="button" onClick={close} className="label min-h-[44px] px-2 hover:text-accent">
            Close ✕
          </button>
        </div>
        <video
          ref={fullRef}
          className="block w-full bg-ink"
          src="/videos/yosemite.mp4"
          poster="/videos/yosemite-poster.jpg"
          controls
          playsInline
          preload="none"
        />
      </dialog>
    </>
  );
}
