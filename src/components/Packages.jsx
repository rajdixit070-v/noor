import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Calendar, Crown } from 'lucide-react';
import { PACKAGES } from '../data';

export default function Packages({ onBook }) {
  return (
    <section id="packages" className="relative bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F5] to-[#FFFDFB] py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-gold">
            <span className="text-base select-none">⊰</span>
            <span className="font-script text-2xl xs:text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Exclusive
            </span>
            <span className="text-base select-none">⊱</span>
          </div>
          <h2 className="mt-1 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            Curated Beauty Packages
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-ink-muted max-w-md mx-auto px-2">
            Thoughtfully bundled packages designed to give you the ultimate pampering experience at special value.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`relative flex flex-col justify-between rounded-2xl xs:rounded-3xl border bg-white p-5 xs:p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                pkg.popular
                  ? 'border-rose ring-2 ring-rose/20 shadow-rose/10'
                  : 'border-blush-200 hover:border-rose/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white shadow-xs flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  <span>{pkg.tag}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                    {pkg.tag}
                  </span>
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="mt-2.5 sm:mt-3 font-serif text-xl sm:text-2xl font-medium text-ink leading-tight">
                  {pkg.name}
                </h3>
                <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="mt-4 sm:mt-5 flex items-baseline gap-2 border-b border-blush-100 pb-4 sm:pb-5">
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-rose">
                    {pkg.price}
                  </span>
                  {pkg.oldPrice && (
                    <span className="text-xs text-ink-muted line-through">
                      {pkg.oldPrice}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="mt-5 sm:mt-6 space-y-2.5">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-ink-muted">
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blush-100 text-rose mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 sm:mt-8 pt-3">
                <button
                  type="button"
                  onClick={() => onBook(pkg.name)}
                  className={`w-full rounded-full py-3 px-5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-rose text-white hover:bg-rose-hover shadow-md'
                      : 'border border-rose text-rose bg-white hover:bg-rose hover:text-white'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book This Package</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
