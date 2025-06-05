
import { defineConfig, presetUno } from 'unocss'


export default defineConfig({
  shortcuts: {
    // Service card
'service-card': 'p-6 bg-[#fff] shadow-lg rounded-xl leading-[24px] mt-[30px] px-[30px] py-[35px]',
    'service-title': 'text-xl font-bold mt-4',
    'service-desc': 'mt-2 text-gray-600',
    'service-link': 'text-blue-800 mt-4 block underline font-bold',
    'imae': 'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ',
    'service-hover': 'group relative overflow-hidden p-6 rounded-xl transition-all hover:-translate-y-2',


    // Container
    'container': '2xl:max-w-1400px xl:max-w-1140px lg:max-w-960px md:max-w-720px sm:max-w-540px w-full px-0.75rem mx-auto',


    // Partner section layout
       'partner-item': '5item-lg 3item-maxlg 2item-maxmd 1item-maxxs px-2.5 nth-6:max-md:ml-0 nth-11:ml-10%',
    'partner-logo': 'items-responsive items-custom',


    // Responsive item layout (không dùng !important)
    '5item-lg': 'lg:flex-[0_0_20%] lg:max-w-[20%]',
    '3item-maxlg': 'max-lg:flex-[0_0_33%] max-lg:max-w-[33%]',
    '2item-maxmd': 'max-md:flex-[0_0_50%] max-md:max-w-[50%]',
    '1item-maxxs': 'max-xs:flex-[0_0_100%] max-xs:max-w-full',
    // Logo style
    'items-responsive': 'max-sm:[padding:15px_30px] max-md:[padding:0px_15px] max-lg:[padding:0px_30px] lg:[padding:0px_20px]',
    'items-custom': 'relative block rounded-[5px] overflow-hidden mb-30px shadow-[0px_5px_15px_0px_rgb(82,90,101,0.1)]',
  },


  theme: {
    breakpoints: {
      xs: '425px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      custom: '900px',
    },
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


  variants: [
    // nth-child
    (matcher) => {
      const nthChildRE = /^nth-(\d+):/
      const match = matcher.match(nthChildRE)
      if (match) {
        return {
          matcher: matcher.replace(nthChildRE, ''),
          selector: s => `${s}:nth-child(${match[1]})`,
        }
      }
    },
  ],


  presets: [
    presetUno(),
    // Nếu bạn dùng @unocss/preset-attributify thì bật thêm:
    // presetAttributify()
  ],
})
