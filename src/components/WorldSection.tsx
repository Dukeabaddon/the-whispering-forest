import { useState } from 'react';
import { LORE_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ShieldCheck, HelpCircle } from 'lucide-react';

export default function WorldSection() {
  const [activeTab, setActiveTab] = useState(LORE_ITEMS[0].id);

  const activeLore = LORE_ITEMS.find(l => l.id === activeTab) || LORE_ITEMS[0];

  return (
    <section
      id="world-section"
      className="relative w-full py-28 sm:py-36 bg-[#E8DDC7] text-[#1C120D] overflow-visible flex flex-col items-center"
    >
      {/* 1. Torn Paper Physical Transition Divider (Centered, wider, taller) */}
      <div className="absolute top-0 left-[-3%] w-[106%] h-24 -translate-y-1/2 pointer-events-none z-30 select-none">
        {/* Layer 1: Shadow Layer */}
        <div 
          className="absolute inset-0 bg-[#1C120D]/30 -translate-y-[4px]"
          style={{
            maskImage: "url('/images/torn-paper.webp')",
            maskSize: "100% 200%",
            maskPosition: "top",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url('/images/torn-paper.webp')",
            WebkitMaskSize: "100% 200%",
            WebkitMaskPosition: "top",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        {/* Layer 2: Main Paper Base */}
        <div 
          className="absolute inset-0 bg-[#E8DDC7]"
          style={{
            maskImage: "url('/images/torn-paper.webp')",
            maskSize: "100% 200%",
            maskPosition: "top",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url('/images/torn-paper.webp')",
            WebkitMaskSize: "100% 200%",
            WebkitMaskPosition: "top",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        {/* Layer 3: Atmospheric Fog / Light depth separation */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-[#2F4633]/5 to-[#E8DDC7]/10" />
      </div>

      {/* 2. Parchment Materiality Overlay System (Faded at top/bottom for seamless section blend) */}
      <div 
        className="parchment-grain" 
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />
      <div 
        className="parchment-stains" 
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />
      <div 
        className="parchment-vignette" 
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)'
        }}
      />

      {/* Decorative old paper grit texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-color-burn"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1587080266227-677cd237c267?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
        }}
      />

      {/* ROTATING VECTOR MAGIC RUNE CIRCLE: Slow spinning background detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.08] pointer-events-none select-none z-0">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 540 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#1C120D]"
        >
          <circle cx="270" cy="270" r="260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 5" />
          <circle cx="270" cy="270" r="230" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="270" cy="270" r="210" stroke="currentColor" strokeWidth="2" strokeDasharray="30 15 5 15" />
          <circle cx="270" cy="270" r="130" stroke="currentColor" strokeWidth="1" />

          {/* Concentric octagram star lines */}
          <path d="M270,10 L270,530 M10,270 L530,270 M86,86 L454,454 M86,454 L454,86" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />

          {/* Small runic symbols or markings around the loops */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            const rx = 270 + Math.cos(angle) * 170;
            const ry = 270 + Math.sin(angle) * 170;
            return (
              <circle key={i} cx={rx} cy={ry} r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            );
          })}
        </motion.svg>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl px-8 sm:px-12 relative z-10 flex flex-col items-center">

        {/* Header Title: Spanning across the manuscript */}
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="font-mono text-[9px] tracking-[0.4em] text-[#9C4B4B] uppercase font-semibold mb-2 block">
            THE WORLD & LITURGY — 03
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#3A2A22] tracking-[0.25em] leading-tight">
            WORLD LORE <span className="font-sans font-light text-xs sm:text-sm text-[#3A2A22]/70 tracking-widest block sm:inline sm:pl-2">( 世界観と設定 )</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#9C4B4B]/35 mt-4" />
        </div>

        {/* The Vintage Book Interface */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-stretch min-h-[460px]">

          {/* Manuscript Side Index Tabs: Styled like rustic leather/paper folder indices */}
          <div className="md:w-1/4 flex md:flex-col gap-3 justify-center md:justify-start">
            {LORE_ITEMS.map((lore, index) => {
              const isActive = lore.id === activeTab;
              return (
                <button
                  key={lore.id}
                  onClick={() => setActiveTab(lore.id)}
                  className={`text-left font-serif text-xs px-5 py-4 rounded-sm border transition-all duration-500 flex items-center justify-between gap-3 group relative select-none ${isActive
                    ? 'bg-[#1C120D] text-[#E8DDC7] border-[#1C120D] shadow-md translate-x-1'
                    : 'bg-[#F4F1EA]/80 text-[#3A2A22]/75 border-[#3A2A22]/15 hover:border-[#9C4B4B]/50 hover:bg-[#F4F1EA]'
                    }`}
                >
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[8px] opacity-40 font-bold tracking-wider mb-0.5">
                      CHAPTER 0{index + 1}
                    </span>
                    <span className="tracking-[0.1em] font-medium transition-colors">
                      {lore.titleEN}
                    </span>
                  </div>
                  <span className="font-sans font-light opacity-30 text-[10px] hidden lg:inline">»</span>

                  {/* Subtle paper tab indicator edge */}
                  {isActive && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-[#C89B5B] rounded-l-xs" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Faux Hand-Pressed Manuscript Page Frame */}
          <div className="md:w-3/4 bg-[#FAF7F2] border border-[#3A2A22]/20 rounded-sm p-8 sm:p-11 shadow-[2px_15px_30px_rgba(40,25,18,0.12)] flex flex-col justify-between relative overflow-hidden">
            {/* Worn mossy/leaf border details in corners */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2F4633]/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2F4633]/25 to-transparent" />

            {/* Content Animate wrapper */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLore.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col text-left"
              >
                {/* Kanji Title Header */}
                <span className="font-serif text-[11px] text-[#9C4B4B] tracking-[0.25em] font-semibold mb-1 uppercase block">
                  {activeLore.titleEN}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1C120D] tracking-[0.16em] mb-4">
                  {activeLore.titleJP}
                </h3>

                {/* Term Summary Text */}
                <p className="font-serif text-[13px] sm:text-[14px] text-[#3A2A22] leading-relaxed font-semibold italic border-l-[3px] border-[#C89B5B] pl-4 mb-6">
                  {activeLore.summary}
                </p>

                {/* Main Body Description */}
                <p className="font-serif text-[12px] sm:text-[13px] text-[#3A2A22]/85 leading-loose tracking-[0.08em] mb-8">
                  {activeLore.description}
                </p>

                {/* Antique Latin/Sylvan Engraving Callout Quote */}
                <div className="border-t border-[#3A2A22]/10 pt-4 mt-auto">
                  <p className="font-serif italic text-xs text-[#9C4B4B] tracking-[0.2em] text-center font-medium">
                    {activeLore.quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tiny manuscript catalog tag */}
            <div className="absolute bottom-3 right-8 font-mono text-[8px] text-[#1C120D]/40 tracking-wider">
              FOLIO RECORD — #{activeLore.id.toUpperCase()}
            </div>
          </div>

        </div>

        {/* Vintage Illustration Map Teaser under Lore */}
        <div className="w-full mt-16 border border-[#3A2A22]/15 rounded-sm p-6 sm:p-8 bg-[#FAF7F2]/60 filter backdrop-blur-xs flex flex-col md:flex-row items-center gap-6 text-left">
          <BookOpen className="w-8 h-8 text-[#9C4B4B] shrink-0 opacity-80" />
          <div className="flex flex-col">
            <h4 className="font-serif text-sm font-semibold text-[#1C120D] tracking-[0.15em] uppercase">
              The Woodlander&apos;s Field Guide &bull; Sylvan Cartography
            </h4>
            <p className="font-serif text-[11px] sm:text-xs text-[#3A2A22]/80 leading-relaxed mt-1">
              Unlock the mapping layers of original Japanese watercolor concept boards, tracking Mushi pathways, hidden deer-tunnels, and old Victorian train stops buried deep beneath overgrown cypress grids.
            </p>
          </div>
          <div className="md:ml-auto">
            <a
              href="https://mahoyome.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-widest text-[#9C4B4B] border border-[#9C4B4B]/35 px-4 py-2 hover:bg-[#9C4B4B]/10 hover:border-[#9C4B4B] transition-colors rounded-sm cursor-pointer whitespace-nowrap uppercase inline-block"
            >
              EXPLORE GUIDEBOOK
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
