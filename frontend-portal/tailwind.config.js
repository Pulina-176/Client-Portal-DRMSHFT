/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],

    
  theme: {
    
    extend: {
      colors: {
        primary: '#24101A',
        secondary: '#F6B900',
        tertiary: '#FFFFFF',
        addprim: '#411C30',
        addsec: '#FFE590',
        
      },
      animation: {
        loadingBar: 'loading-bar 2s infinite linear',
      },
      keyframes: {
        loadingBar: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    
      /* animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        moveToTopCenter: 'moveToTopCenter 2s ease-in-out',
        moveToTopLeft: 'moveToTopLeft 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%' : {opacity: 0 },
          '100%': {opacity: 1 },
        },
        moveToTopCenter: {
          '0%': {transform: 'translateY(100%)', opacity: 0},
          '100%': {transform: 'translateY(-50%)', opacity: 1},
        },
        moveToTopLeft: {
          '0%': { transform: 'translateY(0) translateX(0)', left: '50%', top: '50%' },
          '100%': { transform: 'translateY(-50%) translateX(-50%)', left: '0', top: '0' },
        },
      } */
    }, 
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    
  },
  plugins: [],
  
}

