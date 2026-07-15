import React from "react";
import ProfileCard from "@/components/ProfileCard";
import FloatingNav from "@/components/FloatingNav";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobileThemeToggle from "@/components/MobileThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-accent-pink selection:text-white">
      {/* Mobile Floating Theme Toggle */}
      <MobileThemeToggle />

      {/* Desktop Floating Dock Navigation */}
      <FloatingNav />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Main Grid Wrapper */}
      <main className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
          
          {/* Sticky Left Sidebar Profile Panel */}
          <div className="w-full lg:w-[290px] xl:w-[360px] lg:sticky lg:top-8 shrink-0 z-10">
            <ProfileCard />
          </div>

          {/* Scrolling Right Column (Main Portfolio Content) */}
          <div className="flex-1 w-full space-y-4">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
            <EducationSection />
            <ContactSection />

            {/* Simple Footer */}
            <footer className="pt-8 pb-12 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
              <div>
                © {new Date().getFullYear()} Muhammad Rofiat Opemipo. All rights reserved.
              </div>
              <div className="flex gap-4">
                <span>Designed with Framer Inspiration</span>
                <span>•</span>
                <span>Built using Next.js & Tailwind</span>
              </div>
            </footer>
          </div>

        </div>
      </main>
    </div>
  );
}
