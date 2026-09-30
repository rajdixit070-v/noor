import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import Logo from './Logo';
import { NAV, id } from '../data';
import { SITE, waLink } from '../config';

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section spy and scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV.map((n) => id(n));
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F0E4DE]'
            : 'bg-[#FFFDFB]/95 backdrop-blur-sm border-b border-[#F5EBE6]/60'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 xs:px-4 sm:px-6 py-2.5 sm:py-3">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="hover:opacity-95 transition-opacity shrink-0"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-5 lg:gap-8 xl:gap-9 text-[11px] lg:text-[12px] font-medium tracking-[0.14em] uppercase text-ink lg:flex"
            aria-label="Desktop Navigation"
          >
            {NAV.map((name) => {
              const secId = id(name);
              const isActive = activeSection === secId;
              return (
                <a
                  key={name}
                  href={`#${secId}`}
                  className={`relative py-1 transition-colors duration-200 hover:text-rose ${
                    isActive ? 'text-rose font-semibold' : 'text-ink/80'
                  }`}
                >
                  {name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-rose animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment Button & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop & Tablet Button */}
            <button
              onClick={() => onBook()}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-hover text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 shadow-sm hover:shadow-md hover:shadow-rose/30 transition-all duration-200 active:scale-95 shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>BOOK APPOINTMENT</span>
            </button>

            {/* Quick mini-call on small screens */}
            <a
              href={`tel:${SITE.phone}`}
              aria-label="Call salon"
              className="grid h-10 w-10 place-items-center rounded-full border border-blush-200 bg-white text-rose md:hidden shadow-xs hover:bg-blush-50"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle Button (44px touch target) */}
            <button
              type="button"
              aria-label={open ? 'Close main navigation' : 'Open main navigation'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-blush-200 bg-white text-ink hover:bg-blush-50 hover:text-rose transition-all duration-200 lg:hidden shadow-xs active:scale-90"
            >
              {open ? (
                <X className="w-5 h-5 text-rose" />
              ) : (
                <Menu className="w-5 h-5 text-ink" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />

          {/* Sliding Menu Panel */}
          <div className="fixed top-[62px] left-0 right-0 max-h-[calc(100vh-62px)] overflow-y-auto bg-white/98 backdrop-blur-md border-b border-blush-200 shadow-2xl transition-all duration-300 animate-slideDown px-5 py-6">
            {/* Tagline Badge */}
            <div className="mb-4 pb-3 border-b border-blush-100 flex items-center justify-between">
              <span className="text-[11px] font-serif italic text-ink-muted">
                Enhance Your Beauty, Reveal Your Confidence
              </span>
              <span className="text-[10px] uppercase font-semibold text-rose bg-blush-100 px-2 py-0.5 rounded-full">
                Kanpur
              </span>
            </div>

            {/* Links List */}
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {NAV.map((name) => {
                const secId = id(name);
                const isActive = activeSection === secId;
                return (
                  <a
                    key={name}
                    href={`#${secId}`}
                    onClick={() => handleNavClick(secId)}
                    className={`flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium uppercase tracking-wider transition-colors duration-150 ${
                      isActive
                        ? 'bg-blush-100/70 text-rose font-semibold'
                        : 'text-ink hover:bg-blush-50 hover:text-rose'
                    }`}
                  >
                    <span>{name}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                    ) : (
                      <span className="text-xs text-ink/30">›</span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons in Mobile Menu */}
            <div className="mt-6 pt-5 border-t border-blush-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-hover py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={waLink('Hello Noor Beauty Parlour! I want to consult and book an appointment.')}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-rose bg-white hover:bg-blush-50 py-3 text-xs font-medium text-rose transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Salon Info Footnote inside Drawer */}
            <div className="mt-5 pt-4 border-t border-blush-100/80 flex flex-col gap-2 text-[11px] text-ink-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{SITE.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
