import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(30px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(99, 102, 241, 0.2)" },
          "50%": { borderColor: "rgba(99, 102, 241, 0.45)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        "slide-up": "slideUp 0.3s ease-out forwards",
        "fade-in": "fadeIn 0.2s ease-out forwards",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(99, 102, 241, 0.2), 0 8px 32px -4px rgba(99, 102, 241, 0.25)",
        "glow-sm": "0 0 10px rgba(99, 102, 241, 0.15)",
        "glow-accent": "0 0 20px rgba(16, 185, 129, 0.2), 0 8px 32px -4px rgba(16, 185, 129, 0.2)",
        "glow-amber": "0 0 20px rgba(251, 191, 36, 0.15), 0 8px 32px -4px rgba(251, 191, 36, 0.2)",
        neon: "0 0 5px rgba(99, 102, 241, 0.4), 0 0 20px rgba(99, 102, 241, 0.2), 0 0 40px rgba(99, 102, 241, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
