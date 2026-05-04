import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamna Hakeem | Academic Portfolio",
  description:
    "Hamna Hakeem, featuring academic projects, reflective journal entries, a career development plan, certificates, and supporting CV evidence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
