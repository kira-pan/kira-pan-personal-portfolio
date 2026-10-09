"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Resting rotation in degrees. Straightens slightly while dragged. */
  rotate?: number;
  className?: string;
  label: string;
};

let topZ = 20;

/**
 * Lets a piece of artwork be picked up and moved with a mouse or trackpad.
 * Desktop only: on touch screens it stays put so page scrolling is never hijacked.
 */
export default function Draggable({ children, rotate = 0, className = "", label }: Props) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [z, setZ] = useState<number | undefined>(undefined);
  const [enabled, setEnabled] = useState(false);
  const start = useRef({ px: 0, py: 0, x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 760px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (!enabled || e.button !== 0) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, x: offset.x, y: offset.y };
    topZ += 1;
    setZ(topZ);
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setOffset({
      x: start.current.x + e.clientX - start.current.px,
      y: start.current.y + e.clientY - start.current.py,
    });
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  }

  const angle = dragging ? rotate * 0.3 : rotate;

  return (
    <div
      role="img"
      aria-label={label}
      className={`${className} select-none ${enabled ? (dragging ? "cursor-grabbing" : "cursor-grab") : ""}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${angle}deg) scale(${dragging ? 1.03 : 1})`,
        transition: dragging ? "none" : "transform 600ms cubic-bezier(0.65, 0, 0.35, 1)",
        zIndex: z,
        touchAction: enabled ? "none" : "auto",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {children}
    </div>
  );
}
