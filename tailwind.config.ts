import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
      },
      screens: {
        // 👇 Custom screen between 900px and 768px
        'mid': { 'min': '768px', 'max': '899px' },
      },
    },
  },
  plugins: [],
};

export default config;
