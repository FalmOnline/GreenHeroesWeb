/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gh-green': '#DCFF80',
        'gh-dark-green': '#7DAC00',
        'gh-dark-grey': '#363636',
        'gh-medium-grey': '#9F9F9F',
        'gh-green-shade': '#F3F6EA',
        'gh-grey-buttons': '#E6E7E3',
        'gh-danger': '#FF4747',
        'gh-info': '#30F2F2',
        'gh-warning': '#F7D764',
      }
    },
  },
  plugins: [],
};
