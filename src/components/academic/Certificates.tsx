"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiAward,
  FiExternalLink,
  FiX,
  FiSearch,
  FiDownload,
  FiFileText,
} from "react-icons/fi";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  type: "Technical" | "Soft Skill";
  skillImproved: string;
  proof: string;
  file: string; // <-- can be .jpg/.png OR .pdf (in /public)
  link?: string;
};

function isPdf(path: string) {
  return /\.pdf(\?.*)?$/i.test(path);
}

export default function Certificates() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<"All" | Cert["type"]>("All");
  const [open, setOpen] = useState<Cert | null>(null);

  const certs: Cert[] = useMemo(
    () => [
      {
        title: "Python for Beginners",
        issuer: "University of Moratuwa",
        date: "2024",
        type: "Technical",
        skillImproved: "Python fundamentals",
        proof:
          "Improved hands-on programming and writing cleaner, reusable code.",
        file: "/certificates/Cer1.pdf",
      },
      {
        title: "Web Design for Beginners",
        issuer: "University of Moratuwa",
        date: "2024",
        type: "Technical",
        skillImproved: "Web design principles",
        proof: "Improved hands-on programming and writing cleaner, reusable code.",
        file: "/certificates/Cer2.pdf",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certs.filter((c) => {
      const matchesType = activeType === "All" ? true : c.type === activeType;
      const matchesQuery = !q
        ? true
        : `${c.title} ${c.issuer} ${c.skillImproved} ${c.proof} ${c.type}`
          .toLowerCase()
          .includes(q);
      return matchesType && matchesQuery;
    });
  }, [certs, query, activeType]);

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-slate-50 py-24 px-6"
    >
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700">
            <FiAward />
            Certifications
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900">
            Certificates <span className="text-blue-700">& Evidence</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Certificates obtained within the last year (technical/soft skills),
            showing evidence of continuous learning and skill improvement.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          {/* search */}
          <div className="w-full md:w-105">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search certificates (e.g., Python, Microsoft, Power Platform)..."
                className="w-full rounded-xl bg-white border border-slate-200 pl-11 pr-10 py-3 text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition shadow-sm"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                  aria-label="Clear search"
                  type="button"
                >
                  ✕
                </button>
              ) : null}
            </div>
          </div>

          {/* type pills */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Technical", "Soft Skill"] as const).map((t) => {
              const active = t === activeType;
              return (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  type="button"
                  className={[
                    "rounded-full px-4 py-2 text-sm border transition",
                    active
                      ? "bg-blue-50 border-blue-600 text-blue-700"
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-700",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, idx) => {
            const pdf = isPdf(c.file);

            return (
              <motion.button
                key={c.title}
                type="button"
                onClick={() => setOpen(c)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.2) }}
                whileHover={{ y: -6 }}
                className="group text-left rounded-2xl border border-white/55 bg-white/55 overflow-hidden transition hover:border-blue-600 shadow-lg backdrop-blur-2xl"
              >
                <div className="relative h-44 w-full">
                  {/* Thumbnail */}
                  {pdf ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-white/70 to-slate-100/80">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-12 w-12 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-center text-blue-700">
                          <FiFileText size={22} />
                        </div>
                        <div className="text-slate-900 font-semibold">PDF</div>
                        <div className="text-slate-500 text-xs px-4 text-center">
                          Click to preview
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={c.file}
                      alt={`${c.title} certificate`}
                      fill
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-white/80 via-white/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-slate-900 font-semibold leading-tight">
                      {c.title}
                    </div>
                    <div className="text-slate-600 text-xs mt-1">
                      {c.issuer} • {c.date}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs rounded-full px-3 py-1 border border-blue-200 bg-blue-50 text-blue-700">
                      {c.type}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-blue-700 transition">
                      Click to view
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    <span className="text-slate-900 font-medium">
                      Skill improved:
                    </span>{" "}
                    {c.skillImproved}
                  </p>

                  <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                    {c.proof}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
            No certificates match your search. Try another keyword.
          </div>
        ) : null}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center px-5 py-10 bg-slate-900/20 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/55 bg-white/60 shadow-2xl backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                <div>
                  <div className="text-slate-900 font-semibold">{open.title}</div>
                  <div className="text-slate-500 text-sm">
                    {open.issuer} • {open.date}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={open.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:border-blue-600 hover:text-blue-700 transition shadow-sm"
                  >
                    <FiExternalLink /> Open
                  </a>

                  <a
                    href={open.file}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:border-blue-600 hover:text-blue-700 transition shadow-sm"
                  >
                    <FiDownload /> Download
                  </a>

                  {open.link ? (
                    <a
                      href={open.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:border-blue-600 hover:text-blue-700 transition shadow-sm"
                    >
                      <FiExternalLink /> Verify
                    </a>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:border-blue-600 transition shadow-sm"
                    aria-label="Close"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {/* LEFT: Preview */}
                <div className="bg-white/40 min-h-90 md:min-h-130">
                  {isPdf(open.file) ? (
                    <iframe
                      src={open.file}
                      className="w-full h-full"
                      title={`${open.title} certificate preview`}
                    />
                  ) : (
                    <div className="relative w-full h-full min-h-90 md:min-h-130">
                      <Image
                        src={open.file}
                        alt={`${open.title} certificate preview`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                </div>

                {/* RIGHT: Details */}
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs rounded-full px-3 py-1 border border-blue-600/25 bg-blue-600/10 text-blue-300">
                      {open.type}
                    </span>
                    <span className="text-xs rounded-full px-3 py-1 border border-slate-200 bg-slate-50 text-slate-600">
                      {open.skillImproved}
                    </span>
                    <span className="text-xs rounded-full px-3 py-1 border border-slate-200 bg-slate-50 text-slate-600">
                      {isPdf(open.file) ? "PDF" : "Image"}
                    </span>
                  </div>

                  <h4 className="mt-4 text-slate-900 font-semibold">
                    Evidence of skill improvement
                  </h4>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {open.proof}
                  </p>


                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
