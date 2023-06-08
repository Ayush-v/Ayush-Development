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
        inter: ["var(--font-inter)"],
        nanum: ["var(--font-nanum)", "sans-serif"],
      },
      colors: {
        accent: "#EAFF96",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")({ className: "mdx" })],
};
