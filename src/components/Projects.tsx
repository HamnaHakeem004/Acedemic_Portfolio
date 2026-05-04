

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiSearch } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  image?: string;
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: "Floral Management System",
    description:
      "A web application for managing floral inventory, orders, and customer interactions, built with a focus on user-friendly design and efficient backend architecture.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/HamnaHakeem004/floral_management.git",
    highlights: [
      "Implemented user authentication and authorization",
      "Designed and developed RESTful APIs for product management",
      "Integrated third-party payment gateway for secure transactions",
    ],
  },
  {
    title: "Online Transport Management System",
    description:
      "A web-based application for managing and optimizing transport operations, including route planning, vehicle tracking, and driver management.",
    tech: ["JavaScript", "React", "Node.js", "Docker", "MongoDB"],
    github: "https://github.com/HamnaHakeem004/online_transport.git",
    highlights: [
      "Designed and implemented a RESTful API for managing transport operations",
      "Integrated real-time vehicle tracking and route optimization features",
      "Developed a user-friendly interface for driver and fleet management",
    ],
  },
  {
    title: "Bodima Mobile",
    description:
      "A mobile application for managing and optimizing transport operations, including route planning, vehicle tracking, and driver management.",
    tech: ["Java", "Android Studio", "Firebase"],
    github: "https://github.com/HamnaHakeem004/bodima_mobile.git",
    highlights: [
      "Developed a mobile application for transport management using Java and Android Studio",
      "Implemented real-time vehicle tracking and route optimization features",
      "Integrated Firebase for user authentication and data storage",
    ],
  },
  {
    title: "EasyRide",
    description:
      "A computer vision-based application for analyzing and optimizing transportation routes.",
    tech: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    github: "https://github.com/HamnaHakeem004/easyride.git",
    highlights: [
      "Developed a computer vision-based application for analyzing and optimizing transportation routes",
      "Utilized OpenCV and NumPy for image processing and data analysis",
      "Created interactive visualizations to display route efficiency and traffic patterns",
    ],
  },
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const techOptions = useMemo(() => {
    const all = projects.flatMap((p) => p.tech);
    return ["All", ...uniq(all).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesQuery = !q
        ? true
        : `${p.title} ${p.description} ${p.tech.join(" ")}`
          .toLowerCase()
          .includes(q);

      const matchesTech = activeTech === "All" ? true : p.tech.includes(activeTech);

      return matchesQuery && matchesTech;
    });
  }, [query, activeTech]);

  const featured = filtered[0];

  return (
    <section id="projects" className="bg-transparent py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading + Controls */}
        {/* Title (Get In Touch style) + Search */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Academic Projects
            </h2>

            <p className="mt-3 text-slate-600 text-lg">
              Coursework-inspired builds and self-directed project work used to
              strengthen practical software engineering skills
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-0.75 bg-teal-600 mx-auto mt-5 rounded-full"
            />
          </motion.div>

          {/* Search (same as before) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 w-full md:w-105 mx-auto"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search academic work (e.g., Docker, React, Python)..."
                className="w-full rounded-xl bg-white border border-slate-200 pl-11 pr-10 py-3 text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 transition shadow-sm"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              ) : null}
            </div>
          </motion.div>
        </div>

        {/* Tech filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {techOptions.map((t) => {
            const active = t === activeTech;
            return (
              <button
                key={t}
                onClick={() => setActiveTech(t)}
                className={[
                  "rounded-full px-4 py-2 text-sm border transition",
                  active
                    ? "bg-teal-50 border-teal-600 text-teal-700"
                    : "bg-white border-slate-200 text-slate-600 hover:border-teal-600 hover:text-teal-700",
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </motion.div>

        {/* Featured / Spotlight */}
        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-10 relative overflow-hidden rounded-3xl border border-white/55 bg-white/50 shadow-lg backdrop-blur-2xl"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-emerald-200/30" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-teal-200/20" />

            <div className="relative p-7 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs text-teal-700">
                    Featured Academic Work
                  </span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
                    {featured.description}
                  </p>

                  {featured.highlights?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex gap-3">
                  {featured.github ? (
                    <a
                      href={featured.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:border-teal-600 hover:text-teal-700 transition shadow-sm"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : null}
                  {featured.live ? (
                    <a
                      href={featured.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2 text-teal-700 hover:bg-teal-100 transition"
                    >
                      <FiExternalLink /> Live
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Projects grid */}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((project, index) => {
              const isExpanded = expanded === project.title;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/55 bg-white/55 p-6 shadow-lg transition backdrop-blur-2xl"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-linear-to-r from-teal-600/20 via-cyan-500/10 to-emerald-500/20" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-black">
                        {project.title}
                      </h3>

                      <div className="flex gap-3 text-xl">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            className="text-slate-400 hover:text-blue-600 transition"
                            aria-label="GitHub"
                          >
                            <FaGithub />
                          </a>
                        ) : null}
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            className="text-slate-400 hover:text-blue-600 transition"
                            aria-label="Live"
                          >
                            <FiExternalLink />
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {isExpanded
                        ? project.description
                        : project.description.length > 90
                          ? project.description.slice(0, 90) + "..."
                          : project.description}
                    </p>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : project.title)}
                      className="mt-4 text-sm text-teal-700 hover:text-teal-800 transition underline underline-offset-4"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* extra details (animated) */}
                    <AnimatePresence>
                      {isExpanded && project.highlights?.length ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="rounded-xl border border-white/55 bg-white/60 p-4 backdrop-blur-xl">
                            <p className="text-xs text-slate-500 mb-2">Highlights</p>
                            <ul className="space-y-2">
                              {project.highlights.map((h) => (
                                <li key={h} className="text-sm text-slate-700">
                                  <span className="text-blue-600 mr-2">•</span>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/55 bg-white/55 p-8 text-slate-600 shadow-lg backdrop-blur-2xl">
            No academic projects match your search or filter. Try another keyword or tool.
          </div>
        ) : null}
      </div>
    </section>
  );
}
