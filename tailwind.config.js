/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Archivo Black"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        gpt: {
          // Dark Mode (ChatGPT / OpenAI Deep Neutral Palette)
          darkBg: '#0D0D0D',
          darkSurface: '#171717',
          darkCard: '#1E1E1E',
          darkHover: '#2A2A2A',
          darkBorder: '#2E2E2E',
          darkMuted: '#8E8E8E',
          darkText: '#ECECEC',
          darkTextHeading: '#FFFFFF',

          // Light Mode (Clean Pure White & Minimal Grays)
          lightBg: '#FFFFFF',
          lightSurface: '#F9F9F9',
          lightCard: '#FFFFFF',
          lightHover: '#F2F2F2',
          lightBorder: '#E5E5E5',
          lightMuted: '#666666',
          lightText: '#171717',
          lightTextHeading: '#000000',
        }
      }
    },
  },
  plugins: [],
}
