"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { label: "Email", value: "umairaziz085@gmail.com", href: "mailto:umairaziz085@gmail.com" },
  { label: "WhatsApp", value: "+92 311 177 3550", href: "https://wa.me/923111773550" },
];

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

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label}>
                      <p className="text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-2">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#f0ece4] text-sm hover:text-[#c9a96e] transition-colors animated-underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#1e1e1e] pt-8">
                  <p className="text-[#5a5a5a] text-[10px] tracking-[0.3em] uppercase mb-4">Response Time</p>
                  <p className="text-[#6b6b6b] text-sm">Usually within 24-48 hours.</p>
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
