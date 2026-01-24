import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
