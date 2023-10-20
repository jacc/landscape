/** @type {import('tailwindcss').Config} */

const { createPlugin } = require("windy-radix-palette");
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = createPlugin();

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        display: ["Gilda Display"],
      },
    },
  },
  plugins: [colors.plugin],
};
