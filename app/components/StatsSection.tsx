"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, scaleUp } from "@/app/lib/animations";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isActive: boolean;
}

function Counter({ end, suffix = "", prefix = "", duration = 2000, isActive }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const start = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isActive, end, duration]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  {
    prefix: "",
    end: 50,
    suffix: "+",
    label: "Sites entregues",
    description: "Projetos realizados com sucesso para negócios em todo o Brasil",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    color: "#7ab648",
  },
  {
    prefix: "",
    end: 98,
    suffix: "%",
    label: "Clientes satisfeitos",
    description: "Taxa de aprovação em todos os projetos entregues",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
    ),
    color: "#c9a84c",
  },
  {
    prefix: "",
    end: 3,
    suffix: "x",
    label: "Mais visibilidade",
    description: "Aumento médio de visibilidade online após 90 dias",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: "#7ab648",
  },
  {
    prefix: "",
    end: 7,
    suffix: " dias",
    label: "Prazo médio de entrega",
    description: "Do briefing ao site publicado e funcionando",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#c9a84c",
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f1a08 0%, #1a2710 100%)" }}
    >
      {/* Large background number watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[20rem] font-black text-[#2d4217]/8 leading-none select-none">
          VDS
        </div>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7ab648]/8 rounded-full blur-[100px] pointer-events-none" />

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
            Nossos resultados
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f0f4eb] mb-4"
          >
            Números que
            <span className="text-[#7ab648]"> falam por si</span>
          </motion.h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              className="relative p-6 lg:p-8 rounded-2xl text-center overflow-hidden group cursor-default"
              style={{
                background: "linear-gradient(135deg, #1a2710 0%, #0f1a08 100%)",
                border: "1px solid #2d4217",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${stat.color}12 0%, transparent 70%)` }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-4"
                style={{
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`,
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <div
                className="text-4xl lg:text-5xl font-black mb-2 tabular-nums"
                style={{ color: stat.color }}
              >
                <Counter
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isActive={isInView}
                  duration={2000 + i * 200}
                />
              </div>

              <div className="text-sm font-bold text-[#f0f4eb] mb-2">{stat.label}</div>
              <div className="text-xs text-[#f0f4eb]/40 leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
