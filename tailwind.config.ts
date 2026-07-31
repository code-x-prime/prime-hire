import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B2C5F",
          secondary: "#C89B3C",
          dark: "#0F172A",
          light: "#F8FAFC",
          accent: "#E2E8F0",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Body — Lato (clean, highly legible)
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        // Display headings — DM Serif Display (elegant)
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        "premium": "0 20px 40px -15px rgba(11,44,95,0.05)",
        "premium-hover": "0 30px 60px -20px rgba(11,44,95,0.12)",
        "glass": "0 8px 32px 0 rgba(31,38,135,0.07)",
        "soft": "0 4px 20px -2px rgba(0,0,0,0.05)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-fast": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-15px)" } },
        shimmer: { from: { backgroundPosition: "200% 0" }, to: { backgroundPosition: "-200% 0" } },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))",
      },
    },
  },
  plugins: [],
};

export default config;