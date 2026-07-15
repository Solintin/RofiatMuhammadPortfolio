"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  tools: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      role: "Data Analyst",
      company: "Deen AI",
      period: "Nov 2025 - Present",
      points: [
        "Conducted SEO and competitor analysis for a 1:1 spiritual companion app, using Google Keyword Planner, WordStream, and SEMrush to assess search demand, keyword gaps, and visibility.",
        "Analyzed Orkut ground-truth community data using Python (NetworkX, Louvain) to assess network structure, identifying isolation and identity-based group patterns for personalized support strategies."
      ],
      tools: ["Python", "NetworkX", "Louvain", "Power Query", "Excel", "Power BI", "SEMrush", "Keyword Planner"],
    },
    {
      role: "Data Analyst",
      company: "HNG Tech",
      period: "Oct 2025 - Dec 2025",
      points: [
        "Analyzed 105,000+ ride-sharing operations data using PostgreSQL and Excel to identify revenue drivers and operational gaps, writing SQL queries to extract top-performing rides.",
        "Conducted geospatial analysis on election data of 16 local governments in Kwara State using Python (GeoCode) to detect voting irregularities and calculate statistical outlier scores.",
        "Built a profitability model for palm oil investment using Excel, Power BI, and Python, analyzing yield data to determine ROI and optimal locations for achieving ₦1 billion targets.",
        "Web-scraped and performed competitive SEO analysis for 20 popular Nigerian banks using Power BI and Wordstream, evaluating visibility metrics to benchmark market leaders.",
        "Performed time-series analysis on over 2,500 unlabeled records under uncertainty, building narratives and reports to communicate findings.",
        "Analyzed HNG Virtual Assistant data for 521 interns to measure stage funnel attrition (17.5% success rate, 41% stage dropout) and designed a Power BI dashboard to visualize redemption cases."
      ],
      tools: ["PostgreSQL", "Python", "GeoCode", "Geospatial Libraries", "Power Query", "Excel", "Power BI", "Wordstream"],
    },
    {
      role: "Data Analyst",
      company: "Jekaeat LTD",
      period: "Jul 2024 - Oct 2025",
      points: [
        "Analyzed 5,000+ customer, vendor, and delivery logs to identify trends, improve route operations, and guide strategic vendor-onboarding decisions.",
        "Built interactive dashboards and reporting architectures (Power BI, SQL, Excel) to track KPIs like sales, delivery time, and customer satisfaction index.",
        "Provided actionable insights and predictive models to optimize logistics, enhance vendor performance scores, and boost general user retention."
      ],
      tools: ["SQL", "Power BI", "Excel", "Power Query", "PowerPoint", "MS Word"],
    },
  ];

  return (
    <section id="experience" className="py-16 border-t border-card-border">
      {/* Title */}
      <div className="mb-12">
        <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
          Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Professional Journey
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-card-border ml-4 pl-6 md:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Dot Icon */}
            <span className="absolute -left-[45px] md:-left-[53px] top-1.5 w-9 h-9 rounded-full bg-background border-2 border-card-border flex items-center justify-center text-accent-pink z-10">
              <Briefcase size={14} />
            </span>

            {/* Content Card */}
            <div className="bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-2xl p-6 md:p-8 transition-all duration-300 card-glow">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-foreground">{exp.role}</h3>
                  <span className="text-sm text-accent-pink font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted bg-background px-3 py-1 rounded-full border border-card-border w-fit">
                  <Calendar size={12} className="text-accent-pink" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6 text-sm text-text-muted leading-relaxed">
                {exp.points.map((pt, pIndex) => (
                  <li key={pIndex} className="flex gap-2.5 items-start">
                    <CheckCircle2 size={16} className="text-accent-pink shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-card-border">
                {exp.tools.map((tool, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-[10px] bg-background border border-card-border hover:border-accent-pink/20 hover:text-foreground text-text-muted px-2.5 py-1 rounded-md transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
