import { motion } from 'motion/react';
import GnarledTree from './GnarledTree';

export default function StorySection() {
  return (
    <section 
      id="story-section" 
      className="relative w-full py-28 sm:py-36 bg-gradient-to-b from-[#E8DDC7] via-[#2F4633]/65 to-[#0D0D0D] overflow-hidden flex flex-col items-center"
    >
      {/* Smooth misty parchment-to-moss transition overlays (smooth blur & fade) */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#E8DDC7] to-transparent pointer-events-none z-10 opacity-95" />
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#E8DDC7] via-[#2F4633]/30 to-transparent pointer-events-none filter blur-xl z-10 opacity-70" />

      {/* BACKGROUND: Refined overlapping sylvan misty mountains and hills with pine tree silhouettes */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {/* Ambient glow in sky behind mountains */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-[#C89B5B]/12 rounded-full blur-3xl" />
        
        <svg 
          className="absolute bottom-0 left-0 w-full h-[75%] min-h-[420px]" 
          viewBox="0 0 1440 600" 
          preserveAspectRatio="none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Far, light misty mountains */}
          <path 
            d="M-100,280 C150,150 320,340 550,180 C780,50 980,240 1200,120 C1380,20 1480,180 1600,140 L1600,600 L-100,600 Z" 
            fill="url(#far-mountain-grad)" 
            opacity="0.32" 
          />
          
          {/* Layer 2: Mid-distance hills with pine/fir silhouettes poking out of the ridge */}
          <path 
            d="M-100,380 C180,240 400,280 680,220 C900,170 1120,340 1350,260 C1480,200 1560,250 1600,240 L1600,600 L-100,600 Z" 
            fill="url(#mid-mountain-grad)" 
            opacity="0.75" 
          />
          
          {/* Detailed tiered pine trees instead of simple pointy triangles */}
          {/* Left hills cluster */}
          <g opacity="0.65" transform="translate(100, 310) scale(0.6)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#1C2E20" />
          </g>
          <g opacity="0.75" transform="translate(125, 320) scale(0.5)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#18271B" />
          </g>
          <g opacity="0.8" transform="translate(170, 275) scale(0.7)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#152218" />
          </g>
          <g opacity="0.7" transform="translate(210, 265) scale(0.65)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#152218" />
          </g>
          <g opacity="0.85" transform="translate(250, 260) scale(0.6)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#111B13" />
          </g>
          
          {/* Mid Ridge hills cluster */}
          <g opacity="0.8" transform="translate(560, 205) scale(0.7)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#111B13" />
          </g>
          <g opacity="0.85" transform="translate(610, 195) scale(0.8)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#0D1610" />
          </g>
          <g opacity="0.9" transform="translate(680, 185) scale(0.75)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#0D1610" />
          </g>
          <g opacity="0.85" transform="translate(740, 190) scale(0.65)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#0A110C" />
          </g>
          
          {/* Right hills cluster */}
          <g opacity="0.7" transform="translate(1050, 230) scale(0.6)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#0A110C" />
          </g>
          <g opacity="0.75" transform="translate(1120, 275) scale(0.55)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#070D08" />
          </g>
          <g opacity="0.8" transform="translate(1180, 252) scale(0.7)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#070D08" />
          </g>
          <g opacity="0.8" transform="translate(1240, 240) scale(0.65)">
            <path d="M0,0 L-5,15 L-2,15 L-8,30 L-3,30 L-12,50 L12,50 L3,30 L8,30 L2,15 L5,15 Z" fill="#070D08" />
          </g>

          {/* Layer 3: Foreground sweeping rolling slopes */}
          <path 
            d="M-100,460 C200,340 480,440 820,340 C1100,260 1350,430 1600,380 L1600,600 L-100,600 Z" 
            fill="url(#fore-mountain-grad)" 
          />
          
          {/* Layer 4: Close bottom shadow hill for absolute rich depth */}
          <path 
            d="M-100,500 C300,440 650,520 1100,440 C1280,410 1480,480 1600,460 L1600,600 L-100,600 Z" 
            fill="url(#near-bottom-shadow)" 
          />

          <defs>
            <linearGradient id="far-mountain-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F6A47" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2F4633" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mid-mountain-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#213324" />
              <stop offset="100%" stopColor="#0E1610" />
            </linearGradient>
            <linearGradient id="fore-mountain-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#152118" />
              <stop offset="100%" stopColor="#0D0D0D" />
            </linearGradient>
            <linearGradient id="near-bottom-shadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B120E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0D0D0D" />
            </linearGradient>
          </defs>
        </svg>

        {/* Cinematic horizontal fog lines overlaying between the ridges to generate depth */}
        <div className="absolute inset-x-0 bottom-[18%] h-12 bg-gradient-to-t from-transparent via-[#2F4633]/10 to-transparent mix-blend-screen pointer-events-none filter blur-md" />
        <div className="absolute inset-x-0 bottom-[35%] h-16 bg-gradient-to-t from-transparent via-[#FAF1EA]/5 to-transparent mix-blend-overlay pointer-events-none filter blur-lg" />
      </div>

      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-color-burn"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover'
        }}
      />

      <div className="w-full max-w-5xl px-8 sm:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-11">
        
        {/* LEFT COLUMN: Poetic synopsis text (narrow, serif, literary) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start text-left"
        >
          {/* Section Chapter Code */}
          <span className="font-mono text-[9px] tracking-[0.4em] text-[#9C4B4B] uppercase font-semibold mb-2 block">
            INTRODUCTION — 01
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1C120D] tracking-[0.18em] leading-tight mb-2">
            STORY <span className="font-sans font-light text-xs sm:text-sm text-[#3A2A22]/70 tracking-widest pl-2">( あらすじ )</span>
          </h2>
          
          <div className="w-16 h-[1.5px] bg-[#9C4B4B]/30 mb-8" />

          {/* Japanese Poetic lines */}
          <div className="font-serif text-sm sm:text-base text-[#120B08] tracking-[0.2em] leading-relaxed mb-6 font-semibold select-none">
            <p className="mb-3">緑深き境界の底、</p>
            <p className="mb-3">少年は骸に寄り添い、</p>
            <p className="">少女は春の記憶を紡ぐ。</p>
          </div>

          {/* Narrow editorial reading frame */}
          <div className="max-w-[360px] font-serif text-[13.5px] sm:text-[14.5px] tracking-[0.12em] leading-loose text-[#DFA6A6]">
            <p className="mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] font-light">
              Chise Hatori was born to expire early. Bearing the &ldquo;Sylvan Sight,&rdquo; her vital heat has been continuously drained by microscopic spirits residing in the moist soil of forgotten parishes. Shunned by kin who fear the invisible wisps swirling around her, she is guided into the heart of the forest.
            </p>
            <p className="mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] font-light">
              Deep in the ironwells, she is welcomed by Elias Ainsworth—a towering shadow-weaver with deer antlers and a bare animal bone skull. He binds her fading life to the forest root network through an irrevocable oath.
            </p>
            <p className="italic text-[#E89E9E] text-[13px] sm:text-[14px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] mt-6">
              &ldquo;One winter for your spring, the root bonds hold fast. Until our leaves dissolve into dirt.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Framed anime still image (slight rotation, postcard artwork feel) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex justify-center py-6"
        >
          {/* Framed Polaroid/Printed illustration artbook wrapper */}
          <div className="group relative bg-[#F4F1EA] p-4 sm:p-5 rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-[#3A2A22]/15 w-full max-w-[370px] transform hover:rotate-0 hover:scale-[1.03] duration-500 cursor-pointer ease-[cubic-bezier(0.16,1,0.3,1)]">
            
            {/* Visual Still (A quiet mossy cottage/ancient forest) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#0D0D0D]">
              {/* Overlay shadow inside glass */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#1C120D]/40 to-transparent" />
              
              <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=700&h=525&q=85" 
                alt="Mystical ancient cottage background" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.78] sepia-[20%] group-hover:scale-105 duration-700 ease-out" 
              />
              
              {/* Stylized watercolor grain overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-noise" />
            </div>

            {/* Print annotation text underneath visual, resembling old production boards */}
            <div className="mt-4 flex justify-between items-baseline text-[#3A2A22]/75">
              <span className="font-serif text-[11px] tracking-[0.2em] uppercase">
                SCENE STIL._024
              </span>
              <span className="font-mono text-[9px] tracking-widest opacity-60">
                FRAME - 1042 / A
              </span>
            </div>
            
            {/* Elegant Japanese text label */}
            <p className="mt-2 text-[10px] sm:text-[11px] font-serif text-[#1C120D] opacity-90 border-t border-[#3A2A22]/10 pt-2.5">
              「第三話：朽ちた炭焼き小屋の精霊」より
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
