import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Creative strategy, content systems, social media growth, campaign architecture, short-form video direction, and brand positioning.",
};

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep dive into your brand, audience, competitive landscape, and goals. Every strategy starts with understanding the full picture.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Building the framework — narrative positioning, content pillars, platform strategy, and campaign architecture.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Turning strategy into content, campaigns, and systems. High-quality production with intentional creative direction.",
  },
  {
    step: "04",
    title: "Optimisation",
    description:
      "Analyzing performance, iterating on what works, and building learnings back into the system for compounding growth.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 border-b border-[#1e1e1e]">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Capabilities</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#f0ece4] leading-[0.95] tracking-[-0.03em] mb-8">
            Services
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            A focused set of capabilities designed to build brand authority and drive measurable digital growth.
          </p>
        </AnimatedSection>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e] mb-32">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group bg-[#080808] hover:bg-[#0d0d0d] transition-all duration-500 p-12 h-full card-glow cursor-default">
                <div className="text-[#c9a96e]/30 text-5xl mb-10 group-hover:text-[#c9a96e]/60 transition-colors duration-500 font-display">
                  0{i + 1}
                </div>
                <p className="text-[#c9a96e]/60 text-2xl mb-6 group-hover:text-[#c9a96e] transition-colors duration-300">
                  {service.icon}
                </p>
                <h3 className="text-[#f0ece4] text-xl font-medium tracking-tight mb-5 group-hover:text-[#e8d5b0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed mb-8 group-hover:text-[#8a8a8a] transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#5a5a5a] text-[10px] tracking-[0.15em] uppercase border border-[#1e1e1e] group-hover:border-[#2a2a2a] px-3 py-1.5 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Process</span>
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-[#f0ece4] leading-tight tracking-[-0.02em]">
            How it works
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
          {process.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.1}>
              <div className="bg-[#080808] p-10 h-full group hover:bg-[#0d0d0d] transition-colors duration-300">
                <p className="text-[#c9a96e]/20 font-display text-5xl font-light mb-8 group-hover:text-[#c9a96e]/40 transition-colors">
                  {item.step}
                </p>
                <h3 className="text-[#f0ece4] text-base font-medium tracking-tight mb-4">{item.title}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#1e1e1e] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#f0ece4] mb-8">
              Ready to start?
            </h2>
            <p className="text-[#6b6b6b] mb-10 max-w-md mx-auto">
              Let&apos;s find the right approach for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#c9a96e] text-[#080808] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8d5b0] transition-all duration-300"
            >
              Start a Conversation →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
