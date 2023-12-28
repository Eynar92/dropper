import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        principal: '#171717',
        text: '#FFFFFF',
        single: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
        secondary: {
          600: '#404040',
        },
        dark: {
          900: '#0A0A0A'
        }
      }
    },
  },
  plugins: [],
}
export default config
