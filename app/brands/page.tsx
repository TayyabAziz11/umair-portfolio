import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { brands, metrics } from "@/lib/data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brands",
  description: "A portfolio of brand partnerships across fashion, hospitality, healthcare, and media sectors.",
};

const SECTORS = [
  { sector: "Fashion", count: brands.filter((b) => b.sector === "Fashion").length },
  { sector: "F&B", count: brands.filter((b) => b.sector === "F&B").length },
  { sector: "Healthcare", count: brands.filter((b) => b.sector === "Healthcare").length },
  { sector: "Corporate", count: brands.filter((b) => b.sector === "Corporate").length },
];

export default function BrandsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 border-b border-[#1e1e1e]">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Partners</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#f0ece4] leading-[0.95] tracking-[-0.03em] mb-8">
            Brand Partners
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            {brands.length}+ brands across fashion, hospitality, healthcare, and more — each with a unique story and strategy.
          </p>
        </AnimatedSection>
      </div>

      {/* Sector counts */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e] mb-20">
          {SECTORS.map((item, i) => (
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

        {/* All brands grid */}
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#f0ece4] mb-2">All Brands</h2>
          <p className="text-[#5a5a5a] text-sm tracking-widest">—</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
          {brands.map((brand, i) => {
            const brandMetric = metrics.find(
              (m) =>
                m.brand.toLowerCase().includes(brand.name.toLowerCase().split(" ")[0]) ||
                brand.name.toLowerCase().includes(m.brand.toLowerCase().split(" ")[0])
            );

            return (
              <AnimatedSection key={brand.slug} delay={i * 0.04}>
                <div className="group bg-[#080808] hover:bg-[#0d0d0d] transition-all duration-300 p-6 card-glow h-full flex flex-col">
                  {/* Logo */}
                  <div className="w-full h-28 flex items-center justify-center mb-5 relative">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 p-2"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>

                  {/* Name + sector */}
                  <div className="mt-auto">
                    <h3 className="text-[#f0ece4] text-sm font-medium tracking-tight group-hover:text-[#e8d5b0] transition-colors">
                      {brand.name}
                    </h3>
                    {brand.fullName && (
                      <p className="text-[#4a4a4a] text-[10px] mt-0.5">{brand.fullName}</p>
                    )}
                    <p className="text-[#5a5a5a] text-[10px] tracking-[0.15em] uppercase mt-1">
                      {brand.sector}
                    </p>

                    {brandMetric && (
                      <div className="mt-4 pt-4 border-t border-[#1e1e1e]">
                        <p className="text-[#c9a96e] text-lg font-display font-light">{brandMetric.value}</p>
                        <p className="text-[#5a5a5a] text-[10px] tracking-[0.15em] uppercase mt-0.5">{brandMetric.label}</p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
