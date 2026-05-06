import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F1C",
        accent: "#4F8CFF",
        purple: "#8A5CFF",
        softgray: "#F1F5F9",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #4F8CFF 0%, #8A5CFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79,140,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(138,92,255,0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
