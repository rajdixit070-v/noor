import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ABOUT_FEATURES } from '../data';

export default function About() {
  // Icon mapping matching the 4 circular pink icons in the reference
  const getFeatureIcon = (iconKey) => {
    switch (iconKey) {
      case 'beautician':
        return <UserCheck className="w-5 h-5 text-rose stroke-[1.8]" />;
      case 'products':
        return <Award className="w-5 h-5 text-rose stroke-[1.8]" />;
      case 'hygiene':
        return <ShieldCheck className="w-5 h-5 text-rose stroke-[1.8]" />;
      case 'satisfaction':
        return <HeartHandshake className="w-5 h-5 text-rose stroke-[1.8]" />;
      default:
        return <Award className="w-5 h-5 text-rose stroke-[1.8]" />;
    }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F5] to-[#FFFDFB] py-16 sm:py-24">
      {/* Delicate Floral Line Art in Background (from reference image) */}
      <div className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 opacity-25 select-none hidden lg:block">
        <svg width="340" height="340" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#C5A059" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M70 100C70 80 85 65 100 65C115 65 130 80 130 100C130 120 115 135 100 135C85 135 70 120 70 100Z" stroke="#E5607D" strokeWidth="1" />
          <path d="M100 50C100 70 115 85 135 85C155 85 170 70 170 50" stroke="#E5607D" strokeWidth="0.8" />
          <path d="M30 150C50 150 65 135 65 115C65 95 50 80 30 80" stroke="#C5A059" strokeWidth="0.8" />
          <path d="M140 140C160 120 170 140 150 160" stroke="#E5607D" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Salon Interior Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative lg:col-span-6"
        >
          {/* Decorative Gold Frame Border */}
          <div className="relative rounded-3xl border-2 border-gold/60 p-2 bg-gradient-to-br from-gold/20 via-transparent to-rose/10 shadow-2xl">
            <div className="overflow-hidden rounded-2xl bg-[#FAF6F2]">
              <img
                src="/images/salon_hd.jpg"
                alt="Luxury pink salon interior with illuminated mirrors, velvet seating and crystal chandeliers"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/salon_upscaled.jpg';
                }}
              />
            </div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-4 right-6 rounded-2xl border border-blush-200 bg-white/95 px-5 py-2.5 shadow-lg backdrop-blur-sm">
            <p className="font-serif text-base font-semibold text-rose">100% Hygienic</p>
            <p className="text-[11px] text-ink-muted">Sterilized Tools & Safe Ambience</p>
          </div>
        </motion.div>

        {/* Right Column: About Text & 4 Badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 text-left"
        >
          {/* Cursive Subtitle */}
          <p className="font-script text-3xl sm:text-4xl text-gold font-normal tracking-wide">
            Welcome To
          </p>

          {/* Heading matching reference (NOOR in pink, BEAUTY PARLOUR in dark) */}
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight">
            <span className="text-rose font-medium">NOOR</span>{' '}
            <span className="text-ink">BEAUTY PARLOUR</span>
          </h2>

          {/* Paragraph exactly matching reference */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-muted">
            At Noor Beauty Parlour, we believe that beauty comes from confidence. Our professional team is dedicated to provide you the best beauty services with high quality products in a hygienic environment.
          </p>

          {/* 4 Feature Badges (2x2 grid matching reference) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3.5 rounded-2xl border border-[#F3E5E9] bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-rose/40 hover:bg-blush-50/50 hover:shadow-md"
              >
                {/* Circular Pink Icon Badge */}
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-rose/30 bg-blush-100/70 transition-transform duration-300 group-hover:scale-110 group-hover:border-rose">
                  {getFeatureIcon(item.icon)}
                </div>

                {/* Badge Label */}
                <div>
                  <h3 className="font-serif text-xs sm:text-sm font-semibold text-ink group-hover:text-rose transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-ink-muted mt-0.5 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
