"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Users, Zap, Trophy, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventInfo, stats } from "@/lib/event-data";

function CountdownTimer() {
  const targetDate = new Date(eventInfo.startDate).getTime();

  const getTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="glass-card rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[72px] border border-[#00ff41]/20">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-[#00ff41] glow-green-text">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-[#94a3b8] mt-1 font-mono uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  const iconMap: Record<string, React.ElementType> = {
    Calendar,
    Zap,
    Users,
    Trophy,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-banner.png"
          alt="Cyber Security Week 2026 Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/60 via-[#0a0a1a]/80 to-[#0a0a1a]" />
      </div>

      {/* Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff41]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Shield Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
              <img
          src="https://meu.edu.in/wp-content/uploads/2026/02/cropped-MU-logo-final-white.png"
          alt="Cyber Security Week 2026 Background"
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
            {/* <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-[#00ff41]" /> */}
            {/* <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#00ff41]/20 animate-pulse" /> */}
            {/* <div className="absolute inset-[-8px] w-[calc(100%+16px)] h-[calc(100%+16px)] rounded-full border border-[#00ff41]/10" /> */}
            
          </div>
        </motion.div>

        {/* Event Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 mb-4">
            <span className="text-[#00ff41] text-sm font-mono font-medium tracking-wider">
              &gt;_ {eventInfo.university}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-[#00ff41] glow-green-text font-mono">Cyber</span>{" "}
          <span className="text-white">Security</span>{" "}
          <span className="text-[#00d4ff] glow-cyan-text">Week</span>{" "}
          <span className="text-white">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-[#00ff41]/80 mb-2 tracking-wide"
        >
          {eventInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#94a3b8] mb-8"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00d4ff]" />
            <span className="font-mono text-sm sm:text-base">{eventInfo.dates}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#1e293b]" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00d4ff]" />
            <span className="font-mono text-sm sm:text-base">{eventInfo.venue}</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs text-[#94a3b8] font-mono uppercase tracking-widest mb-3">
            Event Starts In
          </p>
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="neon-button bg-[#00ff41] text-[#0a0a1a] hover:bg-[#00ff41]/90 font-bold font-mono px-8 h-12 text-base"
          >
            <a href="#register">Register Now</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 font-mono px-8 h-12 text-base"
          >
            <a href="#ctf">Join CTF</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat) => {
            const IconComp = iconMap[stat.icon] || Zap;
            return (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center hover:border-[#00ff41]/30 transition-all group"
              >
                <IconComp className="w-5 h-5 text-[#00ff41] mx-auto mb-2 group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.4)] transition-all" />
                <div className="text-2xl font-bold font-mono text-white">{stat.value}</div>
                <div className="text-xs text-[#94a3b8] font-mono uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[#00ff41]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
