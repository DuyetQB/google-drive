/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
      preflight: false,
    },
    theme: {
      screens: {
        mobile: { max: '768px' },
        tablet: { max: '1024px', min: '769px' },
        laptop: { min: '1024px'},
      },
      extend: {
        fontSize: {
          base: ['16px', { fontWeight: 400, lineHeigh: '22.4px' }],
          lg: ['18px', { fontWeight: 500, lineHeight: '26.06px' }],
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          primary: {
            // DEFAULT: '#1A6DFF',
            // light: '#337DFF',
            // dark: '#1A6DFF',
            DEFAULT: '#008CD6',
            light: '#C6EBFF',
            dark: '#008CD6',
          },
          tertiary: {
            DEFAULT: '#E1E4EC',
            light: '#CED3DF',
          },
          error: {
            DEFAULT: '#D25128',
            light: '#DD613A',
          },
          warning: {
            DEFAULT: '#FFA726',
            light: '#FFB343',
          },
          success: {
            DEFAULT: '#00D696',
            light: '#56BF5A',
          },
          black: {
            DEFAULT: '#48505F',
            light: '#6B7588',
            dark: '#2C3340',
            // 100: '#F0F2F9',
            // 200: '#E1E4EC',
            // 300: '#C2C8D3',
            // 400: '#9BA4B5',
            // 500: '#6B7588',
            // 600: '#48505F',
            // 700: '#2C3340',
          },
        },
      },
  
      plugins: [
        require('@tailwindcss/line-clamp'),
        require('prettier-plugin-tailwindcss')
      ]
  
    },
  }
  