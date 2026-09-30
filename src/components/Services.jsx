import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data';
import { SERVICE_ICONS } from './Icons';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services({ onBook }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative bg-[#FFFDFB] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header exactly matching reference */}
        <div className="text-center">
          {/* Cursive flourish subtitle */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-gold text-lg select-none">⊰</span>
            <span className="font-script text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Our Services
            </span>
            <span className="text-gold text-lg select-none">⊱</span>
          </div>

          {/* Bold Serif Main Heading */}
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            What We Offer
          </h2>

          {/* Tiny Pink Heart Accent */}
          <div className="mt-3 flex items-center justify-center">
            <span className="text-rose text-sm select-none animate-pulse">♥</span>
          </div>
        </div>

        {/* 6 Service Cards Grid (matching reference 6-in-a-row on desktop) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-4">
          {SERVICES.map((item, idx) => {
            const IconComponent = SERVICE_ICONS[item.iconKey];

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col items-center justify-between rounded-2xl border border-[#F4E6EA] bg-white p-5 text-center shadow-[0_4px_20px_rgba(229,96,125,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-rose/40 hover:shadow-[0_12px_28px_rgba(229,96,125,0.14)]"
              >
                {/* Top: Pink Line Icon in circle */}
                <div className="flex flex-col items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-rose/30 bg-blush-50/60 p-2.5 text-rose transition-transform duration-300 group-hover:scale-110 group-hover:border-rose">
                    {IconComponent && <IconComponent className="w-10 h-10" stroke="#E5607D" />}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-serif text-base sm:text-lg font-medium text-ink transition-colors group-hover:text-rose">
                    {item.t}
                  </h3>

                  {/* Description matching reference */}
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    {item.d}
                  </p>
                </div>

                {/* Bottom: Learn More Button */}
                <div className="mt-5 w-full pt-2">
                  <button
                    onClick={() => setSelectedService(item)}
                    className="w-full rounded-full border border-rose text-rose bg-white py-1.5 px-3 text-xs font-medium tracking-wide transition-all duration-300 hover:bg-rose hover:text-white shadow-sm"
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
