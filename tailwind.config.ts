import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        refine: {
          '0%': { left: '50%' }, // Center
          '25%': { left: '30%' }, // Left
          '50%': { left: '70%' }, // Right
          '75%': { left: '30%' }, // Back to Left
          '100%': { left: '50%' }, // Back to Center
        },
      },
      animation: {
        'refine-slide': 'refine 3.5s ease-in-out infinite',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
