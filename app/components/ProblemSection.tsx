"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, slideInLeft, scaleUp } from "@/app/lib/animations";

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803zM13.5 10.5h-6" />
      </svg>
    ),
    title: "Não apareço no Google quando me procuram",
    description:
      "Seus potenciais clientes estão buscando o que você oferece agora mesmo — mas encontram seus concorrentes, não você.",
    stat: "93% das buscas",
    statSub: "não passam da 1ª página",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Meu negócio parece menos profissional que o da concorrência",
    description:
      "A primeira impressão acontece online. Sem presença digital profissional, você perde credibilidade antes mesmo de falar com o cliente.",
    stat: "75% dos usuários",
    statSub: "julgam negócios pela aparência online",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Perco clientes para quem tem presença online",
    description:
      "Bom trabalho não se vende sozinho em 2025. Quem está visível online captura os clientes que seriam seus — todos os dias.",
    stat: "R$ 12 bilhões",
    statSub: "perdidos por invisibilidade digital anualmente",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#0f1a08] overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,#1a2710_0%,transparent_70%)] opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-400" />
            O problema real
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f4eb] mb-4 leading-tight"
          >
            Milhares de bons profissionais
            <br />
            <span className="text-red-400">são ignorados todos os dias</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#f0f4eb]/60 max-w-2xl mx-auto"
          >
            Não por falta de qualidade. Mas por falta de visibilidade.
          </motion.p>
        </motion.div>

        {/* Pain point cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              whileHover={{
                scale: 1.02,
                y: -6,
                boxShadow: "0 20px 60px rgba(239, 68, 68, 0.12)",
              }}
              className="relative p-6 lg:p-8 rounded-2xl bg-[#1a2710]/60 border border-[#2d4217]/40 backdrop-blur-sm overflow-hidden group cursor-default"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-5 group-hover:bg-red-500/15 transition-colors duration-300">
                {point.icon}
              </div>

              <h3 className="text-lg font-bold text-[#f0f4eb] mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-[#f0f4eb]/55 leading-relaxed mb-5">
                {point.description}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-[#2d4217]/40">
                <div className="text-xl font-black text-red-400">{point.stat}</div>
                <div className="text-xs text-[#f0f4eb]/40 mt-0.5">{point.statSub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#7ab648]/60 to-[#7ab648]" />
            <div className="relative">
              <div className="absolute -inset-3 bg-[#7ab648]/10 rounded-full blur-lg" />
              <p className="relative text-xl sm:text-2xl font-bold text-[#7ab648]">
                Isso tem solução. E é mais simples do que você imagina.
              </p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-[#7ab648] via-[#7ab648]/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
