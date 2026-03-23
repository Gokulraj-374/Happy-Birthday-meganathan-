"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IntroSection } from "@/config/birthday";

interface IntroProps {
  config: IntroSection;
}

export default function Intro({ config }: IntroProps) {
  const [displayText, setDisplayText] = useState("");
  const fullMessage = config.message;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullMessage.slice(0, index));
      index++;
      if (index > fullMessage.length) clearInterval(interval);
    }, 30); // Slightly faster for longer text
    return () => clearInterval(interval);
  }, [fullMessage]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 max-w-5xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass p-8 md:p-16 rounded-[40px] text-left w-full shadow-2xl border-white/10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-glow bg-clip-text text-transparent bg-gradient-to-r from-romantic-300 to-romantic-100">
          {config.title}
        </h2>
        <div className="text-lg md:text-2xl leading-relaxed text-white/90 whitespace-pre-wrap font-medium">
          {displayText}
          <span className="inline-block w-1.5 h-6 md:h-8 ml-1 bg-romantic-400 animate-pulse align-middle" />
        </div>
      </motion.div>
    </section>
  );
}
