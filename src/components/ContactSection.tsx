"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom brand icon since lucide-react v4 removed brand logos
const WhatsappIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 border-t border-card-border mb-20">
      {/* Title */}
      <div className="mb-12">
        <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
          Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Let's Work Together
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info (4 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-sm text-text-muted leading-relaxed">
            I am open to full-time Data Analyst, Analytics Engineer, or BI Consultant roles, as well as freelance project consulting. If you have an inquiry, drop a message below and I will get back to you within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-card-bg border border-card-border p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-accent-pink border border-card-border">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">Email Me</span>
                <a href="mailto:rofiatmohammed0404@gmail.com" className="text-xs md:text-sm text-foreground hover:text-accent-pink font-medium transition-colors">
                  rofiatmohammed0404@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card-bg border border-card-border p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-accent-pink border border-card-border">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">Call Me</span>
                <a href="tel:+966502940760" className="text-xs md:text-sm text-foreground hover:text-accent-pink font-medium transition-colors">
                  +966 50 294 0760
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card-bg border border-card-border p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-accent-pink border border-card-border">
                <WhatsappIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">WhatsApp Me</span>
                <a href="https://wa.me/2349166732761" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-foreground hover:text-accent-pink font-medium transition-colors">
                  +234 916 673 2761
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card-bg border border-card-border p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-accent-pink border border-card-border">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block">Base Location</span>
                <span className="text-xs md:text-sm text-foreground font-medium">
                  Dammam, Saudi Arabia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 Columns) */}
        <div className="lg:col-span-7 bg-card-bg border border-card-border p-6 md:p-8 rounded-3xl relative card-glow">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-background border border-card-border text-sm text-foreground px-4 py-3 rounded-xl transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-background border border-card-border text-sm text-foreground px-4 py-3 rounded-xl transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Consultation"
                    className="w-full bg-background border border-card-border text-sm text-foreground px-4 py-3 rounded-xl transition-colors duration-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project details or inquiries here..."
                    className="w-full bg-background border border-card-border text-sm text-foreground px-4 py-3 rounded-xl transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent-pink hover:bg-accent-pink-hover text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-[0_0_15px_rgba(255,42,116,0.15)]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-4 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-pink/10 border border-accent-pink/30 flex items-center justify-center text-accent-pink mb-2 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">Message Sent!</h3>
                <p className="text-sm text-text-muted max-w-sm leading-relaxed">
                  Thank you for reaching out! Muhammad Rofiat has received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-accent-pink hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
