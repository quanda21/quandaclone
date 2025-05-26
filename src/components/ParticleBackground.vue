<template>
    <div class="particle-background">
        <canvas ref="canvas" class="absolute w-full  top-0"></canvas>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'


const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  const section = canvas.value.parentElement.parentElement // Lấy <section>
  
  // Đặt kích thước canvas theo <section>
  const resizeCanvas = () => {
    canvas.value.width = section.offsetWidth
    canvas.value.height = section.offsetHeight
  }
  resizeCanvas()

  const PARTICLE_COUNT = 200
  const particles = []

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      radius: Math.random() * 2.0 + 1.0,
      dx: (Math.random() - 0.5) * 2.0,
      dy: (Math.random() - 0.5) * 2.0,
      opacity: Math.random() * 0.3 + 0.3, 
      color: Math.random() > 0.5 ? '#ffffff' : '#cdeaff'
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

      if (p.x < 0 || p.x > canvas.value.width) p.dx *= -1
      if (p.y < 0 || p.y > canvas.value.height) p.dy *= -1
    })

    requestAnimationFrame(draw)
  }

  draw()

  // Cập nhật kích thước khi cửa sổ thay đổi
  window.addEventListener('resize', resizeCanvas)

  // Dọn dẹp khi component bị hủy
  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
  })

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