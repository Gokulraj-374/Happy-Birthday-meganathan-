"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Star, Heart } from "lucide-react";

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center py-20">
      <p className="text-romantic-300/50 mb-4 animate-bounce">Psst... something is hidden here 🤫</p>
      <motion.button
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="w-20 h-20 bg-romantic-900/40 rounded-full flex items-center justify-center border border-romantic-500/30 glass group shadow-lg"
      >
        <Gift className="text-romantic-400 group-hover:text-romantic-300 transition-colors" size={32} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass p-10 md:p-16 rounded-[40px] max-w-2xl w-full text-center border-glow relative"
            >
              <div className="flex justify-center gap-4 mb-8">
                <Star className="text-yellow-400 animate-spin-slow" />
                <Heart className="text-romantic-500 animate-pulse" />
                <Star className="text-yellow-400 animate-spin-slow" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-glow">You Found It!</h3>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 italic">
                "You are the most precious star in my universe. Keep shining, Meghanathan!"
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-romantic-600 text-white rounded-full font-bold hover:bg-romantic-500 transition-all"
              >
                Close with a Smile 😊
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
