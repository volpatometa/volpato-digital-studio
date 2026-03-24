"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, scaleUp } from "@/app/lib/animations";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Sites Profissionais",
    description:
      "Design moderno e estratégico que transmite credibilidade desde o primeiro segundo. Seu site trabalha por você 24 horas por dia.",
    color: "#7ab648",
    features: ["Design responsivo", "Carregamento rápido", "UX otimizado"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Posicionamento Estratégico",
    description:
      "Estrutura de conteúdo e SEO pensada para você aparecer quando seu cliente está buscando. Visibilidade que converte.",
    color: "#c9a84c",
    features: ["SEO on-page", "Estrutura de conteúdo", "Google Meu Negócio"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Identidade Visual",
    description:
      "Visual coeso e marcante que representa a essência do seu negócio. Da logo aos materiais — uma identidade que faz você ser lembrado.",
    color: "#7ab648",
    features: ["Criação de logo", "Manual de marca", "Paleta e tipografia"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Gestão Digital",
    description:
      "Suporte contínuo e atualizações para seu negócio crescer online. Você foca no que faz de melhor, nós cuidamos da sua presença digital.",
    color: "#c9a84c",
    features: ["Suporte técnico", "Atualizações de conteúdo", "Relatórios mensais"],
  },
];

export default function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#0f1a08] overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2d4217]/20 rounded-full blur-[120px] pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7ab648]/30 bg-[#7ab648]/10 text-[#7ab648] text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#7ab648] animate-pulse" />
            O que fazemos
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f4eb] mb-4 leading-tight"
          >
            Não criamos apenas sites.
            <br />
            <span className="text-[#7ab648]">Criamos presença.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#f0f4eb]/60 max-w-2xl mx-auto"
          >
            Cada projeto é uma estratégia completa de posicionamento digital,
            pensada para gerar resultados reais para o seu negócio.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              whileHover={{
                scale: 1.02,
                y: -6,
              }}
              className="relative p-7 lg:p-8 rounded-2xl bg-[#1a2710]/60 border border-[#2d4217]/40 backdrop-blur-sm overflow-hidden group cursor-default"
              style={{
                background: `linear-gradient(135deg, #1a2710 0%, #0f1a08 100%)`,
              }}
            >
              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, transparent)`,
                  border: `1px solid ${service.color}40`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ background: service.color }}
              />

              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                  color: service.color,
                }}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-[#f0f4eb] mb-3">{service.title}</h3>
              <p className="text-[#f0f4eb]/60 leading-relaxed mb-5 text-sm lg:text-base">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${service.color}12`,
                      color: service.color,
                      border: `1px solid ${service.color}25`,
                    }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
