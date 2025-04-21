<template>
  <div class="bg-[#161d36] text-white w-full">
    <footer class="py-12 container mx-auto px-4">
      <div class=" grid md:grid-cols-3 gap-8 px-4">
        <!-- 1: Logo + mô tả -->
        <div>
          <div class="flex  items-center mb-4">
            <img src="@/assets/images/logo.png" alt="Logo" class="mr-2" />
            <div>
              <h2 class="text-lg font-bold">VIỆT PHÁT</h2>
              <span class="text-sm text-gray-400">Media</span>
            </div>
          </div>
          <p class="text-sm leading-relaxed text-gray-300">
            VPMEDIA là đơn vị hàng đầu trong lĩnh vực cung cấp giải pháp công nghệ, viễn thông và phần mềm. Chúng tôi cam kết mang đến những dịch vụ chất lượng, đáp ứng nhu cầu đa dạng của doanh nghiệp, từ vận hành hệ thống, tổng đài VoIP, tin nhắn thương hiệu đến phát triển ứng dụng và giải pháp giá trị gia tăng.
          </p>
        </div>
        <!-- 2: Dịch vụ -->
        <div clss="flex flex-col">
          <h3 class="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">Dịch vụ</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>Giải pháp tổng đài VoIP</li>
            <li>Cuộc gọi thương hiệu</li>
            <li>Dịch vụ GTGT</li>
            <li>Phát triển ứng dụng và games</li>
            <li>Vận hành hệ thống</li>
          </ul>
        </div>
        <!-- 3: Liên hệ -->
        <div>
    <h3 class="text-lg font-semibold border-b border-gray-600 pb-2 mb-4">Liên hệ</h3>
    <ul class="space-y-4 text-sm text-gray-300">
      <li class="flex items-start">
        <el-icon class="mr-2 mt-0.5 text-white">
          <Phone />
        </el-icon>
        <span><strong>Phone</strong><br />+84(0) 902 825 586</span>
      </li>
      <li class="flex items-start">
        <el-icon class="mr-2 mt-0.5 text-white">
          <Message />
        </el-icon>
        <span><strong>Email</strong><br />support@vpmedia.vn</span>
      </li>
      <li class="flex items-start">
        <el-icon class="mr-2 mt-0.5 text-white">
          <Location />
        </el-icon>
        <span>
          <strong>Địa chỉ</strong><br />
          Số 3 ngách 4 ngõ 163 Nguyễn Khang, phường Yên Hòa, Cầu Giấy, Hà Nội
        </span>
      </li>
    </ul>
  </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Phone, Message, Location } from '@element-plus/icons-vue'
</script>
