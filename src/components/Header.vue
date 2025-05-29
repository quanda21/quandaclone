<template>
  <div
    :class="['fixed top-0 left-0  right-0 z-50 bg-white shadow-sm transition-transform duration-700', 
      { 'slide-in': isScrolled, 'slide-out': !isScrolled }]"
  >
    <div class="w-full max-w-screen-xl  mx-auto px-4  md:px-7 lg:px-7 py-4 flex justify-between items-center">

      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo-black.png"
            alt="VP Media"
            class="transition-transform duration-300"
          />
        </router-link>
      </div>

    <nav class="desktop-only hidden md:flex flex-1 justify-center items-center text-black uppercase" style="font-size: 15px;">
        <ul class="flex space-x-6 list-none leading-tight">
          <li>
            <router-link to="/" class=" text-black font-600 hover:text-blue-700">{{ $t('home') }}</router-link>
          </li>
          <li>
            <router-link to="/ve-chung-toi" class="no-underline text-black  font-600 hover:text-blue-700" > {{ $t('about') }}</router-link>
          </li>
          <li class="relative group dropdown-bridge">
            <router-link to="/dich-vu" class="no-underline text-black font-600 hover:text-blue-700">
              {{ $t('se') }}
              <el-icon><ArrowDown /></el-icon>
            </router-link>
          <ul class="absolute hidden group-hover:block bg-white shadow-md rounded w-80 text-left z-10 mt-5">
              <li><router-link to="/dich-vu" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-light ">{{ $t('sms') }}</router-link></li>
              <li><router-link to="/dichvu-cuoc-goi-thuong-hieu" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('branded_calls') }}</router-link></li>
              <li><router-link to="/dich-vu-GTVT" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('value_added_services') }}</router-link></li>
              <li><router-link to="/dich-vu-ung-dung-games" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('app_development') }}</router-link></li>
              <li><router-link to="/dich-vu-van-hanh" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('system_operations') }}</router-link></li>
            </ul>
          </li>
          <li class="relative group dropdown-bridge">
            <router-link to="/Giai-phap" class="no-underline text-black font-600 hover:text-blue-700">
              {{ $t('solutions') }}
              <el-icon><ArrowDown /></el-icon>
            </router-link>
            <ul class="absolute hidden group-hover:block bg-white shadow-md rounded w-80 text-left z-10 mt-5">
              <li><router-link to="/Giai-phap" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('voip') }}</router-link></li>
              <li><router-link to="/Giai-phat-tttn" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('messaging') }}</router-link></li>
              <li><router-link to="/Giai-phap" class="block px-4 py-2 text-gray-800 hover:bg-[#142b73] hover:text-white">{{ $t('email') }}</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/lien-he" class="no-underline text-black font-600 hover:text-blue-700">{{ $t('recruitment') }}</router-link>
          </li>
          <li>
            <router-link to="/lien-he" class="no-underline text-black font-600 hover:text-blue-700">{{ $t('contact') }}</router-link>
          </li>
        </ul>
      </nav>
      
        <button
  ref="button"
  class=" desktop-only   inline-block relative  z-1 text-align-center overflow-hidden text-white bg-[#142b73] transition-400 border-none rounded-[3px] font-600 text-[17px] px-[35px] py-[15px] shadow-[0_7px_25px_rgba(123,104,238,0.25)]"
  @mouseenter="startRipple"
  @mousemove="updateRipple"
  @mouseleave="clearRipple"
>
  <span
    v-if="ripple"
    class="absolute bg-white/20 rounded-full pointer-events-none"
    :style="rippleStyle"
  ></span>
  Hotline:+84(0) 902 825 586
</button>
   
  <el-dropdown @command="changeLanguage" class="ml-1">
        <div class="flex items-center cursor-pointer text-black">
          <el-icon><ChromeFilled /></el-icon>
          <span class="ml-1">{{ currentLocale.toUpperCase() }}</span>
          <el-icon class="ml-1"><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="bg-white text-black rounded-lg">
            <el-dropdown-item command="vi">Tiếng Việt</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    





<!-- Nút menu mobile -->
<div class="mobile-only hidden items-center">
  <button
    @click="toggleMobileMenu"
    class="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
  >
    <!-- Thanh 1 -->
    <span
      :class="[
        'absolute h-0.5 w-6 bg-black rounded transition-transform duration-300',
        mobileMenuOpen ? 'rotate-45 top-1/2' : '-translate-y-2'
      ]"
    ></span>

    <!-- Thanh 2 -->
    <span
      :class="[
        'absolute h-0.5 w-6 bg-black rounded transition-opacity duration-300',
        mobileMenuOpen ? 'opacity-0' : 'opacity-100'
      ]"
    ></span>

    <!-- Thanh 3 -->
    <span
      :class="[
        'absolute h-0.5 w-6 bg-black rounded transition-transform duration-300',
        mobileMenuOpen ? '-rotate-45 top-1/2' : 'translate-y-2'
      ]"
    ></span>
  </button>
</div>

<!-- Menu mobile --><!-- Overlay full screen --><!-- Overlay nền mờ có thể giữ lại hoặc bỏ -->
 <transition name="slide-down">
  <div
    v-if="mobileMenuOpen"
    class="fixed top-[72px] left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 bg-white rounded-xl shadow-lg border border-gray-200"
  >
    <ul class="divide-y divide-gray-200">
      <!-- Trang chủ -->
      <li>
        <router-link
          to="/"
          class="block px-6 py-4 text-base text-gray-700 font-medium"
          @click="closeMobileMenu"
        >
          {{ $t('home') }}
        </router-link>
      </li>

      <!-- Về chúng tôi -->
      <li>
        <router-link
          to="/ve-chung-toi"
          class="block px-6 py-4 text-base text-gray-700 font-medium"
          @click="closeMobileMenu"
        >
          {{ $t('about') }}
        </router-link>
      </li>

      <!-- Dịch vụ -->
      <li
        @click="toggleSubMenu('dichvu')"
        class="flex justify-between items-center px-6 py-4 text-base font-medium text-gray-700 cursor-pointer"
      >
        {{ $t('se') }}
        <span class="text-xl">{{ openSubMenu === 'dichvu' ? '-' : '+' }}</span>
      </li>
      <transition name="slide">
        <ul
          v-show="openSubMenu === 'dichvu'"
          class="bg-gray-50 pl-8 py-2 space-y-2"
        >
          <li>
            <router-link
              to="/dich-vu"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('sms') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/dichvu-cuoc-goi-thuong-hieu"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('branded_calls') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/dich-vu-GTVT"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('value_added_services') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/dich-vu-ung-dung-games"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('app_development') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/dich-vu-van-hanh"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('system_operations') }}
            </router-link>
          </li>
        </ul>
      </transition>

      <!-- Giải pháp -->
      <li
        @click="toggleSubMenu('giaiphap')"
        class="flex justify-between items-center px-6 py-4 text-base font-medium text-gray-700 cursor-pointer"
      >
        {{ $t('solutions') }}
        <span class="text-xl">{{ openSubMenu === 'giaiphap' ? '-' : '+' }}</span>
      </li>
      <transition name="slide">
        <ul
          v-show="openSubMenu === 'giaiphap'"
          class="bg-gray-50 pl-8 py-2 space-y-2"
        >
          <li>
            <router-link
              to="/Giai-phap"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('voip') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/Giai-phat-tttn"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('messaging') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/Giai-phap"
              class="block text-gray-600 py-1"
              @click="closeMobileMenu"
            >
              {{ $t('email') }}
            </router-link>
          </li>
        </ul>
      </transition>

      <!-- Tuyển dụng -->
      <li>
        <router-link
          to="/lien-he"
          class="block px-6 py-4 text-base text-gray-700 font-medium"
          @click="closeMobileMenu"
        >
          {{ $t('recruitment') }}
        </router-link>
      </li>

      <!-- Liên hệ -->
      <li>
        <router-link
          to="/lien-he"
          class="block px-6 py-4 text-base text-gray-700 font-medium"
          @click="closeMobileMenu"
        >
          {{ $t('contact') }}
        </router-link>
      </li>
    </ul>
  </div>
</transition>









    </div>
  </div>





  
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChromeFilled, ArrowDown } from '@element-plus/icons-vue'

const isScrolled = ref(false)

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}


const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


const openSubMenu = ref(null)

function toggleSubMenu(menuName) {
  openSubMenu.value = openSubMenu.value === menuName ? null : menuName
}


const { locale } = useI18n()
const currentLocale = ref(locale.value)

function changeLanguage(value) {
  locale.value = value
  currentLocale.value = value
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
.slide-in {
  transform: translateY(0%);
  opacity: 1;
  transition: transform 0.7s cubic-bezier(0.77,0,0.18,1), opacity 0.7s cubic-bezier(0.77,0,0.18,1);
}

.slide-out {
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.77,0,0.18,1), opacity 0.7s cubic-bezier(0.77,0,0.18,1);
}

.dropdown-bridge::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 25px;
  background: transparent;
  pointer-events: auto;
  z-index: 1;
}

/* Menu hover styles */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.slide-down-enter-to, .slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Dropdown menu styles */
.dropdown-bridge ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Reset router-link styles inside dropdowns */
.dropdown-bridge ul li a {
  text-decoration: none;
  display: block;
}

/* Ripple span */
button > span {
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  transform-origin: center;
}

@media (max-width: 1099px) {
  .desktop-only {
    display: none !important;
  }
  .mobile-only {
    display: flex !important;
  }
}
@media (min-width: 1100px) {
  .desktop-only {
    display: flex !important;
  }
  .mobile-only {
    display: none !important;
  }
}

</style>