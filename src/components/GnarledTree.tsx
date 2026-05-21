interface TreeProps {
  className?: string;
  variant?: 'overhanging' | 'mossy-divider' | 'root-divider' | 'left-gnarl' | 'right-gnarl';
  glow?: boolean;
}

export default function GnarledTree({
  className = '',
  variant = 'overhanging',
  glow = false,
}: TreeProps) {
  if (variant === 'mossy-divider') {
    // Large sprawling horizontal tree trunk divider between Hero and News
    return (
      <div id="mossy-trunk-divider" className={`w-full relative pointer-events-none select-none z-30 ${className}`}>
        {/* Glow behind trunk to create mystique */}
        {glow && (
          <div className="absolute inset-x-0 h-24 bg-[#E8DDC7]/15 blur-2xl top-1/2 -translate-y-1/2" />
        )}
        
        <svg 
          viewBox="0 0 1440 220" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)] filter brightness-95"
        >
          <g>
            {/* Base Wood Trunk Shading */}
            <path 
              d="M-50,60 C400,10 650,180 1100,50 C1250,10 1380,-10 1520,30 L1520,200 C1380,180 1250,190 1100,180 C650,150 400,240 -50,170 Z" 
              fill="url(#sylvan-bark-grad)" 
            />
            
            {/* Crevices & Bark Grain Details */}
            <path 
              d="M-50,110 Q200,90 380,130 T800,110 T1200,100 T1520,90" 
              stroke="#1C120D" 
              strokeWidth="4" 
              strokeLinecap="round"
              opacity="0.75"
              strokeDasharray="20 15 40 10"
            />
            <path 
              d="M30,140 Q300,165 520,155 T990,145 T1450,120" 
              stroke="#120B08" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              opacity="0.6"
            />
            
            {/* Moss Overlay (Lush Greenery on top of the trunk) */}
            <path 
              d="M-50,70 C150,45 280,30 420,80 C580,130 750,140 920,80 C1080,20 1280,10 1520,35 C1460,50 1350,45 1250,55 C1020,80 850,155 690,145 C520,135 340,110 200,120 C100,125 -10,100 -50,110 Z" 
              fill="url(#sylvan-moss-grad)" 
              opacity="0.88"
            />
            
            {/* Hanging Vines */}
            {/* Vine 1 */}
            <path 
              d="M380,155 Q390,195 385,215 T395,230" 
              stroke="#2E422F" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
            />
            <path d="M380,175 Q375,178 376,183" stroke="#4B6645" strokeWidth="1.5" fill="none" />
            <path d="M387,195 Q395,198 393,205" stroke="#415C3C" strokeWidth="1.5" fill="none" />
            
            {/* Vine 2 (Hanging looped knot/vine) */}
            <path 
              d="M930,120 C960,180 940,240 910,210 C890,190 920,150 960,140" 
              stroke="#213324" 
              strokeWidth="2.5" 
              fill="none" 
              strokeLinecap="round" 
            />
            <circle cx="910" cy="210" r="11" stroke="#37553A" strokeWidth="3" fill="none" opacity="0.6"/>

            {/* Overhanging Sylvan Leaves & Sprouts */}
            <path d="M120,60 C100,45 105,25 125,35 C145,45 130,65 120,60 Z" fill="#2B3F2E" />
            <path d="M140,55 C155,40 160,20 145,30 C130,40 135,50 140,55 Z" fill="#4B6645" />
            
            <path d="M520,115 C540,100 545,85 530,95 Q515,105 520,115 Z" fill="#3D5337" />
            <path d="M780,120 C810,105 820,95 800,105 C780,115 770,110 780,120 Z" fill="#4B6645" />
            
            <path d="M1150,60 C1170,40 1195,50 1180,65 Q1160,80 1150,60 Z" fill="#2E422F" />
            <path d="M1130,65 C1110,50 1120,30 1135,40 C1150,50 1145,60 1130,65 Z" fill="#3F593A" />
          </g>

          <defs>
            <linearGradient id="sylvan-bark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B120E" />
              <stop offset="35%" stopColor="#2E201B" />
              <stop offset="70%" stopColor="#3C2A22" />
              <stop offset="100%" stopColor="#1C120F" />
            </linearGradient>
            <linearGradient id="sylvan-moss-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D2A1F" />
              <stop offset="25%" stopColor="#2F4633" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#4F6A47" />
              <stop offset="75%" stopColor="#385435" />
              <stop offset="100%" stopColor="#1A2D20" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'left-gnarl') {
    // Beautiful framing gnarl branch stretching from top-left outwards
    return (
      <div id="left-gnarl-branch" className={`absolute pointer-events-none select-none z-30 ${className}`}>
        <svg 
          viewBox="0 0 450 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto drop-shadow-[4px_12px_16px_rgba(0,0,0,0.8)] filter brightness-90 saturate-85"
        >
          <g>
            {/* The primary thick branch */}
            <path 
              d="M-40,-40 Q50,70 110,180 T160,370 Q130,480 70,550 L-40,550 Z" 
              fill="url(#left-bark-grad)" 
            />
            {/* Secondary twig breaking off */}
            <path 
              d="M100,160 Q210,170 290,130 T390,70 Q280,120 120,195 Z" 
              fill="url(#left-bark-grad)" 
            />
            {/* Another smaller twig aiming down */}
            <path 
              d="M148,310 Q280,380 340,480 Q250,420 138,348 Z" 
              fill="url(#left-bark-grad)" 
            />

            {/* Moss highlights on top edges */}
            <path 
              d="M-40,-30 Q60,75 118,175 Q210,165 295,125 Q230,135 110,192 Q140,285 162,365 Q250,395 320,465 Q260,425 142,352 Q125,480 68,540 L45,540 Q105,480 122,354 Q105,250 82,180 Q25,80 -40,-20 Z" 
              fill="#2F4633" 
              opacity="0.8"
            />
            <path 
              d="M-20,-20 Q70,75 110,160 Q230,140 330,85 Q250,115 125,180 Q130,240 148,315 Q260,360 290,410 Q220,380 138,340 Z" 
              fill="#4E6845" 
              opacity="0.6"
            />

            {/* Sprigs of leaves */}
            {/* Twig 1 leaves */}
            <path d="M360,82 C380,72 390,52 385,62 C380,72 360,82 360,82 Z" fill="#3A5237" />
            <path d="M380,70 C405,55 410,35 395,45 C380,55 385,65 380,70 Z" fill="#5F7D54" />
            <path d="M340,110 C350,90 375,95 360,110 Z" fill="#2E422F" />

            {/* Twig 2 leaves */}
            <path d="M300,430 C320,420 345,435 330,450 Z" fill="#3D5337" />
            <path d="M325,455 C345,450 350,470 335,475 Z" fill="#4B6645" />

            {/* Ivy hanging directly */}
            <path d="M50,220 Q40,320 65,410" stroke="#1D2E21" strokeWidth="2" fill="none" />
            <path d="M52,250 Q60,252 58,260" stroke="#415C3C" strokeWidth="1.5" fill="none" />
            <path d="M43,290 Q38,292 40,300" stroke="#364E32" strokeWidth="1.5" fill="none" />
            <path d="M58,340 Q64,342 61,350" stroke="#4F6A47" strokeWidth="1.5" fill="none" />
          </g>

          <defs>
            <linearGradient id="left-bark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1410" />
              <stop offset="40%" stopColor="#2F211B" />
              <stop offset="80%" stopColor="#1C110C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'right-gnarl') {
    // Beautiful framing gnarl branch stretching from right side
    return (
      <div id="right-gnarl-branch" className={`absolute pointer-events-none select-none z-30 ${className}`}>
        <svg 
          viewBox="0 0 450 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto drop-shadow-[-4px_12px_16px_rgba(0,0,0,0.8)] filter brightness-90 saturate-85"
        >
          <g transform="scale(-1, 1) translate(-450, 0)">
            {/* The primary thick branch (mirrored) */}
            <path 
              d="M-40,-40 Q50,70 110,180 T160,370 Q130,480 70,550 L-40,550 Z" 
              fill="url(#right-bark-grad)" 
            />
            <path 
              d="M100,160 Q210,170 290,130 T390,70 Q280,120 120,195 Z" 
              fill="url(#right-bark-grad)" 
            />
            {/* Moss highlights */}
            <path 
              d="M-40,-30 Q60,75 118,175 Q210,165 295,125 Q230,135 110,192 Q140,285 162,365 L135,365 Q115,250 82,180 Q25,80 -40,-20 Z" 
              fill="#2F4633" 
              opacity="0.8"
            />
            <path 
              d="M-20,-20 Q70,75 110,160 Q230,140 330,85 Q250,115 125,180 Z" 
              fill="#4E6845" 
              opacity="0.6"
            />
            <path d="M360,82 C380,72 390,52 385,62 Z" fill="#3D5337" />
            <path d="M380,70 C405,55 410,35 395,45 Z" fill="#5F7D54" />
          </g>

          <defs>
            <linearGradient id="right-bark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1410" />
              <stop offset="55%" stopColor="#31221C" />
              <stop offset="100%" stopColor="#140D0A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Fallback 'root-divider': painterly decaying sylvan roots twisting downwards, perfect for bottom dividers
  return (
    <div id="roots-divider" className={`w-full relative pointer-events-none select-none z-30 ${className}`}>
      <svg 
        viewBox="0 0 1440 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
      >
        <path 
          d="M0,20 Q360,60 720,25 T1440,40 L1440,80 Q1080,90 720,70 T0,75 Z" 
          fill="#1C120D" 
        />
        <path 
          d="M0,15 Q360,55 720,20 T1440,35" 
          stroke="#324535" 
          strokeWidth="3.5" 
          opacity="0.85"
        />
        {/* Fine root twigs hanging down */}
        <path d="M210,45 Q215,65 208,78 T218,92" stroke="#1C120D" strokeWidth="1.5" fill="none" />
        <path d="M580,50 Q595,72 590,88 T585,99" stroke="#1C120D" strokeWidth="1.5" fill="none" />
        <path d="M1200,42 Q1190,62 1198,75 T1192,88" stroke="#110B08" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
