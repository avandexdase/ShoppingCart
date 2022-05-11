module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    // screens: {
    //   sm: '625px',
    //   md: '1000px',
    //   lg: '1250px',
    //   xl: '1440px',
    // },
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
    },
    width: {
      '400': '400px'
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
