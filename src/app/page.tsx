"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/sections/Hero/Landing";
import Intro from "@/sections/Story/Intro";
import Gallery from "@/sections/Story/Gallery";
import SpecialMessage from "@/sections/Story/SpecialMessage";
import Finale from "@/sections/Final/GrandFinale";
import FloatingParticles from "@/components/Background/FloatingParticles";
import AudioPlayer from "@/components/Audio/AudioPlayer";
import EasterEgg from "@/components/UI/EasterEgg";
import TransitionOverlay from "@/components/UI/TransitionOverlay";
import Balloons from "@/components/Effects/Balloons";
import { birthdayConfig } from "@/config/birthday";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleStart = () => {
    setShowTransition(true);
    setTimeout(() => {
      setIsStarted(true);
      window.scrollTo(0, 0);
      setTimeout(() => setShowTransition(false), 800);
    }, 1000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-romantic-500/30">
      {/* Global Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/global-bg.jpg"
          alt="Birthday Background"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-romantic-950/40 via-black/30 to-purple-950/50" />
      </div>

      <div className="relative z-10 w-full h-full">
        <TransitionOverlay isVisible={showTransition} />
        <FloatingParticles />
        {isStarted && <Balloons />}
        <AudioPlayer isStarted={isStarted} />
        
        {!isStarted ? (
          <Hero onStart={handleStart} />
        ) : (
          <div className="flex flex-col gap-24 py-12">
            <Intro config={birthdayConfig.sections[0]} />
            <Gallery config={birthdayConfig.sections[1]} />
            <SpecialMessage config={birthdayConfig.sections[2]} />
            <EasterEgg />
            <Finale 
              config={birthdayConfig.finale} 
              onReplay={() => {
                setIsStarted(false);
                window.scrollTo(0, 0);
              }} 
            />
          </div>
        )}
      </div>
    </main>
  );
}
