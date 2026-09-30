import React from 'react';

/**
 * Exact replica of the Noor Beauty Parlour gold crest logo with crown and blush roses
 */
export default function Logo({ size = 'default', showTagline = true, className = '' }) {
  const isSmall = size === 'sm';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Golden Crest with Crown, Letter 'N', and Roses */}
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 100 100"
          className={`${isSmall ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'} drop-shadow-sm`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Golden Aura */}
          <circle cx="50" cy="52" r="40" stroke="#C5A059" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 2" />
          
          {/* Main Gold Ornate Double Ring */}
          <circle cx="50" cy="52" r="37" stroke="#C5A059" strokeWidth="2.5" />
          <circle cx="50" cy="52" r="33.5" stroke="#EAD7B5" strokeWidth="1" />

          {/* Little Decorative Gold Beads on Ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 50 + 35.2 * Math.cos(rad);
            const y = 52 + 35.2 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="1" fill="#C5A059" />;
          })}

          {/* Crown on top */}
          <g transform="translate(36, 6) scale(0.7)">
            <path
              d="M3 20L8 8L20 15L32 8L37 20H3Z"
              fill="url(#goldGrad)"
              stroke="#A37E36"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Jewels on crown tips */}
            <circle cx="8" cy="8" r="2" fill="#E5607D" />
            <circle cx="20" cy="15" r="1.8" fill="#E5607D" />
            <circle cx="32" cy="8" r="2" fill="#E5607D" />
            <circle cx="20" cy="7" r="2.2" fill="#C5A059" />
          </g>

          {/* Elegant Serif 'N' in center */}
          <text
            x="50"
            y="67"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="42"
            fontStyle="italic"
            fontWeight="600"
            fill="url(#goldGrad)"
            textAnchor="middle"
          >
            N
          </text>

          {/* Blush Pink Roses & Sage Leaves on lower left */}
          <g id="roses-cluster" transform="translate(8, 54) scale(0.85)">
            {/* Sage Green Leaves */}
            <path d="M12 28C8 24 5 18 10 14C15 10 20 16 16 24Z" fill="#99A88C" opacity="0.9" />
            <path d="M4 22C0 19 0 12 6 10C12 8 13 16 8 20Z" fill="#88987B" opacity="0.8" />
            <path d="M24 35C22 40 16 42 12 37C8 32 14 28 20 32Z" fill="#99A88C" opacity="0.9" />

            {/* Main Blossom 1 (Soft Rose Pink) */}
            <circle cx="16" cy="18" r="9" fill="#F49EAF" />
            <circle cx="16" cy="18" r="7" fill="#E5607D" />
            <path d="M12 18C13 14 19 14 20 18C19 22 13 22 12 18Z" fill="#FFF0F3" opacity="0.8" />
            <path d="M14 16C15 13 17 13 18 16" stroke="#B83B59" strokeWidth="1" strokeLinecap="round" />

            {/* Blossom 2 (Blush Pink) */}
            <circle cx="8" cy="28" r="7" fill="#FAC5D1" />
            <circle cx="8" cy="28" r="5" fill="#E5607D" />
            <path d="M6 28C6 25 10 25 10 28" stroke="#FFF0F3" strokeWidth="1" strokeLinecap="round" />

            {/* Blossom 3 (Small Bud) */}
            <circle cx="23" cy="27" r="5" fill="#FAC5D1" />
            <circle cx="23" cy="27" r="3.5" fill="#E5607D" />
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBC75" />
              <stop offset="50%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#A37E36" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className="font-script text-3xl sm:text-4xl text-ink leading-none tracking-normal font-normal">
            Noor
          </span>
          <span className="font-serif text-[11px] sm:text-xs tracking-[0.24em] font-semibold text-ink uppercase ml-1">
            Beauty Parlour
          </span>
        </div>
        {showTagline && (
          <span className="text-[9.5px] sm:text-[10.5px] tracking-wide text-ink-muted italic font-serif mt-0.5 whitespace-nowrap">
            Enhance Your Beauty, Reveal Your Confidence
          </span>
        )}
      </div>
    </div>
  );
}
