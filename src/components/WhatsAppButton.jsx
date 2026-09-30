import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '../config';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2.5">
      {/* Tooltip on larger screens */}
      {hovered && (
        <div className="hidden sm:block rounded-xl border border-blush-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink shadow-lg animate-fadeIn select-none">
          Chat on WhatsApp 🌸
        </div>
      )}

      {/* Button */}
      <a
        href={waLink('Hello Noor Beauty Parlour! I would like to inquire about appointments.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-rose text-white shadow-xl hover:bg-rose-hover transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-rose/40 pointer-events-none" />
        <MessageCircle className="relative w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </a>
    </div>
  );
}
