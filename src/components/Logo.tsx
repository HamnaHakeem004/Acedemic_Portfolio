"use client";

import { motion, type Variants } from "framer-motion";

type SignatureLogoProps = {
  size?: number; // px
  withText?: boolean;
  className?: string;
};

export default function SignatureLogo({
  size = 44,
  withText = true,
  className = "",
}: SignatureLogoProps) {
  const s = size;

  const rootVariants: Variants = {
    rest: {
      rotate: 0,
      scale: 1,
      y: 0,
    },
    hover: {
      rotate: -8,
      scale: 1.08,
      y: -2,
    },
  };

  const letterVariants: Variants = {
    rest: {
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
    },
    hover: {
      y: [0, -2, 0],
      scale: [1, 1.08, 1],
      rotate: [0, -6, 0],
      opacity: 1,
      transition: {
        duration: 0.9,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <motion.svg
        width={s}
        height={s}
        viewBox="0 0 64 64"
        role="img"
        aria-label="FH Logo"
        className="shrink-0"
        variants={rootVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97, rotate: -2 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <defs>
          {/* Badge gradient */}
          <linearGradient id="sigBadge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Stroke gradient */}
          <linearGradient id="sigStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.75)" />
          </linearGradient>

          {/* Soft glow */}
          <filter id="sigGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.5 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Inner clip */}
          <clipPath id="sigClip">
            <rect x="6" y="6" width="52" height="52" rx="14" />
          </clipPath>
        </defs>

        {/* Badge */}
        <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#sigBadge)" />
        <rect
          x="6.75"
          y="6.75"
          width="50.5"
          height="50.5"
          rx="13.5"
          fill="transparent"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
        />

        <motion.circle
          cx="32"
          cy="32"
          r="24"
          fill="rgba(20,184,166,0.20)"
          filter="blur(10px)"
          initial={{ opacity: 0.15, scale: 0.92 }}
          whileHover={{ opacity: 0.42, scale: 1.12 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
        />

        {/* subtle animated shine */}
        <g clipPath="url(#sigClip)">
          <motion.circle
            cx="16"
            cy="10"
            r="18"
            fill="rgba(255,255,255,0.10)"
            animate={{ cx: [12, 54, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        <motion.g
          filter="url(#sigGlow)"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <motion.text
            x="27"
            y="34"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#sigStroke)"
            fontSize="24"
            fontWeight="800"
            letterSpacing="-1.5"
            fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
            variants={letterVariants}
          >
            F
          </motion.text>
          <motion.text
            x="38"
            y="34"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#sigStroke)"
            fontSize="24"
            fontWeight="800"
            letterSpacing="-1.5"
            fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
            variants={{
              ...letterVariants,
              hover: {
                ...letterVariants.hover,
                rotate: [0, 6, 0],
              },
            }}
          >
            H
          </motion.text>
        </motion.g>

        <motion.rect
          x="18"
          y="10"
          width="10"
          height="44"
          rx="5"
          fill="rgba(255,255,255,0.22)"
          style={{ mixBlendMode: "screen" }}
          initial={{ x: 8, opacity: 0 }}
          animate={{ x: [8, 46, 8], opacity: [0, 0.45, 0] }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {withText && (
        <div className="leading-tight">
          <div className="text-slate-900 font-semibold text-lg tracking-tight">
            Hamna<span className="text-teal-700">.</span>
          </div>
          <div className="text-slate-500 text-xs">Academic Portfolio</div>
        </div>
      )}
    </div>
  );
}
