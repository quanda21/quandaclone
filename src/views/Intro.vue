<template>
     <!-- Hero Section -->
      <section
        class="w-full h-100 bg-cover bg-center text-white flex items-center justify-center"
        style="background-image: url('./src/assets/images/banner-bg.jpg');"
      >
    

        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">GIỚI THIỆU</h1>
          <div class="flex justify-center items-center mt-4"> 
            <RouterLink to="/" class="text-white text-lg hover:text-gray-300">Trang chủ</RouterLink>
          <p class="text-lg">  •Về chúng tôi</p>
          </div>
          
        </div>
      </section>
  
      <!-- Content Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center text-blue-900 mb-8"></h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

  <div class="md:col-span-2">
    <h3 class="text-2xl font-bold text-black mb-4">Giới thiệu</h3>
    <p class="text-gray-600">
        CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUYỀN THÔNG VIỆT PHÁT (VPMEDIA) chuyên về nghiên cứu, xây dựng và phát triển các sản phẩm trong lĩnh vực công nghệ thông tin và viễn thông, ứng dụng trên Internet và mạng di động. Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến những giải pháp công nghệ tiên tiến, tối ưu hiệu suất và đáp ứng linh hoạt nhu cầu của từng khách hàng.

      Sứ mệnh của chúng tôi là giúp các doanh nghiệp tận dụng sức mạnh công nghệ để tối ưu vận hành, mở rộng thị trường và tăng cường khả năng cạnh tranh. Chúng tôi không chỉ cung cấp dịch vụ mà còn đồng hành cùng khách hàng trong suốt quá trình triển khai và phát triển hệ thống, đảm bảo sự ổn định và hiệu quả lâu dài.

    </p>

    <h3 class="text-2xl font-bold text-black mb-4 mt-10">Giải pháp
    </h3>
    <p class="text-gray-600">
        Công nghệ đang phát triển với tốc độ chóng mặt, đặc biệt trong lĩnh vực công nghệ thông tin, truyền thông và viễn thông. Để không bị tụt lại phía sau, các doanh nghiệp phải nhanh chóng nắm bắt cơ hội chuyển đổi số, tối ưu hệ thống và phát triển các dịch vụ sáng tạo nhằm phục vụ khách hàng tốt hơn.

Thị trường viễn thông Việt Nam nói riêng và thế giới nói chung vẫn tiếp tục phát triển mạnh, mở ra cơ hội lớn nhưng cũng đi kèm với sự cạnh tranh khốc liệt. Trong bối cảnh này, VPMEDIA không ngừng đổi mới, tiên phong trong nghiên cứu và ứng dụng các công nghệ mới nhất, đảm bảo sản phẩm của chúng tôi tương thích, dễ dàng tích hợp và vận hành hiệu quả với các hệ thống viễn thông hiện có.
    </p>
   
    <h3 class="text-2xl font-bold text-black mb-4 mt-10">Giải pháp
    </h3>
    <p class="text-gray-600">
        Công nghệ đang phát triển với tốc độ chóng mặt, đặc biệt trong lĩnh vực công nghệ thông tin, truyền thông và viễn thông. Để không bị tụt lại phía sau, các doanh nghiệp phải nhanh chóng nắm bắt cơ hội chuyển đổi số, tối ưu hệ thống và phát triển các dịch vụ sáng tạo nhằm phục vụ khách hàng tốt hơn.

Thị trường viễn thông Việt Nam nói riêng và thế giới nói chung vẫn tiếp tục phát triển mạnh, mở ra cơ hội lớn nhưng cũng đi kèm với sự cạnh tranh khốc liệt. Trong bối cảnh này, VPMEDIA không ngừng đổi mới, tiên phong trong nghiên cứu và ứng dụng các công nghệ mới nhất, đảm bảo sản phẩm của chúng tôi tương thích, dễ dàng tích hợp và vận hành hiệu quả với các hệ thống viễn thông hiện có.
    </p>



  </div>

  

 
  <!-- Ảnh + box nổi bật -->
  <div class="relative">

    <img src="@/assets/images/about.jpg" alt="About Us" class="rounded-lg shadow w-full h-auto" />

    <div class="absolute  left-1/2  -translate-x-1/2 bg-white  shadow-lg p-4 flex items-center gap-4 w-[90%] rounded-lg  mt-[-110px]"> ">
      <img src="@/assets/images/about-sub.jpg" alt="Overlay Icon" class="w-20 h-15" />
      <div>
        <h3 class="text-2xl font-bold text-orange-600 leading-none">12</h3>
        <span class="text-gray-600 text-sm">Năm xây dựng và đổi mới</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

  </template>
  <script setup>
import ParticleBackground from '@/components/ParticleBackground.vue'

</script>