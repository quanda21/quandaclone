<script setup>
const logos = [
  new URL('@/assets/images/client-01.png', import.meta.url).href,
  new URL('@/assets/images/client-02.png', import.meta.url).href,
  new URL('@/assets/images/client-03.png', import.meta.url).href,
  new URL('@/assets/images/client-04.png', import.meta.url).href,
  new URL('@/assets/images/client-05.png', import.meta.url).href,
  new URL('@/assets/images/client-06.png', import.meta.url).href,
  new URL('@/assets/images/client-07.png', import.meta.url).href,
  new URL('@/assets/images/client-08.png', import.meta.url).href,
  new URL('@/assets/images/client-09.png', import.meta.url).href,
  new URL('@/assets/images/client-10.png', import.meta.url).href,
  new URL('@/assets/images/client-11.png', import.meta.url).href,
  new URL('@/assets/images/client-12.png', import.meta.url).href,
  new URL('@/assets/images/client-13.png', import.meta.url).href,
  new URL('@/assets/images/client-14.png', import.meta.url).href,
];
</script>

<template>
  <section class="relative bg-[#fff] overflow-hidden z-1 pt-25 pb-17.5">
    <div class="container">
      <div class="max-md:mb-7.5 text-center mb-12.5 lh-normal">
        <h6 class="text-4 font-700 text-[#ec5a26] tracking-0.5px uppercase">
          Được tin tưởng bởi nhiều khách hàng
        </h6>
        <h2 class="text-8.25 font-900 text-[#0b0b31] mt-2 uppercase">
          Khách hàng của chúng tôi
        </h2>
      </div>
      <div class="flex flex-wrap mx--5px justify-center gap-4">
        <div v-for="(logo, index) in logos" :key="index" class="partner-item">
          <a href="#0" class="partner-logo">
            <img :src="logo" alt="client logo" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
