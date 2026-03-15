"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseStudy } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

interface CaseStudyLayoutProps {
  study: CaseStudy;
}

export default function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <article className="pt-20">
      {/* Hero */}
      <div
        className="relative h-[60vh] lg:h-[70vh] flex items-end overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${study.color}20 0%, #080808 70%)` }}
      >
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Central brand mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border border-[#2a2a2a] flex items-center justify-center">
            <span className="text-5xl text-[#4a4a4a] font-bold tracking-widest">
              {study.brand[0]}
            </span>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/case-studies"
                className="text-[#5a5a5a] text-xs tracking-[0.2em] uppercase hover:text-[#c9a96e] transition-colors"
              >
                ← Case Studies
              </Link>
              <span className="text-[#4a4a4a]">/</span>
              <span className="text-[#5a5a5a] text-xs tracking-[0.2em] uppercase">{study.brand}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase">{study.brand}</span>
              <span className="text-[#4a4a4a]">—</span>
              <span className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">{study.sector}</span>
              <span className="text-[#4a4a4a]">—</span>
              <span className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">{study.year}</span>
            </div>

            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-light text-[#f0ece4] leading-tight max-w-3xl">
              {study.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="border-b border-[#1e1e1e] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="font-display text-2xl lg:text-3xl text-[#c9a96e] font-light tracking-tight">
                  {metric.value}
                </p>
                <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase mt-1">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-16">
            <AnimatedSection>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Challenge</h2>
              <p className="text-[#9a9a9a] text-lg leading-relaxed">{study.challenge}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Strategy</h2>
              <p className="text-[#9a9a9a] text-lg leading-relaxed">{study.strategy}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Execution</h2>
              <p className="text-[#9a9a9a] text-lg leading-relaxed">{study.execution}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Results</h2>
              <p className="text-[#9a9a9a] text-lg leading-relaxed">{study.results}</p>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tags */}
            <AnimatedSection direction="left">
              <div className="border border-[#1e1e1e] p-8">
                <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-6">Disciplines</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#6b6b6b] text-[10px] tracking-[0.15em] uppercase border border-[#1e1e1e] px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Project info */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="border border-[#1e1e1e] p-8 space-y-5">
                <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mb-6">Project Details</p>
                <div>
                  <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase mb-1">Brand</p>
                  <p className="text-[#f0ece4] text-sm">{study.brand}</p>
                </div>
                <div>
                  <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase mb-1">Sector</p>
                  <p className="text-[#f0ece4] text-sm">{study.sector}</p>
                </div>
                <div>
                  <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase mb-1">Year</p>
                  <p className="text-[#f0ece4] text-sm">{study.year}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#1e1e1e] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[#5a5a5a] text-xs tracking-[0.3em] uppercase mb-6">Next Step</p>
          <h3 className="font-display text-3xl lg:text-4xl text-[#f0ece4] font-light mb-8">
            Ready to build something similar?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#080808] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8d5b0] transition-all duration-300"
          >
            Let&apos;s Talk
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
