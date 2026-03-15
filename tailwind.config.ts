import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#1d4ed8", dark: "#1e40af", soft: "#dbeafe" },
        ink: { DEFAULT: "#1e3a5f", muted: "#334155", light: "#64748b" },
        paper: "#f8fafc",
        "paper-elevated": "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "0.375rem",
        button: "0.375rem",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-subtle": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-subtle": "fade-in-subtle 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
