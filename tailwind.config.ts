import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        shipmentXtheme: {
          primary: "#0369a1",
          secondary: "#64748b",
          accent: "#fde047",
          neutral: "#71717a",
          "base-100": "#ffffff",
          info: "#06b6d4",
          success: "#22c55e",
          warning: "#fb923c",
          error: "#e11d48",
        },
      },
    ],
  },
};
export default config;
