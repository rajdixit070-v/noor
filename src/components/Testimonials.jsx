import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Testimonials() {
  return (
    <section className="relative bg-[#FFFDFB] py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-gold">
            <span className="text-base select-none">⊰</span>
            <span className="font-script text-2xl xs:text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Kind Words
            </span>
            <span className="text-base select-none">⊱</span>
          </div>
          <h2 className="mt-1 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-ink-muted max-w-md mx-auto px-2">
            Real stories and heartfelt moments from brides, ladies, and families who trusted us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative flex flex-col justify-between rounded-2xl xs:rounded-3xl border border-[#F4E6EA] bg-white p-5 sm:p-7 shadow-[0_4px_16px_rgba(229,96,125,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-rose/40"
            >
              <div>
                <div className="flex items-center justify-between text-gold">
                  <div className="flex gap-1 text-gold">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blush-200" />
                </div>

                <blockquote className="mt-3.5 sm:mt-4 text-xs sm:text-sm text-ink-muted leading-relaxed italic">
                  "{review.text}"
                </blockquote>
              </div>

              <div className="mt-5 sm:mt-6 flex items-center gap-3 border-t border-blush-100 pt-3.5 sm:pt-4">
                <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full bg-blush-100 text-rose font-serif font-bold text-xs sm:text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <figcaption className="font-serif text-xs sm:text-sm font-semibold text-ink">
                    {review.name}
                  </figcaption>
                  <p className="text-[10px] sm:text-[11px] text-rose font-medium">
                    {review.service}
                  </p>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
