"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { FiAward, FiBookOpen, FiTarget } from "react-icons/fi";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(xSpring, [-60, 60], [-10, 10]);
  const rotateX = useTransform(ySpring, [-60, 60], [10, -10]);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const dots = useMemo(
    () => [
      { className: "top-4 right-10 h-3 w-3 bg-yellow-400", delay: 0 },
      { className: "top-16 -left-2 h-4 w-4 bg-emerald-300/80", delay: 0.2 },
      { className: "bottom-10 -right-1 h-5 w-5 bg-sky-300/70", delay: 0.35 },
      { className: "-bottom-2 left-14 h-3.5 w-3.5 bg-pink-300/70", delay: 0.5 },
    ],
    []
  );

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-[#f8fbff] via-[#eff6ff] to-[#eaf3ff] pt-36"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-linear-to-tr from-emerald-200/60 via-cyan-200/40 to-teal-200/50 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-linear-to-tr from-cyan-200/50 via-emerald-200/35 to-teal-200/40 blur-3xl"
        animate={{ x: [0, -26, 0], y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-sm text-teal-700 backdrop-blur-xl shadow-sm">
            <FiBookOpen />
            BSc (Hons) Software Engineering Undergraduate
          </div>

          <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl">
            {" "}
            <span className="text-teal-700">Hamna Hakeem</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-slate-600 md:text-xl">
            A focused record of my academic growth, applied software engineering
            projects, reflective learning, certifications, and career planning.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#reflective" className="rounded-lg border border-white/50 bg-white/50 px-6 py-3 text-slate-800 backdrop-blur-xl transition hover:bg-white/70 shadow-sm">
              Explore Journal
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#certificates"
              className="rounded-lg border border-white/50 bg-white/35 px-6 py-3 text-slate-700 backdrop-blur-xl transition hover:border-teal-300 hover:text-teal-700 shadow-sm"
            >
              View Certificates
            </motion.a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: FiBookOpen,
                title: "Academic Focus",
                detail: "Software engineering, full-stack systems, and reflective practice",
              },
              {
                icon: FiAward,
                title: "Evidence Included",
                detail: "Projects, certificates, journal entries, and supporting CV material",
              },
              {
                icon: FiTarget,
                title: "Current Direction",
                detail: "Building stronger engineering depth through applied project work",
              },
            ].map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/50 bg-white/45 p-4 text-left shadow-lg backdrop-blur-xl"
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white/55 text-teal-600 backdrop-blur-xl">
                  <Icon />
                </div>
                <div className="font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <motion.div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-linear-to-tr from-emerald-200 via-cyan-200 to-teal-200 blur-3xl opacity-50"
              animate={{ opacity: [0.22, 0.38, 0.22] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-40px)" }}
            />

            <div
              aria-hidden
              className="absolute -inset-2 rounded-full border border-slate-200"
              style={{ transform: "translateZ(-10px)" }}
            />

            {dots.map((dot, index) => (
              <motion.span
                key={index}
                aria-hidden
                className={`absolute rounded-full ${dot.className}`}
                animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  delay: dot.delay,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(30px)" }}
              />
            ))}

            <motion.div
              className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white/60 shadow-[0_20px_60px_rgba(37,99,235,0.18)] md:h-80 md:w-80 backdrop-blur-xl"
              style={{ transform: "translateZ(40px)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/HamnaIMG.jpeg"
                alt="Hamna Hakeem"
                fill
                priority
                className="object-cover"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-tr from-white/35 via-transparent to-white/25"
              />
            </motion.div>

            {/*  */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
