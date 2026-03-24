"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, scaleUp } from "@/app/lib/animations";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f1a08 0%, #1a2710 50%, #0f1a08 100%)" }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,#2d4217_0%,transparent_70%)] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7ab648]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7ab648]/10 pointer-events-none"
          style={{ width: `${i * 200 + 300}px`, height: `${i * 100 + 200}px` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#7ab648]"
          style={{
            left: `${10 + (i % 6) * 16}%`,
            top: `${20 + Math.floor(i / 6) * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7ab648]/30 bg-[#7ab648]/10 text-[#7ab648] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#7ab648] animate-pulse" />
              Dê o primeiro passo
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f0f4eb] mb-6 leading-tight"
          >
            Chegou a hora de
            <br />
            <span className="text-[#7ab648]">você ser visto.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#f0f4eb]/65 leading-relaxed mb-4 max-w-2xl mx-auto"
          >
            Enquanto você lê isso, seu concorrente está sendo encontrado no Google.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#f0f4eb]/65 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            <span className="text-[#c9a84c] font-semibold">Vamos mudar isso?</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* WhatsApp CTA */}
            <motion.a
  href="https://wa.me/5581992821652?text=Olá!%20Vim%20pelo%20site%20e%20quero%20um%20site%20para%20meu%20negócio."
  target="_blank"
  rel="noopener noreferrer"
  className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#7ab648] text-[#0f1a08] font-bold text-lg shadow-lg shadow-[#7ab648]/20 overflow-hidden"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
              {/* WhatsApp icon */}
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">Começar agora — é grátis conversar</span>
              <div className="absolute inset-0 bg-[#8bc857] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            {/* Secondary */}
            <motion.a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-[#f0f4eb]/15 text-[#f0f4eb]/70 font-semibold text-lg hover:border-[#7ab648]/40 hover:text-[#7ab648] hover:bg-[#7ab648]/5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver nossos serviços
            </motion.a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#f0f4eb]/40"
          >
            {[
              "Sem compromisso",
              "Resposta em até 24h",
              "Conversa 100% gratuita",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7ab648]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
