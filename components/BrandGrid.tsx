"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const row1 = [
  { src: "/espresso-logo.avif",           alt: "Espresso" },
  { src: "/chatterbox-logo.png",          alt: "Chatterbox" },
  { src: "/Coach_lgo.webp",               alt: "Coach" },
  { src: "/Klay-logo.png",                alt: "Klay" },
  { src: "/AFM-logo.jpg.jpeg",            alt: "AFM" },
  { src: "/dephli-logo.png",              alt: "Delphi" },
  { src: "/canvas-galley-logo.jpg",       alt: "Canvas Gallery" },
  { src: "/Dr.Seema-Logo.png",            alt: "Dr Seema" },
  { src: "/shahidafridi-store-logo.webp", alt: "Shahid Afridi" },
  { src: "/stylo-logo.png",               alt: "Stylo" },
];

const row2 = [
  { src: "/dawn-logo.png",                alt: "Dawn" },
  { src: "/Abbott-logo.png",              alt: "Abbott" },
  { src: "/adamjee-logo.svg",             alt: "Adamjee" },
  { src: "/searle-logo-1.png",            alt: "Searle" },
  { src: "/rizwanbeyg-logo.avif",         alt: "Rizwan Beyg" },
  { src: "/fashion-logo.png",             alt: "Fashion" },
  { src: "/kcci-logo.jpg",                alt: "KCCI" },
  { src: "/LuckyFoods-Logo.svg",          alt: "Lucky Foods" },
  { src: "/princess-polly-logo.svg",      alt: "Princess Polly" },
  { src: "/images-logo.jpg",              alt: "Images" },
];

const row3 = [
  { src: "/aristovie-logo.png",           alt: "Aristovie" },
  { src: "/arts-logo.png",                alt: "Arts" },
  { src: "/AVS-logo.png",                 alt: "AVS" },
  { src: "/bmj-logo.png",                 alt: "BMJ" },
  { src: "/bruj-logo.png",                alt: "Bruj" },
  { src: "/gsthering-logo.jpg",           alt: "Gsthering" },
  { src: "/icy-logo.webp",                alt: "Icy" },
  { src: "/Kupgrade-logo.png",            alt: "Kupgrade" },
  { src: "/kyousf-logo.webp",             alt: "Kyousf" },
];

const row4 = [
  { src: "/Layers-Logo.png",              alt: "Layers" },
  { src: "/manas-logo.webp",              alt: "Manas" },
  { src: "/mgat-logo.png",                alt: "MGAT" },
  { src: "/pie in the sky-logo.jpg",      alt: "Pie in the Sky" },
  { src: "/elsevier-logo.webp",           alt: "Elsevier" },
  { src: "/sulafah-logo.avif",            alt: "Sulafah" },
  { src: "/uptodate-logo.png",            alt: "UpToDate" },
  { src: "/zubair-shah-logo.png",         alt: "Zubair Shah" },
  { src: "/zuellury-logo.jpg",            alt: "Zuellury" },
];

const rows: { logos: typeof row1; duration: number }[] = [
  { logos: row1, duration: 22 },
  { logos: row2, duration: 30 },
  { logos: row3, duration: 25 },
  { logos: row4, duration: 36 },
];

export default function BrandGrid() {
  return (
    <section className="py-20 lg:py-28 border-b border-[#1e1e1e] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <AnimatedSection className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Trusted By</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-[#f0ece4] leading-tight tracking-[-0.02em]">
              45+ Brands{" "}
              <span className="gradient-accent">& counting</span>
            </h2>
          </div>
          <p className="text-[#4a4a4a] text-xs tracking-[0.2em] uppercase max-w-xs text-right leading-relaxed">
            Fashion · F&B · Healthcare · Media · Corporate · Arts
          </p>
        </AnimatedSection>
      </div>

      {/* 4-row logo marquee */}
      <div className="flex flex-col gap-3">
        {rows.map(({ logos, duration }, rowIdx) => (
          <div key={rowIdx} className="relative overflow-hidden">
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #080808, transparent)" }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #080808, transparent)" }}
            />

            {/* Scrolling track — duplicated for seamless loop */}
            <div
              className="flex w-max"
              style={{
                animation: `brandMarquee ${duration}s linear infinite`,
                willChange: "transform",
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <LogoCard key={`r${rowIdx}-${i}`} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stat strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[#1a1a1a] pt-8">
            {[
              { value: "45+", label: "Brand Partners" },
              { value: "13M+", label: "Organic Reach" },
              { value: "6+",   label: "Years" },
              { value: "6",    label: "Sectors" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-xl text-[#c9a96e] font-light">{s.value}</span>
                <span className="text-[#4a4a4a] text-[10px] tracking-[0.25em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group mx-2 shrink-0 w-40 h-18 bg-[#0c0c0c] border border-[#181818] hover:border-[#c9a96e]/25 flex items-center justify-center px-5 py-4 transition-all duration-300 overflow-hidden">
      <div className="relative w-full h-10">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-all duration-300 group-hover:scale-105"
          unoptimized
          sizes="160px"
        />
      </div>
    </div>
  );
}
