import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-white/50 to-white/20 text-slate-900 backdrop-blur-2xl border-t border-white/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-extrabold text-teal-700">Hamna Hakeem</h3>
          <p className="mt-2 text-slate-600">
            Software Engineering Undergraduate | Academic Portfolio
          </p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href="mailto:hamnahakeem004@gmail.com"
              className="text-slate-500 transition hover:text-blue-700"
              aria-label="Email"
            >
              <FiMail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamnahakeembscse"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/hamnahakeem004"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition hover:text-blue-700"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-10 h-px w-full bg-slate-300" />

          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Hamna Hakeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
