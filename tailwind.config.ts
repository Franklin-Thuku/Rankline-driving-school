import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        gold: {
          DEFAULT: "#D6AD60",
          light: "#E9D1A1",
          dark: "#A77C34"
        },
        paper: "#F7F6F2"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,0.10)"
      }
    }
  },
  plugins: []
};

export default config;
