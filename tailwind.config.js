/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFF00",      // Noir (fond principal)
        secondary: "#000000",    // Jaune (accent / texte secondaire)
        "primary-text": "#FFFF00",   // Texte jaune
        "secondary-text": "#FFFF00", // Texte jaune (peut être fusionné)
      },
    },
  },
  plugins: [],
}
