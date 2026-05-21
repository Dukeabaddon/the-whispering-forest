import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export default function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [stage, setStage] = useState<'black' | 'storybook' | 'revealing'>('black');

  useEffect(() => {
    // Stage 1: Faint dark transition into showing the parchment book page
    const t1 = setTimeout(() => {
      setStage('storybook');
    }, 400);

    // Stage 2: Trigger the unfold / reveal transition
    const t2 = setTimeout(() => {
      setStage('revealing');
    }, 2800);

    // Stage 3: Complete and trigger unmount in parent
    const t3 = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        filter: shouldReduceMotion ? 'none' : 'blur(20px)',
        scale: shouldReduceMotion ? 1 : 1.05
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-full bg-[#030202] z-[9999] flex items-center justify-center overflow-hidden"
    >
      {/* 1. Global Cinematic Noise and Film Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-50 bg-noise mix-blend-overlay" />
      
      {/* 2. Soft Candlelight Ambient Vignette Glow */}
      <div className="absolute inset-0 pointer-events-none z-40 bg-radial-gradient from-transparent via-[#030202]/50 to-[#030202] shadow-[inset_0_0_150px_rgba(3,2,2,0.95)]" />

      {/* 3. Floating Amber Magical Embers (Drifting upwards) - Disabled for reduced motion */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {Array.from({ length: 18 }).map((_, i) => {
            const delay = i * 0.18;
            const duration = 4.5 + Math.random() * 3;
            const size = 2 + Math.random() * 3.5;
            const left = `${Math.random() * 100}%`;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: '110vh', x: 0 }}
                animate={{
                  opacity: [0, 0.75, 0.45, 0],
                  y: '-10vh',
                  x: [0, Math.sin(i) * 35, Math.sin(i) * -15]
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  left,
                  width: size,
                  height: size,
                  borderRadius: '50%',
                  backgroundColor: i % 2 === 0 ? '#C89B5B' : '#E8DDC7',
                  boxShadow: '0 0 8px #C89B5B, 0 0 16px rgba(200,155,91,0.5)',
                }}
              />
            );
          })}
        </div>
      )}

      {/* 4. Underlay Dark Parchment Page Container */}
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 0.94, opacity: 0 }}
        animate={{
          scale: stage === 'revealing' ? (shouldReduceMotion ? 1 : 1.05) : 1,
          opacity: stage === 'black' ? 0 : 0.96
        }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[90vw] max-w-[720px] aspect-[1.4/1] bg-[#FAF6EE] rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#C89B5B]/15 flex items-center justify-center p-8 overflow-hidden z-20"
      >
        {/* Paper Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.14] mix-blend-color-burn"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587080266227-677cd237c267?auto=format&fit=crop&w=800&q=80')`,
            backgroundSize: 'cover'
          }}
        />

        {/* Inset Shadow to frame the pages */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(40,25,18,0.22)]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#3A2A22]/10 via-[#3A2A22]/30 to-[#3A2A22]/10 pointer-events-none" />

        {/* Inner Content Spread */}
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Left Page (Fading in text) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
            animate={{ opacity: stage === 'storybook' || stage === 'revealing' ? 0.85 : 0 }}
            transition={{ delay: 0.8, duration: 1.6 }}
            className="w-1/2 pr-6 flex flex-col justify-center items-center text-center font-serif text-[#3A2A22] border-r border-[#3A2A22]/5 h-full select-none"
          >
            <span className="font-mono text-[8px] tracking-[0.3em] text-[#9C4B4B] uppercase font-semibold mb-2">
              ACT I — ANCIENT COVENANT
            </span>
            <p className="text-[11px] sm:text-xs leading-relaxed italic tracking-wide max-w-[220px]">
              &ldquo;A forest of thorns holds the key to spring. Bind your roots to mine, Sleigh Beggy.&rdquo;
            </p>
            <div className="w-8 h-[1px] bg-[#C89B5B]/30 mt-4" />
          </motion.div>

          {/* Right Page (Glowing Runes & Anime Calligraphy) */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: stage === 'storybook' || stage === 'revealing' ? 1 : 0 }}
            transition={{ delay: 1.1, duration: 1.6 }}
            className="w-1/2 pl-6 flex flex-col justify-center items-center h-full select-none"
          >
            {/* Glowing Sigil in background */}
            <div className="absolute right-[12%] top-[25%] w-36 h-36 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#3A2A22] animate-spin" style={{ animationDuration: '40s' }}>
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" fill="none" />
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M50,5 L50,95 M5,50 L95,50 M18,18 L82,82 M18,82 L82,18" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Calligraphy Callout */}
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-serif text-[1.4rem] sm:text-[1.8rem] text-[#1C120D] tracking-[0.45em] leading-none mb-3 drop-shadow-[0_2px_4px_rgba(200,155,91,0.15)]">
                魔法使いの嫁
              </h2>
              <span className="block text-[7.5px] sm:text-[8.5px] text-[#C89B5B] tracking-[0.4em] font-mono uppercase">
                The Ancient Magus' Bride
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 5. Volumetric Fog layers dissolving on exit */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <div className="absolute top-1/4 left-0 w-full h-[60%] bg-[#030202]/35 filter blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[#030202] to-transparent opacity-95" />
      </div>
    </motion.div>
  );
}
