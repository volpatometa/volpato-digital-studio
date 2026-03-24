"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { staggerContainer, wordReveal, fadeUp, scaleUp } from "@/app/lib/animations";

// Particle system
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const colors = ["#7ab648", "#2d4217", "#c9a84c", "#3d5920"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#7ab648";
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// Typing effect hook
function useTypingEffect(text: string, speed = 40, startDelay = 1200) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

const headline = "Seu negócio existe. Mas o mundo digital não sabe disso — ainda.";
const headlineWords = headline.split(" ");

const stats = [
  { value: "50+", label: "sites entregues" },
  { value: "98%", label: "satisfação" },
  { value: "3x", label: "mais visibilidade" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0f1a08]"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#2d4217_0%,transparent_70%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,#1a2710_0%,transparent_60%)] opacity-40" />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#7ab648 1px, transparent 1px), linear-gradient(90deg, #7ab648 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7ab648]/30 bg-[#7ab648]/10 text-[#7ab648] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#7ab648] animate-pulse" />
            Transformando invisibilidade em presença digital
          </motion.div>

          {/* Headline — word by word */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight mb-6"
            style={{ perspective: 800 }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordReveal}
                className={`inline-block mr-[0.28em] ${
                  word === "existe." || word === "ainda."
                    ? "text-[#7ab648]"
                    : word === "digital"
                    ? "text-[#c9a84c]"
                    : "text-[#f0f4eb]"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="text-lg sm:text-xl lg:text-2xl text-[#f0f4eb]/70 leading-relaxed max-w-2xl mb-10"
          >
            Criamos sites que{" "}
            <span className="text-[#7ab648] font-semibold">posicionam</span>,
            geram confiança e fazem você ser{" "}
            <span className="text-[#c9a84c] font-semibold">
              encontrado por quem já está procurando
            </span>{" "}
            o que você oferece.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            {/* Primary CTA */}
            <motion.a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#7ab648] text-[#0f1a08] font-bold text-base lg:text-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(122,182,72,0.3)",
                  "0 0 40px rgba(122,182,72,0.6)",
                  "0 0 20px rgba(122,182,72,0.3)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="relative z-10">Quero ocupar meu espaço digital</span>
              <svg className="relative z-10 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="absolute inset-0 bg-[#8bc857] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#f0f4eb]/20 text-[#f0f4eb]/80 font-semibold text-base lg:text-lg hover:border-[#7ab648]/50 hover:text-[#7ab648] hover:bg-[#7ab648]/5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver nossos projetos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                transition={{ delay: 1.5 + i * 0.15 }}
                animate={{ y: [0, -6, 0] }}
                style={{ animationDelay: `${i * 0.5}s` }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1a2710]/80 border border-[#2d4217]/60 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  <div className="text-2xl font-black text-[#7ab648]">{stat.value}</div>
                  <div className="text-xs text-[#f0f4eb]/50 font-medium">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#f0f4eb]/30 tracking-widest uppercase">Role para baixo</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#f0f4eb]/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#7ab648]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
