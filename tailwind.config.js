/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 47.4% 11.2%)",
        card: "hsl(0 0% 100%)",
        "card-foreground": "hsl(222.2 47.4% 11.2%)",
        popover: "hsl(0 0% 100%)",
        "popover-foreground": "hsl(222.2 47.4% 11.2%)",
        primary: { DEFAULT: "hsl(350 89% 55%)", foreground: "#fff" },   // Tally Red
        secondary: { DEFAULT: "hsl(45 93% 53%)", foreground: "hsl(222.2 47.4% 11.2%)" }, // warm CTA
        muted: "hsl(210 40% 96%)",
        "muted-foreground": "hsl(215 16% 46%)",
        accent: { DEFAULT: "hsl(210 40% 96%)", foreground: "hsl(222.2 47.4% 11.2%)" },
        border: "hsl(214 32% 91%)",
        input: "hsl(214 32% 91%)",
        ring: "hsl(350 89% 55%)",
      },
      borderRadius: { lg: "1rem", xl: "1.25rem", "2xl": "1.5rem" },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      boxShadow: { soft: "0 6px 24px rgba(16,24,40,0.06)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
