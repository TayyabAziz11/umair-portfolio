"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary";

// 3 showcase videos — one from each key brand
const SHOWCASE_VIDEOS = [
  { publicId: "55_ve9qbs",       brand: "Espresso",   label: "Lifestyle Reel" },
  { publicId: "01_jsy1dd",       brand: "Klay",       label: "Fashion Film" },
  { publicId: "Kolapurix3_cbu34q", brand: "Sulafah",   label: "Campaign Reel" },
];

const CL = "https://res.cloudinary.com/dgsjtycgd/image/upload/f_auto,q_auto,w_300";

// Brand stats strip
const BRAND_STATS = [
  { name: "Espresso",   logo: "/espresso-logo.avif",                    stat: "5.2M+",  label: "Organic Views" },
  { name: "Chatterbox", logo: `${CL}/Chatterbox-logo_ewtj0v`,           stat: "3.9M+",  label: "Viral Views" },
  { name: "Manas",      logo: `${CL}/manas-logo_xbji28`,                stat: "64",     label: "Pieces Created" },
  { name: "Klay",       logo: `${CL}/klay-logo_o1p3mw`,                 stat: "18",     label: "Reels Directed" },
];

function videoUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/f_mp4,q_auto,w_720/${publicId}`;
}

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

        {/* 3 portrait videos */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1e1e1e]">
            {SHOWCASE_VIDEOS.map((v, i) => (
              <motion.div
                key={v.publicId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative aspect-[9/16] overflow-hidden bg-[#0a0a0a] group"
              >
                <video
                  src={videoUrl(v.publicId)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                {/* Label */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-[#c9a96e] text-[9px] tracking-[0.25em] uppercase mb-1">{v.brand}</p>
                  <p className="text-[#f0ece4] text-sm font-medium">{v.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Brand logos strip */}
        <AnimatedSection delay={0.4} className="mt-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e]">
            {BRAND_STATS.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#080808] hover:bg-[#0d0d0d] transition-colors duration-300 p-8 flex flex-col items-center justify-center gap-5"
              >
                {/* Logo */}
                <div className="relative w-28 h-10">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    className="object-contain filter brightness-50 group-hover:brightness-90 transition-all duration-500"
                    sizes="112px"
                  />
                </div>
                {/* Stat */}
                <div className="text-center">
                  <p className="text-[#c9a96e] text-xl font-display font-light">{b.stat}</p>
                  <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase mt-0.5">{b.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
