import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'hero': 'calc(100vh - 58px)',
        'half': '50vh'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
      },
      gridColumnEnd: {
        '16': '16'
      },
      backdropBlur: {
        'normal': '8px'
      },
      keyframes: {
        upAndDown: {
          '0%': { transform: 'translateY(-5px)', opacity: '100%' },
          '50%': { transform: 'translateY(30px)', opacity: '90%' },
          '100%': { transform: 'translateY(-5px)', opacity: '100%' }
        },
        rotateMoon: {
          '0%': { transform: 'rotate(90deg) scale(0.5)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        rotateSun: {
          '0%': { transform: 'rotate(-90deg) scale(0.5)' },
          '100%': { transform: 'rotate(0deg) scale(1)' },
        },
        circlePath: {
          '0%': {
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '12.5%': {
            transform: 'translate(10px, -10px) rotate(-45deg)'
          },
          '25%': {
            transform: 'translate(20px, -20px) rotate(-90deg)'
          },
          '37.5%': {
            transform: 'translate(10px, -30px) rotate(-135deg)'
          },
          '50%': {
            transform: 'translate(0px, -40px) rotate(-180deg)'
          },
          '67.5%': {
            transform: 'translate(-10px, -30px) rotate(-225deg)'
          },
          '75%': {
            transform: 'translate(-20px, -20px) rotate(-270deg)'
          },
          '87.5%': {
            transform: 'translate(-10px, -10px) rotate(-315deg)'
          },
          '100%': {
            transform: 'translate(0px, 0px) rotate(-360deg)'
          }
        }
      },
      animation: {
        moonSpin: 'rotateMoon 0.3s forwards',
        sunSpin: 'rotateSun 0.3s forwards',
        float: 'upAndDown 7s infinite',
        submit: 'circlePath 0.5s forwards linear'
      },
    },

  },
  plugins: [require("daisyui")],
}
export default config
