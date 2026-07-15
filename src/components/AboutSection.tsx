"use client";

import React from "react";
import { Award, Zap, Users, Brain, MessageSquare, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const strengths = [
    {
      title: "Data Storytelling",
      desc: "Translating numbers into compelling narrative reports that guide strategic decisions.",
      icon: <Award className="text-accent-pink" size={20} />,
    },
    {
      title: "Leadership & Collaboration",
      desc: "Proven experience working in cross-functional squads to achieve high-performance results.",
      icon: <Users className="text-accent-pink" size={20} />,
    },
    {
      title: "Problem Solving",
      desc: "Methodical approach to parsing complex anomalies and modeling outcomes under high uncertainty.",
      icon: <Zap className="text-accent-pink" size={20} />,
    },
    {
      title: "Analytical Thinking",
      desc: "Strong capacity for critical inquiry, pattern matching, and root-cause analysis.",
      icon: <Brain className="text-accent-pink" size={20} />,
    },
    {
      title: "Effective Communication",
      desc: "Bridging the gap between technical metrics and executive business priorities.",
      icon: <MessageSquare className="text-accent-pink" size={20} />,
    },
    {
      title: "Business Consultation",
      desc: "Advising operations, finance, and product teams on metric definitions and performance models.",
      icon: <Briefcase className="text-accent-pink" size={20} />,
    },
  ];

  return (
    <section id="about" className="py-16 border-t border-card-border">
      {/* Title */}
      <div className="mb-12">
        <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
          About Me
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Data Analyst with a Passion for Insights
        </h2>
      </div>

      {/* Story Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-muted text-sm leading-relaxed mb-12">
        <p>
          I am a highly analytical professional with over 2 years of hands-on experience applying modern analysis methods across marketing, operations, finance, and elections. I bridge technical pipelines and executive strategies, making data accessible, clear, and actionable. My academic foundation in Biochemistry gives me a rigorous, scientific approach to formulating and testing hypotheses.
        </p>
        <p>
          Throughout my career at HNG, Jekaeat, and Deen AI, I have engineered Postgres database queries, designed geospatial mapping systems in Python, and customized KPI dashboards in Power BI. I focus on reducing metrics overhead, automating repetitive reports, and building custom statistical models to evaluate ROI and drive conversions.
        </p>
      </div>

      {/* Strengths Grid */}
      <div>
        <h3 className="text-lg font-bold font-display text-foreground mb-6">Core Strengths</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {strengths.map((str, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-2xl p-6 transition-all duration-300 card-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center mb-4 border border-card-border">
                {str.icon}
              </div>
              <h4 className="text-sm font-bold font-display text-foreground mb-2">{str.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed">{str.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
