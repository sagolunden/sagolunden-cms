module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      backgroundImage: {
        'hero-image': "url('../img/hero-image.png')",
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
