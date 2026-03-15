import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { brands, caseStudies, metrics } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brands",
  description: "A portfolio of brand partnerships across fashion, hospitality, healthcare, and media sectors.",
};

export default function BrandsPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 border-b border-[#1e1e1e]">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Portfolio</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#f0ece4] leading-[0.95] tracking-[-0.03em] mb-8">
            Brand Partners
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            45+ brands across fashion, hospitality, healthcare, and media — each with a unique story and strategy.
          </p>
        </AnimatedSection>
      </div>

      {/* Sectors */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e] mb-20">
          {[
            { sector: "Fashion", count: "14 brands" },
            { sector: "F&B / Hospitality", count: "6 brands" },
            { sector: "Healthcare", count: "4 brands" },
            { sector: "Media", count: "6 brands" },
          ].map((item, i) => (
            <AnimatedSection key={item.sector} delay={i * 0.1}>
              <div className="bg-[#080808] p-10 group hover:bg-[#0d0d0d] transition-colors duration-300">
                <p className="text-[#c9a96e] text-2xl font-display font-light mb-2 group-hover:text-[#e8d5b0] transition-colors">
                  {item.count}
                </p>
                <p className="text-[#5a5a5a] text-xs tracking-[0.2em] uppercase">{item.sector}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* All brands */}
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#f0ece4] mb-2">All Brands</h2>
          <p className="text-[#5a5a5a] text-sm tracking-widest">—</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
          {brands.map((brand, i) => {
            const brandMetric = metrics.find(
              (m) => m.brand.toLowerCase().includes(brand.name.toLowerCase().split(" ")[0]) ||
                     brand.name.toLowerCase().includes(m.brand.toLowerCase().split(" ")[0])
            );
            const brandStudy = caseStudies.find((s) => s.brand === brand.name);

            return (
              <AnimatedSection key={brand.slug} delay={i * 0.06}>
                <div className="group bg-[#080808] hover:bg-[#0d0d0d] transition-all duration-300 p-10 card-glow h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 border border-[#2a2a2a] group-hover:border-[#c9a96e]/40 flex items-center justify-center transition-colors duration-300">
                      <span className="text-[#5a5a5a] group-hover:text-[#c9a96e]/70 text-lg font-bold tracking-widest transition-colors duration-300">
                        {brand.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    {brandStudy && (
                      <Link
                        href={`/case-studies/${brandStudy.slug}`}
                        className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase hover:text-[#c9a96e] transition-colors"
                      >
                        Case Study →
                      </Link>
                    )}
                  </div>

                  <h3 className="text-[#f0ece4] text-lg font-medium mb-2 group-hover:text-[#e8d5b0] transition-colors">
                    {brand.name}
                  </h3>

                  {brand.fullName && (
                    <p className="text-[#5a5a5a] text-xs mb-4">{brand.fullName}</p>
                  )}

                  {brandMetric && (
                    <div className="mt-6 pt-6 border-t border-[#1e1e1e]">
                      <p className="text-[#c9a96e] text-xl font-display font-light">{brandMetric.value}</p>
                      <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase mt-1">{brandMetric.label}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
