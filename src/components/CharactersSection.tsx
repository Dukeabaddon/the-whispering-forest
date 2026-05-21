import { useState } from 'react';
import { CHARACTERS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Sparkles, Compass } from 'lucide-react';

export default function CharactersSection() {
  const [selectedId, setSelectedId] = useState(CHARACTERS[0].id);
  const activeChar = CHARACTERS.find(c => c.id === selectedId) || CHARACTERS[0];

  return (
    <section 
      id="character-section" 
      className="relative w-full py-28 sm:py-36 bg-[#0D0D0D] text-[#F4F1EA] overflow-hidden flex flex-col items-center"
    >
      {/* Background radial highlight */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-gradient-radial from-[#9C4B4B]/8 to-transparent blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-6xl px-8 sm:px-12 relative z-10 flex flex-col">
        
        {/* Section Header: Left-aligned anime visual booklet format */}
        <div className="mb-16 md:mb-20 flex flex-col items-start border-l-2 border-[#9C4B4B] pl-6">
          <span className="font-mono text-[9px] tracking-[0.4em] text-[#C89B5B] uppercase font-semibold mb-1 block">
            CAST & CHARACTER — 02
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.18em] text-[#F4F1EA]">
            CHARACTERS <span className="font-sans font-light text-xs sm:text-sm text-[#F4F1EA]/50 tracking-widest pl-2">( 登場人物 )</span>
          </h2>
          <p className="font-mono text-[9px] text-[#F4F1EA]/40 tracking-[0.3em] uppercase mt-1">
            Bound Souls of the Ancient Groves
          </p>
        </div>

        {/* Dynamic Gallery Row: Tall aspect cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {CHARACTERS.map((char) => {
            const isActive = char.id === selectedId;
            return (
              <motion.div
                key={char.id}
                onClick={() => setSelectedId(char.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative aspect-[3/4.5] w-full rounded-md overflow-hidden cursor-pointer border transition-all duration-700 select-none group ${
                  isActive 
                    ? 'border-[#C89B5B] shadow-[0_12px_24px_rgba(200,155,91,0.25)]' 
                    : 'border-white/10 hover:border-[#9C4B4B]/55'
                }`}
              >
                {/* Character image with painterly overlay filters */}
                <div className="absolute inset-0 w-full h-full scale-[1.01] overflow-hidden bg-[#121212]">
                  <img 
                    src={char.image} 
                    alt={char.nameEN} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.55] saturate-[55%] contrast-[105%] group-hover:scale-105 group-hover:brightness-[0.62] transition-all duration-700 ease-out" 
                  />
                  {/* Cinematic color vignette tint relative to character's accent */}
                  <div 
                    className="absolute inset-0 opacity-40 mix-blend-color"
                    style={{ backgroundColor: char.accentColor }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/20" />
                </div>

                {/* Vertical sylvan vines in card corners */}
                <div className="absolute top-4 left-4 h-8 w-[1px] bg-gradient-to-b from-[#C89B5B]/60 to-transparent" />
                <div className="absolute top-4 left-4 w-8 h-[1px] bg-gradient-to-r from-[#C89B5B]/60 to-transparent" />
                <div className="absolute bottom-4 right-4 h-8 w-[1px] bg-gradient-to-t from-[#C89B5B]/60 to-transparent" />
                <div className="absolute bottom-4 right-4 w-8 h-[1px] bg-gradient-to-l from-[#C89B5B]/60 to-transparent" />

                {/* Card labels */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col z-10 pointer-events-none">
                  {/* Role */}
                  <span className="font-mono text-[8px] tracking-[0.35em] text-[#C89B5B] font-semibold mb-1 uppercase">
                    {char.role}
                  </span>
                  
                  {/* Name EN / JP */}
                  <h3 className="font-serif text-xl font-light text-[#FAF1EA] tracking-widest leading-none">
                    {char.nameEN}
                  </h3>
                  
                  <span className="font-serif text-xs text-[#FAF1EA]/55 tracking-widest mt-1 block">
                    {char.nameJP}
                  </span>

                  {/* Tiny bio teaser */}
                  <p className="text-[10px] text-[#FAF1EA]/40 tracking-wider font-light line-clamp-1 mt-2 font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {char.titleJP}
                  </p>
                </div>

                {/* Soft border glowing flare active circle */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-[#C89B5B] scale-100 shadow-[0_0_8px_#C89B5B]' : 'bg-transparent scale-0'
                }`} />

              </motion.div>
            );
          })}
        </div>

        {/* Detailed Character Bio Board (Reveals active character information elegantly) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChar.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#141414] border border-[#3A2A22]/20 rounded-md p-6 sm:p-10 flex flex-col md:flex-row gap-10 items-stretch shadow-2xl relative"
          >
            {/* Background filigree symbols */}
            <div className="absolute top-4 right-6 font-serif opacity-[0.03] text-[9rem] select-none leading-none tracking-tighter">
              {activeChar.role[0]}
            </div>

            {/* Left Box: Traits & Voice Actors */}
            <div className="md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <div>
                <span className="font-mono text-[9px] tracking-[0.32em] text-[#C89B5B] uppercase block mb-3">
                  VOICE CREDENTIALS
                </span>
                
                {/* VA Japanese */}
                <div className="flex items-center gap-3 mb-4">
                  <Volume2 className="w-4 h-4 text-[#C89B5B] opacity-85" />
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-sm text-[#F4F1EA]">
                      {activeChar.voiceActorJP}
                    </span>
                    <span className="font-mono text-[8px] text-white/40 tracking-[0.1em] uppercase">
                      Japanese Seiyuu
                    </span>
                  </div>
                </div>

                {/* VA English */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4" /> {/* spacer */}
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-sm text-[#F4F1EA]/85">
                      {activeChar.voiceActorEN}
                    </span>
                    <span className="font-mono text-[8px] text-white/40 tracking-[0.1em] uppercase">
                      English Dub Voice
                    </span>
                  </div>
                </div>
              </div>

              {/* Trait Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {activeChar.traits.map((trait, i) => (
                  <span 
                    key={i}
                    className="font-mono text-[9px] tracking-wider text-[#FAF1EA]/70 bg-white/[0.04] border border-white/10 rounded-sm px-2.5 py-1 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-[#C89B5B] opacity-60" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Box: Poetical Quotes & Biography */}
            <div className="md:w-2/3 flex flex-col justify-center text-left pl-0 md:pl-4">
              {/* Quotes */}
              <div className="mb-6 relative">
                {/* Decorative Japanese quotation mark */}
                <span className="absolute -left-4 -top-3 font-serif text-[#C89B5B]/20 text-4xl font-semibold select-none">“</span>
                <p className="font-serif text-base sm:text-lg text-[#E8DDC7] tracking-[0.18em] leading-relaxed mb-2 italic">
                  {activeChar.quoteJP}
                </p>
                <p className="font-mono text-[10px] text-white/50 tracking-widest leading-relaxed uppercase">
                  {activeChar.quoteEN}
                </p>
              </div>

              {/* Separation thin line */}
              <div className="w-12 h-[1px] bg-[#9C4B4B]/35 mb-6" />

              {/* Full Role Title */}
              <span className="font-serif text-xs text-[#C89B5B] tracking-[0.25em] font-medium block uppercase mb-1 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                {activeChar.titleJP}
              </span>

              {/* Biography */}
              <p className="text-xs sm:text-[13px] text-white/75 font-serif tracking-[0.1em] leading-loose max-w-xl">
                {activeChar.description}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
