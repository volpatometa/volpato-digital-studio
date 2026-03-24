import { Variants } from "framer-motion";

// Fade up — general section entry
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Fade in simple
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Stagger container — slow
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Scale up
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// Word reveal — each word
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Card hover
export const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 0 0px rgba(122, 182, 72, 0)" },
  hover: {
    scale: 1.02,
    y: -6,
    boxShadow: "0 20px 60px rgba(122, 182, 72, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Timeline dot pulse
export const dotPulse: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// Line draw
export const lineDraw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Floating animation (keyframe style)
export const floating = {
  y: [-8, 8, -8],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Glow pulse
export const glowPulse = {
  boxShadow: [
    "0 0 20px rgba(122, 182, 72, 0.3)",
    "0 0 40px rgba(122, 182, 72, 0.6)",
    "0 0 20px rgba(122, 182, 72, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
