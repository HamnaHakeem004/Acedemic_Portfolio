import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamna Hakeem | Academic Portfolio",
  description:
    "Hamna Hakeem, featuring academic projects, reflective journal entries, a career development plan, certificates, and supporting CV evidence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
