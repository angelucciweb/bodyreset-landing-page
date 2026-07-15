/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0D0D0E',
          card: '#161618',
          purple: '#4B2E83',
          purpleLight: '#1d123a',
          cyan: '#745399',
          cyanDark: '#5A4077'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(116,83,153,0.2), 0 0 10px rgba(116,83,153,0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(116,83,153,0.6), 0 0 35px rgba(116,83,153,0.3)' }
        }
      }
    },
  },
  plugins: [],
}

