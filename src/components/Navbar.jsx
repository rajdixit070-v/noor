import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV, id } from '../data';

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV.map(n => id(n));
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

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F0E4DE]'
          : 'bg-[#FFFDFB]/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5">
        {/* Brand Logo */}
        <a href="#home" className="hover:opacity-95 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 lg:gap-8 xl:gap-9 text-[12px] font-medium tracking-[0.14em] uppercase text-ink lg:flex">
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => onBook()}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-hover text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 shadow-sm hover:shadow-md hover:shadow-rose/30 transition-all duration-200 active:scale-95"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>BOOK APPOINTMENT</span>
          </button>

          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-ink hover:bg-blush-100 lg:hidden transition-colors"
          >
            {open ? <X className="w-6 h-6 text-rose" /> : <Menu className="w-6 h-6 text-ink" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-b border-[#F0E4DE] bg-white px-6 py-5 lg:hidden animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {NAV.map((name) => {
              const secId = id(name);
              const isActive = activeSection === secId;
              return (
                <a
                  key={name}
                  href={`#${secId}`}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium uppercase tracking-wider border-b border-blush-100 ${
                    isActive ? 'text-rose font-semibold' : 'text-ink/80'
                  }`}
                >
                  {name}
                </a>
              );
            })}
          </nav>
          <div className="mt-5 pt-2">
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-rose py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
