import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth case studies on brand strategy, media production, and logo design.",
};

const pdfs = [
  {
    title: "AI Mass-Media Production",
    subtitle: "Case Study E-Book",
    description:
      "A deep dive into how AI-driven content systems were used to build and scale mass-media production pipelines — covering strategy, workflow, and measurable outcomes across multiple brand campaigns.",
    file: "https://res.cloudinary.com/dgsjtycgd/raw/upload/case-studies/case-study-media-production.pdf",
    label: "Media Production",
    coverBg: "https://res.cloudinary.com/dgsjtycgd/image/upload/f_auto,q_auto,w_900/pdf-covers/case-study-media-production-cover",
    pages: "E-Book",
  },
  {
    title: "Logo Design",
    subtitle: "Case Study E-Book",
    description:
      "An exploration of brand identity work — covering the creative strategy, visual language, and design process behind logos across fashion, F&B, corporate, and healthcare sectors.",
    file: "https://res.cloudinary.com/dgsjtycgd/raw/upload/case-studies/case-study-logo-design.pdf",
    label: "Brand Identity",
    coverBg: "https://res.cloudinary.com/dgsjtycgd/image/upload/f_auto,q_auto,w_900/pdf-covers/case-study-logo-design-cover",
    pages: "E-Book",
  },
];

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
            In-depth breakdowns of brand strategy, content systems, and creative direction — available as downloadable e-books.
          </p>
        </AnimatedSection>
      </div>

      {/* PDF Cards — side by side, A4 portrait */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pdfs.map((pdf, i) => (
            <AnimatedSection key={pdf.file} delay={i * 0.15}>
              <a
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden"
                style={{ aspectRatio: "1 / 1.414" }}
              >
                {/* Background cover image — full visibility */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${pdf.coverBg})` }}
                />

                {/* Subtle gradient only at very bottom for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#080808]/60 border border-[#c9a96e]/50 text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase backdrop-blur-sm">
                    {pdf.label}
                  </span>
                  <span className="px-3 py-1 bg-[#080808]/60 border border-[#3a3a3a] text-[#aaa] text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm flex items-center gap-1.5">
                    <svg width="9" height="11" viewBox="0 0 10 12" fill="currentColor">
                      <path d="M6 0H1C.45 0 0 .45 0 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4L6 0zm0 1.5L8.5 4H6V1.5zM1 11V1h4v4h4v6H1z"/>
                    </svg>
                    PDF
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-[#c9a96e]/80 text-[10px] tracking-[0.25em] uppercase mb-2">{pdf.pages}</p>
                  <h2 className="font-display text-2xl lg:text-3xl font-light text-[#f0ece4] leading-tight tracking-[-0.02em] mb-2 group-hover:text-[#e8d5b0] transition-colors duration-500">
                    {pdf.title}
                  </h2>
                  <p className="text-[#9a9a9a] text-xs leading-relaxed mb-5 line-clamp-2">
                    {pdf.description}
                  </p>
                  <div className="flex items-center gap-3 px-5 py-2.5 bg-[#c9a96e] text-[#080808] text-[10px] tracking-[0.2em] uppercase font-medium w-fit group-hover:bg-[#e8d5b0] transition-colors duration-300">
                    Open PDF
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-6 right-6 w-12 h-12 border border-[#c9a96e]/15 group-hover:border-[#c9a96e]/40 transition-colors duration-500" />
              </a>
            </AnimatedSection>
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
