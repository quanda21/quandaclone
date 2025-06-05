<template>
 <div class="bg-[#161d36] text-white w-full md:px-6 lg:px-7">
    <footer class="py-20 container mx-auto px-7 text-base" style="font-family: 'Quicksand', sans-serif;">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left gap-8 ">
        <!-- 1: Logo + mô tả -->
        <div>
          <div class="flex  items-center mb-4">
            <img src="@/assets/images/logo.png" alt="Logo" class="mr-2" />
          
          </div>
          <p class="leading-[28.8px] tracking-[0.3px] text-left text-gray-300">
            VPMEDIA là đơn vị hàng đầu trong lĩnh vực cung cấp giải pháp công nghệ, viễn thông và phần mềm. Chúng tôi cam kết mang đến những dịch vụ chất lượng, đáp ứng nhu cầu đa dạng của doanh nghiệp, từ vận hành hệ thống, tổng đài VoIP, tin nhắn thương hiệu đến phát triển ứng dụng và giải pháp giá trị gia tăng.
          </p>
        </div>
        <!-- 2: Dịch vụ -->
        <div class="flex flex-col">
          <p class="text-lg font-bold border-b border-gray-600 pb-1 ">Dịch vụ</p>
          <hr class="border-gray-600 mb-4" />
          <ul class="space-y-5  text-gray-300  pl-0 list-inside list-none text-left"> 
            <li>Giải pháp tổng đài VoIP</li>
            <li>Cuộc gọi thương hiệu</li>
            <li>Dịch vụ GTGT</li>
            <li>Phát triển ứng dụng và games</li>
            <li>Vận hành hệ thống</li>
          </ul>
        </div>
        <!-- 3: Liên hệ -->
  <div>
  <p class="text-lg font-bold border-b border-gray-600 pb-1 ">Liên hệ</p>
  <ul class="space-y-3 text-gray-300 list-none pl-0">
              <hr class="border-gray-600 mb-4" />

    <li class="flex items-start ">
      <el-icon class="mr-3 mt-1 text-white text-2xl  ">
        <Phone />
      </el-icon>
      <span class="leading-loose"><strong class="font-semibold ">Phone</strong>
        <br  />+84(0) 902 825 586
      </span>
    </li>
    <li class="flex items-star t">
      <el-icon class="mr-3 mt-1 text-2xl text-white">
        <Message />
      </el-icon>
      <span class="leading-loose"><strong class="font-semibold ">Email</strong><br />support@vpmedia.vn</span>
    </li>
    <li class="flex items-start">
      <el-icon class="mr-3 mt-1  text-2xl text-white">
        <Location />
      </el-icon>
      <span class="leading-loose">
        <strong class="font-semibold ">Địa chỉ</strong><br />
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
