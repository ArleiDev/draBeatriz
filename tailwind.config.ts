import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FAF7F5",
          100: "#F5EFEB",
          200: "#E8DCD1",
          300: "#D3BEAB",
          400: "#B89B82",
          500: "#9C795E",
          600: "#7C5A40",
          700: "#5F422D",
          800: "#442D1D",
          900: "#2B1C12",
          950: "#1C110B",
        },
        beige: {
          50: "#FCFAF7",
          100: "#F7F3EC",
          200: "#EFE8DC",
          300: "#E3D7C5",
          400: "#D5C2AB",
          500: "#C2AB91",
          600: "#A99074",
          700: "#8B745A",
        },
        champagne: {
          100: "#FBF7F0",
          200: "#F4ECD9",
          300: "#E8DCBC",
          400: "#D8C59A",
          500: "#C5A96E",
        },
        gold: {
          300: "#E2CF9D",
          400: "#D1B677",
          500: "#BC9952",
          600: "#9E7B35",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(43, 28, 18, 0.05)',
        'luxury': '0 20px 40px -15px rgba(68, 45, 29, 0.08), 0 0 1px 1px rgba(184, 155, 130, 0.15)',
        'elevated': '0 25px 50px -12px rgba(43, 28, 18, 0.12)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;
