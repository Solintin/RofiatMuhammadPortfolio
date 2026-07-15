"use client";

import React, { useState, useEffect } from "react";
import { ArrowDown, Database, BarChart3, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Actionable Business Intel",
    "Real Business Growth",
    "Interactive BI Dashboards",
    "Data-Driven Decisions",
    "Predictive Data Models"
  ];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentWord = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      } else {
        if (typedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        }
      }
    };

    let speed = 65; // typing speed
    if (isDeleting) {
      speed = 35; // deleting speed
    }

    if (!isDeleting && typedText === currentWord) {
      // Pause after full typing
      timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }

    if (isDeleting && typedText === "") {
      // Pause after complete deletion before starting next word
      speed = 250;
    }

    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const stats = [
    {
      value: "2+",
      label: "Years Experience",
      icon: <TrendingUp className="text-accent-pink" size={20} />,
    },
    {
      value: "105k+",
      label: "Operations Data Processed",
      icon: <Database className="text-accent-pink" size={20} />,
    },
    {
      value: "15+",
      label: "Business Reports Built",
      icon: <BarChart3 className="text-accent-pink" size={20} />,
    },
    {
      value: "100%",
      label: "Data Quality & Integrity",
      icon: <ShieldCheck className="text-accent-pink" size={20} />,
    },
  ];

  return (
    <section id="hero" className="py-12 lg:py-20 flex flex-col justify-center min-h-[80vh]">
      {/* Intro Subtitle badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 border border-card-border px-4 py-1.5 rounded-full text-xs text-text-muted tracking-wider uppercase mb-6 w-fit bg-card-bg/50"
      >
        <Database size={12} className="text-accent-pink" />
        <span>Welcome to my Portfolio</span>
      </motion.div>

      {/* Main Pitch */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-[1.1] mb-6 tracking-tight text-foreground"
      >
        Transforming Raw Data into <span className="text-accent-pink inline-flex items-center">{typedText}<span className="inline-block w-[3px] h-[0.75em] bg-accent-pink ml-1.5 align-baseline animate-pulse"></span></span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg text-text-muted leading-relaxed max-w-2xl mb-12"
      >
        I specialize in extracting, cleaning, modeling, and visualizing datasets to enable confident, data-driven decisions. From custom SQL warehouses to high-impact dashboards and predictive algorithms.
      </motion.p>

      {/* Grid Stats */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 mb-16"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-2xl p-5 flex flex-col justify-between items-start transition-all duration-300 card-glow"
          >
            <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center mb-4 border border-card-border">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold font-display text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wide leading-tight">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex items-center gap-3 text-xs text-text-muted tracking-widest uppercase cursor-pointer w-fit self-center lg:self-start"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center text-accent-pink">
          <ArrowDown size={14} />
        </span>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
