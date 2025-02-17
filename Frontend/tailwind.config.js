const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#f1f5f9",
        },
      },
    },
  },
  important: true,
  plugins: [
    require('flowbite/plugin')
  ],
});

