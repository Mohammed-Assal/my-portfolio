/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "1px 1px 5px #5f5bd2",  
      },
    },
  },
  plugins: [],
};
