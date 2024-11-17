/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      height: {
        'calc-h-16': 'calc(100% - 4rem)',
      },
    },
  },
  plugins: [],
}

