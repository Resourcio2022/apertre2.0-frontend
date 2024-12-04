import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textyellow: "#FBCE1F",
        customPurple: "#F01DD4",
        customYellow: "#F9CB1A",
        footer:"#252323",
        customtransparent:"#3E3B3B80",
        customgreen:"#215521",
        bordergreen:"#4ED16D",
        customviolet:"#5865F2",
        customgrey:"#383434"
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
      backgroundImage:{
        
        "aboutus": "url('/aboutus.svg')",
        "faq": "url('/faq.svg')",
        "loginbg":"url('/loginbg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
