import { NEWS_ITEMS } from '../data';
import Lantern from './Lantern';
import { motion } from 'motion/react';

export default function NewsSection() {
  return (
    <section
      id="news-section"
      className="relative w-full py-24 sm:py-32 bg-[#E8DDC7] text-[#1C120D] overflow-visible flex flex-col items-center"
    >
      {/* Dynamic Swaying Hanging Lanterns above the section (placed behind text content) */}
      <div className="absolute top-[-19px] left-12 sm:left-24 h-48 z-50 scale-75 sm:scale-100 origin-top">
        <Lantern chainLength={85} swayDuration={6.5} intensity="soft" glowColor="rgba(190, 140, 80, 0.3)" />
      </div>
      <div className="absolute top-[-19px] right-12 sm:right-32 h-48 z-50 hidden md:block">
        <Lantern chainLength={90} swayDuration={8} intensity="soft" glowColor="rgba(190, 140, 80, 0.3)" />
      </div>

      {/* 1. Torn Paper Physical Transition Divider (Centered, wider, taller) */}
      <div className="absolute top-0 left-[-3%] w-[106%] h-12 -translate-y-1/2 pointer-events-none z-30 select-none">
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
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 45%, black 55%, transparent 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 45%, black 55%, transparent 70%, transparent 100%)'
        }}
      />
      <div
        className="parchment-stains"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 45%, black 55%, transparent 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 45%, black 55%, transparent 70%, transparent 100%)'
        }}
      />
      <div
        className="parchment-vignette"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)'
        }}
      />

      {/* Decorative parchment grunge texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-color-burn"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1587080266227-677cd237c267?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 45%, black 55%, transparent 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 45%, black 55%, transparent 70%, transparent 100%)'
        }}
      />

      {/* Subtle vignettes surrounding the parchment sheet edges (excluding bottom to blend seamlessly) */}
      <div
        className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[rgba(40,25,18,0.12)] to-transparent pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)'
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[rgba(40,25,18,0.12)] to-transparent pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent-0%, transparent 25%, black 45%, black 55%, transparent 75%, transparent 100%)'
        }}
      />

      {/* Main Container */}
      <div className="w-full max-w-4xl px-8 sm:px-12 relative z-10 flex flex-col">

        {/* Title Treatment: Serif with massive whitespace */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.25 }}
            viewport={{ once: true }}
            className="font-serif text-[6.5rem] sm:text-[8.5rem] tracking-[0.1em] text-[#3A2A22] leading-none mb-[-3.5rem] select-none"
          >
            NEWS
          </motion.div>
          <div className="pl-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#3A2A22] uppercase">
              最新情報
            </h2>
            <p className="font-mono text-[9px] text-[#3A2A22]/60 tracking-[0.3em] uppercase mt-1">
              Production Updates & Announcements
            </p>
          </div>
        </div>

        {/* News Feed Stream */}
        <div className="flex flex-col gap-8 md:gap-11 w-full">
          {NEWS_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-baseline border-b border-[#3A2A22]/15 pb-8 relative hover:border-[#9C4B4B]/30 transition-colors cursor-pointer"
            >
              {/* Category tag & Date */}
              <div className="md:w-1/4 flex items-center md:flex-col md:items-start gap-4 mb-3 md:mb-0">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#9C4B4B] font-semibold border border-[#9C4B4B]/40 px-2 py-0.5 rounded-sm">
                  {item.category}
                </span>
                <span className="font-mono text-xs text-[#3A2A22]/55 tracking-[0.1em]">
                  {item.date}
                </span>
              </div>

              {/* Text Articles */}
              <div className="md:w-3/4 flex flex-col pl-0 md:pl-6">
                {/* Title JP */}
                <h3 className="font-serif text-base sm:text-lg font-normal text-[#1C120D] group-hover:text-[#9C4B4B] transition-colors leading-snug">
                  {item.titleJP}
                </h3>
                {/* Title EN */}
                <span className="font-mono text-[10px] text-[#3A2A22]/60 tracking-wider mt-1 mb-2.5 uppercase">
                  {item.titleEN}
                </span>
                {/* Body Details */}
                <p className="text-xs sm:text-[13px] text-[#3A2A22]/80 leading-relaxed font-light">
                  {item.content}
                </p>
              </div>

              {/* Elegant Japanese Hover Arrow */}
              <div className="absolute right-0 bottom-8 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9C4B4B]">
                <span className="font-serif text-sm">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archives Button */}
        <div className="mt-16 flex justify-center">
          <div className="group border border-[#3A2A22]/30 hover:border-[#9C4B4B]/70 hover:bg-[#3A2A22]/5 px-8 py-3.5 rounded-sm text-xs font-mono tracking-[0.25em] text-[#3A2A22] cursor-pointer transition-all uppercase flex items-center gap-2">
            View All Announcements
            <span className="font-serif text-xs group-hover:translate-x-1.5 transition-transform">→</span>
          </div>
        </div>

      </div>
    </section>
  );
}
