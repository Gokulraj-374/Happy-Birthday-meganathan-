"use client";
import { motion } from "framer-motion";
import { MessageSection } from "@/config/birthday";

interface MessageProps {
  config: MessageSection;
}

export default function SpecialMessage({ config }: MessageProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-12 md:p-20 rounded-[60px] max-w-5xl w-full text-center relative overflow-hidden group border-glow"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-64 h-64 bg-romantic-500 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -right-24 w-80 h-80 bg-royal-600 rounded-full blur-[90px]"
        />
        
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-glow bg-clip-text text-transparent bg-gradient-to-br from-white via-romantic-200 to-royal-200">
          {config.title}
        </h2>
        <p className="text-2xl md:text-4xl leading-relaxed text-white/80 font-serif italic">
          "{config.content}"
        </p>
      </motion.div>
    </section>
  );
}
