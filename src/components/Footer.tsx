import { motion } from 'motion/react';
import { Instagram, Linkedin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      id="footer" 
      className="relative w-full py-16 sm:py-20 bg-[#0D0D0D] text-[#F4F1EA]/65 overflow-hidden flex flex-col items-center"
    >
      {/* Absolute branch framing silhouettes crossing the bottom margins */}
      <div className="absolute bottom-0 left-0 w-[180px] sm:w-[260px] opacity-25 pointer-events-none select-none z-0">
        <svg viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M-50,220 Q50,150 150,140 T300,100" stroke="#1C120D" strokeWidth="22" strokeLinecap="round" fill="none" />
          <path d="M-50,220 Q50,150 150,140 T300,100" stroke="#2F4633" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="150" cy="140" r="4" fill="#C89B5B" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-[180px] sm:w-[260px] opacity-20 pointer-events-none select-none z-0">
        <svg viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <g transform="scale(-1, 1) translate(-350, 0)">
            <path d="M-50,220 Q50,150 150,140 T300,100" stroke="#1C120D" strokeWidth="22" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </div>

      {/* Main footer layout content */}
      <div className="w-full max-w-5xl px-8 sm:px-12 relative z-10 flex flex-col items-center select-none text-center">
        
        {/* Fine Japanese brand spacer symbol */}
        <div className="w-10 h-[1px] bg-[#C89B5B]/30 mb-8" />

        {/* Japanese Navigation grids */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.25em] text-[#E8DDC7]/80 mb-10 pl-2">
          <a href="#news-section" className="hover:text-[#C89B5B] transition-colors">NEWS</a>
          <a href="#story-section" className="hover:text-[#C89B5B] transition-colors">STORY</a>
          <a href="#character-section" className="hover:text-[#C89B5B] transition-colors">CHARACTERS</a>
          <a href="#world-section" className="hover:text-[#C89B5B] transition-colors">WORLD LORE</a>
          <a href="#trailer-section" className="hover:text-[#C89B5B] transition-colors">PV TRAILER</a>
        </div>

        {/* Instagram and LinkedIn nodes */}
        <div className="flex items-center gap-4 mb-8">
          <a 
            href="https://www.instagram.com/nb.aaronn/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-[#C89B5B]/60 hover:text-[#C89B5B] flex items-center justify-center transition-all opacity-85 hover:bg-white/[0.04]"
            title="Instagram Profile"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aaronmecate/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-[#C89B5B]/60 hover:text-[#C89B5B] flex items-center justify-center transition-all opacity-85 hover:bg-white/[0.04]"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <div className="w-[1px] h-3 bg-white/20" />
          <span className="font-mono text-[9px] tracking-widest text-[#FAF1EA]/40">
            TAGS: #mahoyome #ancientmagusbride #sylvanechoes
          </span>
        </div>

        {/* Copyright claims */}
        <p className="font-serif text-[10px] text-[#FAF1EA]/40 tracking-widest leading-relaxed">
          &copy; 「森の追悼歌」製作委員会 / Anamnesis of the Sacred Thicket Partners
        </p>
        <p className="font-mono text-[8px] text-[#FAF1EA]/30 tracking-widest leading-relaxed uppercase mt-1">
          This is an original atmospheric tribute. All rights reserved. 2026.
        </p>

        {/* Small sylvan sigil */}
        <div className="flex justify-center items-center gap-1.5 mt-8 opacity-45">
          <Sparkles className="w-3 h-3 text-[#C89B5B]" />
          <span className="font-serif text-[9px] text-[#C89B5B] tracking-widest uppercase">
            Sylvan Sanctum
          </span>
        </div>

      </div>
    </footer>
  );
}
