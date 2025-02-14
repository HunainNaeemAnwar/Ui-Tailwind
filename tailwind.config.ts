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
      fontFamily: {
        poppinsBold: ["poppins_bold", "sans", "sans-serif"],
        poppinsRegular: ["poppins_regular", "sans", "sans-serif"],
        interBold: ["inter_bold", "sans", "sans-serif"],
        interRegular: ["inter_regular", "sans", "sans-serif"],
        Bangers: ["bangers", "sans", "sans-serif"],
        cF: ["cf", "sans", "sans-serif"],
        satoshi: ["satoshi", "sans", "sans-serif"],
        satoshiMedium: ["satoshiMedium", "sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
