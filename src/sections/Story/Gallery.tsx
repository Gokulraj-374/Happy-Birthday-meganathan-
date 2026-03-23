"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MemorySection } from "@/config/birthday";

interface GalleryProps {
  config: MemorySection;
}

export default function Gallery({ config }: GalleryProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8">
      <motion.h2
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 text-glow text-balance px-4"
      >
        {config.title}
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {config.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative h-[400px] overflow-hidden rounded-3xl glass border-glow"
          >
            <Image
              src={item.image}
              alt={item.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <p className="text-xl font-medium text-white italic">
                "{item.caption}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
