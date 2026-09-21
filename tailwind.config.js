/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivar: {
          dark: "#0a3d24",
          darker: "#082a1a",
          green: "#4f7a33",
          leaf: "#6fa441",
          text: "#173126",
          coral: "#ff6b4a",
          mint: "#eaf5ec",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
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
