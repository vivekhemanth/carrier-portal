import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      "cupcake",
      "night",
      "bumblebee",
      "garden",
      "pastel",
      "emerald",
      "light",
      "dark",
      {
        mytheme: {
          primary: "#fde047",
          secondary: "#14b8a6",
          accent: "#9333ea",
          neutral: "#9ca3af",
          "base-100": "#ffffff",
          info: "#c026d3",
          success: "#4ade80",
          warning: "#fbbf24",
          error: "#db2777",
        },
      },
    ],
  },
};
export default config;
