"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, dotPulse } from "@/app/lib/animations";

const steps = [
  {
    number: "01",
    title: "Conversa Inicial",
    subtitle: "Entendemos seu negócio",
    description:
      "Uma conversa sem compromisso para entender seus objetivos, público-alvo e o que diferencia seu negócio. Zero enrolação.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    duration: "30 min",
  },
  {
    number: "02",
    title: "Estratégia",
    subtitle: "Planejamos sua presença",
    description:
      "Definimos a estrutura do site, palavras-chave estratégicas, arquitetura de informação e o posicionamento ideal para o seu mercado.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    duration: "1-2 dias",
  },
  {
    number: "03",
    title: "Criação",
    subtitle: "Desenvolvemos com cuidado",
    description:
      "Design, desenvolvimento e otimização. Cada pixel é pensado para comunicar valor e converter visitantes em clientes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    duration: "5-7 dias",
  },
  {
    number: "04",
    title: "Lançamento",
    subtitle: "Você vai ao ar com suporte",
    description:
      "Publicamos seu site com todo suporte técnico necessário. Você não fica sozinho — estamos aqui para qualquer dúvida ou ajuste.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    duration: "1 dia",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f1a08 0%, #1a2710 50%, #0f1a08 100%)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #7ab648 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c] text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            Processo simples e claro
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f4eb] mb-4 leading-tight"
          >
            Como funciona
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#f0f4eb]/60 max-w-xl mx-auto"
          >
            Do primeiro contato ao seu site no ar — um processo transparente em 4 passos.
          </motion.p>
        </motion.div>

        {/* Steps — desktop: horizontal timeline, mobile: vertical */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full h-full bg-gradient-to-r from-[#7ab648] via-[#c9a84c] to-[#7ab648] origin-left"
              style={{ originX: 0 }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center lg:items-center text-center"
              >
                {/* Mobile connecting line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[3.5rem] left-[calc(50%-0.5px)] w-0.5 h-full max-h-20 bg-gradient-to-b from-[#7ab648] to-transparent" />
                )}

                {/* Step dot/icon */}
                <motion.div
                  variants={dotPulse}
                  className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-full border-2 border-[#7ab648] bg-[#1a2710] flex items-center justify-center text-[#7ab648] mb-6 shadow-lg shadow-[#7ab648]/20"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(122,182,72,0.4)",
                  }}
                >
                  {step.icon}
                  {/* Pulse ring */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute inset-0 rounded-full border border-[#7ab648]"
                  />
                </motion.div>

                {/* Step number */}
                <div className="text-xs font-black text-[#7ab648]/50 tracking-[0.2em] mb-1">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-[#f0f4eb] mb-1">{step.title}</h3>
                <div className="text-sm font-medium text-[#c9a84c] mb-3">{step.subtitle}</div>
                <p className="text-sm text-[#f0f4eb]/55 leading-relaxed mb-3 max-w-[220px]">
                  {step.description}
                </p>

                {/* Duration badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2d4217]/50 border border-[#7ab648]/20 text-xs font-medium text-[#7ab648]/80">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-[#f0f4eb]/50 text-sm">
            Prazo médio do primeiro contato ao site no ar:{" "}
            <span className="text-[#7ab648] font-bold">7 dias úteis</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
