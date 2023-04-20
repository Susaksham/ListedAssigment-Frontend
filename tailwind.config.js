/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      Open: ["Open Sans", "sans-serif"],
    },
    screens: {
      mobile: "280px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "744px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
};
