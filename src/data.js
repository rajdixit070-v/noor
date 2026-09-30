export const NAV = ['Home', 'About Us', 'Services', 'Gallery', 'Packages', 'Contact Us'];

export const id = (s) => s.toLowerCase().replace(' us', '').replace(/\s+/g, '');

export const SERVICES = [
  {
    id: 'bridal-makeup',
    t: 'Bridal Makeup',
    d: 'Look your best on your special day with our professional bridal makeup.',
    iconKey: 'bridal',
    price: 'Starting ₹9,999',
    duration: '2.5 - 3 Hours',
    features: [
      'HD / Airbrush Bridal Makeup',
      'Hair Styling & Fresh Floral Setting',
      'Saree / Lehenga Draping',
      'Eyelashes, Lenses & Jewelry Placement',
      'Pre-Bridal Skin Prep & Glow Booster'
    ]
  },
  {
    id: 'hair-styling',
    t: 'Hair Styling',
    d: 'Get the perfect look with our advanced hair cutting, styling & treatment.',
    iconKey: 'hair',
    price: 'Starting ₹1,499',
    duration: '45 - 90 Mins',
    features: [
      'Custom Blow Dry & Hollywood Waves',
      'Keratin & Botoplex Smoothening',
      'Advanced Layered & Feather Cuts',
      'Bridal & Party Hair Updos',
      'Nourishing Deep Conditioning Spa'
    ]
  },
  {
    id: 'facial-skincare',
    t: 'Facial & Skin Care',
    d: 'Glowing skin is our priority. Enjoy our best facial & skin treatments.',
    iconKey: 'skincare',
    price: 'Starting ₹1,299',
    duration: '60 - 75 Mins',
    features: [
      'Hydra Facial & Oxygen Infusion',
      'Gold & Diamond Radiance Facials',
      'Organic Herbal Tan Removal',
      'Acne & Pigmentation Therapy',
      'Relaxing Acupressure Face Massage'
    ]
  },
  {
    id: 'party-makeup',
    t: 'Party Makeup',
    d: 'Look stunning at every event with our elegant party makeup.',
    iconKey: 'party',
    price: 'Starting ₹2,499',
    duration: '60 Mins',
    features: [
      'Matte / Dewy HD Finish',
      'Custom Eye Makeup & Lashes',
      'Contouring & Highlight Accent',
      'Dupatta / Outfit Draping',
      'Long-lasting All-Night Setting'
    ]
  },
  {
    id: 'manicure-pedicure',
    t: 'Manicure & Pedicure',
    d: 'Perfect care for your hands & feet. Relax and feel the difference.',
    iconKey: 'nails',
    price: 'Starting ₹899',
    duration: '45 - 60 Mins',
    features: [
      'Aromatherapy Hand & Foot Soak',
      'Exfoliating Sea Salt Scrub',
      'Cuticle Care & Nail Shaping',
      'Detox Foot Mask & Massage',
      'Gel Polish & French Manicure'
    ]
  },
  {
    id: 'mehndi-designs',
    t: 'Mehndi Designs',
    d: 'Beautiful mehndi designs for every occasion.',
    iconKey: 'mehndi',
    price: 'Starting ₹799',
    duration: '45 - 120 Mins',
    features: [
      'Traditional Rajasthani & Marwari Motifs',
      'Intricate Arabic & Floral Patterns',
      'Bridal Storytelling Figures & Portraits',
      '100% Natural Organic Dark Henna Cone',
      'Bridal Party & Festive Family Mehndi'
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'Bridal',
    title: 'Royal Bridal Glow',
    subtitle: 'Classic Indian Bride in Crimson Lehenga & Heavy Jewellery',
    src: '/images/gallery_1_hd.jpg',
    fallbackSrc: '/images/gallery_1_exact.jpg',
  },
  {
    id: 2,
    category: 'Makeup',
    title: 'Smoky Rose Eye Artistry',
    subtitle: 'High Definition Shimmer Eye Makeup with Curled Lashes',
    src: '/images/gallery_2_exact.jpg',
    fallbackSrc: '/images/gallery_2_crop.jpg',
  },
  {
    id: 3,
    category: 'Hair',
    title: 'Voluminous Glamour Waves',
    subtitle: 'Soft Bouncy Waves with Gloss & Heat Protection',
    src: '/images/gallery_3_hd.jpg',
    fallbackSrc: '/images/gallery_3_exact.jpg',
  },
  {
    id: 4,
    category: 'Skincare',
    title: 'Radiance Hydration Facial',
    subtitle: 'Deep Pore Cleansing & Herbal Rejuvenation Therapy',
    src: '/images/gallery_4_exact.jpg',
    fallbackSrc: '/images/gallery_4_crop.jpg',
  },
  {
    id: 5,
    category: 'Mehndi',
    title: 'Intricate Bridal Henna',
    subtitle: 'Delicate Floral Feet & Hand Mehndi for Wedding Ceremonies',
    src: '/images/gallery_5_exact.jpg',
    fallbackSrc: '/images/gallery_5_crop.jpg',
  },
  {
    id: 6,
    category: 'Hair',
    title: 'Floral Bridal Updo',
    subtitle: 'Textured Bun with Natural Baby’s Breath & Pearl Clips',
    src: '/images/gallery_6_exact.jpg',
    fallbackSrc: '/images/gallery_6_crop.jpg',
  }
];

export const ABOUT_FEATURES = [
  {
    icon: 'beautician',
    title: 'Professional Beauticians',
    desc: 'Certified stylists & makeup artists with years of salon and bridal experience.'
  },
  {
    icon: 'products',
    title: 'High Quality Products',
    desc: 'Premium dermatologically tested international brands for pure gentle care.'
  },
  {
    icon: 'hygiene',
    title: 'Hygienic & Safe Environment',
    desc: 'Strict sanitization protocols, disposable kits, and pristine salon ambiance.'
  },
  {
    icon: 'satisfaction',
    title: 'Customer Satisfaction',
    desc: 'Tailored consultations and undivided attention to fulfill your dream look.'
  }
];

export const PACKAGES = [
  {
    name: 'Royal Bridal Glam',
    popular: true,
    tag: 'Most Loved by Brides',
    price: '₹14,999',
    oldPrice: '₹18,500',
    desc: 'Complete head-to-toe royal treatment tailored for your once-in-a-lifetime wedding day.',
    features: [
      'HD / Airbrush Waterproof Bridal Makeup',
      'Designer Hair Styling & Real Flower Placement',
      'Lehenga Draping & Jewelry Setting',
      'Premium Eyelashes & Lens Application',
      'Pre-Bridal Gold Glow Facial',
      'Complimentary Groom Touch-up or Mom Makeup'
    ]
  },
  {
    name: 'Celebration Party Glam',
    popular: false,
    tag: 'Evenings & Receptions',
    price: '₹3,499',
    oldPrice: '₹4,500',
    desc: 'Turn heads at every festive occasion, cocktail evening, sangeet, or engagement celebration.',
    features: [
      'Flawless HD Party Makeup & Glow Primer',
      'Modern Blowout, Curls or Sleek Styling',
      'False Eyelashes & Highlight Shimmer',
      'Saree / Dupatta Draping',
      'Touch-up Lipstick Mini-Kit'
    ]
  },
  {
    name: 'Bridal Bliss Pre-Care',
    popular: false,
    tag: 'Skin & Body Detox',
    price: '₹7,999',
    oldPrice: '₹10,000',
    desc: 'A rejuvenating 3-day wellness package to prepare your skin and hair for the big day.',
    features: [
      'Diamond Radiance Glow Facial',
      'Full Body De-Tan & Polishing',
      'Aromatherapy Deluxe Manicure & Pedicure',
      'Deep Hair Spa & Scalp Massage',
      'Thread & Waxing Grooming Care'
    ]
  }
];

export const REVIEWS = [
  {
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    rating: 5,
    text: 'Noor Beauty Parlour made me look like an absolute queen on my wedding day! The makeup stayed intact from 4 PM until the next morning. Everyone gave compliments. Thank you team!'
  },
  {
    name: 'Ananya Mishra',
    service: 'Hydra Facial & Skincare',
    rating: 5,
    text: 'The best facial experience in the city. The salon is super clean, smelling like roses, and the beauticians are extremely gentle. My skin was glowing for weeks.'
  },
  {
    name: 'Sana Khan',
    service: 'Party Makeup & Hair',
    rating: 5,
    text: 'Loved my party look for my sister’s engagement! Subtle, elegant, not cakey at all, and the curls were so bouncy. 10/10 recommended for everyone!'
  }
];
