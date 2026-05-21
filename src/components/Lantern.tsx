import { motion } from 'motion/react';

interface LanternProps {
  chainLength?: number; // length of chain in pixels
  swayDuration?: number; // duration of complete sway in seconds
  className?: string;
  glowColor?: string;
  intensity?: 'soft' | 'strong';
}

export default function Lantern({
  chainLength = 80,
  swayDuration = 6,
  className = '',
  glowColor = 'rgba(255, 210, 140, 0.45)',
  intensity = 'soft',
}: LanternProps) {
  // Sway animation keyframes
  const swayAnimation = {
    rotate: [-3.5, 3.5, -3.5],
    transition: {
      duration: swayDuration,
      ease: "easeInOut",
      repeat: Infinity,
    }
  };

  // Breathing flare animation keyframes
  const breatheAnimation = {
    scale: intensity === 'strong' ? [0.93, 1.15, 0.93] : [0.96, 1.06, 0.96],
    opacity: intensity === 'strong' ? [0.65, 0.95, 0.65] : [0.55, 0.78, 0.55],
    transition: {
      duration: 3.5 + Math.random() * 2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  };

  return (
    <div id="lantern-wrapper" className={`absolute flex flex-col items-center select-none pointer-events-none origin-top z-25 ${className}`}>
      {/* Heavy iron mounting bracket */}
      <div id="lantern-bracket" className="w-4 h-1.5 bg-[#1F1916] rounded-sm shadow-md" />
      
      {/* The hanging chain */}
      <div 
        id="lantern-chain" 
        style={{ height: `${chainLength}px` }} 
        className="w-0.5 bg-gradient-to-b from-[#1F1916] via-[#332A25] to-[#1F1916] relative flex flex-col justify-between items-center"
      >
        {/* Subtle decorative chain rings along the height */}
        {Array.from({ length: Math.ceil(chainLength / 18) }).map((_, i) => (
          <div 
            key={i} 
            style={{ top: `${i * 18}px` }}
            className="absolute w-1.5 h-1.5 border border-[#3A2A22] rounded-full opacity-60 bg-[#120E0C]" 
          />
        ))}
      </div>

      {/* Swaying lantern head itself */}
      <motion.div 
        animate={swayAnimation}
        className="relative flex flex-col items-center origin-top"
        style={{ marginTop: '-2px' }}
      >
        {/* Hook Ring */}
        <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#3A2A22] bg-[#120E0C] -mb-1" />

        {/* Lantern Top Hood */}
        <div className="w-10 h-2 bg-[#2D211A] border-t border-b border-[#3E2E25] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-2 h-1 bg-[#1A1310] rounded-t-sm" />
        </div>

        {/* Glass Cage with glow inside */}
        <div className="w-8 h-10 border-l border-r border-[#2C211C] bg-gradient-to-b from-transparent to-[#201713]/40 relative flex items-center justify-center overflow-visible">
          {/* Glass horizontal ribs */}
          <div className="absolute top-1/3 left-0 w-full h-[0.5px] bg-[#3B2D26]/40" />
          <div className="absolute top-2/3 left-0 w-full h-[0.5px] bg-[#3B2D26]/40" />

          {/* Vertical Guard Ribs */}
          <div className="absolute inset-y-0 left-1/4 w-[1px] bg-[#1C1512]" />
          <div className="absolute inset-y-0 right-1/4 w-[1px] bg-[#1C1512]" />

          {/* Ambient Breathing Candlelight Spore Glow */}
          <motion.div 
            animate={breatheAnimation}
            style={{ 
              backgroundColor: '#C89B5B',
              boxShadow: `0 0 16px 8px ${glowColor}, 0 0 32px 14px rgba(200, 155, 91, 0.2)` 
            }}
            className="w-3 h-4 rounded-full filter blur-[1px] relative"
          >
            {/* Super hot core glow */}
            <div className="absolute inset-0.5 rounded-full bg-amber-50 filter blur-[0.5px] opacity-90" />
          </motion.div>
        </div>

        {/* Lantern Base Cap */}
        <div className="w-9 h-1.5 bg-[#201612] border-t border-[#3A2921] rounded-b-md shadow-md" />

        {/* Hanging Tassel or Ring at the bottom */}
        <div className="w-2.5 h-2.5 rounded-full border border-[#2B1D16] mt-0.5 flex items-center justify-center opacity-75">
          <div className="w-1 h-3 bg-[#1D130F] origin-top rotate-6 translate-y-1" />
        </div>
      </motion.div>
    </div>
  );
}
