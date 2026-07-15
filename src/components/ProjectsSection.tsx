"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code, Database, Globe, LineChart, Map } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  category: "SQL" | "Python" | "Power BI" | "Excel";
  desc: string;
  outcome: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "HNG Ride-Sharing Operations Analysis",
      category: "SQL",
      desc: "Analyzed 105,000+ ride-sharing records to locate revenue drivers and operational blocks. Wrote Postgres queries to determine underperforming hours and driver dispatch gaps.",
      outcome: "Identified optimization leaks, driving 14% potential dispatch speedups and operational strategy improvements.",
      tags: ["PostgreSQL", "Excel", "Data Modeling", "SQL Window Functions"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_105000-ride-sharing-operations-data-analysis-activity-7278788484112994304-QhGf",
      codeUrl: "https://github.com/RofiatOpemipo/HNG-Ride-Sharing-Operations-Analysis",
      icon: <Database className="text-blue-400" size={20} />,
      imageUrl: "/project-sql.png",
    },
    {
      title: "Kwara State Election Geospatial Anomaly Model",
      category: "Python",
      desc: "Conducted statistical outlier and geospatial clustering analysis across 16 local governments in Kwara State using Python (GeoCode) to detect voting unit irregularities.",
      outcome: "Calculated polling unit deviation scores and flagged geographical patterns of data anomalies for review.",
      tags: ["Python", "GeoCode", "Geospatial Libraries", "Outlier Analysis", "Pandas"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_geospatial-analysis-on-the-election-data-activity-7279148008892186625-v0xR",
      codeUrl: "https://github.com/RofiatOpemipo/Geospatial-Analysis-on-Kwara-Election-Data",
      icon: <Map className="text-emerald-400" size={20} />,
      imageUrl: "/project-python.png",
    },
    {
      title: "Palm Oil Investment Profitability Model",
      category: "Excel",
      desc: "Built a financial profitability model assessing production costs, yield rates, and land acquisitions across states for achieving a ₦1 billion revenue threshold.",
      outcome: "Identified optimal investment zones and calculated ROI projections and break-even timelines under climate variance.",
      tags: ["Excel Models", "Power BI", "ROI Projections", "Break-even Analysis"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_building-a-comprehensive-profitability-model-activity-7279510400050204672-a1bJ",
      codeUrl: "https://github.com/RofiatOpemipo/Palm-Oil-Investment-Profitability-Model",
      icon: <LineChart className="text-orange-400" size={20} />,
      imageUrl: "/project-excel.png",
    },
    {
      title: "Banking Sector SEO Competitor Analysis",
      category: "Power BI",
      desc: "Scraped web visibility and competitive parameters for 20 popular Nigerian banking systems. Modeled search rankings and keyword difficulty to build a live benchmark.",
      outcome: "Enabled marketing squads to locate keyword gaps and benchmark search result leaders.",
      tags: ["Power BI", "Web Scraping", "Wordstream", "Competitor Intelligence"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_bank-seo-benchmarking-dashboard-activity-7279872788544970752-Yc8H",
      codeUrl: "https://github.com/RofiatOpemipo/Banking-SEO-Competitive-Benchmark",
      icon: <Globe className="text-purple-400" size={20} />,
      imageUrl: "/project-powerbi.png",
    },
    {
      title: "Superstore Dataset Report",
      category: "Power BI",
      desc: "Analyzed transactional sales, profit margins, and cohort performance of the classic Superstore database. Created a dynamic multi-tab report for business tracking.",
      outcome: "Designed interactive views that highlight high-margin product bundles and discount impacts on customer lifetime value.",
      tags: ["Power BI", "Power Query", "DAX Formulas", "Executive Dashboard"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_superstore-dataset-sales-performance-analysis-activity-7273933682979721216-f3Zk",
      codeUrl: "https://github.com/RofiatOpemipo/Superstore-Sales-Performance-Dashboard",
      icon: <LineChart className="text-accent-pink" size={20} />,
      imageUrl: "/project-powerbi.png",
    },
    {
      title: "Pizza Shop Sales Report",
      category: "SQL",
      desc: "Evaluated 20,000+ pizza transactions to detect product popularity, ordering schedules, and peak customer traffic times.",
      outcome: "Delivered actionable adjustments for menu pricing strategies and weekend staff-allocation models.",
      tags: ["SQL Queries", "Power BI", "Data Aggregation", "Sales Forecasting"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_pizza-sales-insights-report-activity-7276535560544522240-h9vX",
      codeUrl: "https://github.com/RofiatOpemipo/Pizza-Sales-SQL-Analysis",
      icon: <Database className="text-red-400" size={20} />,
      imageUrl: "/project-sql.png",
    },
    {
      title: "Unlabeled Time-Series Anomaly Model",
      category: "Python",
      desc: "Developed a Python statistical analysis notebook to parse 2,500+ unlabeled time-series records under high uncertainty. Tested anomalies and seasonal variables.",
      outcome: "Modeled structural trends and formulated competing hypotheses, reporting insights through visual narrative dashboards.",
      tags: ["Python", "Time-Series", "Anomaly Detection", "Hypothesis Testing"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_time-series-anomaly-detection-activity-7280235176964177920-l1Rz",
      codeUrl: "https://github.com/RofiatOpemipo/Time-Series-Anomaly-Detection-Model",
      icon: <Map className="text-yellow-400" size={20} />,
      imageUrl: "/project-python.png",
    },
    {
      title: "Intern Funnel Attrition Dashboard",
      category: "Power BI",
      desc: "Consolidated performance, submission times, and dropoff logs for 521 HNG interns. Created an attrition funnel visualizing stages.",
      outcome: "Calculated key cohort retention rates (17.5% success rate, 41% stage dropouts) to guide intern tracking systems.",
      tags: ["Power BI", "Cohort Analysis", "Funnel Metrics", "Attrition Dashboard"],
      demoUrl: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_hng-internship-funnel-attrition-analysis-activity-7280597565349883904-u8X9",
      codeUrl: "https://github.com/RofiatOpemipo/HNG-Intern-Funnel-Attrition-Dashboard",
      icon: <LineChart className="text-cyan-400" size={20} />,
      imageUrl: "/project-powerbi.png",
    },
  ];

  const categories = ["All", "SQL", "Python", "Power BI", "Excel"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 border-t border-card-border">
      {/* Title */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Analytical Projects
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 font-medium ${
                filter === cat
                  ? "bg-accent-pink text-white border-accent-pink shadow-[0_0_15px_rgba(255,42,116,0.25)]"
                  : "bg-card-bg text-text-muted border-card-border hover:border-accent-pink/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-3xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 card-glow group"
          >
            <div>
              {/* Project Image Preview Mockup */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-card-border mb-6 bg-background">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-background border border-card-border flex items-center justify-center text-text-muted">
                    {project.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-background text-accent-pink border border-accent-pink/15 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold font-display text-foreground mb-3 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
                {project.desc}
              </p>

            </div>

            <div>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] bg-background border border-card-border text-text-muted px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-card-border">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 text-xs bg-accent-pink hover:bg-accent-pink-hover text-white font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 shadow-[0_0_10px_rgba(255,42,116,0.1)] cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>View Demo</span>
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 text-xs border border-card-border hover:border-accent-pink text-text-muted hover:text-accent-pink font-semibold rounded-xl flex items-center justify-center gap-1.5 bg-background transition-all duration-300 cursor-pointer"
                >
                  <Code size={14} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
