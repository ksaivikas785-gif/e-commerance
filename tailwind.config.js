/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0E0E10',
        raised: '#17171B',
        card: '#1C1C21',
        line: '#2A2A30',
        ink: '#F3F1EE',
        dim: '#8A8890',
        violet: '#7C5CFF',
        coral: '#FF5C7C',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        tag: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}