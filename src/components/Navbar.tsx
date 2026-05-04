"use client";

import { useEffect, useMemo, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "Profile" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Learning" },
      { href: "#reflective", label: "Journal" },
      { href: "#career-plan", label: "Plan" },
      { href: "#certificates", label: "Certificates" },
      { href: "#cv", label: "CV" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/75 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#home" className="shrink-0">
            <Logo size={44} withText />
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-600/10 px-3 py-2 text-sm text-blue-200">
              <FiBookOpen />
              Academic Portfolio
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-blue-500/50 hover:text-blue-300"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
              type="button"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        <div className="pb-4 lg:hidden">
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm whitespace-nowrap text-slate-300 transition hover:border-blue-500/40 hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
