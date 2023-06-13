/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        nanum: ["var(--font-nanum)", "sans-serif"],
      },
      colors: {
        accent: {
          50: "#fcffe5",
          100: "#f5ffc8",
          200: "#eaff96",
          300: "#d8fb5b",
          400: "#c4f229",
          500: "#a4d80a",
          600: "#80ad03",
          700: "#608308",
          800: "#4d670d",
          900: "#405710",
          950: "#213102",
        },
      },
    },

    plugins: [require("@tailwindcss/typography")({ className: "mdx" })],
  },
};
