import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBrown: "#5D3A15",
        darkGreen: "#013912",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        "clash-display-light": ["ClashDisplay-Light", "sans-serif"],
        "clash-display-regular": ["ClashDisplay-Regular", "sans-serif"],
        "clash-display-medium": ["ClashDisplay-Medium", "sans-serif"],
        "clash-display-semibold": ["ClashDisplay-Semibold", "sans-serif"],
        "clash-display-bold": ["ClashDisplay-Bold", "sans-serif"],
        "clash-display-variable": ["ClashDisplay-Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
