/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url('./assets/images/bg_home.svg')",
      },
    },
  },
  plugins: [],
}

