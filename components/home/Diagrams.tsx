// Hand-drawn-style figures for the data work: ink lines on frame paper, one red accent each.
const T = { fontFamily: '"Geist Mono", ui-monospace, monospace', fontSize: 12, letterSpacing: 1.2, fill: "#161513" };
const M = "#5A564E";

export function AflacDiagram() {
  return (
    <svg
      viewBox="0 0 760 430"
      role="img"
      aria-label="Pipeline diagram: DOL EFAST2 filings are scraped with Playwright, sent to Gemini in batches to extract brokers and map parent firms, classified as firm or person with spaCy, normalized with regex rules, validated by tests, and saved as a clean broker table once a year"
      className="block h-auto w-full border border-hairline bg-frame"
    >
      <g {...T}>
        <g fill="none" stroke="#161513" strokeWidth={1.2}>
          <rect x="40" y="48" width="200" height="74" />
          <rect x="300" y="48" width="200" height="74" />
          <rect x="520" y="48" width="200" height="74" stroke="#B8321C" strokeWidth={2} />
          <rect x="520" y="178" width="200" height="74" />
          <rect x="300" y="178" width="200" height="74" />
          <rect x="40" y="178" width="200" height="74" />
          <rect x="40" y="320" width="680" height="64" strokeWidth={2} />
          <path d="M240 85 H292 M500 85 H512 M620 122 V170 M520 215 H508 M300 215 H248 M140 252 V312" />
        </g>
        <path d="M292 80 l8 5 -8 5z M512 80 l8 5 -8 5z M615 170 l5 8 5 -8z M508 210 l-8 5 8 5z M248 210 l-8 5 8 5z M135 312 l5 8 5 -8z" />
        <text x="56" y="76">1 · COLLECT</text>
        <text x="56" y="102" fill={M}>DOL EFAST2 filings</text>
        <text x="316" y="76">2 · SCRAPE</text>
        <text x="316" y="102" fill={M}>Playwright</text>
        <text x="536" y="76" fill="#B8321C">3 · EXTRACT</text>
        <text x="536" y="102" fill={M}>Gemini batch: brokers</text>
        <text x="536" y="116" fill={M}>+ parent firms (M&amp;A)</text>
        <text x="536" y="206">4 · CLASSIFY</text>
        <text x="536" y="232" fill={M}>spaCy: firm or person</text>
        <text x="316" y="206">5 · NORMALIZE</text>
        <text x="316" y="232" fill={M}>Merge name variants</text>
        <text x="56" y="206">6 · VALIDATE</text>
        <text x="56" y="232" fill={M}>Tests on every run</text>
        <text x="60" y="358" fontSize={14}>CLEAN BROKER TABLE · RUNS ONCE A YEAR</text>
      </g>
    </svg>
  );
}

export function HaasDiagram() {
  return (
    <svg
      viewBox="0 0 760 430"
      role="img"
      aria-label="Four methods: regression on expected versus actual viewer flow; matched comparisons of comments that call out AI versus comments that don't; benchmarking GPT sentiment classifiers against hand-labeled comments; one combined multimodal classifier"
      className="block h-auto w-full border border-hairline bg-frame"
    >
      <g {...T}>
        <g fill="none" stroke="#161513" strokeWidth={1.2}>
          <rect x="40" y="40" width="330" height="160" />
          <rect x="390" y="40" width="330" height="160" />
          <rect x="40" y="220" width="330" height="160" />
          <rect x="390" y="220" width="330" height="160" stroke="#B8321C" strokeWidth={2} />
          <path d="M70 170 L130 150 L190 160 L250 120 L330 100" stroke={M} strokeDasharray="4 4" />
          <path d="M70 170 L130 140 L190 128 L250 96 L330 70" />
          <rect x="410" y="130" width="70" height="40" />
          <rect x="500" y="130" width="70" height="40" />
          <rect x="60" y="310" width="40" height="40" />
          <rect x="110" y="310" width="40" height="40" />
          <rect x="160" y="310" width="40" height="40" stroke="#B8321C" />
          <circle cx="470" cy="330" r="22" />
          <circle cx="510" cy="330" r="22" />
          <circle cx="550" cy="330" r="22" />
        </g>
        <text x="60" y="68">A · REGRESSION</text>
        <text x="60" y="88" fill={M}>Expected vs. actual viewer flow</text>
        <text x="410" y="68">B · MATCHED COMPARISON</text>
        <text x="410" y="88" fill={M}>Comments that call out AI vs.</text>
        <text x="410" y="104" fill={M}>comments that don&apos;t</text>
        <text x="60" y="248">C · BENCHMARK</text>
        <text x="60" y="268" fill={M}>GPT sentiment classifiers vs.</text>
        <text x="60" y="284" fill={M}>comments I labeled by hand</text>
        <text x="410" y="248" fill="#B8321C">D · COMBINE</text>
        <text x="410" y="268" fill={M}>One multimodal classifier</text>
      </g>
    </svg>
  );
}
