<!-- src/components/Particles.vue -->
<template>
  <div id="tsparticles" class="absolute inset-0 -z-10">
    <canvas class="particles-js-canvas-el w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { tsParticles } from 'tsparticles'

onMounted(() => {
  tsParticles.load('tsparticles', {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 }
      },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  })
})
</script>

<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10; 
}
</style>
