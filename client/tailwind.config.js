// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          850: "#1e1e22",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e4e4e7",
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#2563eb",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
