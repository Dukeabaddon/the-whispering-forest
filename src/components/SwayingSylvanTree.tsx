import { motion } from 'motion/react';

export default function SwayingSylvanTree({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <motion.svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        animate={{ 
          rotate: [-1.2, 1.8, -1.2],
          skewX: [-0.6, 0.8, -0.6]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 7,
          ease: "easeInOut"
        }}
        style={{ originX: "50%", originY: "100%" }}
      >
        {/* Main Gnarled Sylvan Trunk */}
        <motion.path
          d="M90,290 Q95,200 110,130 T125,40"
          stroke="url(#trunk-wood-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Branch 1 - Upper Left */}
        <motion.path
          d="M107,170 Q80,140 60,110"
          stroke="url(#trunk-wood-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [-1, 2, -1] }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 5.5, ease: "easeInOut" }}
          style={{ originX: "107px", originY: "170px" }}
        />

        {/* Branch 2 - Upper Right */}
        <motion.path
          d="M115,140 Q145,110 160,80"
          stroke="url(#trunk-wood-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [1.5, -1.8, 1.5] }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 6, ease: "easeInOut" }}
          style={{ originX: "115px", originY: "140px" }}
        />

        {/* Branch 3 - Lower Left */}
        <motion.path
          d="M98,220 Q65,180 50,150"
          stroke="url(#trunk-wood-grad)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [-0.8, 1.2, -0.8] }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 8, ease: "easeInOut" }}
          style={{ originX: "98px", originY: "220px" }}
        />

        {/* Delicate clusters of willow/moss leaves */}
        {/* Top Canopy foliage */}
        <g id="top-foliage">
          {/* Leaves on tip branch left */}
          <circle cx="60" cy="110" r="16" fill="url(#leaf-foliage-grad)" className="mix-blend-screen opacity-90" />
          <circle cx="50" cy="115" r="12" fill="url(#leaf-highlight-grad)" className="mix-blend-screen opacity-85" />
          <circle cx="68" cy="102" r="10" fill="#2E422F" className="mix-blend-multiply opacity-40" />

          {/* Leaves on tip branch right */}
          <circle cx="160" cy="80" r="20" fill="url(#leaf-foliage-grad)" className="mix-blend-screen opacity-90" />
          <circle cx="170" cy="75" r="14" fill="url(#leaf-highlight-grad)" className="mix-blend-screen opacity-85" />
          <circle cx="150" cy="88" r="12" fill="#1C2E20" className="mix-blend-multiply opacity-40" />

          {/* Leaves on branch 3 left */}
          <circle cx="50" cy="150" r="18" fill="url(#leaf-foliage-grad)" className="mix-blend-screen opacity-90" />
          <circle cx="42" cy="154" r="12" fill="url(#leaf-highlight-grad)" className="mix-blend-screen opacity-80" />

          {/* Main Crown Canopy */}
          <circle cx="125" cy="40" r="22" fill="url(#leaf-foliage-grad)" className="mix-blend-screen opacity-90" />
          <circle cx="132" cy="32" r="16" fill="url(#leaf-highlight-grad)" className="mix-blend-screen opacity-85" />
          <circle cx="115" cy="46" r="15" fill="#1C2E20" className="mix-blend-multiply opacity-40" />
        </g>

        {/* Small floating fairy sylvan lights within the tree branches */}
        <motion.circle
          cx="110"
          cy="120"
          r="2.5"
          fill="#C89B5B"
          animate={{ 
            opacity: [0.15, 0.95, 0.15],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.circle
          cx="75"
          cy="140"
          r="1.8"
          fill="#FAF1EA"
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.9, 1.25, 0.9]
          }}
          transition={{ repeat: Infinity, duration: 3.2, delay: 1, ease: "easeInOut" }}
        />
        <motion.circle
          cx="145"
          cy="95"
          r="2"
          fill="#C89B5B"
          animate={{ 
            opacity: [0.1, 0.9, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
        />

        <defs>
          <linearGradient id="trunk-wood-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E1410" />
            <stop offset="50%" stopColor="#2E201B" />
            <stop offset="100%" stopColor="#120B08" />
          </linearGradient>
          <radialGradient id="leaf-foliage-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F6A47" />
            <stop offset="70%" stopColor="#2F4633" />
            <stop offset="100%" stopColor="#1C2E20" />
          </radialGradient>
          <radialGradient id="leaf-highlight-grad" cx="40%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#8BA87C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4F6A47" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
