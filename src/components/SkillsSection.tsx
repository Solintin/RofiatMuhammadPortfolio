"use client";

import React from "react";
import { Database, TrendingUp, Code, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Databases & SQL",
      icon: <Database size={18} className="text-accent-pink" />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MS SQL / SQL Server", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "SQL Query Writing & Optimization", level: 92 },
      ],
    },
    {
      title: "Programming & Libraries",
      icon: <Code size={18} className="text-accent-pink" />,
      skills: [
        { name: "Python (Pandas, NumPy)", level: 85 },
        { name: "NetworkX / Louvain (Networks)", level: 80 },
        { name: "GeoCode (Geospatial)", level: 78 },
        { name: "Web Scraping", level: 82 },
      ],
    },
    {
      title: "BI & Visualization",
      icon: <LayoutGrid size={18} className="text-accent-pink" />,
      skills: [
        { name: "Microsoft Power BI", level: 95 },
        { name: "Power Query / M Language", level: 92 },
        { name: "Microsoft Excel (VBA/Models)", level: 95 },
        { name: "Looker Studio & Tableau", level: 75 },
      ],
    },
    {
      title: "Analytics & Strengths",
      icon: <TrendingUp size={18} className="text-accent-pink" />,
      skills: [
        { name: "Data Storytelling & Dashboards", level: 95 },
        { name: "KPI Tracking & Funnel Analysis", level: 88 },
        { name: "Time-Series Anomaly Modeling", level: 80 },
        { name: "Mixpanel Product Analytics", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 border-t border-card-border">
      {/* Title */}
      <div className="mb-12">
        <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
          Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Expertise & Toolkit
        </h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-2xl p-6 transition-all duration-300 card-glow"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-card-border">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center border border-card-border">
                {cat.icon}
              </div>
              <h3 className="text-sm font-bold font-display text-foreground">{cat.title}</h3>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, sIndex) => (
                <motion.span
                  key={sIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: sIndex * 0.05 }}
                  className="text-xs bg-background border border-card-border text-text-muted hover:text-foreground hover:border-accent-pink/30 px-3.5 py-2.5 rounded-xl transition-all duration-300 cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
