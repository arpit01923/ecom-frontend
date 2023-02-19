/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F29E30",
        secondary: "#334155",
        tertiary: "#ef4444",
        linkedin: "#0077b5",
        facebook: "#1977f3",
        twitter: "#1c96e8",
      },
      width: {
        350: "350px",
        800: "800px",
      },
      height: {
        200: "200px",
        300: "300px",
        475: "475px",
        productHeight: "calc(100vh - 250px)",
      },
      minWidth: {
        80: "80px",
        300: "300px",
      },
      minHeight: {
        mainLayout: "calc(100vh - 212px)",
      },
      boxShadow: {
        primaryShadow: "0px 2px 8px rgba(44, 44, 44, 0.1)",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
