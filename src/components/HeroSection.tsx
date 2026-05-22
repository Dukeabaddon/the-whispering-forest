import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  isLoaded?: boolean;
}

export default function HeroSection({ isLoaded = false }: HeroSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth springs for magical parallax effect
  const springConfig = { damping: 45, stiffness: 120, mass: 1 };
  const bgX = useSpring(useMotionValue(0), springConfig);
  const bgY = useSpring(useMotionValue(0), springConfig);
  const midX = useSpring(useMotionValue(0), springConfig);
  const midY = useSpring(useMotionValue(0), springConfig);
  const fgX = useSpring(useMotionValue(0), springConfig);
  const fgY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Get normalized cursor values between -0.5 and 0.5
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;

      setMousePos({ x, y });

      // Target translations for parallax layers
      bgX.set(x * -15);
      bgY.set(y * -15);
      midX.set(x * -35); // stronger shift for the visual novel characters
      midY.set(y * -25);
      fgX.set(x * 15);   // reverse shift for foreground branches
      fgY.set(y * 15);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [bgX, bgY, midX, midY, fgX, fgY]);

  // Smooth scroll to news helper
  const scrollToContent = () => {
    const newsSection = document.getElementById('news-section');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-[#0D0D0D] flex flex-col justify-end items-center"
    >
      {/* 1. BACKGROUND LAYER: Watercolor sunset gradient collapsing into deep forest darkness */}
      <motion.div
        id="bg-layer"
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] pointer-events-none select-none"
      >
        {/* Underlay watercolor texture/sunbeams */}
        <div
          className="absolute inset-x-0 bottom-0 top-0 bg-cover bg-center mix-blend-color-burn opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        {/* Soft, mystical sunset glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#1A110D]/90 to-[#9C4B4B]/20" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-radial from-[#C89B5B]/15 to-transparent blur-3xl" />

        {/* Deep, vein-like background twig vectors fading in */}
        <svg className="absolute inset-0 w-full h-full opacity-30 filter blur-[0.5px]" viewBox="0 0 1000 1000" fill="none">
          <path d="M-50,-50 Q120,250 60,600 T-20,1050" stroke="#000" strokeWidth="6" />
          <path d="M1050,-50 Q880,250 940,600 T1020,1050" stroke="#000" strokeWidth="5" />
        </svg>
      </motion.div>

      {/* 2. MIDGROUND LAYER: The Central Anime Key Visual (Aoife & Sylvanas) */}
      <motion.div
        id="midhead-layer"
        style={{ x: midX, y: midY }}
        className="absolute inset-0 w-[108%] h-[108%] -left-[4%] -top-[4%] flex items-end justify-center pointer-events-none select-none z-15"
      >
        <div className="relative w-full max-w-[800px] h-[85vh] flex items-end justify-center mb-[5vh] md:mb-0">

          {/* Backlight Aura glowing up behind the characters to create silhouette tension */}
          <motion.div
            className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] pointer-events-none"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 3.5, delay: 2.2, ease: "easeOut" }}
          >
            <div
              className="w-full h-full rounded-full bg-gradient-to-tr from-[#9C4B4B]/65 via-[#C89B5B]/45 to-transparent filter blur-3xl mix-blend-lighten animate-pulse"
              style={{ animationDuration: '8s' }}
            />
          </motion.div>

          {/* Sylvanas (The Ancient Mage) + Aoife (The Red-haired Girl) Composition Illustration */}
          <div className="relative w-full h-full flex justify-center items-end overflow-visible">
            <motion.img
              src="/images/hero-section.png"
              alt="The Ancient Magus' Bride - Chise and Elias"
              className="w-auto h-full max-h-[190vh] md:max-h-[190vh] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] z-20 pointer-events-none scale-125 md:scale-145 origin-bottom"
              initial={{ opacity: 0, y: "25%" }}
              animate={isLoaded ? { opacity: 1, y: "15%" } : { opacity: 0, y: "25%" }}
              transition={{ duration: 2.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </motion.div>

      {/* 3. FOREGROUND LAYER: Empty (vines/branches replaced by hero-section.png) */}
      <motion.div
        id="fg-layer"
        style={{ x: fgX, y: fgY }}
        className="absolute inset-0 w-[112%] h-[112%] -left-[6%] -top-[6%] pointer-events-none select-none z-20"
      />

      {/* Left Side Decorative Thorns */}
      <motion.div
        className="absolute left-0 top-[10%] h-[80%] w-[100px] md:w-[180px] pointer-events-none select-none z-22 overflow-visible"
        initial={{ x: "-50px", opacity: 0 }}
        animate={isLoaded ? { x: 0, opacity: 0.55 } : { x: "-50px", opacity: 0 }}
        transition={{ duration: 2.5, delay: 1.4, ease: "easeOut" }}
      >
        <svg className="w-full h-full text-[#140E0C]" viewBox="0 0 200 800" fill="currentColor" preserveAspectRatio="none">
          <path d="M 0,0 Q 40,100 15,200 L 25,210 Q 5,230 45,280 L 35,290 Q 75,370 20,480 L 30,490 Q 0,510 55,570 L 45,580 Q 90,680 10,800 L 0,800 Z" />
          <path d="M 15,100 L 45,105 L 18,120 Z" />
          <path d="M 23,250 L 58,245 L 28,265 Z" />
          <path d="M 53,330 L 88,320 L 58,345 Z" />
          <path d="M 45,430 L 75,410 L 40,445 Z" />
          <path d="M 32,530 L 67,525 L 35,550 Z" />
          <path d="M 52,630 L 85,615 L 48,645 Z" />
          <path d="M 35,710 L 62,695 L 30,725 Z" />
        </svg>
      </motion.div>

      {/* Right Side Decorative Thorns */}
      <motion.div
        className="absolute right-0 top-[10%] h-[80%] w-[100px] md:w-[180px] pointer-events-none select-none z-22 overflow-visible"
        initial={{ x: "50px", opacity: 0 }}
        animate={isLoaded ? { x: 0, opacity: 0.55 } : { x: "-50px", opacity: 0 }}
        transition={{ duration: 2.5, delay: 1.4, ease: "easeOut" }}
      >
        <svg className="w-full h-full text-[#140E0C] scale-x-[-1]" viewBox="0 0 200 800" fill="currentColor" preserveAspectRatio="none">
          <path d="M 0,0 Q 35,120 18,220 L 28,230 Q 8,250 48,300 L 38,310 Q 70,390 15,500 L 25,510 Q 5,530 50,590 L 40,600 Q 80,700 5,800 L 0,800 Z" />
          <path d="M 12,120 L 42,125 L 15,140 Z" />
          <path d="M 20,270 L 55,265 L 25,285 Z" />
          <path d="M 45,350 L 80,340 L 50,365 Z" />
          <path d="M 38,450 L 68,430 L 33,465 Z" />
          <path d="M 28,550 L 63,545 L 31,570 Z" />
          <path d="M 42,650 L 75,635 L 38,665 Z" />
          <path d="M 28,730 L 55,715 L 23,745 Z" />
        </svg>
      </motion.div>

      {/* 4. IMMERSIVE CONTENT OVERLAY: Elegant typography, text treatments, & scrolls */}
      <div id="hero-content-wrapper" className="absolute inset-0 flex flex-col justify-between items-center z-25 py-[3vh] px-6">

        {/* Cinematic top navbar */}
        <motion.div
          className="w-full max-w-6xl flex justify-between items-center text-xs tracking-[0.25em] font-mono text-[#F4F1EA]/75"
          initial={{ opacity: 0, y: -10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
        >
          <span className="font-serif font-semibold text-[#E8DDC7] tracking-[0.35em] text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9C4B4B] animate-pulse" />
            魔法使いの嫁
          </span>
          <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase font-mono">
            <a href="#news-section" className="hover:text-[#C89B5B] transition-colors">NEWS</a>
            <a href="#story-section" className="hover:text-[#C89B5B] transition-colors">STORY</a>
            <a href="#character-section" className="hover:text-[#C89B5B] transition-colors">CHARACTERS</a>
            <a href="#world-section" className="hover:text-[#C89B5B] transition-colors">WORLD</a>
            <a href="#trailer-section" className="hover:text-[#C89B5B] transition-colors">PV TRAILER</a>
          </div>
          <span className="hidden sm:inline border border-[#C89B5B]/30 px-3 py-1 text-[9px] text-[#C89B5B] hover:bg-[#C89B5B]/10 hover:border-[#C89B5B]/80 transition-all rounded-sm cursor-pointer" onClick={scrollToContent}>
            OFFICIAL SITE
          </span>
        </motion.div>

        {/* Centered Main Title (Refined, book-jacket elegance, soft glows) */}
        <div className="flex flex-col items-center text-center mt-[15vh]">
          {/* Centered Large Japanese Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 1.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Soft text glow backdrop */}
            <div className="absolute inset-0 bg-radial-gradient from-[#E8DDC7]/15 to-transparent blur-xl pointer-events-none select-none scale-150" />

            <h1 className="font-serif text-[1.8rem] sm:text-[2.8rem] md:text-[3.8rem] text-[#F4F1EA] tracking-[0.45em] leading-tight font-extralight select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              魔法使いの嫁
            </h1>
            <span className="block mt-1 text-[8px] sm:text-[9px] text-[#C89B5B] tracking-[0.6em] font-mono select-none">
              M A H O U T S U K A I &nbsp; N O &nbsp; Y O M E
            </span>
          </motion.div>

          {/* Subtitle Beneath */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.85 } : { opacity: 0 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="mt-6 flex flex-col items-center"
          >
            <div className="w-12 h-[1px] bg-[#C89B5B]/30 mb-4" />
            <p className="font-serif italic text-xs sm:text-sm text-[#E8DDC7]/90 tracking-[0.25em] leading-relaxed max-w-lg uppercase">
              The Ancient Magus' Bride
            </p>
            <p className="font-mono text-[9px] text-[#E8DDC7]/60 tracking-[0.35em] mt-1 max-w-[280px] sm:max-w-md leading-relaxed uppercase">
              The Thorn Mage and the Sleigh Beggy
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator & On-Air announcement */}
        <motion.div
          className="flex flex-col items-center gap-4 cursor-pointer"
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1.5, delay: 3.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-1.5 font-mono text-[8px] sm:text-[9px] text-[#C89B5B] tracking-[0.35em] uppercase">
            <span>SCROLL DEEPER</span>
            {/* Animated pulsing needle */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#C89B5B] to-transparent relative overflow-hidden mt-1">
              <motion.div
                animate={{ y: [0, 48, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-full h-3 bg-amber-200"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
