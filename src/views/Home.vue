

<template>
  <!--gt -->
   <section
  class="relative z-0 w-screen min-h-screen flex flex-wrap items-center justify-center text-white font-quicksand box-border overflow-x-hidden"
  style="background: linear-gradient(to bottom, #021e7d 0%, #0573e4 100%)"
  >
    <ParticleBackground class="absolute inset-0 -z-10" />

    <div class="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl    gap-12 py-50 px-8 relative z-5">
      <!-- Left: Text Content -->
      <div class="space-y-7 flex flex-col justify-center items-center text-center  lg:items-start lg:text-left">
        <h1 class="text-[50px]  font-bold  text-white" style="line-height: 70px;">
          {{ $t('it_solution_heading') }}
        </h1>
        <p class="text-base text-white leading-[30px] max-w-3xl w-full">
          {{ $t('it_solution_description') }}
        </p>
        <div class="flex    gap-2">
          <button
            class="relative overflow-hidden inline-block text-center font-semibold font-quicksand text-base leading-[24px] px-[20px] py-[10px] rounded shadow-[0_7px_25px_0_#7b68ee40] border-none bg-white text-[#142b73] mr-[20px]"
            :class="hovered[0] ? 'text-white bg-[#142b73]' : 'text-[#142b73] bg-white'"
            @mouseenter="startRipple(0, $event)"
            @mousemove="updateRipple(0, $event)"
            @mouseleave="clearRipple(0)"
          >
            <span
              v-if="ripple[0]"
              class="absolute z-0 rounded-full pointer-events-none"
              :style="rippleStyle[0]"
            ></span>
            <span class="relative z-10">{{ $t('services1') }}</span>
          </button>
          <button
            class="relative overflow-hidden inline-block text-center font-semibold font-quicksand text-base leading-[24px] px-[35px] py-[14px] rounded shadow-[0_7px_25px_0_#7b68ee40] border-none bg-white text-[#142b73] mr-[20px]"
            :class="hovered[1] ? 'text-white bg-[#142b73]' : 'text-[#142b73] bg-white'"
            @mouseenter="startRipple(1, $event)"
            @mousemove="updateRipple(1, $event)"
            @mouseleave="clearRipple(1)"
          >
            <span
              v-if="ripple[1]"
              class="absolute z-0 rounded-full pointer-events-none"
              :style="rippleStyle[1]"
            ></span>
            <span class="relative z-10">{{ $t('contact_us') }}</span>
          </button>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="flex flex-col w-full">
        <img
          src="@/assets/images/home.png"
          alt="Datacenter Illustration"
          class="mx-auto w-full max-w-[600px] rounded md:max-w-lg h-auto text-center"
        />
      </div>
    </div>

    <!-- Background Shape -->
    <div class="absolute bottom-0 left-0 w-full z-0">
      <img
        src="@/assets/images/home-wave-bg.svg"
        alt="Background Wave"
        class="w-full block"
      />
    </div>
  </section>


  
<!--nd1 -->
  <section class="about py-20">
    <div class="max-w-screen-2xl mx-auto px-4 md:px-8 grid  grid-cols-1  lg:grid-cols-2 gap-10 items-center">

      <!-- Left: Text Content -->
      <div>
        <h2 class="text-lg text-blue-800 font-semibold tracking-[0.3px] uppercase">
          {{ $t('about') }}
        </h2>
        <h3 class="text-4xl text-black font-bold mt-4 leading-tight">VPMEDIA</h3>

        <p class="mt-10 text-gray-600 text-base  leading-[28.8px] tracking-[0.3px]">
          {{ $t('about_subtitle') }}
          {{ $t('about_description') }}
        </p>

        <router-link
          to="/ve-chung-toi"
          class="bg-blue-900 text-white py-3 px-6 rounded hover:bg-blue-700 text-center mt-8 inline-block text-lg font-medium"
        >
          {{ $t('read_more') }}
        </router-link>
      </div>

      <!-- Right: Image & Overlay -->
      <div class="relative">
        <img src="@/assets/images/about.jpg" alt="About Us" class="rounded shadow w-full" />

        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div class="bg-white rounded-xl shadow-lg p-2 flex items-center gap-4 w-fit">
            <img src="@/assets/images/about-sub.jpg" alt="Overlay Icon" class="w-16 h-16" />
            <div>
              <h3 class="text-3xl font-bold text-orange-600 leading-none">12</h3>
              <span class="text-gray-600 text-sm">{{ $t('years_of_innovation') }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!--nd2 -->
   
<section class="serviece py-16 bg-[#fafbfc]">
      <div class="max-w-screen-2xl mx-auto mx-auto px-4 md:px-10 lg:px-10">
        <h1 class="text-xl font-bold text-center text-orange-600 mb-4">
          {{ $t('services.providedTitle') }}
        </h1>
        <h2 class="text-4xl font-bold text-center text-black mb-10">
          {{ $t('services.mainTitle') }}
        </h2>

     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black  md:mt-5 ">
          <!-- Service Card 1 -->
         <div class="service-card service-hover group text-left  ">
              <img
                src="@/assets/images/van-hanh-he-thong.png"
                alt=""
             class="'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ">
              <h3 class="service-title">{{ $t('services.systemOperation.title') }}</h3>
              <p class="service-desc">{{ $t('services.systemOperation.desc') }}</p>
              <a href="#" class="service-link font-bold inline-block">{{ $t('services.details') }}</a>
            </div>

          <!-- Service Card 2 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/tin-nhan-sms.png" alt=""
            class="'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ">            
            <h3 class="service-title">{{ $t('services.sms.title') }}</h3>
            <p class="service-desc">{{ $t('services.sms.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 3 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/cuoc-goi-thuong-hieu.png" alt="" 
             class="'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ">
            <h3 class="service-title">{{ $t('services.voiceBrand.title') }}</h3>
            <p class="service-desc">{{ $t('services.voiceBrand.desc') }}</p>
            <a href="#" class="service-link inline-block  ">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 4 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/dich-vu-gia-tri-gia-tang.png" alt="" 
             class="'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ">
            <h3 class="service-title">{{ $t('services.vas.title') }}</h3>
            <p class="service-desc">{{ $t('services.vas.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 5 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/phat-trien-ung-dung-va-games.png" alt="" 
             class="'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ">
            <h3 class="service-title">{{ $t('services.devGames.title') }}</h3>
            <p class="service-desc">{{ $t('services.devGames.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 6 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/giai-phap-tong-dai.png" alt=""
             class="'inline w-[50px] h-[50px] m-[0_0_15px_0] transition-transform duration-300 transform group-hover:-scale-x-100 ">
            <h3 class="service-title">{{ $t('services.voip.title') }}</h3>
            <p class="service-desc">{{ $t('services.voip.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>
        </div>
      </div>
  </section>


  <!--nd3 --> 
  <section class="applications py-20  max-w-screen-2xl mx-auto bg-#fafbfc  md:px-10 lg:px-10">
  <div class=" mx-auto  w-full ">
    <h1 class="text-xl font-bold text-center  text-orange-600 mb-4">
      {{ $t('applications.sectionTitle') }}
    </h1>
    <h2 class="text-4xl text-black font-bold text-center mb-8">
      {{ $t('applications.sectionSubtitle') }}
    </h2>

    <!-- Nút chọn ứng dụng -->
   <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 w-full">
 <button
  v-for="(app, index) in applications"
  :key="index"
   :class="[
    'rounded-[3px]',
    'shadow-[0_5px_40px_0_rgba(0,0,0,0.11)]',
    'text-[17px]',
    'leading-[25.5px]',
     'font-quicksand',
    'font-bold',
    'text-center',
    'px-[15px] py-[12px]',
    'w-full',
    'border-none',
    selectedApp === index
      ? 'bg-[#142b73] text-white'
     : 'bg-#fafbfc text-[#292a2c] hover:bg-[#142b73] hover:text-white',    'transition-all',
  ]"
  @click="selectApp(index)"
>
  {{ $t(`applications.apps[${index}].title`) }}
</button>
</div>

<transition :name="direction === 'up' ? 'slide-down' : 'slide-up'" mode="out-in">
  <div
    v-if="selectedApp !== null"
    :key="selectedApp"
    class="grid grid-cols-1 lg:grid-cols-2 gap-6"
  >
        <div>
          <h3 class="text-4xl  font-bold  text-black">
            {{ $t(`applications.apps[${selectedApp}].title`) }}
          </h3>
          <p class="mt-4 leading-[28.8px] tracking-[0.3px] text-gray-600">
            {{ $t(`applications.apps[${selectedApp}].description`) }}
          </p>
                <ul class="mt-4 text-gray-600 text-left ml--8 space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="bg-[#002D7E] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      <font-awesome-icon icon="check" />
                    </span>
                    {{ $t(`applications.apps[${selectedApp}].features`) }}
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="bg-[#002D7E] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      <font-awesome-icon icon="check" />
                    </span>
                    {{ $t(`applications.apps[${selectedApp}].a`) }}
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="bg-[#002D7E] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      <font-awesome-icon icon="check" />
                    </span>
                    {{ $t(`applications.apps[${selectedApp}].b`) }}
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="bg-[#002D7E] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      <font-awesome-icon icon="check" />
                    </span>
                    {{ $t(`applications.apps[${selectedApp}].c`) }}
                  </li>
                </ul>

          <p class="mt-4 text-gray-600">
            {{ $t(`applications.apps[${selectedApp}].titles`) }}
          </p>
          <a href="#" class="text-orange-500 mt-4">{{ $t('read_more') }}</a>
        </div>
        <div class="flex justify-center items-center w-full mx-auto"> ">
          <img
            :src="applications[selectedApp].image"
            alt="App Image"
            class="rounded shadow w-full h-full "
          />
        </div>
      </div>
    </transition>
  </div>
</section>

<!--nd4 -->
    <section
    class="w-full  max-w-screen-4xl mx-auto mb-12 bg-cover bg-center text-white  text-center py-20 px-4 bg-[#001d4c] bg-opacity-50 relative after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-0  "
      :style="`background-image: url(${bg})`"
      
      >
    <div class="relative z-1">
      <p class="text-orange-500 font-700  mb-2">{{ $t('collaboration.title') }}</p>
    <h2 class="text-4xl md:text-4xl font-bold mb-4">{{ $t('collaboration.heading') }}</h2>
      <p class="text-white font-quicksand text-[19px] leading-[32px] tracking-[0.3px] my-5 text-center mx-auto max-w-4xl">
        {{ $t('collaboration.description') }}
      </p>
  <button
  class="relative overflow-hidden inline-block text-center font-semibold font-quicksand text-base leading-[24px] px-[35px] py-[14px] rounded-[3px] shadow-[0_7px_25px_0_#7b68ee40] border-none bg-white text-[#142b73] mr-[20px]"
  :class="hovered[3] ? 'text-white bg-[#142b73]' : 'text-[#142b73] bg-white'"
  @mouseenter="startRipple(3, $event)"
  @mousemove="updateRipple(3, $event)"
  @mouseleave="clearRipple(3)"
>
  <span
    v-if="ripple[3]"
    class="absolute z-0 rounded-full pointer-events-none"
    :style="rippleStyle[3]"
  ></span>
  <span class="relative z-10">{{ $t('collaboration.button') }}</span>
</button>
    </div>
  </section>


<!--nd5 -->
  <section class="relative bg-[#fff] overflow-hidden z-1 pt-25 pb-17.5">
    <div class="container">
      <div class="max-md:mb-7.5 text-center mb-12.5 lh-normal">
        <h6 class="text-16px font-700 text-[#ec5a26] tracking-0.5px uppercase">Được tin tưởng bởi nhiều khách hàng</h6>
        <h2 class="text-35px font-900 text-[#0b0b31] [margin:10px_0_0_0] uppercase">Khách hàng của chúng tôi</h2>
      </div>
      <div class="flex flex-wrap mx-auto  items-center">
        <div v-for="(logo, index) in logos" :key="index" class="partner-item">
         <a href="#0" class="partner-logo flex items-center justify-center h-30">
        <img :src="logo" alt="client logo" class="object-contain h-full max-h-full" />
                     </a>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
import ParticleBackground from '@/components/ParticleBackground.vue'

import test from '@/views/test.vue'

import bg from '@/assets/images/banner-bg.jpg';


const logos = [
'./src/assets/images/client-01.png',
  './src/assets/images/client-02.png',
  './src/assets/images/client-03.png',
  './src/assets/images/client-04.png',
  './src/assets/images/client-05.png',
  './src/assets/images/client-06.png',
  './src/assets/images/client-07.png',
  './src/assets/images/client-08.png',
  './src/assets/images/client-09.png',
  './src/assets/images/client-10.png',
  './src/assets/images/client-11.png',
  './src/assets/images/client-12.png',
  './src/assets/images/client-13.png',
  './src/assets/images/client-14.png',
];


import { ref } from 'vue';

const particlesOptions = ref({
  background: {
    color: {
      value: '#001d4c',
    },
  },
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: '#ffffff',
    },
    links: {
      enable: true,
      color: '#ffffff',
      distance: 150,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
});

// Danh sách ứng dụng
const applications = ref([
  
  {
    image: './src/assets/images/vbot.png',
  },
  {
    image: './src/assets/images/vscan.png',
  },
  {
    image: './src/assets/images/voffice.png',
  },
  {
    image: './src/assets/images/golden_health.png',
  },
]);



const selectedApp = ref(0)
const direction = ref('down')

const selectApp = (index) => {
  direction.value = index > selectedApp.value ? 'down' : 'up'
  selectedApp.value = index
}

const ripple = ref([false, false, false])
const rippleStyle = ref([{}, {}, {}])
const hovered = ref([false, false, false])

function startRipple(index, event) {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2

  hovered.value[index] = true
  ripple.value[index] = true
  rippleStyle.value[index] = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${event.clientX - rect.left - size / 2}px`,
    top: `${event.clientY - rect.top - size / 2}px`,
    transform: 'scale(0)',
    opacity: '1',
    transition: 'transform 7s ease-out, opacity 7s ease-out',
    position: 'absolute',
    backgroundColor: '#142b73',
    zIndex: 1,
    borderRadius: '50%',
    pointerEvents: 'none',
  }

  requestAnimationFrame(() => {
    rippleStyle.value[index].transform = 'scale(9)'
    rippleStyle.value[index].opacity = '0'
  })
}

function updateRipple(index, event) {
  if (!ripple.value[index]) return
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2
  rippleStyle.value[index].left = `${event.clientX - rect.left - size / 2}px`
  rippleStyle.value[index].top = `${event.clientY - rect.top - size / 2}px`
}

function clearRipple(index) {
  ripple.value[index] = false
  hovered.value[index] = false
}
</script>
