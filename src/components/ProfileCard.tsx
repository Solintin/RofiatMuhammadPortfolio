"use client";

import React from "react";
import Image from "next/image";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";

// Custom brand icons since lucide-react v4 removed brand logos
const GithubIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

export default function ProfileCard() {
  const socialLinks = [
    {
      icon: <LinkedinIcon size={18} />,
      url: "https://www.linkedin.com/in/muhammad-rofiat-opemipo",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon size={18} />,
      url: "https://github.com/RofiatOpemipo",
      label: "GitHub",
    },
    {
      icon: <WhatsappIcon size={18} />,
      url: "https://wa.me/2349166732761",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="w-full bg-card-bg border border-card-border rounded-[32px] p-6 flex flex-col items-center text-center h-fit card-glow">
      {/* Profile Image Container */}
      <div className="relative w-full aspect-square max-w-[280px] mb-6 group rounded-[24px] overflow-hidden border border-card-border bg-background">
        <Image
          src="/ProfileImage.jpeg"
          alt="Rofiat Muhammad Profile Photo"
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink to-accent-pink-hover opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Available for work Status Badge */}
      <div className="inline-flex items-center gap-2 border border-card-border px-4 py-1.5 rounded-full bg-background mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-pink"></span>
        </span>
        <span className="text-[11px] text-text-muted font-semibold tracking-wide uppercase">
          Available for work
        </span>
      </div>

      {/* Name and Designation */}
      <h2 className="text-2xl font-bold font-display text-foreground mb-2 tracking-tight">
        Rofiat Muhammad
      </h2>

      {/* Socials */}
      <div className="flex gap-2.5 mb-6 justify-center">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-card-border hover:border-accent-pink hover:text-accent-pink flex items-center justify-center text-text-muted hover:bg-background transition-all duration-300"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Action Buttons (Horizontal layout) */}
      <div className="w-full flex gap-3 mt-2">
        <a
          href="mailto:rofiatmohammed0404@gmail.com?subject=Request%20for%20Resume"
          className="flex-1 py-3 border border-card-border hover:border-accent-pink text-text-muted hover:text-accent-pink font-semibold rounded-xl flex items-center justify-center gap-1.5 bg-background text-xs transition-all duration-300"
        >
          <Download size={14} />
          <span>Download CV</span>
        </a>
        <a
          href="#contact"
          className="flex-1 py-3 bg-accent-pink hover:bg-accent-pink-hover text-white font-semibold rounded-xl flex items-center justify-center gap-1.5 text-xs transition-all duration-300 shadow-[0_0_12px_rgba(255,42,116,0.2)] hover:shadow-[0_0_20px_rgba(255,42,116,0.4)]"
        >
          <Send size={14} />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}
