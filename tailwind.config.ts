import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#d4a5a5", dark: "#c49599", soft: "#f0d4d4" },
        ink: { DEFAULT: "#2d2a26", muted: "#6b6560", light: "#8a8580" },
        paper: "#fdf5f7",
        cream: "#faf0f2",
        sakura: {
          DEFAULT: "#e8b4b8",
          light: "#f5d0d4",
          petal: "#fce4ec",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "card": "1rem",
        "button": "0.75rem",
      },
      boxShadow: {
        "soft": "0 2px 12px rgba(45, 42, 38, 0.06)",
        "soft-hover": "0 8px 24px rgba(45, 42, 38, 0.08)",
        "inner-soft": "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.88" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.55s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "soft-pulse": "soft-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
