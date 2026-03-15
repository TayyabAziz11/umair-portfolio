import { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import CaseStudyCard from "@/components/CaseStudyCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Deep dives into campaigns and content ecosystems that generated millions of organic views and measurable brand growth.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 border-b border-[#1e1e1e]">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Work</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#f0ece4] leading-[0.95] tracking-[-0.03em] mb-8">
            Case Studies
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            Deep dives into campaigns and content ecosystems that generated millions of organic views and measurable brand growth.
          </p>
        </AnimatedSection>
      </div>

      {/* Case studies grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1e1e1e]">
          {caseStudies.map((study, i) => (
            <div key={study.slug} className={study.featured && i === 0 ? "lg:col-span-2" : ""}>
              <CaseStudyCard
                study={study}
                index={i}
                variant={study.featured && i === 0 ? "large" : "default"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#1e1e1e] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="text-[#5a5a5a] text-xs tracking-[0.3em] uppercase mb-6">Want Similar Results?</p>
            <h3 className="font-display text-3xl lg:text-4xl text-[#f0ece4] font-light mb-8">
              Let&apos;s discuss your brand.
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#080808] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8d5b0] transition-all duration-300"
            >
              Get In Touch →
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
