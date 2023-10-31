import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-digofa)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        wave: 'url("../public/images/wave.png")',
        wave1: 'url("../public/images/wave1.png")'
      },
      scale: {
        '-100': '-1'
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        },
        wave: {
          '0%': {
            'background-position-x': '0'
          },
          '100%': {
            'background-position-x': '1200px'
          }
        },
        wave1: {
          '0%': {
            'background-position-x': '0'
          },
          '100%': {
            'background-position-x': '-1200px'
          }
        },
        blink: {
          "50%": {
            backgroundColor: "transparent"
          },
          "100%": {
            backgroundColor: "teal-500"
          }  
        }
      },
      animation: {
        typing: 'typing 4.5s steps(90) infinite alternate',
        wave: 'wave 10s linear infinite',
        wave1: 'wave1 5s linear infinite',
        blink: 'blink .7s infinite'
      }
    }
  },
  plugins: []
};
export default config;
