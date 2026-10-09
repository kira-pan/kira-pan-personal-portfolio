import type { Metadata, Viewport } from "next";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/hanken-grotesk";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

// Runs before paint: show the loader on the first visit of a session, never with reduced motion.
const LOADER_SCRIPT = `try{if(!sessionStorage.getItem("kp-loader-seen")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){var d=document.documentElement;d.setAttribute("data-loader","on");setTimeout(function(){if(d.getAttribute("data-loader")==="on")d.removeAttribute("data-loader")},4000)}}catch(e){}`;

export const metadata: Metadata = {
  title: "Kira Pan — Portfolio",
  description:
    "Kira Pan studies cognitive science and data science at UC Berkeley. Data, research, design and writing.",
  icons: {
    icon: [{ url: "/images/favicon-k.png", type: "image/png" }],
    shortcut: "/images/favicon-k.png",
    apple: "/images/favicon-k.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LOADER_SCRIPT }} />
      </head>
      <body>
        <Loader />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
