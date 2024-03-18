/** @type {import('tailwindcss').Config} */

const radius_px_0_60 = { ...Array.from(Array(61)).map((_, i) => `${i}px`) };
const px_4multiple = {
  ...Array.from(Array(200))
    .fill(4)
    .map((v, i) => `${v * i}px`),
};

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0B243A",
        "primary-light": "#529EE4",
        primary: "#3481C9",
      },
      margin: px_4multiple,
      padding: px_4multiple,
      gap: px_4multiple,
      borderRadius: radius_px_0_60,
    },
  },
  plugins: [],
};
