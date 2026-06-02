"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Target, BookOpen, Cpu } from "lucide-react";
import { eventInfo } from "@/lib/event-data";

const features = [
  // {
  //   icon: ShieldCheck,
  //   title: "Hands-on Workshops",
  //   description: "Practical sessions on ethical hacking, web security, forensics, and more with real-world tools and scenarios.",
  // },
  {
    icon: Target,
    title: "CTF Competition",
    description: "Jeopardy-style Capture The Flag with challenges across Web, Crypto, Reverse Engineering, Forensics, and OSINT.",
  },
  {
    icon: Users,
    title: "Expert Speakers",
    description: "Learn from industry leaders, security researchers, and government officials shaping India's cyber defense.",
  },
  {
    icon: Lightbulb,
    title: "Career Guidance",
    description: "Panel discussions and fireside chats on career paths, certifications, and opportunities in cybersecurity.",
  },
{
  icon: User,
  title: "Women in Cybersecurity",
  description: "Empowering women to lead, innovate, and thrive in the cybersecurity industry through learning, mentorship, and community.",
},
  // {
  //   icon: Cpu,
  //   title: "Latest Technologies",
  //   description: "Explore AI in security, cloud security, zero-trust architecture, and cutting-edge threat intelligence.",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
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
          <div className="inline-block px-3 py-1 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 mb-4">
            <span className="text-[#00d4ff] text-xs font-mono uppercase tracking-wider">About the Event</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What is </span>
            <span className="text-[#00ff41] glow-green-text font-mono">CSW 2026</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-[#94a3b8] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {eventInfo.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 hover:border-[#00ff41]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/20 flex items-center justify-center mb-4 group-hover:bg-[#00ff41]/20 group-hover:border-[#00ff41]/30 transition-all">
                <feature.icon className="w-6 h-6 text-[#00ff41]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-mono">{feature.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* University Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card rounded-2xl p-8 text-center border border-[#00d4ff]/10"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Hosted by <span className="text-[#00d4ff] font-mono">Mandsaur University</span>
          </h3>
          <p className="text-[#94a3b8] text-sm max-w-2xl mx-auto leading-relaxed">
            Mandsaur University is a premier educational institution in Mandsaur, Madhya Pradesh, committed to academic excellence and innovation. The Department of Computer Science & IT proudly presents Cyber Security Week 2026 — an initiative to foster cybersecurity awareness and skill development among students and professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
