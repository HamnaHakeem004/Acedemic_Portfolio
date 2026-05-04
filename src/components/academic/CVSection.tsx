"use client";

import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";

export default function CVSection() {
  const cvPdf = "/Hamna_Hakeem_CV.pdf";

  return (
    <section id="cv" className="relative overflow-hidden bg-transparent py-24 px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-teal-700">
            <FiFileText />
            Supporting Evidence
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900">
            Curriculum <span className="text-teal-700">Vitae</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-teal-600" />

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My CV is included as part of this academic portfolio so that formal
            qualifications, education history, and supporting details are easy to review.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={cvPdf}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-white/55 bg-white/55 px-6 py-3 font-semibold text-slate-800 hover:bg-white/75 active:bg-white/85 transition backdrop-blur-xl shadow-sm"
          >
            <FiDownload />
            Download CV
          </a>

          <a
            href={cvPdf}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-teal-50 transition shadow-sm"
          >
            <FiExternalLink />
            Open in new tab
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 rounded-2xl border border-white/55 bg-white/55 backdrop-blur-2xl overflow-hidden shadow-lg"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/40">
            <div className="text-slate-900 font-semibold">CV Preview</div>
            <div className="text-slate-500 text-sm">Embedded PDF preview</div>
          </div>

          <div className="w-full h-[75vh] bg-white/35">
            <iframe
              src={cvPdf}
              className="w-full h-full"
              title="Uchith Chethana CV"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
