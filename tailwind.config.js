/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'gray-1': '#F4F4F6',
        'gray-2': '#929294',
        'gray-3': '#3D3D3E',
      },
    },
  },
  plugins: [],
}
