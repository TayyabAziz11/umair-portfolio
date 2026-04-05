import Hero from "@/components/Hero";
import BrandGrid from "@/components/BrandGrid";
import MetricsSection from "@/components/MetricsSection";
import VideoShowcase from "@/components/VideoShowcase";
import AnimatedSection from "@/components/AnimatedSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Brands */}
      <BrandGrid />

      {/* 3. Portfolio Preview */}
      <section className="py-24 lg:py-40 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="flex items-end justify-between mb-16 gap-8 flex-wrap">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Work</span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light text-[#f0ece4] leading-tight tracking-[-0.02em]">
                Selected <br />
                <span className="gradient-accent">Portfolio</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 text-[#6b6b6b] hover:text-[#c9a96e] transition-colors text-sm tracking-[0.15em] uppercase"
            >
              View All
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </AnimatedSection>

          <PortfolioGrid preview />
        </div>
      </section>

      {/* 4. Metrics */}
      <MetricsSection />

      {/* 5. Video Showreel */}
      <VideoShowcase />

      {/* 7. About Preview */}
      <section className="py-24 lg:py-40 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="right">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">About</span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] font-light text-[#f0ece4] leading-tight tracking-[-0.02em] mb-8">
                Where strategy meets story
              </h2>
              <p className="text-[#6b6b6b] text-base leading-relaxed mb-6">
                Creative Strategy & Digital Growth Architect with 6+ years experience building narrative-driven digital ecosystems across fashion, hospitality, healthcare and corporate brands.
              </p>
              <p className="text-[#6b6b6b] text-base leading-relaxed mb-10">
                I believe the best growth comes from brands that have something genuine to say — and content systems sophisticated enough to say it consistently.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[#f0ece4] hover:text-[#c9a96e] transition-colors text-sm tracking-[0.2em] uppercase border-b border-[#3a3a3a] hover:border-[#c9a96e] pb-1"
              >
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
                {[
                  { value: "6+", label: "Years Experience" },
                  { value: "13M+", label: "Total Reach" },
                  { value: "45+", label: "Brand Partners" },
                  { value: "6", label: "Key Sectors" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#080808] p-10">
                    <p className="font-display text-3xl lg:text-4xl text-[#c9a96e] font-light mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="py-24 lg:py-40 border-t border-[#1e1e1e] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a96e]/4 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Contact</span>
              <div className="w-8 h-px bg-[#c9a96e]" />
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-light text-[#f0ece4] leading-tight tracking-[-0.02em] mb-6">
              Let&apos;s build <br />
              <span className="gradient-accent">something great</span>
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-xl mx-auto mb-12">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-[#c9a96e] text-[#080808] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8d5b0] transition-all duration-300 flex items-center gap-3"
              >
                Start a Conversation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="mailto:umairaziz085@gmail.com"
                className="group px-10 py-5 border border-[#3a3a3a] text-[#f0ece4] text-sm tracking-[0.15em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                umairaziz085@gmail.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
