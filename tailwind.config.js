/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulsefast: {
          "100%": { opacity: "0.5" },
        },
      },
      animation: {
        "pulse-fast": "pulsefast .1s linear infinite",
      },
    },
  },
  plugins: [],
};
