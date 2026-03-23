"use client";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Share2, RotateCcw } from "lucide-react";

interface FinaleProps {
  config: {
    title: string;
    message: string;
  };
  onReplay: () => void;
}

export default function Finale({ config, onReplay }: FinaleProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Birthday Surprise for Meghanathan",
          text: "Check out this amazing birthday surprise!",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      alert("Sharing is not supported on this browser. You can copy the URL!");
    }
  };
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
        className="z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 text-glow animate-glow drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] bg-clip-text text-transparent bg-gradient-to-r from-romantic-300 via-white to-royal-300 text-balance leading-tight px-4">
          {config.title}
        </h2>
        <p className="text-lg md:text-2xl text-romantic-100/90 font-medium max-w-3xl mx-auto shadow-text leading-relaxed">
          {config.message}
        </p>
      </motion.div>
      
      <div className="flex flex-col md:flex-row gap-6 mt-16">
        <motion.button
          onClick={onReplay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all border-glow flex items-center gap-2"
        >
          <RotateCcw size={20} />
          Replay the Journey ✨
        </motion.button>
        
        <motion.button
          onClick={handleShare}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-4 bg-royal-600 text-white rounded-full font-bold hover:bg-royal-500 transition-all shadow-lg flex items-center gap-2"
        >
          <Share2 size={20} />
          Share Surprise 🎁
        </motion.button>
      </div>
    </section>
  );
}
