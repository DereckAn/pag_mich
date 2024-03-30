import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#272f62",
        secondary: "#ffffff",
        tertary: "#292929",
        fourth: "#e4e2dd",
        color_azul_perry: "rgb(9, 233, 211)"
      },
    },
  },
  plugins: [],
};
export default config;
