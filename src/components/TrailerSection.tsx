import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface TrailerSlide {
  id: number;
  textJP: string;
  textEN: string;
  subText: string;
  bgImage: string;
  intensity: string;
}

const CINEMATIC_SLIDES: TrailerSlide[] = [
  {
    id: 1,
    textJP: '「五百万ポンドで買われた、身寄りのない少女。」',
    textEN: '“A friendless girl, purchased for five million pounds.”',
    subText: 'ACT I — THE AUCTION',
    bgImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
    intensity: 'brightness-[0.4] scale-105'
  },
  {
    id: 2,
    textJP: '「人ならざる異形の魔法使い、エリアス・エインズワース。」',
    textEN: '“The non-human, misshapen magus, Elias Ainsworth.”',
    subText: 'ACT II — THE THORN MAGE',
    bgImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=80',
    intensity: 'brightness-[0.35] scale-110'
  },
  {
    id: 3,
    textJP: '「彼女は彼の弟子となり、そしていつか、花嫁となる。」',
    textEN: '“She will become his apprentice, and in time, his bride.”',
    subText: 'ACT III — APPRENTICE & BRIDE',
    bgImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80',
    intensity: 'brightness-[0.4] scale-105'
  },
  {
    id: 4,
    textJP: 'TVアニメ「魔法使いの嫁」好評配信中',
    textEN: 'The Ancient Magus\' Bride.',
    subText: 'MAHOYOME ANIME CODES',
    bgImage: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80',
    intensity: 'brightness-[0.32] scale-115'
  }
];

export default function TrailerSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cinematic sequencer loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
      }, 5500); // 5.5s per theatrical slice
    }
    return () => {
      clearInterval(interval);
    };
  }, [isOpen]);

  const handleOpen = () => {
    setCurrentSlide(0);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section 
      id="trailer-section" 
      className="relative w-full h-[65vh] min-h-[450px] bg-[#0A0A0A] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background layer with dense moss woods visual and particles */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none select-none filter contrast-125 saturate-50"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      <div className="absolute inset-0 bg-[#0D0D0D]/40" />

      {/* Drifting Fog Layers */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none select-none mix-blend-screen overflow-hidden">
        <div className="absolute -inset-10 bg-gradient-radial from-[#2F4633]/30 via-transparent to-transparent blur-3xl animate-drift-fog-1" />
        <div className="absolute -inset-10 bg-gradient-radial from-[#C89B5B]/10 via-transparent to-transparent blur-3xl animate-drift-fog-2" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Soft Cinematic Light Rays */}
      <div className="cinematic-ray" />

      {/* Faint Floating Fireflies (Golden dust particles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
        {Array.from({ length: 8 }).map((_, i) => {
          const left = `${[12, 35, 58, 82, 24, 46, 73, 91][i]}%`;
          const top = `${[65, 75, 55, 80, 48, 72, 60, 85][i]}%`;
          const size = `${[3, 5, 4, 3, 4, 6, 3, 5][i]}px`;
          const delay = `${[0, 2.5, 1.2, 3.8, 0.8, 4.2, 1.9, 3.1][i]}s`;
          const duration = `${[12, 16, 14, 18, 15, 13, 17, 14][i]}s`;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#C89B5B] blur-[0.5px]"
              style={{
                left,
                top,
                width: size,
                height: size,
                boxShadow: '0 0 8px #C89B5B, 0 0 12px #C89B5B',
                animation: `firefly-float ${duration} ease-in-out infinite`,
                animationDelay: delay,
              }}
            />
          );
        })}
      </div>

      {/* Spawns dynamic glowing particles above background to give mist depth */}
      <div className="absolute inset-0 bg-gradient-radial from-[#C89B5B]/10 to-transparent blur-2xl top-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Main interactive center structure */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl select-none">
        
        {/* Play Icon Trigger with thin rotating vector rings */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center group cursor-pointer" onClick={handleOpen}>
          {/* Wave ripple ring 1 */}
          <div className="absolute inset-0 rounded-full border border-[#C89B5B]/30 group-hover:scale-110 group-hover:border-[#C89B5B]/70 duration-700 ease-out" />
          
          {/* Wave ripple ring 2 (slow rotate) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2.5 rounded-full border border-dashed border-[#C89B5B]/15"
          />

          {/* Active pulse aura */}
          <div className="absolute inset-0 rounded-full bg-[#C89B5B]/5 group-hover:bg-[#C89B5B]/15 group-hover:blur-xs transition-all duration-500 scale-95" />

          {/* The Button Outer Rim */}
          <div className="w-16 h-16 rounded-full border border-[#C89B5B] bg-[#0D0D0D] flex items-center justify-center shadow-lg group-hover:scale-95 group-hover:bg-[#C89B5B] group-hover:text-[#0D0D0D] transition-all duration-500 z-10 relative">
            <Play className="w-6 h-6 text-[#C89B5B] group-hover:text-[#0D0D0D] fill-current translate-x-0.5 transition-colors duration-500" />
          </div>
        </div>

        {/* Promo copy labels */}
        <span className="font-mono text-[9px] tracking-[0.45em] text-[#C89B5B] uppercase block font-semibold mb-2">
          SACRED PROMOTIONAL VIDEO
        </span>
        
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4F1EA] tracking-[0.2em]">
          PREVIEW TRAILER <span className="font-sans font-light text-[#F4F1EA]/40 text-xs tracking-widest pl-1">( プロモーション映像 )</span>
        </h3>
        
        <p className="font-serif text-xs text-[#FAF1EA]/55 leading-relaxed tracking-widest max-w-md mt-4 uppercase">
          Enter the theater of the ancient woods &bull; Witness the pact unfold.
        </p>
      </div>

      {/* FULLSCREEN PREVIEW CINEMATIC SEQUENCER MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 w-full h-[100vh] bg-black z-50 flex flex-col justify-center items-center overflow-hidden"
          >
            {/* 1. Backdrop Zoom Image */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6 }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <div 
                  className={`absolute inset-0 bg-cover bg-center duration-[5500ms] ease-out transform ${CINEMATIC_SLIDES[currentSlide].intensity}`}
                  style={{ backgroundImage: `url('${CINEMATIC_SLIDES[currentSlide].bgImage}')` }}
                />
                {/* Cinema color overlays / vignette shadow board */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.95)]" />
              </motion.div>
            </AnimatePresence>

            {/* 2. Top bar HUD controls */}
            <div className="absolute top-8 inset-x-8 flex justify-between items-center text-white/50 tracking-[0.2em] font-mono text-[9px] z-20">
              <span className="font-serif font-light text-xs text-[#FAF1EA]/80 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C89B5B] animate-pulse" />
                魔法使いの嫁 OFFICIAL PV
              </span>
              <button 
                onClick={handleClose} 
                className="flex items-center gap-2.5 uppercase tracking-widest hover:text-white transition-colors duration-300 pointer-events-auto bg-white/5 px-4 py-2 rounded-sm border border-white/10"
              >
                Close Cinema
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 3. Central Poetical Anime Subtitles */}
            <div className="relative w-full max-w-4xl px-8 text-center flex flex-col items-center pointer-events-none select-none my-auto">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-6"
                >
                  <span className="font-mono text-[10px] tracking-[0.45em] text-[#C89B5B] font-semibold border-b border-[#C89B5B]/30 pb-2">
                    {CINEMATIC_SLIDES[currentSlide].subText}
                  </span>

                  {/* Japanese subtitle lines */}
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-normal tracking-[0.35em] leading-normal drop-shadow-[0_5px_15px_rgba(0,0,0,0.95)] px-4">
                    {CINEMATIC_SLIDES[currentSlide].textJP}
                  </h2>

                  {/* English subtitle translation */}
                  <p className="font-serif italic text-xs sm:text-sm text-white/70 max-w-2xl tracking-[0.16em] leading-relaxed drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)] px-5">
                    {CINEMATIC_SLIDES[currentSlide].textEN}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 4. Bottom Index indicators (Theater Timeline) */}
            <div className="absolute bottom-12 inset-x-8 flex justify-center items-center gap-4 z-10">
              {CINEMATIC_SLIDES.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`h-[2px] transition-all duration-[2000ms] ease-out rounded-full ${
                    index === currentSlide ? 'w-16 bg-[#C89B5B]' : 'w-4 bg-white/20'
                  }`}
                />
              ))}
            </div>

            {/* 5. Cinema Atmosphere background noise loops (visual scanline bar) */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-15" />

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
