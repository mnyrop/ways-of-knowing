module.exports = {
  important: true,
  theme: { 
    extend: {    
      fontFamily: { 
        sans: ['Jost', 'sans-serif'] 
      },
      colors: {
        'matte-black': '#261E21',
        'bone': '#F4EBE1',
        'linen': '#F9F5F0',
        'coffee': '#986E42',
        'coyote': '#805D38'
      }
    }
  }, 
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  content: ['./site/**/*.{html,liquid,md,js}']
};
