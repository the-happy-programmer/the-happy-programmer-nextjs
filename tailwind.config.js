module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widget/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      gray: {
        50: "#fff",
        100: "#FAFAFA",
        200: "#EAEAEA",
        300: "#999",
        400: "#888",
        500: "#666",
        600: "#444",
        700: "#333",
        800: "#111",
        900: "#000",
      },
    },
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [],
}
