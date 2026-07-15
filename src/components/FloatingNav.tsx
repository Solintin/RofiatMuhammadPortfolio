"use client";

import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Cpu, FolderGit2, FileText, GraduationCap, Mail, Sun, Moon } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navItems: NavItem[] = [
    { id: "hero", label: "Home", icon: <Home size={16} /> },
    { id: "about", label: "About", icon: <User size={16} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
    { id: "skills", label: "Skills", icon: <Cpu size={16} /> },
    { id: "projects", label: "Projects", icon: <FolderGit2 size={16} /> },
    { id: "blog", label: "Blog", icon: <FileText size={16} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
    { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark"; // Default to dark mode as per portfolio template
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed z-50 right-6 top-1/2 -translate-y-1/2 w-max max-h-[85vh] bg-[#161616]/85 dark:bg-[#161616]/80 backdrop-blur-md border border-[#e2e8f0] dark:border-[#232323] px-2.5 py-5 rounded-[32px] shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.5)] hidden lg:flex flex-col items-center gap-4 overflow-y-auto no-scrollbar h-fit">
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="w-9 h-9 rounded-xl border border-[#e2e8f0] dark:border-[#232323] flex items-center justify-center text-[#64748b] dark:text-[#9e9e9e] hover:text-accent-pink hover:border-accent-pink dark:hover:text-accent-pink dark:hover:border-accent-pink transition-all duration-300 bg-[#ffffff] dark:bg-[#0d0d0d] shrink-0"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </button>

      {/* Separator */}
      <div className="w-5 h-[1px] bg-[#e2e8f0] dark:bg-[#232323] shrink-0" />

      {/* Navigation List */}
      <ul className="flex lg:flex-col gap-3 items-center w-full h-fit">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id} className="relative group shrink-0">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-accent-pink text-white shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                    : "text-[#64748b] dark:text-[#9e9e9e] hover:text-white dark:hover:text-white border border-transparent hover:border-[#e2e8f0] dark:hover:border-[#232323] hover:bg-[#ffffff] dark:hover:bg-[#0d0d0d]"
                }`}
                aria-label={item.label}
              >
                {item.icon}
              </a>
              {/* Tooltip */}
              <span className="absolute hidden lg:block right-14 top-1/2 -translate-y-1/2 bg-[#ffffff] dark:bg-[#161616] border border-[#e2e8f0] dark:border-[#232323] text-[#0f0f0f] dark:text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
