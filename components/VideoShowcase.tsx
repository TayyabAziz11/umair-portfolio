"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function VideoShowcase() {
  return (
    <section className="py-24 lg:py-40 border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Showreel</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light text-[#f0ece4] leading-tight tracking-[-0.02em]">
            Watch the work
          </h2>
        </AnimatedSection>

        {/* Video container */}
        <AnimatedSection delay={0.2}>
          <div className="relative aspect-video bg-[#0a0a0a] border border-[#1e1e1e] overflow-hidden group">
            {/* Placeholder for Cloudinary video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 border border-[#c9a96e]/40 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10 transition-all duration-500"
                >
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-[#c9a96e] ml-1" />
                </motion.div>
                <p className="text-[#5a5a5a] text-xs tracking-[0.3em] uppercase">
                  Creative Strategy Showreel 2024
                </p>
              </div>
            </div>

            {/* Decorative grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Corner marks */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#2a2a2a]" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#2a2a2a]" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#2a2a2a]" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#2a2a2a]" />
          </div>
        </AnimatedSection>

        {/* Note about Cloudinary */}
        <AnimatedSection delay={0.3} className="mt-8">
          <p className="text-[#4a4a4a] text-xs tracking-[0.2em] text-center uppercase">
            Connect your Cloudinary account to display your showreel video
          </p>
        </AnimatedSection>

        {/* Horizontal reel thumbnails */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e]">
            {[
              { label: "Espresso", count: "5.2M views" },
              { label: "Chatterbox", count: "3.9M views" },
              { label: "Fabio Magazine", count: "3.3M reach" },
              { label: "Delphi", count: "150K reach" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#080808] hover:bg-[#0d0d0d] transition-colors duration-300 aspect-video relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <p className="text-[#f0ece4] text-xs group-hover:text-[#c9a96e] transition-colors font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">
                      {item.count}
                    </p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border border-[#c9a96e]/40 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-[#c9a96e] ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
