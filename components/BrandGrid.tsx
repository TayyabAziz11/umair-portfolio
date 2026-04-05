"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const CL = "https://res.cloudinary.com/dgsjtycgd/image/upload/f_auto,q_auto,w_300";

const row1 = [
  { src: "/espresso-logo.avif",                              alt: "Espresso" },
  { src: `${CL}/Chatterbox-logo_qxylct`,                    alt: "Chatterbox" },
  { src: `${CL}/coach-logo_bgrkxk`,                         alt: "Coach" },
  { src: `${CL}/klay-logo_bfslag`,                          alt: "Klay" },
  { src: `${CL}/afm-logo_hnnbju`,                           alt: "AFM" },
  { src: `${CL}/Delphi-logo_jfjzwi`,                        alt: "Delphi" },
  { src: "/canvas-galley-logo.jpg",                          alt: "Canvas Gallery" },
  { src: `${CL}/Dr.SeemaSH-logo_fsdb39`,                    alt: "Dr Seema" },
  { src: "/shahidafridi-store-logo.webp",                    alt: "Shahid Afridi" },
  { src: `${CL}/Stylo-logo_aoqdtq`,                         alt: "Stylo" },
];

const row2 = [
  { src: `${CL}/dawn-logo_nmbzjt`,                          alt: "Dawn" },
  { src: `${CL}/abbott-logo_fxa7te`,                        alt: "Abbott" },
  { src: `${CL}/adamjee-logo_gan0oo`,                       alt: "Adamjee" },
  { src: "/searle-logo-1.png",                               alt: "Searle" },
  { src: `${CL}/Rizwanbeyg-logo_oxdpg1`,                    alt: "Rizwan Beyg" },
  { src: `${CL}/FashionAsF-logo_nqnmfb`,                    alt: "Fashion As F" },
  { src: `${CL}/KCC-logo_i2e2h0`,                           alt: "KCCI" },
  { src: `${CL}/lucky-logo_i80y4c`,                         alt: "Lucky Foods" },
  { src: `${CL}/princesspolly-logo_t9bohz`,                 alt: "Princess Polly" },
  { src: `${CL}/images-logo_xmnnw4`,                        alt: "Images" },
];

const row3 = [
  { src: `${CL}/aristovie-logo_bvmhdf`,                     alt: "Aristovie" },
  { src: "/arts-logo.png",                                   alt: "Arts Council" },
  { src: `${CL}/AVS-logo_zpedka`,                           alt: "AVS" },
  { src: `${CL}/bmj-logo_ykpxoj`,                           alt: "BMJ" },
  { src: `${CL}/Burj-logo_lwfjin`,                          alt: "Burj" },
  { src: `${CL}/gathering-logo_rtsmmn`,                     alt: "Gsthering" },
  { src: "/icy-logo.webp",                                   alt: "Icy" },
  { src: "/Kupgrade-logo.png",                               alt: "Kupgrade" },
  { src: `${CL}/kyousuf-logo_ve65wh`,                       alt: "Kyousf" },
];

const row4 = [
  { src: "/Layers-Logo.png",                                 alt: "Layers" },
  { src: `${CL}/manas-logo_v0m7jr`,                         alt: "Manas" },
  { src: "/mgat-logo.png",                                   alt: "MGAT" },
  { src: `${CL}/pieinthesky-logo_bt1osw`,                   alt: "Pie in the Sky" },
  { src: `${CL}/Elsevier-logo_gglsyd`,                      alt: "Elsevier" },
  { src: `${CL}/sulafah-logo_yl9y8e`,                       alt: "Sulafah" },
  { src: `${CL}/Uptodate-logo_lgfwos`,                      alt: "UpToDate" },
  { src: `${CL}/Zubair_Shah-logo_odyckn`,                   alt: "Zubair Shah" },
  { src: `${CL}/Zellbury-logo_jdny0c`,                      alt: "Zellbury" },
  { src: `${CL}/Tapestry-Logo_eklhls`,                      alt: "Tapestry" },
  { src: `${CL}/Kate_Spade-NY-Logo_rs7rtr`,                 alt: "Kate Spade NY" },
  { src: `${CL}/SAS-logo_sngbyq`,                           alt: "SAS" },
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
    <div className="group mx-3 shrink-0 w-52 h-24 bg-[#0c0c0c] border border-[#181818] hover:border-[#c9a96e]/25 flex items-center justify-center px-6 py-4 transition-all duration-300 overflow-hidden">
      <div className="relative w-full h-16">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-all duration-300 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          unoptimized
          sizes="208px"
        />
      </div>
    </div>
  );
}
