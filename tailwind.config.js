// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      filter: {
        invert: "invert(1)",
      },
      colors: {
        'black': '#000000',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    filter: ["responsive"],
  },
  plugins: [require("tailwindcss-filters")],
};
