import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textyellow: "#FBCE1F",
        customPurple: "#F01DD4",
        customYellow: "#F9CB1A",
        footer: "#252323",
        customtransparent: "#3E3B3B80",
        customgreen: "#215521",
        bordergreen: "#4ED16D",
        customviolet: "#5865F2",
        customgrey: "#383434",
        "custom-gradient":
          "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
        customblack: "#111010",
      },
      screens: {
        md: "767px",
        lg: "1023px",
        iphone: "319px",
        xl: "1279px",
      },
      fontFamily: {
        mokoto: "var(--font-mokoto)",
        Poppins: "var(--font-poppins)",
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        zoom: "zoom 2s infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        zoom: {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(0.9)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;
