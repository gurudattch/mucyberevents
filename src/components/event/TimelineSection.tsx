"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Clock, MapPin } from "lucide-react";
import { timeline, eventTypes } from "@/lib/event-data";

export function TimelineSection() {
  const [activeDay, setActiveDay] = useState(1);
  const currentDay = timeline.find((d) => d.day === activeDay);

  return (
    <section id="schedule" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a0f1a] to-[#0a0a1a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 mb-4">
            <span className="text-[#00ff41] text-xs font-mono uppercase tracking-wider">Event Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Week </span>
            <span className="text-[#00ff41] glow-green-text font-mono">Timeline</span>
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            7 days of immersive cybersecurity learning, competition, and networking
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide justify-start lg:justify-center">
          {timeline.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`flex-shrink-0 px-4 py-3 rounded-xl text-sm font-mono font-medium transition-all duration-300 border ${
                activeDay === day.day
                  ? "bg-[#00ff41]/10 border-[#00ff41]/40 text-[#00ff41] glow-green"
                  : "bg-[#0f172a]/50 border-[#1e293b]/50 text-[#94a3b8] hover:border-[#00ff41]/20 hover:text-[#00ff41]/80"
              }`}
            >
              <div className="text-xs opacity-70">Day {day.day}</div>
              <div>{day.date}</div>
            </button>
          ))}
        </div>

        {/* Active Day Content */}
        <AnimatePresence mode="wait">
          {currentDay && (
            <motion.div
              key={currentDay.day}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Day Title */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 mb-6 border border-[#00ff41]/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold font-mono text-[#00ff41]">{currentDay.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{currentDay.title}</h3>
                    <p className="text-[#94a3b8] text-sm">{currentDay.description}</p>
                  </div>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-3">
                {currentDay.events.map((event, idx) => {
                  const typeInfo = eventTypes[event.type] || eventTypes.activity;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="glass-card rounded-xl p-4 sm:p-5 hover:border-[#00ff41]/20 transition-all group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:w-40 flex-shrink-0">
                          <Clock className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                          <span className="text-sm font-mono text-[#00d4ff]">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-1">
                          <ChevronRight className="w-4 h-4 text-[#1e293b] group-hover:text-[#00ff41] transition-colors flex-shrink-0" />
                          <span className="text-sm sm:text-base text-white font-medium">{event.name}</span>
                        </div>
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-mono border ${typeInfo.color}`}>
                          {typeInfo.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
