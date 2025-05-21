<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChromeFilled, ArrowDown } from '@element-plus/icons-vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Hiển thị header khi cuộn xuống hơn 50px
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll); // Đăng ký sự kiện cuộn
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll); // Gỡ bỏ sự kiện khi component bị hủy
});
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

const changeLanguage = (lang) => {
  locale.value = lang;
  currentLocale.value = lang;
};


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

<template>
 <header
  :class="['shadow-sm fixed top-0 left-0 w-full z-50 bg-white  ', 
     { 'slide-in': isScrolled, 'slide-out': !isScrolled }]"
>

    <div class="container  mx-auto px-4 md:px-10 lg:px-26 py-4 flex justify-between items-center">
      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo-black.png"
            alt="VP Media"
            class="transition-transform duration-300"
          />
        </router-link>
      </div>
       
      


      <el-menu mode="horizontal" :ellipsis="false" class="hidden md:flex">
        <el-menu-item index="1">
          <router-link to="/" class="no-underline  hover:bg-transparent   text-gray-800">Trang chủ</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/ve-chung-toi" class="no-underline hover:bg-transparent text-gray-800">Về chúng tôi</router-link>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <router-link to="/dich-vu" class="no-underline hover:bg-transparent text-gray-800">Dịch vụ</router-link>
          </template>
          <el-menu-item index="3-1">
            <router-link to="/dich-vu" class="no-underline hover:bg-transparent text-gray-800">Tin nhắn SMS</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/dichvu-cuoc-goi-thuong-hieu" class="no-underline hover:bg-transparent text-gray-800">Cuộc gọi thương hiệu</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/dich-vu-GTVT" class="no-underline hover:bg-transparent text-gray-800">Dịch vụ GTGT</router-link>
          </el-menu-item>
          <el-menu-item index="3-4">
            <router-link to="/dich-vu-ung-dung-games" class=" no-underline hover:bg-transparent  text-gray-800">Phát triển ứng dụng và games</router-link>
          </el-menu-item>
          <el-menu-item index="3-5">
            <router-link to="/dich-vu-van-hanh" class=" no-underline hover:bg-transparent text-gray-800">Vận hành hệ thống</router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <router-link to="/Giai-phap" class=" no-underline hover:bg-transparent text-gray-800">Giải Pháp</router-link>
          </template>
          <el-menu-item index="4-1">
            <router-link to="/Giai-phap" class=" no-underline hover:bg-transparent text-gray-800">Tổng đài VoIP</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/Giai-phat-tttn" class=" no-underline hover:bg-transparent text-gray-800">Tổng đài tin nhắn </router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/dich-vu-GTVT" class=" no-underline hover:bg-transparent text-gray-800">Thư điện tử </router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="5">
          <router-link to="/lien-he" class="no-underline hover:bg-transparent text-gray-800">Tuyển dụng</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/lien-he" class="no-underline hover:bg-transparent text-gray-800">Liên hệ</router-link>
        </el-menu-item>
      </el-menu>
 <button
    ref="button"
    class="relative overflow-hidden bg-[#142b73] text-white px-7 py-5  hover:text-white transition duration-300 border-none rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]"
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
  <div class="flex items-center cursor-pointer text-gray-800">
    <el-icon class="icon-black"><ChromeFilled /></el-icon>
    <span class="ml-1">{{ currentLocale.toUpperCase() }}</span>
    <el-icon class="ml-1 icon-black"><ArrowDown /></el-icon>
  </div>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item command="en">English</el-dropdown-item>
      <el-dropdown-item command="vi">Tiếng Việt</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>


    </div> 
  </header>
</template>

<style scoped>
header {
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.9s cubic-bezier(0.77,0,0.18,1), opacity 0.9s cubic-bezier(0.77,0,0.18,1);
}


/* Khi cuộn xuống, header sẽ trượt xuống */
.slide-in {
  transform: translateY(0%);
  opacity: 1;
}

/* Khi cuộn lên, trượt lên trên */
.slide-out {
  transform: translateY(-100%);
  opacity: 0;
}

.transition-all {
  transition: all 0.4s ease-in-out;
}

.fill-effect {
  background-color: #142b73; /* màu gốc */
  /* --fill-color: #2563eb;     màu hover: xanh nhạt hơn */
  box-shadow: inset 0 0 0 0 var(--fill-color);
}

/* .fill-effect:hover {
  box-shadow: inset 0 0 0 100px var(--fill-color);
  color: white !important;
  transition: box-shadow 0.9s ease-in-out;
} */

.icon-black {
  color: black; /* Đổi màu biểu tượng thành đen */
}

:deep(.el-menu-item),
:deep(.el-menu-item:hover),
:deep(.el-menu-item.is-active),
:deep(.el-menu-item:focus),
:deep(.el-menu-item.is-opened),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu__title:hover),
:deep(.el-sub-menu__title.is-active),
:deep(.el-sub-menu__title.is-opened),
:deep(.el-sub-menu.is-active),
:deep(.el-sub-menu.is-opened) {
  background-color: transparent !important;
  color: #1f2937 !important; /* text-gray-800 */
  text-decoration: none !important;
  box-shadow: none !important;
  outline: none !important;
 ext-decoration: none !important;
  box-shadow: none !important;
}





</style>