import React from 'react';
import { Instagram, Mail, Heart, Phone, MapPin, Clock } from 'lucide-react';
import { SITE } from '../config';

/**
 * Pinterest vector icon matching the reference style
 */
const PinterestIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.33 1.365-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C10.07 23.839 11.017 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#C3566D] text-white">
      {/* Upper Information Bar (Kanpur location, hours, contact) */}
      <div className="border-b border-white/15 bg-black/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 text-xs text-white/90">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-light" />
            <span>{SITE.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-light" />
            <span>{SITE.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-light" />
            <a href={`tel:${SITE.phone}`} className="hover:underline">{SITE.phone}</a>
          </div>
        </div>
      </div>

      {/* Main Exact Reference Footer Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {/* 1. Instagram */}
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl bg-white/5 p-3 hover:bg-white/15 transition-all duration-300"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/70 bg-white/10 group-hover:scale-105 group-hover:bg-white group-hover:text-[#C3566D] transition-all">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-wide text-white group-hover:underline">
                @{SITE.instagram}
              </p>
              <p className="text-[11px] text-white/75 font-normal">
                Instagram
              </p>
            </div>
          </a>

          {/* 2. Pinterest */}
          <a
            href={SITE.pinterestUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3.5 rounded-2xl bg-white/5 p-3 hover:bg-white/15 transition-all duration-300"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/70 bg-white/10 group-hover:scale-105 group-hover:bg-white group-hover:text-[#C3566D] transition-all">
              <PinterestIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-wide text-white group-hover:underline truncate max-w-[180px]">
                pin.it/MP4wYvSXy
              </p>
              <p className="text-[11px] text-white/75 font-normal">
                Pinterest
              </p>
            </div>
          </a>

          {/* 3. Gmail */}
          <a
            href={`mailto:${SITE.email}`}
            className="group flex items-center gap-3.5 rounded-2xl bg-white/5 p-3 hover:bg-white/15 transition-all duration-300"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/70 bg-white/10 group-hover:scale-105 group-hover:bg-white group-hover:text-[#C3566D] transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-wide text-white group-hover:underline truncate max-w-[180px]">
                {SITE.email}
              </p>
              <p className="text-[11px] text-white/75 font-normal">
                Gmail
              </p>
            </div>
          </a>

          {/* 4. Thank You! For Supporting Small Business */}
          <div className="flex flex-col items-center sm:items-start lg:items-end justify-center text-center lg:text-right pt-2 lg:pt-0">
            <p className="font-script text-3xl sm:text-4xl text-rose-light leading-none">
              Thank You!
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.2em] font-medium text-white/90 uppercase">
              <span>FOR SUPPORTING SMALL BUSINESS</span>
              <span className="text-pink-200">💖</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Sub-footer */}
      <div className="border-t border-white/15 bg-black/20 py-4 text-center text-xs text-white/70">
        <p>© 2026 Noor Beauty Parlour. All Rights Reserved. Crafted with care & elegance.</p>
      </div>
    </footer>
  );
}
