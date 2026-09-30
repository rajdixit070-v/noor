import React from 'react';
import { X, Check, Clock, Tag, MessageCircle, Calendar } from 'lucide-react';
import { SERVICE_ICONS } from './Icons';
import { waLink } from '../config';

export default function ServiceDetailModal({ service, onClose, onBook }) {
  if (!service) return null;

  const IconComponent = SERVICE_ICONS[service.iconKey];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-blush-200 bg-white p-6 sm:p-8 shadow-2xl animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close service details"
          className="absolute right-4 top-4 rounded-full p-2 text-ink-muted hover:bg-blush-100 hover:text-rose transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-blush-100 pb-5">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-rose/30 bg-blush-50 p-2 text-rose">
            {IconComponent && <IconComponent className="w-10 h-10" stroke="#E5607D" />}
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-rose">
              Specialized Service
            </span>
            <h3 className="font-serif text-2xl text-ink font-medium">
              {service.t}
            </h3>
            <div className="mt-1 flex items-center gap-3 text-xs text-ink-muted">
              <span className="flex items-center gap-1 font-medium text-ink">
                <Tag className="w-3.5 h-3.5 text-rose" />
                {service.price}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {service.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-ink-muted leading-relaxed">
          {service.d} We use only genuine, dermatologically approved formulations to ensure pristine results and absolute skin safety.
        </p>

        {/* What's Included */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
            What is Included:
          </h4>
          <ul className="space-y-2">
            {service.features?.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-rose/10 text-rose mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3 pt-2 border-t border-blush-100">
          <button
            onClick={() => onBook(service.t)}
            className="flex-1 flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-hover text-white text-xs sm:text-sm font-semibold py-3 px-5 shadow-md active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
          </button>

          <a
            href={waLink(`Hi Noor Beauty Parlour! I am interested in booking or inquiring about "${service.t}".`)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-rose text-rose bg-white hover:bg-blush-50 text-xs sm:text-sm font-medium py-3 px-5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
