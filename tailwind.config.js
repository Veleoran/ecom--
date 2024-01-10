/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#2A254B",
        "primary": "#4E4D93",
        "light-grey": "#F9F9F9",
        "border-grey": "#EBE8F4",
        "white": "#FFFFFF",
        "border-dark": "#CAC6DA",
      },
      fontSize: {
        'h1': ['36px', '150%'],
        'h2': ['32px', '150%'],
        'h3': ['24px', '150%'],
        'h4': ['20px', '150%'],
        'h5': ['16px', '150%'],
        'h6': ['14px', '150%'],
        'body-sm': ['14px', '150%'],
        'body-md': ['16px', '150%'],
        'body-lg': ['18px', '150%'],
      },
    },
  },
  plugins: [],
};
