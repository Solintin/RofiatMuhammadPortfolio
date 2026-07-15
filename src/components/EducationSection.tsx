"use client";

import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  type: "degree" | "certification";
}

export default function EducationSection() {
  const educationItems: EducationItem[] = [
    {
      degree: "B.Sc. Biochemistry (Second Class Upper)",
      institution: "Summit University, Offa, Kwara State",
      period: "2017 - 2021",
      details: "Leveraged scientific methods, quantitative laboratory modeling, and rigorous testing frameworks, building a solid analytical foundation for data hypothesis formulation.",
      type: "degree",
    },
    {
      degree: "HNG Internship 13 (Data Analyst)",
      institution: "HNG Tech",
      period: "2025",
      details: "Completed intensive, fast-paced cohort tasks analyzing enterprise ride-sharing patterns, scraping competitive intelligence data, and modeling financial projections.",
      type: "certification",
    },
    {
      degree: "SQL (Advanced) Certification",
      institution: "HackerRank",
      period: "2025",
      details: "Certified SQL Specialist demonstrating advanced proficiency in query optimization, database design schemas, subqueries, and complex aggregations.",
      type: "certification",
    },
    {
      degree: "Web Design Training Bootcamp",
      institution: "Meed Networks Limited",
      period: "2018",
      details: "Learned essential front-end layouts, styling mechanics, and responsive design systems that support data dashboard design practices.",
      type: "certification",
    },
  ];

  return (
    <section id="education" className="py-16 border-t border-card-border">
      {/* Title */}
      <div className="mb-12">
        <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
          Education
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Academic & Certifications
        </h2>
      </div>

      {/* Grid of Education Card */}
      <div className="space-y-6">
        {educationItems.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-2xl p-6 transition-all duration-300 flex gap-4 md:gap-6 card-glow"
          >
            {/* Icon Block */}
            <div className="w-10 h-10 rounded-xl bg-background border border-card-border flex items-center justify-center text-accent-pink shrink-0 mt-0.5">
              {edu.type === "degree" ? <GraduationCap size={20} /> : <Award size={20} />}
            </div>

            {/* Content Info */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm md:text-base font-bold font-display text-foreground">
                  {edu.degree}
                </h3>
                <span className="text-xs text-text-muted font-medium bg-background px-2 py-0.5 rounded border border-card-border w-fit flex items-center gap-1.5">
                  <Calendar size={12} className="text-accent-pink" />
                  {edu.period}
                </span>
              </div>
              <p className="text-xs md:text-sm text-accent-pink font-medium">
                {edu.institution}
              </p>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
