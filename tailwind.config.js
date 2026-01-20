// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-80px) rotate(-4deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(-4deg)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(80px) rotate(4deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(4deg)" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
