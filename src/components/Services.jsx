import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';
import { SERVICE_ICONS } from './Icons';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services({ onBook }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative bg-[#FFFDFB] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-gold">
            <span className="text-base select-none">⊰</span>
            <span className="font-script text-2xl xs:text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Our Services
            </span>
            <span className="text-base select-none">⊱</span>
          </div>

          <h2 className="mt-1 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            What We Offer
          </h2>

          <div className="mt-2.5 flex items-center justify-center">
            <span className="text-rose text-xs sm:text-sm select-none animate-pulse">♥</span>
          </div>
        </div>

        {/* 6 Service Cards: 2-col on mobile, 3-col on tablet, 6-col on desktop */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 xs:gap-3 sm:gap-4 lg:gap-4">
          {SERVICES.map((item, idx) => {
            const IconComponent = SERVICE_ICONS[item.iconKey];

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col items-center justify-between rounded-xl xs:rounded-2xl border border-[#F4E6EA] bg-white p-3 xs:p-4 sm:p-5 text-center shadow-[0_4px_16px_rgba(229,96,125,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-rose/40 hover:shadow-[0_10px_24px_rgba(229,96,125,0.12)]"
              >
                {/* Top: Pink Line Icon in circle */}
                <div className="flex flex-col items-center w-full">
                  <div className="grid h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 place-items-center rounded-full border border-rose/30 bg-blush-50/70 p-2 xs:p-2.5 text-rose transition-transform duration-300 group-hover:scale-110 group-hover:border-rose">
                    {IconComponent && (
                      <IconComponent
                        className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10"
                        stroke="#E5607D"
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2.5 sm:mt-4 font-serif text-xs xs:text-sm sm:text-base font-semibold text-ink transition-colors group-hover:text-rose leading-tight">
                    {item.t}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 sm:mt-2 text-[10px] xs:text-[11px] sm:text-xs leading-relaxed text-ink-muted line-clamp-3 sm:line-clamp-none">
                    {item.d}
                  </p>
                </div>

                {/* Bottom: Learn More Button */}
                <div className="mt-3 sm:mt-5 w-full pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className="w-full rounded-full border border-rose text-rose bg-white py-1 xs:py-1.5 px-2 text-[10.5px] xs:text-xs font-medium tracking-wide transition-all duration-200 hover:bg-rose hover:text-white shadow-xs active:scale-95"
                  >
                    Learn More
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBook={(svcName) => {
            setSelectedService(null);
            onBook(svcName);
          }}
        />
      )}
    </section>
  );
}
