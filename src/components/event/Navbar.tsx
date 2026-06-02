"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, eventInfo } from "@/lib/event-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-[#1e293b]/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
               <img
          src="https://meu.edu.in/wp-content/uploads/2026/02/cropped-MU-logo-final-white.png"
          alt="Cyber Security Week 2026 Background"
          className="w-9 h-9 sm:w-19 sm:h-19"
        />
              {/* <Shield className="w-8 h-8 text-[#00ff41] group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)] transition-all" />
              <div className="absolute inset-0 w-8 h-8 rounded-full border border-[#00ff41]/20 group-hover:border-[#00ff41]/40 transition-colors" /> */}
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-[#00ff41] font-mono glow-green-text leading-tight">
                {eventInfo.shortName}
              </span>
              <span className="text-[10px] text-[#94a3b8] font-mono leading-tight">
                <Terminal className="w-3 h-3 inline mr-1" />
                {eventInfo.university}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#00ff41] bg-[#00ff41]/10 glow-green-text"
                      : "text-[#94a3b8] hover:text-[#00ff41] hover:bg-[#00ff41]/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#94a3b8] hover:text-[#00ff41] hover:bg-[#00ff41]/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-[#1e293b]/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#00ff41] bg-[#00ff41]/10"
                        : "text-[#94a3b8] hover:text-[#00ff41] hover:bg-[#00ff41]/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
