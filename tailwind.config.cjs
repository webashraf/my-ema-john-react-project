/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#89dd5f",
        
"secondary": "#fc83a9",
        
"accent": "#1c42a0",
        
"neutral": "#1F1C2B",
        
"base-100": "#2D3C5D",
        
"info": "#6496E8",
        
"success": "#167951",
        
"warning": "#F2D769",
        
"error": "#E93F67",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
