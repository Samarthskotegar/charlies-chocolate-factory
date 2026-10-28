/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#1A0D08',
        'noir-deep': '#120805',
        gold: '#D4AF37',
        'gold-soft': '#EFD68B',
        plum: '#3D1A3D',
        cream: '#FFF9F0',
      },
      fontFamily: {
        display: ['"Bodoni Moda Variable"', '"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.42em',
      },
    },
  },
  plugins: [],
}
