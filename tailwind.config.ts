import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackBackground: "#181818",
        yellow: "#FFD600",
        white: "#F6F5E6",
        grey: "#929292",
      },
      fontFamily: {
        secondary: ["var(--font-mons)"],
        primary: ["Monument Extended", "sans-serif"],
      },
      boxShadow: {
        button: "0px 11px 13.2px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
