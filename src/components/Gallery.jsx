import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Eye, Calendar, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery({ onBook }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Skincare', 'Mehndi'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header matching reference */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-gold text-lg select-none">⊰</span>
            <span className="font-script text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Our Beautiful Work
            </span>
            <span className="text-gold text-lg select-none">⊱</span>
          </div>

          <h2 className="mt-1 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            Portfolio Showcase
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-md mx-auto">
            A glimpse into the bridal glow, bespoke hairdos, and transformative makeovers created at Noor.
          </p>
        </div>

        {/* Filter Pills (shown when expanded) */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  activeFilter === cat
                    ? 'bg-rose text-white shadow-sm'
                    : 'border border-blush-200 bg-white text-ink-muted hover:border-rose hover:text-rose'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* 6 Showcase Photos (matching the reference row) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blush-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-rose/10 hover:border-rose/50"
            >
              <div className="aspect-[4/3] sm:aspect-square overflow-hidden bg-blush-50">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to exact upscaled crop from reference
                    if (item.fallbackSrc) {
                      e.currentTarget.src = item.fallbackSrc;
                    }
                  }}
                />
              </div>

              {/* Hover Overlay with View Icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-rose-dark/85 via-rose/40 to-transparent p-3 text-center text-white opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-100">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-4 h-4" />
                </span>
                <p className="font-serif text-xs font-semibold leading-tight line-clamp-1">{item.title}</p>
                <span className="text-[10px] text-white/90 uppercase tracking-widest mt-0.5">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button matching reference pink pill */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-hover text-white text-xs sm:text-sm font-semibold px-6 py-2.5 shadow-md hover:shadow-lg hover:shadow-rose/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>{isExpanded ? 'Show Less' : 'View More'}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImage(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full overflow-hidden rounded-3xl border border-gold/40 bg-white p-3 sm:p-5 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-rose transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-2xl bg-black/10">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[60vh] w-full object-contain"
                  onError={(e) => {
                    if (selectedImage.fallbackSrc) {
                      e.currentTarget.src = selectedImage.fallbackSrc;
                    }
                  }}
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2 pb-1">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-rose">
                    {selectedImage.category} Portfolio
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-ink">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {selectedImage.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const title = selectedImage.title;
                    setSelectedImage(null);
                    onBook?.(title);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-rose text-white text-xs font-semibold px-5 py-2.5 shadow-sm hover:bg-rose-hover transition-colors shrink-0"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Look</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
