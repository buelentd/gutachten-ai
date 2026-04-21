import type { Config } from "tailwindcss";

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
        "outline-variant": "var(--color-outline-variant)",
        // Light-mode slate tokens (Commit A infrastructure)
        bg: "var(--bg)",
        surface: "var(--sf)",
        "surface-container": "var(--sf2)",
        "on-surface": "var(--tx)",
        "on-surface-variant": "var(--mu)",
        outline: "var(--outline)",
        primary: "var(--primary)",
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
