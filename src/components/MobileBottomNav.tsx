"use client";

import React, { useState, useEffect } from "react";
import { Home, Briefcase, FolderGit2, FileText, Mail } from "lucide-react";

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: <Home size={20} /> },
    { id: "projects", label: "Projects", icon: <FolderGit2 size={20} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={22} /> }, // Central CTA
    { id: "blog", label: "Blog", icon: <FileText size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-card-bg/95 border-t border-card-border backdrop-blur-md px-6 flex items-center justify-around lg:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_25px_rgba(0,0,0,0.3)]">
      {navItems.map((item, index) => {
        const isActive = activeSection === item.id;

        // Render the central elevated button for Experience (index 2)
        if (index === 2) {
          return (
            <button
              key={item.id}
              onClick={(e) => handleClick(e, item.id)}
              className="relative -translate-y-4 flex items-center justify-center w-14 h-14 bg-accent-pink text-white rounded-full border-4 border-background shadow-[0_4px_15px_rgba(255,42,116,0.35)] transition-all duration-300 transform active:scale-95 cursor-pointer"
              aria-label={item.label}
            >
              {item.icon}
            </button>
          );
        }

        // Render other regular tabs
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`flex flex-col items-center gap-1 py-1.5 transition-all duration-300 ${
              isActive ? "text-accent-pink scale-105" : "text-text-muted hover:text-foreground"
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold tracking-wide uppercase font-display leading-none">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
