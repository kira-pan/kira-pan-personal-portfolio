import type { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum-pen",
});

export const metadata: Metadata = {
  title: "Kira Pan",
  description: "Data • Marketing • UX • Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nanumPenScript.variable}>{children}</body>
    </html>
  );
}
