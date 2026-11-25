import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F5F2EB',
          300: '#EFECE3',
          400: '#E2DDD1',
        },
        charcoal: {
          950: '#121211',
          900: '#181816',
          800: '#242422',
          700: '#363633',
          600: '#4F4E4A',
          500: '#696762',
        },
        concrete: {
          100: '#EAE8E4',
          200: '#D8D6D1',
          300: '#BCBAB3',
          400: '#98968F',
          500: '#7A7872',
        },
        terracotta: {
          300: '#E78964',
          400: '#D96B43',
          500: '#C85A32',
          600: '#B44A24',
          700: '#9A3A17',
        },
        olive: {
          500: '#677B68',
          600: '#526353',
          700: '#3F4E40',
          800: '#2D382E',
          900: '#1E251F',
          950: '#131914',
        },
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        studio: '0 20px 40px -15px rgba(18, 18, 17, 0.12)',
        'studio-lg': '0 30px 60px -12px rgba(18, 18, 17, 0.25)',
        terracotta: '0 8px 30px -4px rgba(200, 90, 50, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
