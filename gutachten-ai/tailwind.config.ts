import type { Config } from "tailwindcss";

// Token-Strategie 22.04.2026:
// - primary: themed (#C54F0E light, #E8631A dark) — für Akzent-Text
// - button-bg: fest #C54F0E beide Themes — für Button-Hintergründe mit weißem Text
// - bg/surface/surface-container: Flächen-Hierarchie, themed
// - on-surface / on-surface-variant: Textfarben, themed (Slate light, Hell dark)
// - accent-peach: #FFB596 für Peach-Akzente
// - outline: Border-Farbe, themed
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#C54F0E",
        "primary-container": "#EE671F",
        "on-primary-container": "#4D1900",
        "accent-peach": "#FFB596",
        "button-bg": "#C54F0E",
        "outline-variant": "var(--color-outline-variant)",
        // Themed tokens (raw-RGB vars in globals.css für Alpha-Support: bg-bg/95 etc.)
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--sf) / <alpha-value>)",
        "surface-container": "rgb(var(--sf2) / <alpha-value>)",
        "on-surface": "rgb(var(--tx) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--mu) / <alpha-value>)",
        outline: "rgb(var(--outline) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
