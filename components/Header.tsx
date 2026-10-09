import Link from "next/link";

// `short` is the phone label, so all five fit on one line as tappable tabs.
const NAV = [
  { href: "/#features", label: "Features", short: "Features" },
  { href: "/#case-files", label: "Case Files", short: "Cases" },
  { href: "/#desk", label: "The Desk", short: "Desk" },
  { href: "/#studio", label: "Studio", short: "Studio" },
  { href: "/#about", label: "Contributor's Note", short: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-2">
        <Link href="/" className="label py-2 no-underline hover:text-accent">
          Vol. 04<span className="hidden sm:inline"> — Fall Issue 2026</span>
          <span className="hidden sm:inline"> · Berkeley, CA</span>
        </Link>

        <nav aria-label="Sections" className="order-3 w-full pb-1 xl:order-none xl:w-auto xl:pb-0">
          {/* Phones and tablets: one row of boxed tabs. Wide screens: plain text links. */}
          <ul className="grid grid-cols-[1.35fr_1fr_1fr_1fr_1fr] border border-ink sm:grid-cols-5 xl:flex xl:gap-x-7 xl:border-0">
            {NAV.map((item, i) => (
              <li key={item.href} className={i > 0 ? "border-l border-ink xl:border-0" : ""}>
                <Link
                  href={item.href}
                  className="flex min-h-[44px] items-center justify-center font-mono text-[11px] uppercase tracking-[0.06em] no-underline transition-colors duration-300 hover:bg-ink hover:text-paper active:bg-ink active:text-paper sm:text-[12px] sm:tracking-[0.1em] xl:inline-flex xl:justify-start xl:hover:bg-transparent xl:hover:text-accent"
                >
                  <span className="lg:hidden">{item.short}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/kira-z-pan"
            target="_blank"
            rel="noopener"
            className="label inline-flex min-h-[44px] items-center border border-ink px-4 no-underline transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            LinkedIn ↗
          </a>
          <a
            href="/KiraPan-Resume.pdf"
            target="_blank"
            rel="noopener"
            className="label inline-flex min-h-[44px] items-center border border-ink px-4 no-underline transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  );
}
