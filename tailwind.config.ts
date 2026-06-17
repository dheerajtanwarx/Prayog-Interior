import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Themeable tokens — driven by CSS variables (see globals.css).
        // Channel format keeps Tailwind's /<alpha-value> opacity modifiers working.
        bg: {
          DEFAULT: "rgb(var(--c-bg) / <alpha-value>)",
          elevated: "rgb(var(--c-bg-elevated) / <alpha-value>)",
          card: "rgb(var(--c-bg-card) / <alpha-value>)",
        },
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        cream: {
          DEFAULT: "rgb(var(--c-cream) / <alpha-value>)",
          muted: "rgb(var(--c-cream-muted) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--c-ink-subtle) / <alpha-value>)",
        },
        // Accent colours — identical across both themes (static hex).
        copper: {
          DEFAULT: "#C17F59",
          light: "#D4A07A",
          bright: "#E8B894",
        },
        terracotta: "#C4704E",
        gold: {
          DEFAULT: "#C9A96E",
          light: "#DFC08A",
        },
        sage: {
          DEFAULT: "#8A9A7B",
          light: "#A7B89A",
          dark: "#6B7A5E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16,1,0.3,1)",
        "out-quart": "cubic-bezier(0.25,1,0.5,1)",
      },
      keyframes: {
        "hero-zoom": {
          "0%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-spin": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "hero-zoom": "hero-zoom 20s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "glow-spin": "glow-spin 4s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
