

<template>
  <!--gt -->
  <section
  
  class="relative w-full text-white  min-h-screen z-0 " 
  style="background: linear-gradient(to bottom, #021e7d 0%, #0573e4 100%)"
>
<!-- <div class="w-full mx-auto gap-10 items-center relative z-5 py-20  md:px-12 lg:px-24 flex flex-col md:flex-row"> -->

  <div class=" container w-full mx-auto    gap-10 relative z-5  py-35  h-auto md:px-10 lg:px-25  flex flex-col md:flex-row   ">
    <ParticleBackground class="  inset-0 -z-10"/>

    <!-- Left: Text Content  -->
    <div class="space-y-6 flex flex-col px-4  justify-center"> 
      <h1 class=" lg:text-5xl font-bold leading-tight  " style="line-height: 70px;"  >
        {{ $t('it_solution_heading') }}
      </h1>
      <p class="  leading-relaxed text-white80">
        {{ $t('it_solution_description') }}      </p>
  <div class="flex flex-wrap gap-6">
    <button 
      class="relative overflow-hidden w-40 h-12 font-bold border bg-white  transition-colors duration-500 rounded"
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
      class="relative overflow-hidden text-[#142b73] bg-white w-50 h-12 transition-colors duration-500 border-none rounded-lg"
      :class="hovered[1] ? 'text-white bg-[#142b73]' : 'text-[#142b73] bg-white'"
      @mouseenter="startRipple(1, $event)"
      @mousemove="updateRipple(1, $event)"
      @mouseleave="clearRipple(1)"
    >
      <span 
        v-if="ripple[1]" 
        class="absolute z-0 bg-[#142b73] rounded-full pointer-events-none"
        :style="rippleStyle[1]"
      ></span>
      <span class="relative z-10">{{ $t('contact_us') }}</span>
    </button>
  </div>
    </div>
<!-- <Test /> -->
    <!-- Right: Image -->
<div class="flex flex-col w-full">
  <img
    src="@/assets/images/home.png"
    alt="Datacenter Illustration"
    class="mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
  />
</div>
    
    
  </div>

  <!-- Background Shape -->
  
  <div  class="absolute bottom-0 left-0 w-full z-0"> 
    <img
  src="@/assets/images/home-wave-bg.svg"
  alt="Background Wave"
  class="w-full block "
/>

</div>
</section>

  
<!--nd1 -->
<section class="about py-20">
  <div class="container mx-auto px-20 flex flex-col md:px-10 lg:px-25 md:flex-row">
    <div class="md:w-1/2 flex flex-col justify-center">
      <h2 class="text-lg text-blue-800 font-semibold tracking-wide uppercase">
        {{ $t('about') }}
      </h2>
      <h3 class="text-5xl text-black font-bold mt-4 leading-tight">VPMEDIA</h3>

      <p class="mt-10 text-gray-600 text-lg leading-relaxed">
        {{ $t('about_description') }}
      </p>
      <router-link
        to="/ve-chung-toi"
        class="bg-blue-900 text-white w-35 py-3 px-6 rounded hover:bg-blue-700 text-center mt-8 inline-block text-lg font-medium"
      >
        {{ $t('read_more') }}
      </router-link>
    </div>
    <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0 relative">
      <img src="@/assets/images/about.jpg" alt="About Us" class="rounded shadow w-full" />

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 w-fit">
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
   
<section class="serviece py-16 bg-gray-100">
      <div class="container mx-auto px-4 md:px-10 lg:px-25">
        <h1 class="text-xl font-bold text-center text-orange-600 mb-4">
          {{ $t('services.providedTitle') }}
        </h1>
        <h2 class="text-4xl font-bold text-center text-black mb-10">
          {{ $t('services.mainTitle') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          <!-- Service Card 1 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/van-hanh-he-thong.png" alt="" class="w-15 h-15 transition-transform duration-300 transform group-hover:-scale-x-100">
            <h3 class="service-title">{{ $t('services.systemOperation.title') }}</h3>
            <p class="service-desc">{{ $t('services.systemOperation.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 2 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/tin-nhan-sms.png" alt="" class="w-15 h-15 mb-4 transition-transform duration-300 transform group-hover:-scale-x-100">
            <h3 class="service-title">{{ $t('services.sms.title') }}</h3>
            <p class="service-desc">{{ $t('services.sms.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 3 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/cuoc-goi-thuong-hieu.png" alt="" class="w-15 h-15 mb-4 transition-transform duration-300 transform group-hover:-scale-x-100">
            <h3 class="service-title">{{ $t('services.voiceBrand.title') }}</h3>
            <p class="service-desc">{{ $t('services.voiceBrand.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 4 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/dich-vu-gia-tri-gia-tang.png" alt="" class="w-15 h-15 mb-4 transition-transform duration-300 transform group-hover:-scale-x-100">
            <h3 class="service-title">{{ $t('services.vas.title') }}</h3>
            <p class="service-desc">{{ $t('services.vas.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 5 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/phat-trien-ung-dung-va-games.png" alt="" class="w-15 h-15 mb-4 transition-transform duration-300 transform group-hover:-scale-x-100">
            <h3 class="service-title">{{ $t('services.devGames.title') }}</h3>
            <p class="service-desc">{{ $t('services.devGames.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>

          <!-- Service Card 6 -->
          <div class="service-card service-hover group">
            <img src="@/assets/images/giai-phap-tong-dai.png" alt="" class="w-15 h-15 mb-4 transition-transform duration-300 transform group-hover:-scale-x-100">
            <h3 class="service-title">{{ $t('services.voip.title') }}</h3>
            <p class="service-desc">{{ $t('services.voip.desc') }}</p>
            <a href="#" class="service-link inline-block">{{ $t('services.details') }}</a>
          </div>
        </div>
      </div>
  </section>


  <!--nd3 --> 
  <section class="applications py-20 md:px-10 lg:px-24">
  <div class="container mx-auto w-full">
    <h1 class="text-xl font-bold text-center text-orange-600 mb-4">
      {{ $t('applications.sectionTitle') }}
    </h1>
    <h2 class="text-4xl text-black font-bold text-center mb-8">
      {{ $t('applications.sectionSubtitle') }}
    </h2>

    <!-- Nút chọn ứng dụng -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5 mb-10 w-full">
      <el-button
        v-for="(app, index) in applications"
        :key="index"
          :class="[
        'px-10 py-5 text-lg font-semibold rounded-lg shadow-md transition-all',
        selectedApp === index
          ? 'bg-[#142b73] text-white'
          : 'bg-gray-200 text-black hover:bg-[#142b73] hover:text-white',
      ]"
        @click="selectApp(index)"
      >
        {{ $t(`applications.apps[${index}].title`) }}
      </el-button>
    </div>

    <transition name="slide-fade" mode="out-in">
      <div
        v-if="selectedApp !== null"
        :key="selectedApp"
        class="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h3 class="text-4xl font-bold text-black">
            {{ $t(`applications.apps[${selectedApp}].title`) }}
          </h3>
          <p class="mt-4 text-gray-600">
            {{ $t(`applications.apps[${selectedApp}].description`) }}
          </p>
          <ul class="mt-4 text-gray-600">
            <li
              v-for="(feature, index) in applications[selectedApp].features"
              :key="index"
            >
              ✔ {{ $t(`applications.apps[${selectedApp}].features[${index}]`) }}
            </li>
          </ul>
          <p class="mt-4 text-gray-600">
            {{ $t(`applications.apps[${selectedApp}].titles`) }}
          </p>
          <a href="#" class="text-orange-500 mt-4">{{ $t('read_more') }}</a>
        </div>
        <div class="flex justify-center items-center">
          <img
            :src="applications[selectedApp].image"
            alt="App Image"
            class="rounded shadow w-3/4 md:w-2/3"
          />
        </div>
      </div>
    </transition>
  </div>
</section>

<!--nd4 -->
    <section
    class="w-full bg-cover bg-center text-white  text-center py-20 px-4 bg-[#001d4c] bg-opacity-50 relative after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-0  "
      :style="`background-image: url(${bg})`"
      
      >
    <div class="relative z-1">
      <p class="text-orange-500 font-semibold mb-2">{{ $t('collaboration.title') }}</p>
    <h2 class="text-2xl md:text-4xl font-bold mb-4">{{ $t('collaboration.heading') }}</h2>
    <p class="max-w-3xl mx-auto mb-6 leading-relaxed">
      {{ $t('collaboration.description') }}    </p>
    <button class="bg-white text-blue-800 font-semibold px-6 py-2 rounded border border-white hover:bg-blue-100">
      {{ $t('collaboration.button') }}
    </button>
    </div>
  </section>


<!--nd5 -->
<section class="py-12 text-center bg-gray-50  ">
    <p class="text-orange-500 font-semibold text-sm tracking-wider mb-2 ">
      {{ $t('clients.trustedBy') }}    </p>
    <h2 class="text-3xl font-bold text-blue-900 mb-10">{{ $t('clients.ourClients') }}</h2>
   
    <div class="flex flex-wrap justify-center gap-24px 2xl:px-250px">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-30 transition-transform hover:scale-105 w-250px "
      >
        <img :src="logo" alt="Client Logo" class="max-h-20 max-w-full object-contain" />
    </div>
`   
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

const selectedApp = ref(0);


// chọn ứng dụng
const selectApp = (index) => {
  selectedApp.value = index;
};

const ripple = ref([false, false])
const rippleStyle = ref([{}, {}])
const hovered = ref([false, false])

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
