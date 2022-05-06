module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
    maxWidth: {
      '1/2': '75%',
    },
    btnColor: {
      'red':'#c91e50',
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
