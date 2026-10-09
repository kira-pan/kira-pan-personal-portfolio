import type { Config } from "tailwindcss";

// Design tokens for the magazine redesign. See CLAUDE.md — use nothing outside this set.
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EA",
        ink: "#161513",
        muted: "#5A564E",
        accent: "#B8321C",
        manila: "#E8E1CF",
        frame: "#FFFDF8",
        hairline: "rgba(22,21,19,0.2)",
        "on-ink-muted": "#B9B3A6",
        tape: "rgba(214,196,150,0.75)",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk Variable"', '"Hanken Grotesk"', "Helvetica Neue", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "Menlo", "monospace"],
        hand: ["KiraHandwriting", "cursive"],
      },
      maxWidth: {
        page: "1360px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      borderRadius: {
        // No rounded corners anywhere in this design.
        none: "0",
        DEFAULT: "0",
      },
    },
  },
  plugins: [],
};
export default config;
