"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 5,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Hide particles after 1 minute
    const timer = setTimeout(() => {
      setVisible(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, x: `${p.x}%`, y: "110%" }}
          animate={{
            opacity: [0, 0.5, 0],
            y: ["110%", "-10%"],
            x: [`${p.x}%`, `${p.x + (Math.random() * 8 - 4)}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: -p.delay, // Use negative delay to start them at different points immediately
            ease: "linear",
          }}
          className="absolute bg-white/20 rounded-full blur-[1px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
      
      {/* Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.05),transparent_50%)]" />
    </div>
  );
}
