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
        // Bauwerk Slate – Midnight & Ember
        primary: "#E8631A",
        "primary-container": "#EE671F",
        "on-primary": "#581E00",
        "primary-fixed": "#FFDBCD",
        "primary-fixed-dim": "#FFB596",
        "on-primary-fixed": "#360F00",
        "on-primary-fixed-variant": "#7C2E00",
        "inverse-primary": "#A33E00",

        secondary: "#BDC7DC",
        "secondary-container": "#3E4759",
        "on-secondary": "#283141",
        "on-secondary-container": "#ACB5CA",
        "secondary-fixed": "#DAE2F9",
        "secondary-fixed-dim": "#BDC7DC",
        "on-secondary-fixed": "#121C2C",
        "on-secondary-fixed-variant": "#3E4759",

        tertiary: "#FFB694",
        "tertiary-container": "#D07B52",
        "on-tertiary": "#571F00",
        "on-tertiary-container": "#4C1A00",
        "tertiary-fixed": "#FFDBCC",
        "tertiary-fixed-dim": "#FFB694",
        "on-tertiary-fixed": "#351000",
        "on-tertiary-fixed-variant": "#753410",

        background: "#101319",
        "on-background": "#E1E2EB",

        surface: "#101319",
        "surface-dim": "#101319",
        "surface-bright": "#363940",
        "surface-container-lowest": "#0B0E14",
        "surface-container-low": "#191C22",
        "surface-container": "#1D2026",
        "surface-container-high": "#272A31",
        "surface-container-highest": "#32353B",
        "surface-variant": "#32353B",
        "surface-tint": "#FFB596",
        "on-surface": "#E1E2EB",
        "on-surface-variant": "#E0C0B3",
        "inverse-surface": "#E1E2EB",
        "inverse-on-surface": "#2D3037",

        outline: "#A88A7F",
        "outline-variant": "#594238",

        error: "#FFB4AB",
        "error-container": "#93000A",
        "on-error": "#690005",
        "on-error-container": "#FFDAD6",

        // Semantic shorthands
        "technical-line-dark": "#2A3344",
        "text-primary": "#F0EDE6",
        "text-secondary": "#E0C0B3",
        "text-muted": "#A0AABB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "headline-lg": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "headline-md": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "headline-sm": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "label-lg": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        "label-md": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        "label-sm": ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        card: "0.75rem",
        badge: "1.25rem",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      spacing: {
        // Editorial spacing scale
        "spacing-1": "0.25rem",
        "spacing-2": "0.5rem",
        "spacing-3": "0.75rem",
        "spacing-4": "1rem",
        "spacing-6": "2rem",
        "spacing-8": "3rem",
        "spacing-12": "4rem",
      },
      maxWidth: {
        content: "72rem",
      },
      backdropBlur: {
        md: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
