<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div id="app" class="w-full min-h-screen bg-white">
    <Header class="fixed top-0 left-0 w-full  bg-white shadow" />
    <main class=" w-full">
      <router-view />
    </main>
    <Footer />
  </div>
</template>