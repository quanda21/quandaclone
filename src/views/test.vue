<template>
   <div class="w-full   flex justify-between  py-4 px-4 md:px-10 lg:px-26  absolute top-0 left-0 right-0  z-16 h-auto bg-transparent">

    <div class="logo">
      <router-link to="/">
        <img
          src="@/assets/images/logo.png"
          alt="VP Media"
          class="  container mx-auto transition-transform duration-300"
        />
      </router-link>
    </div>
    <!-- <ParticleBackground class= "z-10"/> -->

    <nav class="hidden md:flex justify-center items-center text-slm  text-white   uppercase "  style="font-size: 16px;" >
      <ul class="flex space-x-6 list-none    leading-tight  ">
        <li> 
          <router-link to="/" class="no-underline text-white font-600 ">{{ $t('home') }}</router-link>
        </li>
        <li>
          <router-link to="/ve-chung-toi" class="no-underline text-white font-600 ">{{ $t('about') }}</router-link>
        </li>
        <li class="relative group dropdown-bridge">
  <router-link to="/dich-vu" class="no-underline text-white font-600">
    {{ $t('se') }}
    <el-icon><ArrowDown /></el-icon>
  </router-link>
  <ul class="absolute hidden group-hover:block bg-white shadow-md rounded w-80 text-left z-10 mt-20px">
    <li><router-link to="/dich-vu" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light ">{{ $t('sms') }}</router-link></li>
    <li><router-link to="/dichvu-cuoc-goi-thuong-hieu" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('branded_calls') }}</router-link></li>
    <li><router-link to="/dich-vu-GTVT" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('value_added_services') }}</router-link></li>
    <li><router-link to="/dich-vu-ung-dung-games" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('app_development') }}</router-link></li>
    <li><router-link to="/dich-vu-GTVT" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('system_operations') }}</router-link></li>
  </ul>
</li>
<li class="relative group dropdown-bridge">
  <router-link to="/Giai-phap" class="no-underline text-white font-600">
    {{ $t('solutions') }}
    <el-icon><ArrowDown /></el-icon>
  </router-link>
  <ul class="absolute hidden group-hover:block bg-white shadow-md rounded w-80 text-left z-10 mt-20px">
    <li><router-link to="/Giai-phap" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('voip') }}</router-link></li>
    <li><router-link to="/Giai-phat-tttn" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('messaging') }}</router-link></li>
    <li><router-link to="/Giai-phap" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light">{{ $t('email') }}</router-link></li>
  </ul>
</li>
        <li>
          <router-link to="/lien-he" class="no-underline text-white font-600 ">{{ $t('recruitment') }}</router-link>
        </li>
        <li>
          <router-link to="/lien-he" class="no-underline text-white font-600 ">{{ $t('contact') }}</router-link>
        </li>
      </ul>
    </nav>
       <!-- <el-button class="bg-[#142b73] text-white  px-5 py-6 hover:bg-blue-700 transition duration-300  border-none rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]" >
            
                Hotline: +84(0) 902 825 586
       </el-button> -->
       <!-- hiệu ứng ripple khi hover vào button -->
       <button
    ref="button"
    class="relative overflow-hidden bg-[#142b73] text-white px-7 py-5  hover:text-white transition duration-300 border-none rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] hidden sm:block"
      @mouseenter="startRipple"
    @mousemove="updateRipple"
    @mouseleave="clearRipple"
  >
    <span
      v-if="ripple"
      class="absolute bg-white/20 rounded-full pointer-events-none"
      :style="rippleStyle"
    ></span>
    Hotline: +84(0) 902 825 586
  </button>

    <el-dropdown  @command="changeLanguage">
    <div class="flex items-center cursor-pointer text-white">
      <el-icon><ChromeFilled /></el-icon>
            <span class="ml-1">{{ currentLocale.toUpperCase() }}</span>
      <el-icon class="ml-1"><ArrowDown /></el-icon>
    </div>

    <template #dropdown>
      <el-dropdown-menu class="bg-white text-black rounded-lg ">
        <el-dropdown-item command="vi" >
           Tiếng Việt
        </el-dropdown-item>
        <el-dropdown-item command="en"  >
           Tiếng Anh
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>


  
  
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { ChromeFilled, ArrowDown } from '@element-plus/icons-vue'


const { locale } = useI18n();
const currentLocale = ref(locale.value);

function changeLanguage(value) {
  locale.value = value;
  currentLocale.value = value;
}

const ripple = ref(false)
const rippleStyle = ref({})
const buttonStyle = ref({ backgroundColor: '#142b73' })

function startRipple(event) {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2  

  ripple.value = true
  rippleStyle.value = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${event.clientX - rect.left - size / 2}px`,
    top: `${event.clientY - rect.top - size / 2}px`,
    transform: 'scale(0)',
    opacity: '0.7',
    transition: 'transform 5s ease, opacity 7s ease',
    position: 'absolute',
 backgroundColor:' rgb(5 107 217)', // Màu nền của button
  }
  buttonStyle.value.backgroundColor = 'rgba(0, 0, 255, 0.7)'; // Màu rõ hơn khi ripple bắt đầu

  // Khi hover vào, bắt đầu scale lớn ra
  requestAnimationFrame(() => {
    rippleStyle.value.transform = 'scale(8)'
    rippleStyle.value.opacity = '0'
  })
}

function updateRipple(event) {
  if (!ripple.value) return

  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2

  rippleStyle.value.left = `${event.clientX - rect.left - size / 2}px`
  rippleStyle.value.top = `${event.clientY - rect.top - size / 2}px`
}

function clearRipple() {
  ripple.value = false
}


</script>


<style scoped>
.bg-dark {
  background-color: #96b2d8; /* màu tối */
}


:deep .el-button:hover{
  
  background-color:  rgb(5 107 217) ; /* màu sáng khi hover */
  color: white; /* màu chữ khi hover */
 
}

.dropdown-bridge::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 20px; /* khoảng trống hover */
  background: transparent;
  pointer-events: auto;
  z-index: 1;
}


</style>