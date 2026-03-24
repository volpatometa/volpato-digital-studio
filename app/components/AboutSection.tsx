"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, slideInLeft, slideInRight, scaleUp } from "@/app/lib/animations";

const differentials = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Foco em resultados reais",
    description:
      "Não fazemos sites bonitos sem propósito. Cada decisão de design e estrutura é guiada pelo objetivo de gerar resultados tangíveis para você.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Comunicação direta e transparente",
    description:
      "Sem jargões técnicos desnecessários. Falamos a sua língua, explicamos cada etapa e mantemos você informado do início ao fim.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Sites que vendem, não só bonitos",
    description:
      "Estética é importante, mas conversão é essencial. Criamos sites que transformam visitantes em contatos, orçamentos e clientes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Suporte após entrega",
    description:
      "O lançamento não é o fim — é o começo. Estamos disponíveis para ajustes, dúvidas e suporte técnico após a entrega do seu projeto.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0f1a08]"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2d4217]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#c9a84c]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7ab648]/30 bg-[#7ab648]/10 text-[#7ab648] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7ab648] animate-pulse" />
              Por que a Volpato Digital Studio?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f4eb] mb-6 leading-tight">
              Uma agência que
              <br />
              <span className="text-[#7ab648]">entende seu negócio</span>
              <br />
              de verdade
            </h2>

            <p className="text-lg text-[#f0f4eb]/65 leading-relaxed mb-6">
              Somos especialistas em transformar negócios físicos em presenças digitais poderosas.
              Não vendemos pacotes prontos — entendemos sua história, seu público e seus objetivos.
            </p>

            <p className="text-lg text-[#f0f4eb]/65 leading-relaxed mb-8">
              Nossa missão é simples:{" "}
              <span className="text-[#c9a84c] font-semibold">
                você existe no mundo físico mas é invisível online — nós mudamos isso.
              </span>
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "projetos entregues no prazo" },
                { value: "5★", label: "avaliação média dos clientes" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#1a2710] border border-[#2d4217]/50"
                >
                  <div className="text-2xl font-black text-[#7ab648] mb-1">{item.value}</div>
                  <div className="text-xs text-[#f0f4eb]/50">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: differentials */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            {differentials.map((diff, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  x: 6,
                  boxShadow: "0 8px 30px rgba(122,182,72,0.1)",
                }}
                className="flex gap-4 p-5 rounded-xl bg-[#1a2710]/60 border border-[#2d4217]/40 group cursor-default transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#7ab648]/10 border border-[#7ab648]/20 flex items-center justify-center text-[#7ab648] group-hover:bg-[#7ab648]/20 transition-colors duration-300">
                  {diff.icon}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#f0f4eb] mb-1">{diff.title}</h3>
                  <p className="text-sm text-[#f0f4eb]/55 leading-relaxed">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
