/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        one: "#111111",
        two: "#2F2F2F",
        three: "#F6F6F6",
        four: "#FFCB74",
      },
    },
    plugins: [require("daisyui")],
  },
};
