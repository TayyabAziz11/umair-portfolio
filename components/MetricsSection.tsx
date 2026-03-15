"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { metrics } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function MetricsSection() {
  return (
    <section className="py-24 lg:py-40 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Selected Impact</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1] tracking-[-0.02em] text-[#f0ece4] max-w-2xl">
            Numbers that <br />
            <span className="gradient-accent">speak first</span>
          </h2>
        </AnimatedSection>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.brand + metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-[#080808] hover:bg-[#0d0d0d] transition-all duration-500 p-10 lg:p-12 card-glow cursor-default"
    >
      {/* Brand label */}
      <p className="text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-6 group-hover:text-[#c9a96e]/50 transition-colors duration-300">
        {metric.brand}
      </p>

      {/* Metric value */}
      <motion.p
        className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-none tracking-tight text-[#f0ece4] mb-2 group-hover:text-[#c9a96e] transition-colors duration-500"
      >
        {metric.value}
      </motion.p>

      {/* Label */}
      <p className="text-[#6b6b6b] text-sm tracking-[0.15em] uppercase mb-6">
        {metric.label}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-[#2a2a2a] group-hover:bg-[#c9a96e]/40 transition-colors duration-500 mb-6" />

      {/* Description */}
      <p className="text-[#5a5a5a] text-sm leading-relaxed group-hover:text-[#6b6b6b] transition-colors duration-300">
        {metric.description}
      </p>
    </motion.div>
  );
}
