/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xxs: "340px",
      xs: "410px",
      sm: "480px",
      s: "590px",
      md: "720px",
      m: "820px",
      lg: "976px",
      l: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#10207A", // Dark blue
        secondary: "#10207A", // Light beige
        tertiary: "#DAD4D4", // Light gray
        dark: "#0A0A0A", // Black
        light: "#FBFBFB", // White
        tint: "#D4AF37", // Gold
        hoverGold: "#1E3A8A", // Darker gold for hover
      },
      fontFamily: {
        BrittanySignature: ["BrittanySignature", "sans-serif"],
      },
    },
  },
  plugins: [],
};
