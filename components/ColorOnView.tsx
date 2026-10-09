"use client";

import { useEffect } from "react";

/**
 * Touch screens have no hover, so black-and-white images (`.feature-bw`) turn to color
 * while they sit in the middle band of the screen. Does nothing on hover-capable devices.
 */
export default function ColorOnView() {
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.target.classList.toggle("in-view", e.isIntersecting);
      },
      { rootMargin: "-30% 0px -30% 0px" }
    );
    document.querySelectorAll(".feature-bw").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
