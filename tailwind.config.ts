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
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        // },
        background: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--background-foreground))",
        },
        text: {
          DEFAULT: "hsl(var(--text))",
          secondary: "hsl(var(--text-secondary))",
        },
        primary: "#272f62",
        secondary: "#ffffff",
        tertary: "#292929",
        fourth: "#e4e2dd",
        color_azul_perry: "rgb(9, 233, 211)",
        vainilla: "#F5ECD7",
        textcolor: "#000000",
        naranja: "#Fb7e00",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
    },
  },
  plugins: [],
};
export default config;
