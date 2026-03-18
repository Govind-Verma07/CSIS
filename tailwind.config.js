/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Space Grotesk", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        accent: "#6366f1",
        "accent-glow": "rgba(99,102,241,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        grid: "gridMove 20s linear infinite",
        counter: "counterUp 2s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(99,102,241,0.7)" },
        },
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
