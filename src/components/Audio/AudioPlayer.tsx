"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayConfig } from "@/config/birthday";

export default function AudioPlayer({ isStarted }: { isStarted: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isStarted && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay blocked", err);
      });
    }
  }, [isStarted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayConfig.music.url}
        loop
      />
      <AnimatePresence>
        {isStarted && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-2xl"
          >
            <div className="hidden md:block px-4 py-1">
              <p className="text-xs text-romantic-200 font-medium">Listening to</p>
              <p className="text-sm text-white font-bold truncate max-w-[120px]">
                {birthdayConfig.music.title}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-romantic-600/80 hover:bg-romantic-500 text-white transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </motion.button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-romantic-500 rounded-full animate-ping opacity-75" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
