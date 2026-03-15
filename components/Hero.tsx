"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const floatingBadges = [
  { value: "5.2M+", label: "Organic Views", delay: 1.2, x: "-10%", y: "20%" },
  { value: "13M+", label: "Total Reach", delay: 1.4, x: "85%", y: "65%" },
  { value: "6+", label: "Years", delay: 1.6, x: "70%", y: "12%" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [4, -4]);
  const rotateY = useTransform(springX, [-300, 300], [-4, 4]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Ambient glow — left */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#c9a96e]/6 rounded-full blur-[140px] pointer-events-none" />
      {/* Ambient glow — right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c9a96e]/4 rounded-full blur-[160px] pointer-events-none" />

      {/* Diagonal accent stripe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div
          className="absolute top-0 right-[38%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a96e]/10 to-transparent"
        />
      </motion.div>

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[calc(100vh-80px)]">

          {/* ── LEFT — Text ── */}
          <div className="flex flex-col justify-center py-16 lg:py-0">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-3 mb-10 self-start"
            >
              <div className="flex items-center gap-2 border border-[#c9a96e]/30 bg-[#c9a96e]/5 px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
                <span className="text-[#c9a96e] text-[10px] tracking-[0.35em] uppercase">
                  Available for Projects
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[#5a5a5a] text-xs tracking-[0.4em] uppercase mb-4"
              >
                Creative Strategy & Digital Growth
              </motion.p>
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="font-display leading-[0.92] tracking-[-0.03em] mb-8"
            >
              {["Creative", "Strategy ×", "Digital", "Growth"].map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.4 + i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`block text-[clamp(2.8rem,5.5vw,5.5rem)] ${
                      word.includes("×")
                        ? "text-[#f0ece4]"
                        : word === "Growth"
                        ? "gradient-text"
                        : "text-[#f0ece4]"
                    }`}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.h1>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="border-l-2 border-[#c9a96e]/50 pl-5 mb-8"
            >
              <p className="text-[#c9a96e] text-sm lg:text-base font-light italic leading-relaxed">
                &ldquo;I design narrative-driven content systems that turn attention into measurable growth.&rdquo;
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="text-[#5a5a5a] text-sm lg:text-base leading-relaxed max-w-md mb-10"
            >
              Creative strategist working at the intersection of storytelling, digital growth, and brand positioning. Generating millions of organic views across fashion, hospitality, healthcare, and corporate sectors.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                href="/case-studies"
                className="group relative px-7 py-3.5 bg-[#c9a96e] text-[#080808] text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden flex items-center gap-3 hover:gap-4 transition-all duration-300"
              >
                <span className="relative z-10">View Case Studies</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                <span className="absolute inset-0 bg-[#e8d5b0] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
              </Link>
              <Link
                href="/contact"
                className="group px-7 py-3.5 border border-[#2a2a2a] text-[#6b6b6b] text-xs tracking-[0.2em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300 flex items-center gap-3"
              >
                Let&apos;s Talk
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex gap-8 pt-8 border-t border-[#1a1a1a]"
            >
              {[
                { value: "6+", label: "Years" },
                { value: "13M+", label: "Organic Reach" },
                { value: "45+", label: "Brands" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                >
                  <p className="text-[#f0ece4] text-2xl font-display font-light tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[#5a5a5a] text-[10px] tracking-[0.25em] uppercase mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Image ── */}
          <div className="relative flex items-center justify-center lg:justify-end py-16 lg:py-24">
            {/* 3-D tilt wrapper */}
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1200 }}
              className="relative w-full max-w-[460px]"
            >
              {/* Outer glow ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -inset-4 bg-gradient-to-br from-[#c9a96e]/15 via-transparent to-[#c9a96e]/5 rounded-sm blur-xl"
              />

              {/* Main image frame */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative aspect-[3/4] overflow-hidden border border-[#1e1e1e]"
              >
                {/* Image — swap src with real photo */}
                <Image
                  src="/PXL_20260203_100442123.jpg.jpeg"
                  alt="Umair — Creative Strategist"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />

                {/* Color grade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/8 to-transparent mix-blend-overlay" />

                {/* Bottom name tag */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <p className="text-[#f0ece4] text-lg font-display font-light tracking-wide">Umair</p>
                    <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mt-0.5">
                      Creative Strategist
                    </p>
                  </motion.div>
                </div>

                {/* Corner brackets */}
                {[
                  "top-3 left-3 border-t border-l",
                  "top-3 right-3 border-t border-r",
                  "bottom-3 left-3 border-b border-l",
                  "bottom-3 right-3 border-b border-r",
                ].map((cls) => (
                  <motion.div
                    key={cls}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`absolute w-5 h-5 border-[#c9a96e]/60 ${cls}`}
                  />
                ))}
              </motion.div>

              {/* ── Floating metric badges ── */}

              {/* Badge 1 — top left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6, ease: "backOut" }}
                className="absolute -left-12 top-[15%] z-20"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 shadow-xl shadow-black/50"
                >
                  <p className="text-[#c9a96e] text-xl font-display font-light leading-none">5.2M+</p>
                  <p className="text-[#5a5a5a] text-[9px] tracking-[0.25em] uppercase mt-1">Organic Views</p>
                  <p className="text-[#4a4a4a] text-[9px] tracking-[0.2em] uppercase">Espresso</p>
                </motion.div>
              </motion.div>

              {/* Badge 2 — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6, ease: "backOut" }}
                className="absolute -right-10 bottom-[20%] z-20"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="bg-[#0d0d0d] border border-[#2a2a2a] px-4 py-3 shadow-xl shadow-black/50"
                >
                  <p className="text-[#c9a96e] text-xl font-display font-light leading-none">3.9M+</p>
                  <p className="text-[#5a5a5a] text-[9px] tracking-[0.25em] uppercase mt-1">Viral Campaign</p>
                  <p className="text-[#4a4a4a] text-[9px] tracking-[0.2em] uppercase">Chatterbox</p>
                </motion.div>
              </motion.div>

              {/* Badge 3 — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.7, duration: 0.6, ease: "backOut" }}
                className="absolute -right-10 top-[8%] z-20"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                  className="bg-[#c9a96e] px-4 py-3 shadow-xl shadow-[#c9a96e]/20"
                >
                  <p className="text-[#080808] text-xl font-display font-light leading-none">45+</p>
                  <p className="text-[#080808]/60 text-[9px] tracking-[0.25em] uppercase mt-1">Brands</p>
                </motion.div>
              </motion.div>

              {/* Vertical label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2"
              >
                <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2a2a2a]" />
                <p className="text-[#4a4a4a] text-[9px] tracking-[0.35em] uppercase [writing-mode:vertical-rl] rotate-180">
                  Portfolio 2024
                </p>
                <div className="w-px h-12 bg-gradient-to-b from-[#2a2a2a] to-transparent" />
              </motion.div>
            </motion.div>

            {/* Background accent shape */}
            <div className="absolute top-1/4 right-0 w-64 h-64 border border-[#c9a96e]/5 rotate-12 pointer-events-none" />
            <div className="absolute bottom-1/4 right-8 w-32 h-32 border border-[#c9a96e]/8 rotate-45 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-12 flex items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#2a2a2a] to-transparent"
        />
        <span className="text-[#4a4a4a] text-[9px] tracking-[0.4em] uppercase">Scroll</span>
      </motion.div>

      {/* Bottom horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent origin-left"
      />
    </section>
  );
}
