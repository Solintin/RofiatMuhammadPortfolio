"use client";

import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// Custom brand icon since lucide-react v4 removed brand logos
const LinkedinIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
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
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface BlogPost {
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  desc: string;
  url: string;
  platform: "LinkedIn" | "Medium" | "Dev.to";
}

export default function BlogSection() {
  const posts: BlogPost[] = [
    {
      title: "30 Days of Excel, SQL, and Power BI Tutorial Series",
      category: "Tutorial Campaign",
      publishedAt: "Nov 2024",
      readTime: "30 Days Series",
      desc: "Designed and delivered an extensive 30-day curriculum teaching data analysis tools using practical business problems. Reached hundreds of readers on LinkedIn and established professional credibility.",
      url: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_30days-excel-sql-powerbi-tutorial-activity-7264877717462573056-r9T5",
      platform: "LinkedIn",
    },
    {
      title: "Geospatial Clustering: Spotting Statistical Outliers in Polling Units",
      category: "Geospatial Analysis",
      publishedAt: "Dec 2024",
      readTime: "6 min read",
      desc: "Explaining how python libraries like GeoCode and NetworkX can detect irregularities in localized demographic data. Walks through outlier calculation and mapping.",
      url: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_geospatial-analysis-on-the-election-data-activity-7279148008892186625-v0xR",
      platform: "LinkedIn",
    },
    {
      title: "Time-Series Modeling and Hypothesis Testing Under Uncertainty",
      category: "Statistical Modeling",
      publishedAt: "Jan 2025",
      readTime: "8 min read",
      desc: "An analytical deep dive on isolating seasonality and structural anomalies inside unlabeled datasets. Outlines hypothesis formulation and competitive narrative building.",
      url: "https://www.linkedin.com/posts/muhammad-rofiat-opemipo_time-series-anomaly-detection-activity-7280235176964177920-l1Rz",
      platform: "LinkedIn",
    },
  ];

  return (
    <section id="blog" className="py-16 border-t border-card-border">
      {/* Title */}
      <div className="mb-12">
        <span className="text-xs text-accent-pink uppercase tracking-widest font-semibold block mb-2">
          Publications
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Articles & Tutorials
        </h2>
      </div>

      {/* Blogs Layout */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-card-bg border border-card-border hover:border-accent-pink/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center transition-all duration-300 card-glow"
          >
            {/* Left content block */}
            <div className="flex-1 space-y-3">
              {/* Meta stats */}
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span className="text-accent-pink font-medium bg-background px-2.5 py-0.5 rounded border border-accent-pink/10">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BookOpen size={12} />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-foreground group-hover:text-accent-pink transition-colors duration-300">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed max-w-3xl">
                {post.desc}
              </p>
            </div>

            {/* Right Action Block */}
            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end pt-4 md:pt-0 border-t border-card-border md:border-t-0">
              <span className="flex items-center gap-1 text-[11px] font-bold text-text-muted bg-background px-3 py-1.5 rounded-full border border-card-border">
                <LinkedinIcon size={12} className="text-[#0077b5]" />
                <span>{post.platform}</span>
              </span>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-card-border hover:border-accent-pink hover:bg-accent-pink text-text-muted hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Read Publication"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
