import React from 'react';

/**
 * Custom line-art icons precisely matching the Noor Beauty Parlour reference design.
 */

// 1. Bridal Makeup Icon
export const BridalIcon = ({ className = 'w-10 h-10', stroke = '#E5607D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Bridal Dupatta / Veil Arch */}
    <path d="M12 48C12 28 20 14 32 14C44 14 52 28 52 48" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 48C18 34 24 22 32 22C40 22 46 34 48 48" stroke={stroke} strokeWidth="1.4" strokeDasharray="2 3" />
    {/* Head & Face Contour */}
    <path d="M22 28C22 28 26 22 32 22C38 22 42 28 42 28C42 36 38 43 32 43C26 43 22 36 22 28Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Maang Tikka & Bindi */}
    <path d="M32 14V23" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="32" cy="24" r="1.5" fill={stroke} />
    <circle cx="32" cy="29" r="1.2" fill={stroke} />
    {/* Gentle Closed Eyes */}
    <path d="M26 33C27 34 29 34 30 33" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M34 33C35 34 37 34 38 33" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    {/* Bridal Smile & Nose Pin */}
    <path d="M30 38C31 39 33 39 34 38" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="30" cy="35" r="0.8" fill={stroke} />
    {/* Neck & Royal Necklace */}
    <path d="M28 43V48M36 43V48" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M24 49C28 52 36 52 40 49" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="53" r="1.5" fill={stroke} />
  </svg>
);

// 2. Hair Styling Icon
export const HairIcon = ({ className = 'w-10 h-10', stroke = '#E5607D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Flowing Waves Outline */}
    <path d="M28 14C22 14 16 20 16 30C16 42 22 47 24 54" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M34 14C42 14 48 20 48 30C48 40 44 48 42 54" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
    {/* Side locks & inner hair curve */}
    <path d="M22 28C22 22 26 18 32 18C38 18 41 22 41 26C41 33 35 36 34 40C33 44 33 50 35 54" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Delicate profile of face */}
    <path d="M25 32C26 37 28 41 31 43" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    {/* Stylized hair strands */}
    <path d="M20 36C22 44 26 48 28 54" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M44 34C42 42 39 46 39 54" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// 3. Facial & Skin Care Icon
export const SkincareIcon = ({ className = 'w-10 h-10', stroke = '#E5607D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Serene face oval */}
    <path d="M20 28C20 20 25 15 32 15C39 15 44 20 44 28C44 38 38 46 32 46C26 46 20 38 20 28Z" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Relaxing closed eyes */}
    <path d="M25 28C26.5 29.5 28.5 29.5 30 28" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M34 28C35.5 29.5 37.5 29.5 39 28" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    {/* Gentle smile */}
    <path d="M29 36C30.5 37.5 33.5 37.5 35 36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    {/* Sparkles / radiance glow */}
    <path d="M14 18L16 20M16 18L14 20" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <path d="M48 18L50 20M50 18L48 20" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    <path d="M48 38L52 40M50 36L50 42" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="15" cy="35" r="1.5" fill={stroke} />
    <circle cx="32" cy="10" r="1.8" fill={stroke} />
  </svg>
);

// 4. Party Makeup Icon
export const PartyMakeupIcon = ({ className = 'w-10 h-10', stroke = '#E5607D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Makeup Powder Brush */}
    <path d="M23 18C23 14 28 12 30 12C32 12 37 14 37 18C37 22 33 24 33 26V48C33 49.5 31.5 51 30 51C28.5 51 27 49.5 27 48V26C27 24 23 22 23 18Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
    <path d="M27 26H33" stroke={stroke} strokeWidth="1.8" />
    {/* Lipstick */}
    <path d="M41 33H49V51H41V33Z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M43 33V25L47 22V33" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
    {/* Fine brush / Eye pencil */}
    <path d="M15 22L19 18L21 50L17 50L15 22Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

// 5. Manicure & Pedicure Icon
export const NailsIcon = ({ className = 'w-10 h-10', stroke = '#E5607D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Nail Polish Bottle 1 */}
    <rect x="18" y="26" width="14" height="22" rx="3" stroke={stroke} strokeWidth="2" />
    <rect x="22" y="14" width="6" height="12" rx="1.5" stroke={stroke} strokeWidth="2" />
    <path d="M20 36H30" stroke={stroke} strokeWidth="1.4" strokeDasharray="2 2" />
    {/* Nail Polish Bottle 2 / Beauty Elixir */}
    <rect x="36" y="22" width="12" height="26" rx="3" stroke={stroke} strokeWidth="1.8" />
    <rect x="39" y="12" width="6" height="10" rx="1.5" stroke={stroke} strokeWidth="1.8" />
    {/* Sparkle drops */}
    <circle cx="25" cy="41" r="1.5" fill={stroke} />
    <circle cx="42" cy="35" r="1.2" fill={stroke} />
  </svg>
);

// 6. Mehndi Designs Icon
export const MehndiIcon = ({ className = 'w-10 h-10', stroke = '#E5607D' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Delicate Hand Palm Outline */}
    <path d="M20 34V24C20 22.5 21.5 21 23 21C24.5 21 26 22.5 26 24V30M26 22V16C26 14.5 27.5 13 29 13C30.5 13 32 14.5 32 16V28M32 19V14C32 12.5 33.5 11 35 11C36.5 11 38 12.5 38 14V28M38 23V19C38 17.5 39.5 16 41 16C42.5 16 44 17.5 44 19V32C44 42 38 52 30 52C24 52 18 44 18 36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Central Henna Mandala */}
    <circle cx="32" cy="38" r="4" stroke={stroke} strokeWidth="1.6" />
    <circle cx="32" cy="38" r="1.2" fill={stroke} />
    {/* Mandala Petals */}
    <path d="M32 32V34M32 42V44M26 38H28M36 38H38" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Map of icons for easy rendering
export const SERVICE_ICONS = {
  bridal: BridalIcon,
  hair: HairIcon,
  skincare: SkincareIcon,
  party: PartyMakeupIcon,
  nails: NailsIcon,
  mehndi: MehndiIcon,
};
