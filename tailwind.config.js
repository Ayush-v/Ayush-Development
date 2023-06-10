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
        accent: "#EAFF96",
      },
      animation: { shake: "shake 1s ease-in-out infinite" },
      keyframes: {
        shake: {
          // "0%, 100%": { transform: "translateX(0)" },
          // "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateY(-9px)" },
          "35%": { transform: "translateY(-9px) rotate(17deg)" },
          "55%": { transform: "translateY(-9px) rotate(-17deg)" },
          "65%": { transform: "translateY(-9px) rotate(17deg)" },
          "75%": { transform: "translateY(-9px) rotate(-17deg)" },
          "100%": { transform: "translateY(0) rotate(0)" },
        },
      },
    },

    plugins: [require("@tailwindcss/typography")({ className: "mdx" })],
  },
};
