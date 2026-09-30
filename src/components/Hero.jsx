import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Calendar } from 'lucide-react';
import { waLink } from '../config';

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FFFDFB] via-[#FFF9F6] to-[#FFFDFB] pt-4 pb-12 md:py-16">
      {/* Decorative Left Floral Watercolor Art (from reference image) */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-70 lg:opacity-90 hidden sm:block">
        <img
          src="/images/floral_left.jpg"
          alt="Blush pink floral bouquet ornament"
          className="h-72 lg:h-96 w-auto object-contain filter drop-shadow-sm"
          onError={(e) => {
            // Graceful fallback if image doesn't load
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center sm:pl-10 md:pl-14 lg:col-span-6 lg:pl-12 lg:text-left"
        >
          {/* Subtle Tagline Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-widest uppercase text-ink-muted">
              Kanpur’s Premier Luxury Parlour
            </span>
          </div>

          {/* Main Hero Heading exactly matching reference typography */}
          <h1 className="font-serif tracking-tight text-ink">
            <span className="block text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
              Enhance Your
            </span>
            <span className="block font-script text-6xl sm:text-7xl lg:text-[84px] text-rose leading-[1.05] my-1 font-normal tracking-wide">
              Beauty,
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight">
              Reveal Your
            </span>
            <span className="block font-script text-6xl sm:text-7xl lg:text-[84px] text-rose leading-[1.05] mt-1 font-normal tracking-wide">
              Confidence
            </span>
          </h1>

          {/* Golden Flourish Divider matching reference */}
          <div className="my-5 flex items-center justify-center lg:justify-start gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L15 6L12 12L9 6L12 0Z" fill="#C5A059" />
              <circle cx="4" cy="6" r="1.5" fill="#C5A059" />
              <circle cx="20" cy="6" r="1.5" fill="#C5A059" />
            </svg>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <p className="mx-auto max-w-md text-sm md:text-base text-ink-muted lg:mx-0 leading-relaxed">
            Experience bespoke bridal transformations, radiant skincare therapies, and trendsetting hair couture in an ambiance of pure royal elegance.
          </p>

          {/* Action Button matching reference pink pill */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={waLink('Hello Noor Beauty Parlour! I saw your portfolio and would like to consult with your beauty specialists.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-rose hover:bg-rose-hover text-white text-sm font-medium px-6 py-3 shadow-md hover:shadow-lg hover:shadow-rose/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => onBook()}
              className="inline-flex items-center gap-2 rounded-full border border-rose text-rose bg-white hover:bg-rose hover:text-white text-sm font-medium px-6 py-3 shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Golden Arched Bridal Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative lg:col-span-6 flex justify-center lg:justify-end"
        >
          {/* Subtle Ambient Golden Glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose/10 via-gold/15 to-transparent blur-2xl -z-10" />

          {/* The Arched Container matching reference layout */}
          <div className="relative max-w-[460px] w-full">
            {/* Outer Decorative Gold Stroke Arch */}
            <div
              className="relative p-1.5 md:p-2 bg-gradient-to-tr from-gold via-gold-light to-gold rounded-[42%_10%_10%_42%/32%_10%_10%_32%] shadow-2xl transition duration-500 hover:shadow-gold/40"
            >
              <div
                className="overflow-hidden bg-[#FAF6F2] rounded-[41%_9%_9%_41%/31%_9%_9%_31%]"
              >
                <img
                  src="/images/hero_bride_hd.jpg"
                  alt="Radiant Indian Bride in blush pastel lehenga with Kundan bridal jewelry"
                  className="w-full aspect-[4/3] sm:aspect-[1.15/1] object-cover object-top transition duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to upscaled exact crop
                    e.currentTarget.src = '/images/hero_bride_upscaled.jpg';
                  }}
                />
              </div>
            </div>

            {/* Floating badge accent */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl border border-blush-200 px-4 py-2.5 shadow-lg flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blush-100 text-rose font-bold text-sm">
                ★ 4.9
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">500+ Happy Brides</p>
                <p className="text-[10px] text-ink-muted">Kanpur & Nearby</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
