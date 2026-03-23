"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BALLOON_COLORS = [
  "rgba(255, 105, 180, 0.6)", // hotpink
  "rgba(255, 182, 193, 0.6)", // lightpink
  "rgba(219, 112, 147, 0.6)", // palevioletred
  "rgba(255, 20, 147, 0.6)",  // deeppink
  "rgba(186, 85, 211, 0.6)",  // mediumorchid
];

interface Balloon {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  xOffset: number;
}

export default function Balloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const newBalloons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (60 - 30) + 30,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      delay: Math.random() * 5,
      duration: Math.random() * (15 - 10) + 10,
      xOffset: Math.random() * 10 - 5,
    }));
    setBalloons(newBalloons);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          initial={{ y: "110vh", x: `${balloon.x}vw`, opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
            x: [`${balloon.x}vw`, `${balloon.x + balloon.xOffset}vw`],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: balloon.size,
            height: balloon.size * 1.2,
            backgroundColor: balloon.color,
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.1)",
          }}
          className="absolute"
        >
          {/* Balloon String */}
          <div
            className="absolute bottom-[-40px] left-1/2 w-[1px] h-10 bg-white/30 origin-top"
            style={{ transform: "translateX(-50%)" }}
          />
          {/* Reflection */}
          <div className="absolute top-[10%] left-[15%] w-[20%] h-[20%] bg-white/20 rounded-full blur-[2px]" />
        </motion.div>
      ))}
    </div>
  );
}
