import React, { useState, useCallback } from 'react';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import WhatsAppButton from './components/WhatsAppButton';
import { waLink } from './config';

export default function App() {
  const [modal, setModal] = useState({ open: false, service: '' });

  const handleBook = useCallback((serviceName) => {
    setModal({
      open: true,
      service: typeof serviceName === 'string' ? serviceName : '',
    });
  }, []);

  const handleClose = useCallback(() => {
    setModal((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-ink font-sans selection:bg-rose selection:text-white overflow-x-hidden">
      {/* Sticky Header with Logo and Responsive Hamburger Drawer */}
      <Navbar onBook={handleBook} />

      <main>
        {/* 1. Hero Section */}
        <Hero onBook={handleBook} />

        {/* 2. Services Section: What We Offer */}
        <Services onBook={handleBook} />

        {/* 3. Welcome To Noor Beauty Parlour (About) */}
        <About />

        {/* 4. Our Beautiful Work (Gallery) */}
        <Gallery onBook={handleBook} />

        {/* 5. Packages Section */}
        <Packages onBook={handleBook} />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. CTA Banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blush-100 via-blush-50 to-blush-100 py-12 sm:py-16 md:py-20 text-center border-y border-blush-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-1.5 text-gold text-xs sm:text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-script text-xl sm:text-2xl text-gold">Your Special Look Awaits</span>
            </div>
            
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
              Ready To Reveal Your{' '}
              <span className="font-script text-4xl xs:text-5xl sm:text-6xl text-rose font-normal inline-block ml-1">
                Beauty?
              </span>
            </h2>
            
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-ink-muted max-w-xl mx-auto leading-relaxed px-2">
              Book your appointment today and let our seasoned beauty artisans craft your unforgettable look.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleBook()}
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3.5 shadow-md active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href={waLink('Hello Noor Beauty Parlour, I want to book an appointment for my upcoming occasion!')}
                target="_blank"
                rel="noreferrer"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-rose text-rose bg-white hover:bg-rose hover:text-white text-xs sm:text-sm font-medium px-7 py-3.5 shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Exact Reference Footer */}
      <Footer />

      {/* 10. Floating Interactive WhatsApp Trigger */}
      <WhatsAppButton />

      {/* 11. Booking Dialog Modal */}
      <AppointmentModal
        open={modal.open}
        service={modal.service}
        onClose={handleClose}
      />
    </div>
  );
}
