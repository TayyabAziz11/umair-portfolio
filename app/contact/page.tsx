"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send (replace with actual form handling / API route)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <div className="pt-20">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 border-b border-[#1e1e1e]">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-light text-[#f0ece4] leading-[0.95] tracking-[-0.03em] mb-8">
            Let&apos;s Talk
          </h1>
          <p className="text-[#6b6b6b] text-lg max-w-xl leading-relaxed">
            Have a project in mind or want to explore what&apos;s possible? I&apos;d love to hear from you.
          </p>
        </AnimatedSection>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact info */}
          <div className="lg:col-span-4">
            <AnimatedSection direction="right">
              <div className="space-y-12">
                <div>
                  <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6">Reach Out</p>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    Whether you have a specific brief or just want to start a conversation about your brand&apos;s digital strategy — I&apos;m here.
                  </p>
                </div>

                {/* WhatsApp — primary CTA */}
                <a
                  href="https://wa.me/923111773550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-[#0d0d0d] border border-[#25D366]/20 hover:border-[#25D366]/60 hover:bg-[#0f1a0f] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors duration-300 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#f0ece4] text-sm font-medium group-hover:text-[#25D366] transition-colors">
                      Chat on WhatsApp
                    </p>
                    <p className="text-[#5a5a5a] text-[10px] tracking-[0.15em] uppercase mt-0.5">
                      Fastest response · +92 311 177 3550
                    </p>
                  </div>
                  <span className="text-[#4a4a4a] group-hover:text-[#25D366] group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>

                <div className="space-y-5">
                  <div>
                    <p className="text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-2">Email</p>
                    <a
                      href="mailto:umairaziz085@gmail.com"
                      className="text-[#f0ece4] text-sm hover:text-[#c9a96e] transition-colors animated-underline"
                    >
                      umairaziz085@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#1e1e1e] pt-6 flex items-center gap-3">
                  <div className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
                  </div>
                  <p className="text-[#6b6b6b] text-sm">
                    <span className="text-[#f0ece4]">Available for new projects</span> · replies within 24 hours
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <AnimatedSection direction="left" delay={0.1}>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-[#c9a96e]/30 bg-[#c9a96e]/5 p-16 text-center"
                >
                  <p className="text-[#c9a96e] text-4xl mb-6">✓</p>
                  <h3 className="font-display text-2xl text-[#f0ece4] font-light mb-4">
                    Message Sent
                  </h3>
                  <p className="text-[#6b6b6b] text-sm">
                    Thank you for reaching out. I&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#c9a96e] outline-none py-4 text-[#f0ece4] text-base placeholder:text-[#5a5a5a] transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#c9a96e] outline-none py-4 text-[#f0ece4] text-base placeholder:text-[#5a5a5a] transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-3">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, brand, or what you're trying to achieve..."
                      className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#c9a96e] outline-none py-4 text-[#f0ece4] text-base placeholder:text-[#5a5a5a] transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-[#5a5a5a] text-[10px] tracking-[0.2em] uppercase">
                      {status === "error" && (
                        <span className="text-red-500">Something went wrong. Please try again.</span>
                      )}
                    </p>
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-5 bg-[#c9a96e] text-[#080808] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8d5b0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-[#080808]/30 border-t-[#080808] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>Send Message →</>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
