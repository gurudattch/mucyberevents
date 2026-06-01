"use client";

import { Shield, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, ExternalLink, Heart } from "lucide-react";
import { socialLinks, navLinks } from "@/lib/event-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1e293b]/50 bg-[#070714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-[#00ff41]" />
              <div>
                <span className="text-lg font-bold text-[#00ff41] font-mono">CSW 2025</span>
                <p className="text-[10px] text-[#94a3b8] font-mono">Cyber Security Week</p>
              </div>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
              A week-long cybersecurity event at Mandsaur University featuring workshops, CTF, expert talks, and more.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
                { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
                { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: Github, href: socialLinks.github, label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#0f172a] border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#00ff41] hover:border-[#00ff41]/30 hover:bg-[#00ff41]/5 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#00ff41] transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-4">More</h3>
            <ul className="space-y-2">
              {navLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#00ff41] transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#94a3b8] hover:text-[#00ff41] transition-colors font-mono inline-flex items-center gap-1"
                >
                  University Website <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00ff41] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                  <span className="font-mono text-xs">{socialLinks.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-[#00ff41] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                  <span className="font-mono text-xs">{socialLinks.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <MapPin className="w-4 h-4 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Mandsaur University, Mandsaur, Madhya Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1e293b]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94a3b8] font-mono text-center sm:text-left">
            © {currentYear} Cyber Security Week | Mandsaur University. All rights reserved.
          </p>
          <p className="text-xs text-[#4a5568] font-mono flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500" /> by CSW Team
          </p>
        </div>
      </div>
    </footer>
  );
}
