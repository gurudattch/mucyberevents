"use client";

import { motion } from "framer-motion";
import { Star, Mic, Building2, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { speakers } from "@/lib/event-data";

export function GuestsSection() {
  const chiefGuest = speakers.find((s) => s.isChiefGuest);
  const otherSpeakers = speakers.filter((s) => !s.isChiefGuest);

  return (
    <section id="speakers" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a0f1a] to-[#0a0a1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 mb-4">
            <span className="text-amber-400 text-xs font-mono uppercase tracking-wider">Speakers & Guests</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Meet Our </span>
            <span className="text-amber-400 font-mono">Speakers</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Learn from the best minds in cybersecurity — industry leaders, researchers, and government officials
          </p>
        </motion.div>

        {/* Chief Guest */}
        {chiefGuest && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 font-mono">
                  <Star className="w-3 h-3 mr-1" /> Chief Guest
                </Badge>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mt-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-2 border-amber-500/30 flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-bold text-amber-400 font-mono">
                      {chiefGuest.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                    <Star className="w-4 h-4 text-[#0a0a1a]" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{chiefGuest.name}</h3>
                  <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm font-mono">{chiefGuest.designation}</span>
                    </div>
                    <span className="hidden sm:inline text-[#1e293b]">•</span>
                    <span className="text-sm text-[#94a3b8] font-mono">{chiefGuest.organization}</span>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{chiefGuest.bio}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Mic className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-amber-400 font-mono">{chiefGuest.topic}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSpeakers.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-[#00d4ff]/30 transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#00ff41]/20 border border-[#00d4ff]/20 flex items-center justify-center mb-4 group-hover:border-[#00d4ff]/40 transition-all">
                  <span className="text-xl font-bold text-[#00d4ff] font-mono">
                    {speaker.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-white mb-1">{speaker.name}</h4>
                <p className="text-xs text-[#00d4ff] font-mono mb-1">{speaker.designation}</p>
                <p className="text-xs text-[#94a3b8] font-mono mb-3">{speaker.organization}</p>
                
                <p className="text-xs text-[#94a3b8] leading-relaxed mb-3 line-clamp-3">{speaker.bio}</p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <Quote className="w-3 h-3 text-[#00d4ff]" />
                  <span className="text-xs text-[#00d4ff] font-mono line-clamp-1">{speaker.topic}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
