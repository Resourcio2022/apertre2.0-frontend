import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			textyellow: '#FBCE1F',
  			customPurple: '#F01DD4',
  			customYellow: '#F9CB1A',
  			footer: '#252323'
  		},
  		screens: {
  			md: '767px',
  			lg: '1023px',
  			iphone: '319px',
  			xl: '1279px'
  		},
  		fontFamily: {
  			mokoto: 'var(--font-mokoto)',
  			Poppins: 'var(--font-poppins)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
