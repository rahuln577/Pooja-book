/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./api/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      // ... your existing theme
      colors: {
        'primary': '#FBBF24',
        'secondary': '#2DD4BF',
        'background': '#0D1120',
        'surface': 'rgba(26, 32, 53, 0.8)',
        'text-light': '#E5E7EB',
        'text-dark': '#9CA3AF',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Tiro Devanagari Sanskrit', 'serif'],
      },
      backdropBlur: {
        'xl': '40px',
      },
    },
  },
  plugins: [
    // --- ADD THIS PLUGIN FOR TEXT SHADOW ---
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-glow': {
          'text-shadow': '0 0 8px rgba(251, 191, 36, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)'
        }
      })
    }),
    require('@tailwindcss/line-clamp'),
  ],
}