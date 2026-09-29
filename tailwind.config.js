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
          dark: "#0B351F",
          darker: "#082719",
          forest: "#0B351F",
          forestDeep: "#082719",
          // Secondary — Brand Green
          green: "#3F7D20",
          leaf: "#3F7D20",
          // Light green — Natural Green accent (use sparingly)
          sage: "#6FA52D",
          // Muted botanical green — occasional section background
          botanical: "#E7EED5",
          // Ash / White — light section backgrounds & cards
          cream: "#F2F2F0",
          paper: "#F2F2F0",
          beige: "#ECECE9",
          mint: "#EDEEEA",
          sand: "#EDEEEA",
          ivory: "#FAFAF9",
          // Earth — Indian ingredient storytelling
          earth: "#73563E",
          // Gold — premium accents only, use VERY sparingly
          gold: "#D7C77A",
          // Text — never pure black
          text: "#10150F",
          ink: "#10150F",
          muted: "#5B6158",
          // Utility (errors, badges) — not primary brand colors
          coral: "#E85D3A",
          teal: "#3F7D20",
          lime: "#D7C77A",
          yellow: "#D7C77A",
          success: "#10B981",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "editorial-hero": ["clamp(2.75rem, 6vw, 5.125rem)", { lineHeight: "1.04" }],
        "editorial-section": ["clamp(2.25rem, 4vw, 3.625rem)", { lineHeight: "1.1" }],
        "editorial-body": ["clamp(0.9375rem, 1.3vw, 1.125rem)", { lineHeight: "1.65" }],
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
