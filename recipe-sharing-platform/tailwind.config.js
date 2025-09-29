/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind will automatically purge these files in production builds
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'media', // or 'class' if you want manual dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
