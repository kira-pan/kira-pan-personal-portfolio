import React from "react";

interface DoodleProps {
  type: "star" | "arrow" | "scribble";
  className?: string;
  style?: React.CSSProperties;
}

export default function Doodle({ type, className = "", style }: DoodleProps) {
  const renderDoodle = () => {
    switch (type) {
      case "star":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-ink"
          >
            <path
              d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "arrow":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-ink"
          >
            <path
              d="M8 16L24 16M24 16L18 10M24 16L18 22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "scribble":
        return (
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-ink"
          >
            <path
              d="M2 10C2 10 8 4 12 6C16 8 18 12 22 10C26 8 30 4 34 6C36 7 38 10 38 10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 14C4 14 6 12 8 13C10 14 12 16 14 15C16 14 18 12 20 13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`inline-block ${className}`} style={style}>
      {renderDoodle()}
    </div>
  );
}
