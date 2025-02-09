/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',  // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        ArabicText: ['ArabicText', 'sans-serif'],
        ArabicLogo: ['ArabicLogo', 'sans-serif']
      },
      colors: {
        primary: '#D2691E',    // Cinnamon (Light Theme)
        secondary: '#8B4513',  // Saddle Brown (Light Theme)
        accent: '#FFA500',     // Classic Orange (Light Theme)
        light: '#FFF3E0',      // Cream (Light Background)
        dark: '#4E342E',       // Dark Brown (Light Text)
        // Dark Mode Colors
        darkPrimary: '#5D4037',   // Dark Cinnamon
        darkSecondary: '#3E2723', // Deep Brown
        darkAccent: '#FF8C00',    // Dark Orange
        darkBackground: '#2C2C2C', // Dark Background
        darkText: '#E0E0E0',      // Light Gray Text
      },
    },
  },
  plugins: [],
}

