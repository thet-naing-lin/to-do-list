/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Sedan SC", "serif"],
        body: ["Kode Mono", "monospace"],
      },
    },
  },
  plugins: [],
}