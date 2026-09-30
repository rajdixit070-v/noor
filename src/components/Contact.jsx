import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';
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
    <section id="contact" className="relative bg-gradient-to-b from-[#FFFDFB] via-[#FFF8F5] to-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-gold text-lg select-none">⊰</span>
            <span className="font-script text-3xl sm:text-4xl text-gold font-normal tracking-wide">
              Get In Touch
            </span>
            <span className="text-gold text-lg select-none">⊱</span>
          </div>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
            Visit Our Salon
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-md mx-auto">
            Book your session online or drop by our salon for a friendly beauty consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Info Column */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-blush-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-xl font-medium text-ink mb-6">
                Contact & Location
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blush-100 text-rose">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-xs sm:text-sm font-medium text-ink hover:text-rose transition-colors"
                          >
                            {item.val}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-medium text-ink">
                            {item.val}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-8 border-t border-blush-100 pt-6">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-rose text-white text-xs font-semibold py-3 px-5 shadow-md hover:bg-rose-hover transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="overflow-hidden rounded-3xl border border-gold/40 shadow-sm">
              <iframe
                title="Noor Beauty Parlour Location Map"
                loading="lazy"
                className="h-56 w-full"
                src="https://www.google.com/maps?q=Civil+Lines+Kanpur+Uttar+Pradesh&output=embed"
              />
            </div>
          </div>

          {/* Right Form Column */}
          <div className="rounded-3xl border border-blush-200 bg-white p-6 sm:p-8 shadow-sm lg:col-span-7">
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-rose">
                Online Reservation
              </span>
              <h3 className="font-serif text-2xl font-medium text-ink mt-1">
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
