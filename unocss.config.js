import { defineConfig, presetUno } from 'unocss'



export default defineConfig({
    shortcuts: {
      'service-card': 'p-6 bg-white shadow rounded ',
      'service-title': 'text-xl font-semibold mt-4',
      'service-desc': 'mt-2 text-gray-600',
      'service-link': 'text-blue-800 mt-4 block underline',
       'hover-imae' :'transition-transform duration-300 transform group-hover:-scale-x-100',
      'service-hover': ' group relative overflow-hidden  p-6 rounded-xl  transition-all hover:-translate-y-2',


    },
    theme: {
      extend: {
        animation: {
          'particle': 'particle 6s linear infinite',
        },
        keyframes: {
          particle: {
            '0%': { transform: 'translateY(0)', opacity: '0.7' },
            '100%': { transform: 'translateY(-100px)', opacity: '0' },
          },
        },
        
      },
      fontFamily: {
        sans: 'Quicksand, sans-serif',
      },
    },
    
    
  })
  