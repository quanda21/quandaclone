<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>

<template>
    <header
    v-show="isScrolled"
    class="shadow-sm fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300"
  >
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
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
          <router-link to="/" class="no-underline text-gray-800">Trang chủ</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/ve-chung-toi" class="no-underline text-gray-800">Về chúng tôi</router-link>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <router-link to="/dich-vu" class="no-underline text-gray-800">Dịch vụ</router-link>
          </template>
          <el-menu-item index="3-1">
            <router-link to="/dich-vu" class="no-underline text-gray-800">Tin nhắn SMS</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/dichvu-cuoc-goi-thuong-hieu" class="no-underline text-gray-800">Cuộc gọi thương hiệu</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/dich-vu-GTVT" class="no-underline text-gray-800">Dịch vụ GTGT</router-link>
          </el-menu-item>
          <el-menu-item index="3-4">
            <router-link to="/dich-vu-GTVT" class="no-underline text-gray-800">Phát triển ứng dụng và games</router-link>
          </el-menu-item>
          <el-menu-item index="3-5">
            <router-link to="/dich-vu-GTVT" class="no-underline text-gray-800">Vận hành hệ thống</router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <router-link to="/Giai-phap" class="no-underline text-gray-800">Giải Pháp</router-link>
          </template>
          <el-menu-item index="4-1">
            <router-link to="/Giai-phap" class="no-underline text-gray-800">Tổng đài VoIP</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/Giai-phat-tttn" class="no-underline text-gray-800">Tổng đài tin nhắn </router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/dich-vu-GTVT" class="no-underline text-gray-800">Thư điện tử </router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="5">
          <router-link to="/lien-he" class="no-underline text-gray-800">Tuyển dụng</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/lien-he" class="no-underline text-gray-800">Liên hệ</router-link>
        </el-menu-item>
      </el-menu>
      <el-button type="primary" class="no-underline text-gray-800"> 
        Hotline : +84(0) 902 825 586    
      </el-button>

      <div class="md:hidden">
        <el-button type="primary" @click="isMenuOpen = !isMenuOpen">
          <i class="i-ph-list-bold"></i>
        </el-button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>