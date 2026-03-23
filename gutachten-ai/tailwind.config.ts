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
        // Brand
        "brand-orange": "#E8631A",
        "brand-orange-container": "#EE671F",

        // Dark mode surfaces (default)
        "surface":               "#101319",
        "surface-dim":           "#101319",
        "surface-container-low": "#191C22",
        "surface-container":     "#1D2026",
        "surface-container-high":"#272A31",
        "surface-container-highest": "#32353B",

        // Dark mode text
        "on-surface":            "#E1E2EB",
        "on-surface-variant":    "#E0C0B3",
        "text-heading":          "#F0EDE6",
        "text-muted":            "#A0AABB",

        // Borders dark
        "technical-dark":        "#2A3344",
        "technical-warm":        "#594238",

        // Light mode surfaces
        "light-surface":         "#FFFFFF",
        "light-container-low":   "#F5F4F1",
        "light-container":       "#EDEAE4",
        "light-container-high":  "#E4E1DA",

        // Light mode text
        "light-on-surface":      "#1A1A1A",
        "light-on-variant":      "#4A3728",
        "light-heading":         "#0F0F0F",
        "light-muted":           "#6B6B6B",

        // Borders light
        "technical-light":       "#D4D0C8",

        // Shared accent
        "primary":               "#E8631A",
        "primary-dim":           "#FFB596",
        "error":                 "#FFB4AB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
