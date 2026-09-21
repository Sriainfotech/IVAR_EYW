/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivar: {
          dark: "#064C35",
          darker: "#073D2D",
          green: "#073D2D",
          leaf: "#668A73",
          text: "#1A1A1A",
          coral: "#E85D3A",
          cream: "#F5F0E5",
          sand: "#EFEBE1",
          teal: "#668A73",
          lime: "#A8D835",
          yellow: "#F59E0B",
          success: "#10B981",
          mint: "#EEE6D5",
          forest: "#064C35",
          forestDeep: "#073D2D",
          sage: "#668A73",
          beige: "#EEE6D5",
          paper: "#F5F0E5",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
