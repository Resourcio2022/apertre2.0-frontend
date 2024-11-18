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
      },
      screens: {
        'md': '767px',
        'lg': '1023px',
        "iphone":"319px",
        "xl":"1279px",
      },
      fontFamily:{
        "mokoto": "var(--font-mokoto)",
      },
    },
  },
  plugins: [],
} satisfies Config;
