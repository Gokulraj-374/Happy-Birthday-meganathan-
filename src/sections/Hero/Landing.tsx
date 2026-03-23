"use client";
import { motion } from "framer-motion";

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-romantic-900 via-romantic-950 to-purple-950 relative overflow-hidden text-center px-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 bg-white/5 p-12 rounded-3xl glass border-glow"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow bg-clip-text text-transparent bg-gradient-to-r from-romantic-300 via-romantic-500 to-royal-400">
          A Special Surprise for Meghanathan
        </h1>
        <p className="text-xl md:text-2xl text-romantic-100/80 mb-10 max-w-2xl mx-auto">
          Every moment with you is a gift. Let's take a journey through our beautiful memories.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-5 bg-romantic-600 hover:bg-romantic-500 text-white rounded-full font-bold text-xl transition-all shadow-xl shadow-romantic-900/40 animate-pulse-slow"
        >
          Click to Open Your Surprise 🎁
        </motion.button>
      </motion.div>
      
      {/* Small Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-romantic-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-500/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
    </section>
  );
}
