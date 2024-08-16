module.exports = {
  important: true,
  theme: { 
    extend: {    
      fontFamily: { 
        sans: ['Jost', 'sans-serif'] 
      },
      colors: {
        'matte-black': '#261E21',
        'bone': '#EBDAC7',
        'coffee': '#986E42'
      }
    }
  }, 
  plugins: [
    // require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  content: ['./site/**/*.{html,liquid,md,js}']
};
