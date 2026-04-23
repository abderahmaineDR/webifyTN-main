import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'sm': '640px',
      'md': '1100px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(18px, -28px) scale(1.02)" },
          "66%": { transform: "translate(-12px, 12px) scale(0.98)" },
        },
        "hero-float-medium": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-25px, -18px) scale(1.03)" },
        },
        "hero-float-reverse": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) translate(28px, 18px) scale(0.96)" },
        },
        "hero-morph": {
          "0%, 100%": { borderRadius: "52% 48% 38% 62% / 53% 37% 63% 47%" },
          "50%": { borderRadius: "38% 62% 62% 38% / 47% 53% 37% 53%" },
        },
        "hero-morph-reverse": {
          "0%, 100%": { borderRadius: "38% 62% 62% 38% / 47% 53% 37% 53%" },
          "50%": { borderRadius: "52% 48% 38% 62% / 53% 37% 63% 47%" },
        },
        "hero-morph-slow": {
          "0%, 100%": { borderRadius: "47% 53% 53% 47% / 62% 38% 62% 38%" },
          "50%": { borderRadius: "62% 38% 38% 62% / 47% 53% 47% 53%" },
        },
        "hero-spin-very-slow": {
          "0%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(405deg)" },
        },
        "hero-bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "hero-particle": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(80px)", opacity: "0" },
        },
        "hero-path-draw": {
          "0%": { strokeDasharray: "0, 1800", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { strokeDasharray: "1800, 0", opacity: "0" },
        },
        "hero-drift-diagonal": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(40px, -30px) rotate(15deg)" },
        },
        "hero-float-circle": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-25px) scale(1.1)" },
        },
        "hero-pulse-soft": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.08)" },
        },
        "hero-rotate-slow": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "hero-float-slow": "hero-float-slow 26s ease-in-out infinite",
        "hero-float-medium": "hero-float-medium 20s ease-in-out infinite",
        "hero-float-reverse": "hero-float-reverse 24s ease-in-out infinite",
        "hero-morph": "hero-morph 11s ease-in-out infinite",
        "hero-morph-reverse": "hero-morph-reverse 14s ease-in-out infinite",
        "hero-morph-slow": "hero-morph-slow 16s ease-in-out infinite",
        "hero-spin-very-slow": "hero-spin-very-slow 40s linear infinite",
        "hero-bounce-slow": "hero-bounce-slow 8s ease-in-out infinite",
        "hero-particle": "hero-particle 15s linear infinite",
        "hero-path-draw": "hero-path-draw 8s ease-in-out infinite",
        "hero-drift-diagonal": "hero-drift-diagonal 18s ease-in-out infinite",
        "hero-float-circle": "hero-float-circle 12s ease-in-out infinite",
        "hero-pulse-soft": "hero-pulse-soft 10s ease-in-out infinite",
        "hero-rotate-slow": "hero-rotate-slow 25s linear infinite",
      },
      boxShadow: {
        'card': '0 4px 24px -4px hsla(217, 91%, 60%, 0.1)',
        'card-hover': '0 8px 32px -4px hsla(217, 91%, 60%, 0.15)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
