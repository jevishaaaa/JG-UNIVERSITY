/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink:   { 950:'#030B18', 900:'#060F20', 800:'#0C1A30', 700:'#122240', 600:'#1A2E54' },
        amber: { 300:'#FDE68A', 400:'#FBBF24', 500:'#F59E0B', 600:'#D97706' },
        azure: { 300:'#93C5FD', 400:'#60A5FA', 500:'#3B82F6', 600:'#2563EB' },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: { 'dot-32': '32px 32px' },
      animation: {
        'float-a': 'floatA 8s ease-in-out infinite',
        'float-b': 'floatB 9s ease-in-out 1.5s infinite',
        'float-c': 'floatC 7s ease-in-out 3s infinite',
        'spin-xl': 'spin 30s linear infinite',
        'fade-up': 'fadeUp .8s ease both',
        'fade-in': 'fadeIn .6s ease both',
      },
      keyframes: {
        floatA:  { '0%,100%':{ transform:'translateY(0)' },   '50%':{ transform:'translateY(-18px)' } },
        floatB:  { '0%,100%':{ transform:'translateY(0)' },   '50%':{ transform:'translateY(-12px)' } },
        floatC:  { '0%,100%':{ transform:'translateY(-8px)' },'50%':{ transform:'translateY(8px)' } },
        fadeUp:  { from:{ opacity:0, transform:'translateY(32px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        fadeIn:  { from:{ opacity:0 }, to:{ opacity:1 } },
      },
    },
  },
  plugins: [],
}
