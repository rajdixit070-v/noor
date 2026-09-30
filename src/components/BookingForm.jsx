import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';
import { waLink } from '../config';

export default function BookingForm({ service = '', cta = 'Confirm Appointment', showEmail = false, onDone }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: { service: service || '' }
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    const text = `🌸 *New Appointment Booking - Noor Beauty Parlour* 🌸\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      (data.email ? `*Email:* ${data.email}\n` : '') +
      `*Service:* ${data.service}\n` +
      `*Date:* ${data.date}\n` +
      `*Preferred Time:* ${data.time}\n` +
      (data.notes ? `*Special Request:* ${data.notes}\n` : '') +
      `\nPlease confirm availability. Thank you!`;

    window.open(waLink(text), '_blank');
    setSubmitted(true);
    reset();
    setTimeout(() => {
      onDone?.();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
            Your Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Priya Sharma"
            className="field"
            {...register('name', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Please enter a valid name' }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="field"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+\d][\d\s-]{8,14}$/,
                message: 'Enter a valid 10-digit mobile number'
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {showEmail && (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="priya@example.com"
            className="field"
            {...register('email')}
          />
        </div>
      )}

      {/* Service Selection */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
          Select Service or Package *
        </label>
        <select
          className="field"
          defaultValue={service}
          {...register('service', { required: 'Please select a service' })}
        >
          <option value="">-- Choose Desired Treatment --</option>
          <optgroup label="Core Salon Services">
            {SERVICES.map((s) => (
              <option key={s.id} value={s.t}>
                {s.t} ({s.price})
              </option>
            ))}
          </optgroup>
          <optgroup label="Curated Packages">
            <option value="Royal Bridal Glam Package">Royal Bridal Glam Package (₹14,999)</option>
            <option value="Celebration Party Glam Package">Celebration Party Glam Package (₹3,499)</option>
            <option value="Bridal Bliss Pre-Care Package">Bridal Bliss Pre-Care Package (₹7,999)</option>
          </optgroup>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-rose">{errors.service.message}</p>
        )}
      </div>

      {/* Date & Time */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            className="field"
            {...register('date', { required: 'Select a date' })}
          />
          {errors.date && (
            <p className="mt-1 text-xs text-rose">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
            Preferred Time Slot *
          </label>
          <select
            className="field"
            {...register('time', { required: 'Select a time slot' })}
          >
            <option value="">-- Choose Time --</option>
            <option value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</option>
            <option value="12:00 PM - 02:00 PM">Afternoon (12:00 PM - 02:00 PM)</option>
            <option value="02:00 PM - 05:00 PM">Late Afternoon (02:00 PM - 05:00 PM)</option>
            <option value="05:00 PM - 08:00 PM">Evening (05:00 PM - 08:00 PM)</option>
          </select>
          {errors.time && (
            <p className="mt-1 text-xs text-rose">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">
          Special Notes or Skin Preferences
        </label>
        <textarea
          rows={2}
          placeholder="Any sensitivities, hair length details or event timing..."
          className="field"
          {...register('notes')}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-hover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider py-3.5 px-6 shadow-md hover:shadow-lg hover:shadow-rose/30 active:scale-95 transition-all"
      >
        <Send className="w-4 h-4" />
        <span>{cta}</span>
      </button>

      {submitted && (
        <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-xs text-green-700 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-green-600" />
          <span>Opening WhatsApp to finalize your slot. Thank you!</span>
        </div>
      )}
    </form>
  );
}
