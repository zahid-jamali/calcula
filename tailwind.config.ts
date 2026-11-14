import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6fa',
          100: '#e1ecf5',
          200: '#c5dcee',
          300: '#99c3e2',
          400: '#64a3d2',
          500: '#3d84be',
          600: '#2c699f',
          700: '#235380',
          800: '#1e466b',
          900: '#0c3555',
          950: '#071f33',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
