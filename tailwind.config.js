/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivar: {
          // Primary — Ivar Forest
          dark: "#173A2B",
          darker: "#0F2A1F",
          forest: "#173A2B",
          forestDeep: "#0F2A1F",
          // Secondary — Ivar Leaf
          green: "#5F8F3D",
          leaf: "#5F8F3D",
          // Light green — Ivar Sage (use sparingly)
          sage: "#A8BE82",
          // Cream / Ivory — light section backgrounds & cards
          cream: "#F5F0E4",
          paper: "#F5F0E4",
          beige: "#F5F0E4",
          mint: "#EDE7D6",
          sand: "#EDE7D6",
          ivory: "#FCFAF4",
          // Earth — Indian ingredient storytelling
          earth: "#73563E",
          // Gold — premium accents only, use VERY sparingly
          gold: "#C7A45A",
          // Text — never pure black
          text: "#172019",
          ink: "#172019",
          // Utility (errors, badges) — not primary brand colors
          coral: "#E85D3A",
          teal: "#5F8F3D",
          lime: "#C7A45A",
          yellow: "#C7A45A",
          success: "#10B981",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
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
