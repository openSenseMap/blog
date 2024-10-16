/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      logo: {
        green: "#4FAE48",
        blue: "#00B4E4",
      },
      title: {
        green: "#3D843F",
        blue: "#037EA1",
      },
    },
    extend: {},
  },
  plugins: [],
};
