import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { SITE, waLink } from '../config';
import BookingForm from './BookingForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Salon Address',
      val: SITE.address,
      link: 'https://maps.google.com/?q=Kanpur'
    },
    {
      icon: Phone,
      label: 'Call Us Directly',
      val: SITE.phone,
      link: `tel:${SITE.phone}`
    },
    {
      icon: Mail,
      label: 'Email Inquiries',
      val: SITE.email,
      link: `mailto:${SITE.email}`
    },
    {
      icon: Clock,
      label: 'Salon Timings',
      val: SITE.hours,
      link: null
    }
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F5] to-[#FFFDFB] py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-3 xs:px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 text-gold">
            <span className="text-base select-none">⊰</span>
            <span className="font-script text-2xl xs:text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Get In Touch
            </span>
            <span className="text-base select-none">⊱</span>
          </div>
          <h2 className="mt-1 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            Visit Our Salon
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-ink-muted max-w-md mx-auto px-2">
            Book your session online or drop by our salon for a friendly beauty consultation.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Info Column */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl sm:rounded-3xl border border-blush-200 bg-white p-5 sm:p-8 shadow-xs">
              <h3 className="font-serif text-lg sm:text-xl font-medium text-ink mb-5">
                Contact & Location
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-xl bg-blush-100 text-rose">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-xs sm:text-sm font-medium text-ink hover:text-rose transition-colors break-words"
                          >
                            {item.val}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-medium text-ink break-words">
                            {item.val}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-6 pt-5 border-t border-blush-100">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-rose text-white text-xs font-semibold py-3 px-5 shadow-sm hover:bg-rose-hover active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Instant Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/40 shadow-xs">
              <iframe
                title="Noor Beauty Parlour Location Map"
                loading="lazy"
                className="h-48 sm:h-56 w-full"
                src="https://www.google.com/maps?q=Civil+Lines+Kanpur+Uttar+Pradesh&output=embed"
              />
            </div>
          </div>

          {/* Right Form Column */}
          <div className="rounded-2xl sm:rounded-3xl border border-blush-200 bg-white p-5 sm:p-8 shadow-xs lg:col-span-7">
            <div className="mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-rose">
                Online Reservation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink mt-0.5">
                Send Appointment Inquiry
              </h3>
              <p className="text-xs text-ink-muted mt-1">
                Select your preferred treatment and date. We will confirm your slot via WhatsApp immediately.
              </p>
            </div>

            <BookingForm showEmail={true} cta="Send Booking Request" />
          </div>
        </div>
      </div>
    </section>
  );
}
