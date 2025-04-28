<template>
    <transition name="slide-down">
      <el-button
        v-show="isVisible"
        @click="scrollToTop"
        class="fixed bottom-4 right-4 shadow-lg square-btn   top-95%;
 "
        type="primary"
        size="large"
      >
      
      <el-icon><ArrowUp /></el-icon>

      </el-button>
    </transition>
  </template>


  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ArrowUp } from '@element-plus/icons-vue'

  
  const isVisible = ref(false)
  
  const handleScroll = () => {
    isVisible.value = window.scrollY > 200
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .el-button.square-btn {
    z-index: 1000;
    background-color: #142b73;
    color: white;
    border: none;
    border-radius: 8px; /* Vuông nhẹ với bo góc */
    width: 48px;
    height: 48px;
    padding: 0;
  }
  
  .el-button.square-btn:hover {
    background-color: #001f5b;
  }
  
  /* Hiệu ứng trượt từ trên xuống */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all 0.5s ease;
  }
  .slide-down-enter-from {
    opacity: 0;
    transform: translateY(-300px); /* Trượt từ phía trên */
  }
  .slide-down-leave-to {
    opacity: 0;
    transform: translateY(-200px); /* Trượt lên trên */
  }
  </style>
  