module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://preview.colorlib.com/theme/imagine/images/hero_1.jpg.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
