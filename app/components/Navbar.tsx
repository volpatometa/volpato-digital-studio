"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f1a08]/90 backdrop-blur-md border-b border-[#2d4217]/40 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#inicio"); }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-[#7ab648] to-[#2d4217] flex items-center justify-center font-black text-white text-sm lg:text-base shadow-lg shadow-[#7ab648]/20 group-hover:shadow-[#7ab648]/40 transition-shadow duration-300">
                  VDS
                </div>
                <div className="absolute -inset-1 rounded-xl bg-[#7ab648]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-[#f0f4eb] leading-tight">
                  Volpato Digital
                </div>
                <div className="text-xs text-[#7ab648] font-medium tracking-widest uppercase">
                  Studio
                </div>
              </div>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className="relative px-4 py-2 text-sm font-medium text-[#f0f4eb]/80 hover:text-[#7ab648] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#7ab648] rounded-full group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleLinkClick("#contato"); }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7ab648] text-[#0f1a08] font-bold text-sm hover:bg-[#8bc857] transition-all duration-200 shadow-lg shadow-[#7ab648]/25 hover:shadow-[#7ab648]/40"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Quero meu site
              </motion.a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#2d4217]/40 transition-colors"
                aria-label="Menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-[#f0f4eb] rounded-full origin-center transition-all"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  className="block w-6 h-0.5 bg-[#f0f4eb] rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-[#f0f4eb] rounded-full origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-[#0f1a08]/95 backdrop-blur-lg border-b border-[#2d4217]/40"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-3 text-base font-medium text-[#f0f4eb]/80 hover:text-[#7ab648] hover:bg-[#2d4217]/30 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleLinkClick("#contato"); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.06 }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#7ab648] text-[#0f1a08] font-bold text-sm"
              >
                Quero meu site
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
