/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          text: "#0B4279",
          bg: "#EDF5FD",
          color: "#D6C7F9",
        },
        dark: {
          text: "#86BDF4",
          bg: "#020A12",
          color: "#1B0C3E",
        },
      },
    },
  },
  plugins: [],
};
/* white --> textColor-[#0B4279] bg-[#EDF5FD] color-[#D6C7F9] */

/* dark --> textColor-[#86BDF4] bg-[#020A12] color-[#1B0C3E] */
