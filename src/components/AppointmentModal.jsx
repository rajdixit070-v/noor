import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import BookingForm from './BookingForm';

export default function AppointmentModal({ open, service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-blush-200 bg-white p-6 sm:p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close booking modal"
              className="absolute right-4 top-4 rounded-full p-2 text-ink-muted hover:bg-blush-100 hover:text-rose transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="text-center pb-4 border-b border-blush-100 mb-6">
              <div className="flex items-center justify-center gap-1.5 text-gold text-sm">
                <span>⊰</span>
                <span className="font-script text-2xl text-gold">Reserve Your Session</span>
                <span>⊱</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium mt-1">
                Book An Appointment
              </h3>
              <p className="text-xs text-ink-muted mt-1">
                Fill in your details below and we’ll reserve your spot immediately.
              </p>
            </div>

            {/* Booking Form */}
            <BookingForm
              service={service}
              cta="Confirm Booking on WhatsApp"
              showEmail={true}
              onDone={onClose}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
