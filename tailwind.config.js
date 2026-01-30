import { Sidebar } from "./src/components/Sidebar";

/** @type {import('tailwindcss').Config} */
export default {
  // lightMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        sidebar: "var(--color-sidebar)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        card: "var(--color-card)",
      },
    },
  },
  plugins: [],
};
