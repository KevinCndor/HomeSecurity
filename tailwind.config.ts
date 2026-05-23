import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode surface scale
        surface: {
          50:  "#ffffff",
          100: "#f4f6fa",
          200: "#e8ecf4",
          300: "#d4daea",
        },
        // Navy text scale
        navy: {
          950: "#03070f",
          900: "#0d1b2e",
          800: "#1a2e4a",
          700: "#1e3a5f",
          600: "#2d5282",
        },
        // Primary accent — cobalt blue
        cobalt: {
          400: "#3b82f6",
          500: "#1d4ed8",
          600: "#1e40af",
        },
        // CTA accent — orange
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(29,78,216,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.06) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
        float:  "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        pulse2:  { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        float:   { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
