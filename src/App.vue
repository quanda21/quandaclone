<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Scroll from './components/Scroll.vue'
import Test from './views/test.vue'


</script>

<template>
  <div class="w-full min-h-screen bg-white ">
    <Header class="fixed top-0 left-0 w-full  bg-white " />
    <main class="font-sans ">
      
      <test/>
      <router-view />
      <Scroll />
    </main>
    <Footer />
  </div>
</template>