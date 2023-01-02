/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        "3xlYellow": "0 12px 16px rgba(253, 272, 51, 0.5);",
      },
    },
  },
  plugins: [],
};
