import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    // Các shortcut hiện tại
    'service-card': 'p-6 bg-white shadow rounded',
    'service-title': 'text-xl font-semibold mt-4',
    'service-desc': 'mt-2 text-gray-600',
    'service-link': 'text-blue-800 mt-4 block underline',
    'hover-imae': 'transition-transform duration-300 transform group-hover:-scale-x-100',
    'service-hover': 'group relative overflow-hidden p-6 rounded-xl transition-all hover:-translate-y-2',

    // container layout
    'container': '2xl:max-w-1536px xl:max-w-1140px lg:max-w-960px md:max-w-720px sm:max-w-540px w-full px-0.75rem mx-auto',

    // khách hàng
    'partner-item': '5item-lg 3item-maxlg 2item-maxmd 1item-maxxs px-2.5 nth-6:max-md:ml-0 nth-11:ml-10%',
    'partner-logo': 'items-responsive items-custom ',

    // responsive item layout
    '5item-lg': 'lg:!flex-[0_0_20%] lg:!max-w-[20%]',
    '3item-maxlg': 'max-lg:!flex-[0_0_33%] max-lg:!max-w-[33%]',
    '2item-maxmd': 'max-md:!flex-[0_0_50%] max-md:!max-w-[50%]',
    '1item-maxxs': 'max-xs:!flex-[100%] max-xs:!max-w-[100%]',

    // logo a link
    'items-responsive': 'max-sm:![padding:15px_30px] max-md:![padding:0px_15px] max-lg:![padding:0px_30px] lg:![padding:0px_20px]',
    'items-custom': 'relative block rounded-[5px] overflow-hidden mb-30px shadow-[0px_5px_15px_0px_rgb(82,90,101,0.1)]',
  },

  theme: {
    // breakpoints: {
    //   xs: "320px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    //   custom: "900px" // Thêm breakpoint tùy chỉnh
    // },

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
    // Variant cho nth-child(n)
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
})