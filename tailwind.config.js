/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-h-16": "calc(100% - 4rem)",
      },
      animation: {
        blink: 'blink 1s infinite', // Define a custom blinking animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(255, 0, 0, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
