"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

type TimelineItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

function StatCounter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const durationMs = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white">
        {display}
        {suffix ?? ""}
      </div>
      <div className="mt-2 text-white/70">{label}</div>
    </div>
  );
}

function TimelineDot() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/40" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
    </span>
  );
}

export default function About() {
  const stats: Stat[] = useMemo(
    () => [
      { value: 4, label: "Academic Years" },
      { value: 3, suffix: "+", label: "Flagship Projects" },
      { value: 7, label: "Certificates" },
      { value: 4, suffix: "+", label: "Journal Entries" },
    ],
    []
  );

  const timeline: TimelineItem[] = useMemo(
    () => [
      {
        title: "BSc (Hons) In Information Technology",
        org: "SLIIT",
        period: "2022 – Present",
        points: [
          "Developing fundamentals in programming, software design, databases, and engineering process.",
          "Building a stronger academic identity through project work, reflection, and evidence-based learning.",
        ],
      },
      {
        title: "Applied Project Development",
        org: "Coursework & Self-Directed Practice",
        period: "2024 – 2025",
        points: [
          "Used React, Next.js, Node.js, and Python to turn classroom concepts into working applications.",
          "Practiced UI design, API structure, image processing, and full-stack feature delivery.",
        ],
      },
      {
        title: "Continuous Learning Evidence",
        org: "Certificates, Reflection, and Career Planning",
        period: "Current Focus",
        points: [
          "Documented learning progress with weekly reflective journal entries for PPW.",
          "Collected certificates and a structured career plan to demonstrate growth beyond individual assignments.",
        ],
      },
    ],
    []
  );

  return (
    <section id="about" className="relative overflow-hidden bg-black py-24 px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/25 via-pink-500/20 to-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-500/20 to-emerald-500/25 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Academic <span className="text-blue-500">Profile</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            A concise overview of my degree path, current learning priorities,
            academic evidence, and the software engineering strengths I am building.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
                <Image src="/Uchith.jpeg" alt="Uchith Chethana" fill className="object-cover" />
              </div>
              <div>
                <div className="text-white text-xl font-semibold">Uchith Chethana</div>
                <div className="text-white/70">Information Technology Undergraduate</div>
              </div>
            </div>

            <p className="mt-6 text-white/75 leading-relaxed">
              I use this portfolio to show how academic study connects to real
              software engineering practice. It combines technical work,
              reflective learning, certificates, and clear evidence of progress.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/Uchith_Chethana_CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg hover:brightness-110 active:brightness-95"
              >
                Download CV
              </a>
              <a
                href="#career-plan"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10"
              >
                View Career Plan
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "SLIIT Undergraduate",
                "Expected graduation: 2026",
                "Full-stack project work",
                "Reflective academic evidence",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur">
              <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">Current Academic Focus</h3>
                <p className="mt-4 text-white/75 leading-relaxed">
                  My current focus is strengthening practical software
                  engineering ability by connecting coursework with applied
                  projects, cleaner system thinking, and better technical communication.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Software engineering principles",
                    "Modern web application development",
                    "Testing and quality thinking",
                    "Career planning and reflection",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <StatCounter key={stat.label} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Academic Journey</h3>
            <p className="mt-2 text-white/70">How my study path has translated into practical growth</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
            <div aria-hidden className="absolute left-6 top-10 bottom-10 w-px bg-white/10" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={`${item.title}-${item.period}`} className="relative pl-12">
                  <div className="absolute left-5 top-1.5">
                    <TimelineDot />
                  </div>

                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-white text-lg font-semibold">{item.title}</div>
                      <div className="text-white/70">{item.org}</div>
                    </div>
                    <div className="text-sm text-white/60 md:text-base">{item.period}</div>
                  </div>

                  <ul className="mt-4 space-y-2 text-white/75">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Portfolio Coverage
            </h3>
            <p className="mt-2 text-white/70">
              The core evidence areas included in this academic portfolio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Academic Projects",
                detail: "Applied software engineering work using full-stack and Python-based tools.",
              },
              {
                title: "Reflective Journal",
                detail: "Weekly PPW reflections showing what I learned, applied, and improved.",
              },
              {
                title: "Certificates",
                detail: "Verified learning evidence from technical courses and simulations.",
              },
              {
                title: "Career Plan",
                detail: "A structured roadmap that links current study with long-term growth goals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-lg font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
