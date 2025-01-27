import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure all relevant files are included
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background, 0 0% 100%))", // Added fallback
        foreground: "hsl(var(--foreground, 0 0% 0%))",
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 98%))", // Added fallback
          foreground: "hsl(var(--card-foreground, 0 0% 0%))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background, 220 13% 18%))", // Added fallback
          foreground: "hsl(var(--sidebar-foreground, 0 0% 100%))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
