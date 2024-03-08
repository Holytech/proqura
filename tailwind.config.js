/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        artboard: "url('/Artboard.png')",
        shape: "url('/shape.png')",
        demo: "url('/demo.png')",
        handshake: "url('/handshake.png')",
      },
      fontFamily: {
        Quattrocento: "Quattrocento",
      },
      backgroundColor: {
        transparentPurple: "rgba(106, 121, 221, 0.5)",
      },
    },
  },
  plugins: [],
};
