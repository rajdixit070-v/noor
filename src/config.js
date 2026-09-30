export const SITE = {
  name: 'NOOR BEAUTY PARLOUR',
  tagline: 'Enhance Your Beauty, Reveal Your Confidence',
  whatsapp: '919999999999',
  phone: '+91 99999 99999',
  email: 'rnoor7797@gmail.com',
  instagram: 'noor792210',
  instagramUrl: 'https://www.instagram.com/noor792210/',
  pinterestUrl: 'https://pin.it/MP4wYvSXy',
  address: 'Civil Lines, Kanpur, Uttar Pradesh',
  hours: 'Mon – Sun: 10:00 AM – 8:00 PM',
};

export const waLink = (message = 'Hello Noor Beauty Parlour, I would like to book an appointment.') => {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
};
