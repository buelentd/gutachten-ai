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
        // CSS variable tokens — respond to dark/light class
        "surface": "var(--color-surface)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container": "var(--color-surface-container)",
        "surface-container-high": "var(--color-surface-container-high)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "outline": "var(--color-outline)",
        "outline-variant": "var(--color-outline-variant)",
        "technical-line": "var(--color-technical-line)",
        // Static brand colors
        "brand-orange": "#E8631A",
        "primary-container": "#EE671F",
        "on-primary-container": "#4D1900",
        "primary": "#FFB596",
        // Static surface colors (dark only, used directly)
        "surface-dark": "#101319",
        "surface-dark-low": "#191C22",
        "surface-dark-high": "#272A31",
        "surface-dark-highest": "#32353B",
        // Static text colors (dark only, used directly in sections that are always dark)
        "text-primary": "#F0EDE6",
        "text-secondary": "#E0C0B3",
        "text-muted": "#A0AABB",
        // Semantic
        "background": "var(--color-surface)",
        "on-background": "var(--color-on-surface)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
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
