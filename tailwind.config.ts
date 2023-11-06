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
        sans: ['var(--font-digofa)'],
        octosquares: ['var(--font-octosquares)']
      },
      colors: {
        purple: '#8337E1',
        lightGreen: '#2AA434',
        darkGreen: '#024708',
        lightBlue: '#007DD8',
        darkBlue: '#00154D',
        lightPurple: '#8600D8',
        darkPurple: '#39004D',
        lightOrange: '#FFB800',
        darkOrange: '#E95400',
        background:
          'linear-gradient(45deg, rgba(14, 15, 75, 1) 0%, rgba(54, 25, 102, 1) 100%)'
      },
      backgroundImage: {
        'green-card':
          "url('../public/images/clean-node-api/node-bg.png'), linear-gradient(to bottom, rgba(42, 164, 52, 1), rgba(2, 71, 8, 1))",
        'blue-card':
          "url('../public/images/code-pix/codepix-bg.png'), linear-gradient(to bottom, rgba(0, 125, 256, 1), rgba(0, 21, 77, 1))",
        'purple-card':
          "url('../public/images/school-management-system/school-system-bg.png'), linear-gradient(to bottom, rgba(134, 0, 216, 1), rgba(57, 0, 77, 1))",
        'orange-card':
          "url('../public/images/task-mate/task-mate-bg.png'), linear-gradient(to bottom, rgba(255, 184, 0, 1), rgba(233, 84, 0, 1))",
        'green-gradient': "linear-gradient(to bottom, rgba(42, 164, 52, 1), rgba(2, 71, 8, 1))"
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
          '50%': {
            backgroundColor: 'transparent'
          },
          '100%': {
            backgroundColor: 'teal-500'
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
