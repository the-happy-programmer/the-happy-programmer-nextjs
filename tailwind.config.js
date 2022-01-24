module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './widget/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    colors: {
      accent: '#0041d6',
      darkaccent: '#4198ff',
      danger: '#DD4A68',
      success: '#669900',
      gray: {
        50: '#fff',
        100: '#FAFAFA',
        200: '#EAEAEA',
        300: '#999',
        400: '#888',
        500: '#666',
        600: '#444',
        700: '#333',
        800: '#111',
        900: '#000',
      },
    },
    extend: {},
    screens: {
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1024px' },
      xl: { min: '1024px' },
    },
    container: {
      center: true,
      maxWidth: {
        sm: '660px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [],
};
