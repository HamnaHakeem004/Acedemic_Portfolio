"use client";

import { useEffect, useMemo, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-white/50 bg-white/55 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#home" className="shrink-0">
            <Logo size={44} withText />
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-slate-600">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-3 py-2 text-sm text-teal-700 backdrop-blur-xl shadow-sm">
              <FiBookOpen />
              Academic Portfolio
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/45 text-slate-700 transition hover:border-teal-300 hover:text-teal-600 backdrop-blur-xl shadow-sm"
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
                className="rounded-full border border-white/50 bg-white/45 px-3 py-2 text-sm whitespace-nowrap text-slate-600 transition hover:border-teal-300 hover:text-teal-600 backdrop-blur-xl shadow-sm"
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
