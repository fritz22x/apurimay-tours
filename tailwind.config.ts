import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe4",
        forest: "#1f4d3d",
        canyon: "#9b5f2d",
        sun: "#d28a2d",
        mist: "#e3f0ef",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(21, 39, 33, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
