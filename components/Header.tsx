import Link from "next/link";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#case-files", label: "Case Files" },
  { href: "/#desk", label: "The Desk" },
  { href: "/#studio", label: "Studio" },
  { href: "/#about", label: "Contributor's Note" },
];

export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-2">
        <Link href="/" className="label py-2 no-underline hover:text-accent">
          Vol. 04<span className="hidden sm:inline"> — Fall Issue 2026</span>
          <span className="hidden sm:inline"> · Berkeley, CA</span>
        </Link>
        <nav aria-label="Sections" className="order-3 w-full md:order-none md:w-auto">
          <ul className="flex flex-wrap gap-x-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="label inline-flex min-h-[44px] items-center no-underline transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
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
