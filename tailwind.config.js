/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

 theme: {
 screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#B22222", // Rich red
        secondary: "#D4AF37", // Gold
        accent: "#FFFFFF",  // Pure white
      },
      fontFamily: {
        sans: ["var(--font-playfair)"], // Elegant serif
        body: ["var(--font-lato)"],     // Clean sans-serif
      },
    },
  }
}