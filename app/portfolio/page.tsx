import AnimatedSection from "@/components/AnimatedSection";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio — Umair",
  description: "Creative work across brands, campaigns, and content — a visual archive of campaigns, content systems, and creative direction.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Work</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] font-light text-[#f0ece4] leading-[0.9] tracking-[-0.03em] mb-8">
              Portfolio
            </h1>
            <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
              A visual archive of campaigns, content systems, and creative direction across brands, sectors, and stories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-24 lg:pb-40 border-t border-[#1e1e1e] pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <PortfolioGrid shuffle />
        </div>
      </section>
    </>
  );
}
