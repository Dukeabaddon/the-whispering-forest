import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Play } from 'lucide-react';

export default function HeroSection() {
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
          <path d="M100,-50 Q250,150 400,320 T600,600 T750,900" stroke="#000" strokeWidth="6" />
          <path d="M900,-20 Q750,220 540,430 T200,800" stroke="#000" strokeWidth="4" />
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
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#9C4B4B]/35 via-[#C89B5B]/25 to-transparent filter blur-3xl mix-blend-lighten animate-pulse" style={{ animationDuration: '8s' }} />

          {/* Sylvanas (The Ancient Mage) + Aoife (The Red-haired Girl) Composition Illustration */}
          {/* To maximize realism we draw them as high-end painterly vector shapes with custom styles */}
          <div className="relative w-[340px] sm:w-[480px] md:w-[600px] h-full flex justify-center items-end overflow-visible">
            
            <svg 
              viewBox="0 0 600 800" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] overflow-visible"
            >
              <defs>
                {/* Magical gradient overlays */}
                <linearGradient id="mage-shroud" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B0908" />
                  <stop offset="45%" stopColor="#1B1614" />
                  <stop offset="100%" stopColor="#110E0D" />
                </linearGradient>
                <linearGradient id="girl-hair" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C44B4B" />
                  <stop offset="60%" stopColor="#9C4B4B" />
                  <stop offset="100%" stopColor="#6E2F2F" />
                </linearGradient>
                <linearGradient id="glowing-lantern-core" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE6BC" />
                  <stop offset="100%" stopColor="#C89B5B" />
                </linearGradient>
              </defs>

              {/* Character 1: SYLVANAS (The Tall Ancient Mage with Skull Face & Antlers) */}
              <g id="sylvanas-vector-group" className="filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                {/* Flowing wizard cloak/shroud wings extending */}
                <path 
                  d="M100,800 C150,550 180,320 220,240 C225,230 235,210 240,190 C210,195 190,210 160,230 C205,380 180,590 120,800 Z" 
                  fill="url(#mage-shroud)" 
                  opacity="0.9"
                />
                
                {/* Main Body Cloak */}
                <path 
                  d="M180,800 C220,580 240,400 245,200 C248,150 255,120 270,100 C272,98 282,90 285,91 C295,92 290,111 292,118 C302,130 310,140 318,170 C310,250 300,380 270,520 C240,650 215,740 180,800 Z" 
                  fill="url(#mage-shroud)" 
                />

                {/* Sleeve / Arm reaching towards the girl */}
                <path 
                  d="M260,220 C290,210 350,230 380,260 C360,270 320,265 290,262 C275,260 265,245 260,220 Z" 
                  fill="#0D0705" 
                />
                
                {/* Spooky skeletal finger silhouettes */}
                <path d="M380,260 Q395,262 405,268 Q395,274 380,260" stroke="#ECE6DC" strokeWidth="2" strokeLinecap="round" />
                <path d="M378,264 Q393,268 402,274 Q390,278 378,264" stroke="#ECE6DC" strokeWidth="1.5" strokeLinecap="round" />

                {/* Stag/Mage Horns (Antlers towering upwards) */}
                {/* Left majestic antler */}
                <path 
                  d="M272,100 Q260,50 210,15 T220,5 Q275,35 274,96 Z" 
                  fill="#1C120C" 
                />
                {/* Small prongs of left antler */}
                <path d="M246,45 C230,25 210,20 205,22 C215,35 235,46 246,45 Z" fill="#221A15" />
                <path d="M228,28 C210,10 195,15 190,18" stroke="#1C120C" strokeWidth="2" />
                
                {/* Right majestic antler */}
                <path 
                  d="M281,95 Q300,50 350,20 T345,5 Q290,38 281,92 Z" 
                  fill="#1C120C" 
                />
                {/* Small prongs of right antler */}
                <path d="M305,48 C320,28 340,25 345,28 C335,39 315,50 305,48 Z" fill="#221A15" />
                <path d="M322,30 C340,12 355,18 360,20" stroke="#1C120C" strokeWidth="2" />

                {/* Mage Animal-Skull Head (Profile facing slightly right, looking down at the girl) */}
                <path 
                  d="M266,98 C266,92 272,88 276,88 C283,88 288,96 287,105 C285,115 275,124 268,130 C264,133 260,135 258,133 C254,128 259,122 263,115 C266,110 266,104 266,98 Z" 
                  fill="#FAF7F2" 
                />
                <path d="M268,130 Q258,142 250,140 Q255,130 264,124" stroke="#FAF7F2" strokeWidth="2" fill="none" />
                {/* Dark hollow eye socket */}
                <path d="M276,96 C272,96 270,101 270,105 C271,110 274,112 277,110 Z" fill="#0D0705" />
                {/* Red/Amber glowing eye soul dot inside socket */}
                <circle cx="274" cy="104" r="1.5" fill="#C44B4B" />
              </g>

              {/* Character 2: AOIFE (Red-haired Girl Leaning in from Right) */}
              <g id="aoife-vector-group">
                {/* Simple vintage school uniform dress/cape drape */}
                <path 
                  d="M480,800 C430,750 395,680 375,600 C365,560 361,500 360,440 C358,400 360,370 375,340 C380,330 385,320 398,300 C405,290 410,295 422,310 C440,360 460,420 500,520 C530,600 560,720 580,800 Z" 
                  fill="url(#mage-shroud)" 
                />
                
                {/* Delicate hands reached out, holding a tiny container of fireflies */}
                <path 
                  d="M375,340 C355,342 320,350 300,360 C310,372 340,370 365,365 Z" 
                  fill="#0D0705" 
                />
                
                {/* Beautiful glowing magical glass vial pendant swinging in her palm */}
                <circle cx="295" cy="365" r="5" fill="url(#glowing-lantern-core)" className="filter blur-[0.5px]" />
                <path d="M295,360 Q294,330 308,310" stroke="#C89B5B" strokeWidth="1" fill="none" opacity="0.6" />

                {/* Elegant head profile */}
                <path 
                  d="M398,300 C392,295 388,285 388,276 C388,268 392,260 398,255 C405,250 415,255 420,265 C418,275 415,285 412,292 Z" 
                  fill="#FBEFE3" 
                />

                {/* Short Flat Red Hair (Covering neck and sides dynamically) */}
                <path 
                  d="M382,272 C375,280 380,295 385,302 C390,305 392,308 395,305 C388,292 388,280 387,272 Z" 
                  fill="url(#girl-hair)" 
                />
                {/* Crown bangs and top hair */}
                <path 
                  d="M385,270 C382,250 395,232 408,235 C420,238 428,252 422,268 C418,264 410,250 398,262 C390,270 388,268 385,270 Z" 
                  fill="url(#girl-hair)" 
                />
                
                {/* Soft details over skin */}
                <path d="M398,255 C404,258 406,268 405,274" stroke="url(#girl-hair)" strokeWidth="1.5" fill="none" />
              </g>

              {/* Magical Sparks/Fireflies orbiting them directly */}
              <circle cx="280" cy="200" r="3" fill="#C89B5B" opacity="0.8" />
              <circle cx="360" cy="300" r="2.5" fill="#FAF6DE" opacity="0.9" />
              <circle cx="310" cy="420" r="1.5" fill="#FFE0A0" opacity="0.75" />
              <circle cx="250" cy="320" r="2" fill="#EADAAA" opacity="0.85" />
            </svg>

          </div>
        </div>
      </motion.div>

      {/* 3. FOREGROUND LAYER: Massive diagonal overhanging mossy branches, establishing depth */}
      <motion.div 
        id="fg-layer"
        style={{ x: fgX, y: fgY }}
        className="absolute inset-0 w-[112%] h-[112%] -left-[6%] -top-[6%] pointer-events-none select-none z-20 flex flex-col justify-between"
      >
        {/* Overhanging branch (top-left) */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] md:w-[500px]">
          <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto brightness-[0.75]">
            <path 
              d="M-50,-50 Q80,120 180,210 Q280,300 400,320 M140,170 Q280,180 340,90 Q180,195 50,215" 
              stroke="url(#left-bark-grad)" 
              strokeWidth="50" 
              strokeLinecap="round" 
            />
            {/* Soft moss overlay */}
            <path 
              d="M-50,-40 Q80,130 180,220 Q280,310 400,328" 
              stroke="#2F4633" 
              strokeWidth="15" 
              opacity="0.9" 
              strokeLinecap="round" 
              fill="none"
            />
            {/* Glowing green leaves */}
            <path d="M160,200 C150,180 135,190 142,208 Z" fill="#4B6645" />
            <path d="M280,230 C270,210 250,220 262,240 Z" fill="#3D5337" />
            <path d="M350,300 C340,280 325,290 332,308 Z" fill="#4B6645" />
          </svg>
        </div>

        {/* Framing branch (bottom-right) */}
        <div className="absolute bottom-[5%] right-0 w-[240px] sm:w-[350px] rotate-[-12deg] translate-x-[15%]">
          <svg viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto brightness-[0.65]">
            <path d="M400,400 Q200,280 100,210 T0,20" stroke="#1B120D" strokeWidth="44" strokeLinecap="round" fill="none" />
            <path d="M400,400 Q200,280 100,210 T0,20" stroke="#2F4633" strokeWidth="12" opacity="0.8" strokeLinecap="round" fill="none" />
            <path d="M120,200 Q150,150 180,80" stroke="#120B08" strokeWidth="12" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </motion.div>

      {/* 4. IMMERSIVE CONTENT OVERLAY: Elegant typography, text treatments, & scrolls */}
      <div id="hero-content-wrapper" className="absolute inset-0 flex flex-col justify-between items-center z-25 py-[3vh] px-6">
        
        {/* Cinematic top navbar */}
        <div className="w-full max-w-6xl flex justify-between items-center text-xs tracking-[0.25em] font-mono text-[#F4F1EA]/75">
          <span className="font-serif font-semibold text-[#E8DDC7] tracking-[0.35em] text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9C4B4B] animate-pulse" />
            森の追悼歌
          </span>
          <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase font-mono">
            <a href="#news-section" className="hover:text-[#C89B5B] transition-colors">NEWS</a>
            <a href="#story-section" className="hover:text-[#C89B5B] transition-colors">STORY</a>
            <a href="#character-section" className="hover:text-[#C89B5B] transition-colors">CHARACTERS</a>
            <a href="#world-section" className="hover:text-[#C89B5B] transition-colors">WORLD</a>
            <a href="#trailer-section" className="hover:text-[#C89B5B] transition-colors">PV TRAILER</a>
          </div>
          <span className="hidden sm:inline border border-[#C89B5B]/30 px-3 py-1 text-[9px] text-[#C89B5B] hover:bg-[#C89B5B]/10 hover:border-[#C89B5B]/80 transition-all rounded-sm cursor-pointer" onClick={scrollToContent}>
            ON AIR 2026.10
          </span>
        </div>

        {/* Centered Main Title (Refined, book-jacket elegance, soft glows) */}
        <div className="flex flex-col items-center text-center mt-[15vh]">
          {/* Centered Large Japanese Title */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Soft text glow backdrop */}
            <div className="absolute inset-0 bg-radial-gradient from-[#E8DDC7]/15 to-transparent blur-xl pointer-events-none select-none scale-150" />
            
            <h1 className="font-serif text-[1.8rem] sm:text-[2.8rem] md:text-[3.8rem] text-[#F4F1EA] tracking-[0.45em] leading-tight font-extralight select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              森の追悼歌
            </h1>
            <span className="block mt-1 text-[8px] sm:text-[9px] text-[#C89B5B] tracking-[0.6em] font-mono select-none">
              J U R E I &nbsp; N O &nbsp; T S U I T O U K A
            </span>
          </motion.div>

          {/* Subtitle Beneath */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="mt-6 flex flex-col items-center"
          >
            <div className="w-12 h-[1px] bg-[#C89B5B]/30 mb-4" />
            <p className="font-serif italic text-xs sm:text-sm text-[#E8DDC7]/90 tracking-[0.25em] leading-relaxed max-w-lg uppercase">
              Sylvan Echoes
            </p>
            <p className="font-mono text-[9px] text-[#E8DDC7]/60 tracking-[0.35em] mt-1 max-w-[280px] sm:max-w-md leading-relaxed uppercase">
              The Vessel and the Ancient Antlered Mage
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator & On-Air announcement */}
        <div className="flex flex-col items-center gap-4 cursor-pointer" onClick={scrollToContent}>
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
        </div>

      </div>
      
      {/* Heavy vignette shadow blending footer */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none select-none z-20" />
    </section>
  );
}
