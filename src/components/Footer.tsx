import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1b3a] to-[#07142d] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-extrabold text-purple-300">Uchith Chethana</h3>
          <p className="mt-2 text-white/70">
            Information Technology Undergraduate | Academic Portfolio
          </p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href="mailto:wgucgjayarathna9898@gmail.com"
              className="text-white/70 transition hover:text-white"
              aria-label="Email"
            >
              <FiMail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/uchith-chethana-8681aa301"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/UchithChethana"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-10 h-px w-full bg-white/10" />

          <p className="mt-6 text-sm text-white/55">
            © {new Date().getFullYear()} Uchith Chethana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
