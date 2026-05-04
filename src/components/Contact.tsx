"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { IoQrCodeOutline } from "react-icons/io5";

export default function Contact() {
  const githubUrl = "https://github.com/hamnahakeem004";
  const qrCodeSrc = `/api/qr?text=${encodeURIComponent(githubUrl)}`;

  const contactItems = [
    {
      label: "Email",
      value: "hamnahakeem004@gmail.com",
      href: "mailto:hamnahakeem004@gmail.com",
      icon: FiMail,
    },
    {
      label: "Phone",
      value: "+94 76 339 7586",
      href: "tel:+94763397586",
      icon: FiPhone,
    },
    {
      label: "Location",
      value: "Kurunegala, Sri Lanka",
      href: undefined,
      icon: FiMapPin,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hamnahakeembscse",
      href: "https://www.linkedin.com/in/hamnahakeembscse",
      icon: FiLinkedin,
    },
    {
      label: "GitHub",
      value: "github.com/hamnahakeem004",
      href: githubUrl,
      icon: FiGithub,
    },
    {
      label: "QR Code",
      value: "Scan to connect",
      href: qrCodeSrc,
      icon: IoQrCodeOutline,
      openInNewTab: true,
    },
  ];

  return (
    <section id="contact" className="relative bg-transparent">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-linear-to-tr from-emerald-200/35 via-cyan-200/30 to-teal-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-linear-to-tr from-cyan-200/30 via-emerald-200/25 to-teal-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">
            Reach out for portfolio feedback, academic collaboration, or project discussion
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-teal-600" />
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/55 bg-white/55 p-8 backdrop-blur-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              These are the main channels I use for sharing portfolio details,
              discussing academic work, and connecting around software engineering topics.
            </p>

            <ul className="mt-8 space-y-4 text-slate-600">
              {contactItems.map(({ label, value, href, icon: Icon, openInNewTab }) => {
                const shouldOpenInNewTab = Boolean(href && (openInNewTab || href.startsWith("http")));

                return (
                  <li key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm text-slate-500">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          className="font-medium text-slate-800 transition hover:text-teal-700"
                          target={shouldOpenInNewTab ? "_blank" : undefined}
                          rel={shouldOpenInNewTab ? "noreferrer" : undefined}
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="font-medium text-slate-800">{value}</div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-white/55 bg-white/55 p-10 shadow-lg backdrop-blur-2xl"
          >
            <div aria-hidden className="absolute inset-0 rounded-2xl bg-linear-to-tr from-white/60 via-emerald-50/50 to-cyan-50/40" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-slate-900">Let&apos;s Connect</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                I welcome conversations around academic projects, portfolio
                reviews, technical learning, and future collaboration in software engineering.
              </p>

              <div className="mt-10 rounded-2xl border border-white/55 bg-white/60 p-6 backdrop-blur-xl shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">Best reasons to reach out</h4>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Portfolio feedback",
                    "Academic project discussion",
                    "Peer learning and collaboration",
                    "Technical networking",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-slate-700 backdrop-blur-xl shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:hamnahakeem004@gmail.com?subject=Academic%20Portfolio%20Inquiry"
                  className="rounded-xl border border-white/50 bg-white/55 px-5 py-3 font-semibold text-slate-800 transition hover:bg-white/75 backdrop-blur-xl shadow-sm"
                >
                  Send Email
                </a>

                <a
                  href="https://www.linkedin.com/in/hamnahakeembscse"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/55 bg-white/55 px-5 py-3 text-slate-700 transition hover:bg-white/75 shadow-sm backdrop-blur-xl"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-white/55 bg-white/55 p-6 shadow-lg backdrop-blur-2xl">
                <h4 className="text-lg font-semibold text-slate-900">Scan My GitHub QR</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Scan this code to open my GitHub profile instantly.
                </p>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-xl border border-white/55 bg-white/55 p-3 transition hover:bg-white/75 shadow-sm backdrop-blur-xl"
                  aria-label="Open GitHub profile"
                >
                  <Image
                    src={qrCodeSrc}
                    alt="QR code for Hamna Hakeem GitHub profile"
                    width={168}
                    height={168}
                    className="h-40 w-40 rounded-md"
                    unoptimized
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="pt-6 text-sm text-slate-500">
                Typical reply time: within 24 hours
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
