"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function TransitionOverlay({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[200] bg-romantic-950 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-4xl font-bold tracking-widest uppercase italic text-glow"
          >
            Memories Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
