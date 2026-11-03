import React from 'react';
import { motion } from 'motion/react';

export const WorkstationIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-4 sm:p-6 bg-zinc-950/70 border border-zinc-800/80 rounded-sm backdrop-blur-md shadow-2xl overflow-hidden group">
      {/* Editorial Header Tag */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-900 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
          Creative Workstation Blueprint
        </span>
        <span className="text-zinc-600">Dual Discipline Pipeline</span>
      </div>

      {/* SVG Studio Rig */}
      <svg
        viewBox="0 0 720 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
        aria-label="Illustration of Muhammad Bilal's graphic design and video editing creative workstation"
      >
        <defs>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121214" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <linearGradient id="silverBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <pattern id="gridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#27272a" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Studio Ambient Grid & Ruler Lines */}
        <line x1="20" y1="20" x2="700" y2="20" stroke="#27272a" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="20" y1="380" x2="700" y2="380" stroke="#27272a" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Acoustic Studio Monitor (Left) */}
        <g transform="translate(30, 90)">
          <rect width="48" height="100" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
          <circle cx="24" cy="35" r="14" fill="#18181b" stroke="#52525b" strokeWidth="1" />
          <circle cx="24" cy="72" r="18" fill="#18181b" stroke="#71717a" strokeWidth="1.2" />
          <circle cx="24" cy="72" r="8" fill="#27272a" />
          <circle cx="24" cy="35" r="5" fill="#27272a" />
          <circle cx="24" cy="12" r="1.5" fill="#ffffff" />
        </g>

        {/* Acoustic Studio Monitor (Right) */}
        <g transform="translate(642, 90)">
          <rect width="48" height="100" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
          <circle cx="24" cy="35" r="14" fill="#18181b" stroke="#52525b" strokeWidth="1" />
          <circle cx="24" cy="72" r="18" fill="#18181b" stroke="#71717a" strokeWidth="1.2" />
          <circle cx="24" cy="72" r="8" fill="#27272a" />
          <circle cx="24" cy="35" r="5" fill="#27272a" />
          <circle cx="24" cy="12" r="1.5" fill="#ffffff" />
        </g>

        {/* Dual Display Stand Setup */}
        <path d="M 230 250 L 250 290 L 470 290 L 490 250 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <rect x="310" y="285" width="100" height="12" rx="2" fill="#27272a" stroke="#52525b" strokeWidth="1" />

        {/* ======================================================== */}
        {/* DISPLAY 1 (LEFT): VIDEO EDITING & TIMELINE WORKSTATION   */}
        {/* ======================================================== */}
        <g transform="translate(94, 45)">
          {/* Bezel */}
          <rect width="254" height="190" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
          {/* Screen Inner */}
          <rect x="6" y="6" width="242" height="178" rx="2" fill="url(#screenGrad)" />

          {/* Screen Header Bar */}
          <rect x="6" y="6" width="242" height="18" fill="#18181b" />
          <circle cx="16" cy="15" r="2.5" fill="#52525b" />
          <circle cx="24" cy="15" r="2.5" fill="#3f3f46" />
          <circle cx="32" cy="15" r="2.5" fill="#27272a" />
          <text x="46" y="18" fill="#a1a1aa" fontSize="8" fontFamily="monospace" letterSpacing="0.5">
            VIDEO NLE // TIMELINE 4K 24FPS
          </text>
          <text x="186" y="18" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
            01:24:18:04
          </text>

          {/* Video Preview Canvas */}
          <rect x="14" y="32" width="130" height="74" fill="#000000" stroke="#27272a" strokeWidth="0.8" />
          <path d="M 14 85 Q 45 40 80 70 T 144 60" fill="none" stroke="#52525b" strokeWidth="1" strokeDasharray="2 2" />
          {/* Rule of thirds lines */}
          <line x1="57" y1="32" x2="57" y2="106" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="100" y1="32" x2="100" y2="106" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="14" y1="56" x2="144" y2="56" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="14" y1="81" x2="144" y2="81" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2 2" />
          <polygon points="76,64 86,70 76,76" fill="#ffffff" opacity="0.9" />

          {/* Audio Scopes / Lumetri Vectorscope (Right Side of Screen 1) */}
          <rect x="152" y="32" width="90" height="74" fill="#09090b" stroke="#27272a" strokeWidth="0.8" />
          <text x="156" y="42" fill="#71717a" fontSize="6.5" fontFamily="monospace">
            COLOR VECTORSCOPE
          </text>
          <circle cx="197" cy="74" r="24" fill="none" stroke="#27272a" strokeWidth="0.8" />
          <circle cx="197" cy="74" r="14" fill="none" stroke="#3f3f46" strokeWidth="0.6" strokeDasharray="2 2" />
          <line x1="197" y1="50" x2="197" y2="98" stroke="#27272a" strokeWidth="0.5" />
          <line x1="173" y1="74" x2="221" y2="74" stroke="#27272a" strokeWidth="0.5" />
          {/* Color cloud trace in monochrome silver */}
          <ellipse cx="201" cy="71" rx="8" ry="12" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="0.6" />

          {/* Timeline Tracks Section */}
          <rect x="14" y="112" width="228" height="66" fill="#09090b" stroke="#27272a" strokeWidth="0.8" />
          {/* Time ruler */}
          <line x1="14" y1="122" x2="242" y2="122" stroke="#27272a" strokeWidth="0.6" />
          {[20, 45, 70, 95, 120, 145, 170, 195, 220].map((tick) => (
            <line key={tick} x1={tick} y1="117" x2={tick} y2="122" stroke="#52525b" strokeWidth="0.5" />
          ))}

          {/* Video Track 2 (V2 - B-Roll & Titles) */}
          <rect x="14" y="125" width="20" height="10" fill="#18181b" />
          <text x="17" y="132" fill="#71717a" fontSize="6" fontFamily="monospace">
            V2
          </text>
          <rect x="38" y="125" width="55" height="10" rx="1.5" fill="#27272a" stroke="#52525b" strokeWidth="0.5" />
          <text x="42" y="132" fill="#d4d4d8" fontSize="5.5" fontFamily="sans-serif">
            Title_Kinetic
          </text>
          <rect x="105" y="125" width="80" height="10" rx="1.5" fill="#27272a" stroke="#52525b" strokeWidth="0.5" />
          <text x="110" y="132" fill="#d4d4d8" fontSize="5.5" fontFamily="sans-serif">
            B-Roll_4K_Grade
          </text>

          {/* Video Track 1 (V1 - A-Roll Main) */}
          <rect x="14" y="138" width="20" height="10" fill="#18181b" />
          <text x="17" y="145" fill="#71717a" fontSize="6" fontFamily="monospace">
            V1
          </text>
          <rect x="38" y="138" width="88" height="10" rx="1.5" fill="#3f3f46" stroke="#71717a" strokeWidth="0.5" />
          <rect x="130" y="138" width="105" height="10" rx="1.5" fill="#3f3f46" stroke="#71717a" strokeWidth="0.5" />

          {/* Audio Track 1 (A1 - Dialogue & Foley) */}
          <rect x="14" y="151" width="20" height="10" fill="#18181b" />
          <text x="17" y="158" fill="#71717a" fontSize="6" fontFamily="monospace">
            A1
          </text>
          <rect x="38" y="151" width="195" height="10" rx="1.5" fill="#18181b" stroke="#3f3f46" strokeWidth="0.5" />
          {/* Audio Waveform */}
          <path
            d="M 42 156 L 46 153 L 50 158 L 54 154 L 58 159 L 64 152 L 70 157 L 76 153 L 85 158 L 95 154 L 105 159 L 115 153 L 130 158 L 150 154 L 175 158 L 200 155 L 225 157"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Animated Red/White Playhead Indicator */}
          <line x1="125" y1="114" x2="125" y2="176" stroke="#ffffff" strokeWidth="1.2" />
          <polygon points="121,114 129,114 125,121" fill="#ffffff" />
        </g>

        {/* ======================================================== */}
        {/* DISPLAY 2 (RIGHT): GRAPHIC DESIGN & VECTOR CANVAS        */}
        {/* ======================================================== */}
        <g transform="translate(372, 45)">
          {/* Bezel */}
          <rect width="254" height="190" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
          {/* Screen Inner */}
          <rect x="6" y="6" width="242" height="178" rx="2" fill="url(#screenGrad)" />

          {/* Screen Header Bar */}
          <rect x="6" y="6" width="242" height="18" fill="#18181b" />
          <circle cx="16" cy="15" r="2.5" fill="#52525b" />
          <circle cx="24" cy="15" r="2.5" fill="#3f3f46" />
          <circle cx="32" cy="15" r="2.5" fill="#27272a" />
          <text x="46" y="18" fill="#a1a1aa" fontSize="8" fontFamily="monospace" letterSpacing="0.5">
            GRAPHIC DESIGN // VECTOR ARTBOARD 300DPI
          </text>
          <text x="198" y="18" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
            100% CMYK
          </text>

          {/* Left Tool Palette Strip */}
          <rect x="12" y="30" width="16" height="148" rx="1.5" fill="#18181b" stroke="#27272a" strokeWidth="0.8" />
          {[36, 48, 60, 72, 84, 96, 108, 120, 132, 144].map((y, i) => (
            <rect key={i} x="15" y={y} width="10" height="8" rx="1" fill={i === 1 ? '#3f3f46' : '#27272a'} />
          ))}

          {/* Vector Artboard Paper Area */}
          <rect x="36" y="30" width="198" height="148" fill="#000000" stroke="#27272a" strokeWidth="0.8" />
          <rect x="36" y="30" width="198" height="148" fill="url(#gridPattern)" />

          {/* Editorial Composition: Mathematical Golden Spiral & Curves */}
          <g transform="translate(60, 48)">
            {/* Alignment Guides */}
            <line x1="0" y1="56" x2="150" y2="56" stroke="#52525b" strokeWidth="0.6" strokeDasharray="3 3" />
            <line x1="75" y1="0" x2="75" y2="112" stroke="#52525b" strokeWidth="0.6" strokeDasharray="3 3" />
            <circle cx="75" cy="56" r="44" fill="none" stroke="#3f3f46" strokeWidth="0.7" strokeDasharray="4 2" />

            {/* Bezier Vector Curve with Anchor Nodes */}
            <path
              d="M 12 85 C 30 15, 110 15, 138 85"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Anchor Points */}
            <circle cx="12" cy="85" r="3" fill="#ffffff" stroke="#000000" strokeWidth="1" />
            <circle cx="138" cy="85" r="3" fill="#ffffff" stroke="#000000" strokeWidth="1" />

            {/* Tangent Handle Lines */}
            <line x1="12" y1="85" x2="30" y2="15" stroke="#71717a" strokeWidth="0.8" />
            <circle cx="30" cy="15" r="2.5" fill="#a1a1aa" />
            <line x1="138" y1="85" x2="110" y2="15" stroke="#71717a" strokeWidth="0.8" />
            <circle cx="110" cy="15" r="2.5" fill="#a1a1aa" />

            {/* Typography Frame & Calipers */}
            <rect x="38" y="44" width="74" height="24" fill="none" stroke="#ffffff" strokeWidth="0.8" />
            <text x="44" y="60" fill="#ffffff" fontSize="11" fontFamily="'Space Grotesk', sans-serif" fontWeight="bold" letterSpacing="1">
              BILAL
            </text>
            <text x="82" y="58" fill="#a1a1aa" fontSize="6" fontFamily="monospace">
              .VEC
            </text>

            {/* Diagonal Caliper */}
            <line x1="20" y1="20" x2="34" y2="34" stroke="#52525b" strokeWidth="0.8" />
            <line x1="18" y1="22" x2="22" y2="18" stroke="#52525b" strokeWidth="0.8" />
            <line x1="32" y1="36" x2="36" y2="32" stroke="#52525b" strokeWidth="0.8" />
          </g>

          {/* Color Swatch Strip */}
          <g transform="translate(44, 164)">
            {['#ffffff', '#d4d4d8', '#a1a1aa', '#71717a', '#3f3f46', '#27272a', '#18181b'].map((col, idx) => (
              <rect key={idx} x={idx * 15} y="0" width="11" height="8" rx="1" fill={col} stroke="#09090b" strokeWidth="0.5" />
            ))}
          </g>
        </g>

        {/* ======================================================== */}
        {/* DESK CONTROLS: TABLET, JOG WHEEL & SLIM KEYBOARD         */}
        {/* ======================================================== */}
        {/* Studio Desk Surface Horizon */}
        <line x1="40" y1="315" x2="680" y2="315" stroke="#27272a" strokeWidth="1" />

        {/* Graphics Pen Tablet (Left) */}
        <g transform="translate(130, 310)">
          <rect width="130" height="74" rx="4" fill="#121214" stroke="#3f3f46" strokeWidth="1" />
          <rect x="18" y="8" width="94" height="58" rx="2" fill="#09090b" stroke="#27272a" strokeWidth="0.6" />
          <line x1="24" y1="14" x2="106" y2="60" stroke="#3f3f46" strokeWidth="0.6" strokeDasharray="2 2" />
          {/* Express Keys */}
          {[12, 26, 40, 54].map((y, idx) => (
            <circle key={idx} cx="8" cy={y} r="2.5" fill="#27272a" stroke="#52525b" strokeWidth="0.5" />
          ))}
          {/* Digital Stylus */}
          <line x1="90" y1="20" x2="122" y2="52" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="122" cy="52" r="1.5" fill="#71717a" />
        </g>

        {/* Mechanical Tenkeyless Keyboard (Center) */}
        <g transform="translate(290, 316)">
          <rect width="180" height="64" rx="3" fill="#121214" stroke="#3f3f46" strokeWidth="1" />
          {/* Key Rows */}
          {[6, 17, 28, 39, 50].map((rowY, rIdx) => (
            <g key={rIdx}>
              {Array.from({ length: 14 }).map((_, cIdx) => (
                <rect
                  key={cIdx}
                  x={8 + cIdx * 11.8}
                  y={rowY}
                  width="9.5"
                  height="8"
                  rx="1"
                  fill="#1c1c1f"
                  stroke="#27272a"
                  strokeWidth="0.5"
                />
              ))}
            </g>
          ))}
        </g>

        {/* Precision Video Jog / Shuttle Wheel (Right) */}
        <g transform="translate(506, 312)">
          <rect width="76" height="70" rx="4" fill="#121214" stroke="#3f3f46" strokeWidth="1" />
          <circle cx="38" cy="35" r="26" fill="#18181b" stroke="#52525b" strokeWidth="1.2" />
          <circle cx="38" cy="35" r="18" fill="#27272a" stroke="#71717a" strokeWidth="1" />
          {/* Wheel Finger Indent */}
          <circle cx="48" cy="28" r="4.5" fill="#3f3f46" stroke="#ffffff" strokeWidth="0.8" />
          {/* Speed Marks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 38 + Math.cos(rad) * 21;
            const y1 = 35 + Math.sin(rad) * 21;
            const x2 = 38 + Math.cos(rad) * 24;
            const y2 = 35 + Math.sin(rad) * 24;
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a1a1aa" strokeWidth="0.8" />;
          })}
        </g>
      </svg>

      {/* Interactive Micro-Status Footer */}
      <div className="mt-3 pt-3 border-t border-zinc-900/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-white" />
          Color Space: Rec.709 & CMYK FOGRA39
        </span>
        <span className="hidden sm:inline text-zinc-400">Mastered in Karachi, PK</span>
      </div>
    </div>
  );
};
