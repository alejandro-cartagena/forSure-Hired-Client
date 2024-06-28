/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "top-md": "0 -2px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
