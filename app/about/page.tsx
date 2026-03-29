import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { timelineItems } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Creative Strategy & Digital Growth Architect with 6+ years experience building narrative-driven digital ecosystems.",
};

const skills = [
  "Creative Direction",
  "Narrative Strategy",
  "Content Architecture",
  "Social Media Growth",
  "Campaign Design",
  "Brand Positioning",
  "Short-Form Video",
  "Community Building",
  "Platform Strategy",
  "Performance Analysis",
  "Editorial Direction",
  "Audience Development",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 border-b border-[#1e1e1e]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-[#c9a96e]" />
                <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">About</span>
              </div>
              <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#f0ece4] leading-[0.95] tracking-[-0.03em]">
                Creative<br />
                <span className="gradient-accent">Strategist</span>
              </h1>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <p className="text-[#6b6b6b] text-lg leading-relaxed">
                Creative Strategy & Digital Growth Architect working at the intersection of storytelling, brand building, and digital performance.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bio section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Portrait placeholder */}
          <div className="lg:col-span-4">
            <AnimatedSection direction="right" className="sticky top-24">
              <div className="aspect-[3/4] border border-[#1e1e1e] relative overflow-hidden group">
                <Image
                  src="/PXL_20260203_100442123.jpg.jpeg"
                  alt="Umair — Creative Strategist"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/6 to-transparent mix-blend-overlay" />
                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#c9a96e]/50" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#c9a96e]/50" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#c9a96e]/50" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#c9a96e]/50" />
                {/* Name tag */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#f0ece4] text-base font-display font-light">Umair</p>
                  <p className="text-[#c9a96e] text-[10px] tracking-[0.3em] uppercase mt-0.5">Creative Strategist</p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="mt-8 space-y-4">
                {[
                  { label: "Based In", value: "Karachi, Pakistan" },
                  { label: "Experience", value: "6+ Years" },
                  { label: "Speciality", value: "Creative Strategy" },
                ].map((item) => ( 
                  <div key={item.label} className="flex items-center justify-between border-b border-[#1e1e1e] pb-4">
                    <span className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">{item.label}</span>
                    <span className="text-[#6b6b6b] text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-16">
            <AnimatedSection direction="left">
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Background</h2>
              <div className="space-y-5 text-[#9a9a9a] text-lg leading-relaxed">
                <p>
                  Creative Strategy & Digital Growth Architect with 6+ years experience building narrative-driven digital ecosystems across fashion, hospitality, healthcare and corporate brands.
                </p>
                <p>
                  I work at the intersection where creative instinct meets analytical thinking — building content systems that feel authentic, tell compelling stories, and produce measurable results. My work spans everything from viral campaign design to long-term brand ecosystem architecture.
                </p>
                <p>
                  What drives me is the belief that the best brands are the ones with something genuine to say. My job is to help them say it — consistently, beautifully, and in ways that move audiences to action.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Philosophy</h2>
              <div className="border-l-2 border-[#c9a96e]/30 pl-8">
                <p className="text-[#f0ece4] text-xl lg:text-2xl font-display font-light leading-relaxed italic">
                  &ldquo;Growth is not a trick. It&apos;s the result of brands that know who they are, what they believe, and how to communicate both with clarity and consistency.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-8">Skills & Disciplines</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[#6b6b6b] text-xs tracking-[0.15em] uppercase border border-[#1e1e1e] hover:border-[#c9a96e]/40 hover:text-[#c9a96e] px-4 py-2 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection direction="left" delay={0.3}>
              <h2 className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-10">Timeline</h2>
              <div className="relative space-y-0">
                {timelineItems.map((item, i) => (
                  <div key={item.year} className="relative pl-10 pb-12 last:pb-0">
                    {/* Line */}
                    {i < timelineItems.length - 1 && (
                      <div className="absolute left-[7px] top-3 bottom-0 w-px bg-[#1e1e1e]" />
                    )}
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 border border-[#c9a96e]/40 bg-[#080808] rounded-full" />

                    <div className="flex items-start gap-6">
                      <span className="text-[#c9a96e] text-sm font-medium tracking-tight shrink-0">
                        {item.year}
                      </span>
                      <div>
                        <h3 className="text-[#f0ece4] text-base font-medium mb-2">{item.title}</h3>
                        <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#1e1e1e] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-[#f0ece4] mb-8">
              Want to work together?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-5 bg-[#c9a96e] text-[#080808] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8d5b0] transition-all duration-300"
              >
                Get In Touch →
              </Link>
              <Link
                href="/portfolio"
                className="px-10 py-5 border border-[#3a3a3a] text-[#f0ece4] text-sm tracking-[0.15em] uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
