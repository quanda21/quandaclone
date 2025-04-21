<template>
    <div class="particle-background">

  <canvas ref="canvas" class="fixed absolute  w-100% h-100% -z-10"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight

  const PARTICLE_COUNT = 200  // nhiều hơn
  const particles = []

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      radius: Math.random() * 2.5 + 1.5, // từ 1.5 đến 4px
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.6, // từ 0.6 đến 1.1
      color: Math.random() > 0.7 ? '#ffffff' : '#cdeaff' // vài hạt xanh nhẹ
    })
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

    particles.forEach((p) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `${hexToRgba(p.color, p.opacity)}`
      ctx.fill()

      p.x += p.dx
      p.y += p.dy

      // nếu ra ngoài canvas thì quay lại
      if (p.x < 0 || p.x > canvas.value.width) p.dx *= -1
      if (p.y < 0 || p.y > canvas.value.height) p.dy *= -1
    })

    requestAnimationFrame(draw)
  }

  draw()

  window.addEventListener('resize', () => {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
  })

  // chuyển mã hex sang rgba
  function hexToRgba(hex, opacity) {
    const bigint = parseInt(hex.replace('#', ''), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
})
</script>

<style scoped>
.particle-background {
  position: absolute;
  inset: 0;
  z-index: -10;
  pointer-events: none;
}
</style>
