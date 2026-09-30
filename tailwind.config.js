/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          light: '#FCEEF2',
          DEFAULT: '#E5607D',
          hover: '#D44E6D',
          dark: '#B83B59',
          footer: '#C3566D',
        },
        blush: {
          50: '#FDF7F8',
          100: '#FBECEF',
          200: '#F7D9E0',
          DEFAULT: '#FCEEF2',
        },
        cream: {
          50: '#FFFEFC',
          DEFAULT: '#FAF6F2',
          100: '#F5EFE7',
          warm: '#F7F1EB',
        },
        ivory: '#FFFFFF',
        gold: {
          light: '#EAD7B5',
          DEFAULT: '#C5A059',
          dark: '#A37E36',
          shimmer: '#D4AF37',
        },
        ink: {
          light: '#8A7A7D',
          muted: '#69585B',
          DEFAULT: '#2D2325',
          dark: '#1C1517',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        sans: ['Poppins', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(229, 96, 125, 0.08)',
        card: '0 4px 20px rgba(229, 96, 125, 0.06)',
        'card-hover': '0 14px 35px rgba(229, 96, 125, 0.16)',
        gold: '0 8px 30px rgba(197, 160, 89, 0.2)',
      },
      borderRadius: {
        'hero-arch': '42% 10% 10% 42% / 32% 10% 10% 32%',
      }
    }
  },
  plugins: [],
};
