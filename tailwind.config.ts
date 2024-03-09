import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Editorial New", "serif"],
      sans: [
        "Neue Montreal",
        "ui-sans-serif",
        "system-ui",
        "Segoe UI",
        "sans-serif",
      ],
      retron: ["Retron-2000", "Menlo", "monospace"],
      monospace: ["monospace"],
    },
    extend: {
      colors: {
        black: "#2D2D2D",
        white :"#FFFFFF",
        green :"#009379",
        red :"#FF6250",
        pink :"#F3AFA8",
        gray :"#F3F3F3",
        yellow :"#F7D684"
      },
      transitionDelay: {
        0: "0ms",
      },
      boxShadow: {
        autofill: "0 0 0 50px #c7ea26 inset",
        xl: "0 5px 25px -3px rgba(0 0 0 / 0.1), 0 0 10px -5px rgb(0 0 0 / 0.1)",
      },
      transitionProperty: {
        opacity: "opacity, visibility",
        transform: "transform, visibility",
      },
    },
  },
  plugins: [],
};
export default config;
