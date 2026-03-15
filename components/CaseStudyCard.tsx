"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseStudy } from "@/lib/data";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  variant?: "default" | "large";
}

export default function CaseStudyCard({ study, index, variant = "default" }: CaseStudyCardProps) {
  const isLarge = variant === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/case-studies/${study.slug}`} className="group block">
        <div className={`border border-[#1e1e1e] group-hover:border-[#2a2a2a] transition-all duration-500 overflow-hidden card-glow ${isLarge ? "lg:grid lg:grid-cols-2" : ""}`}>
          {/* Image placeholder */}
          <div
            className={`relative overflow-hidden ${isLarge ? "h-64 lg:h-full min-h-[320px]" : "h-56"}`}
            style={{ background: `linear-gradient(135deg, ${study.color}15 0%, #0f0f0f 60%)` }}
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Brand initial */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border border-[#2a2a2a] group-hover:border-[#c9a96e]/30 flex items-center justify-center mx-auto mb-4 transition-colors duration-500">
                  <span className="text-[#5a5a5a] group-hover:text-[#c9a96e]/60 text-xl font-bold tracking-widest transition-colors duration-500">
                    {study.brand[0]}
                  </span>
                </div>
                <p
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: study.color + "80" }}
                >
                  {study.sector}
                </p>
              </div>
            </div>

            {/* Metrics overlay */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              {study.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="bg-[#080808]/80 backdrop-blur-sm border border-[#2a2a2a] px-3 py-1.5">
                  <span className="text-[#c9a96e] text-sm font-medium">{m.value}</span>
                  <span className="text-[#6b6b6b] text-xs ml-1.5">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Year */}
            <div className="absolute bottom-6 right-6">
              <span className="text-[#5a5a5a] text-[10px] tracking-[0.3em]">{study.year}</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#c9a96e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase">
                {study.brand}
              </span>
              <span className="text-[#4a4a4a]">—</span>
              <span className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">
                {study.sector}
              </span>
            </div>

            <h3 className="font-display text-xl lg:text-2xl font-light text-[#f0ece4] leading-tight mb-4 group-hover:text-[#e8d5b0] transition-colors duration-300">
              {study.title}
            </h3>

            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-8">
              {study.tagline}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {study.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[#5a5a5a] text-[10px] tracking-[0.15em] uppercase border border-[#1e1e1e] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3 text-[#5a5a5a] group-hover:text-[#c9a96e] transition-colors duration-300">
              <span className="text-xs tracking-[0.2em] uppercase">View Case Study</span>
              <motion.span
                className="text-lg"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
