<template>
  <!-- Hero Section -->
   <section
     class="w-full h-100 bg-cover bg-center text-white flex items-center justify-center"
     style="background-image: url('./src/assets/images/banner-bg.jpg');" >

  

     <div class="text-center">
       <h1 class="text-4xl font-bold mb-4">DỊCH VỤ</h1>
       <div class="flex justify-center items-center mt-4"> 
         <RouterLink to="/" class="text-white text-lg hover:text-gray-300">Trang chủ</RouterLink>
       <p class="text-lg">  •Dịch vụ</p>
       </div>
       
     </div>
   </section>

   <section class="py-16 bg-white">
       <div class="container mx-auto px-4">
         <h2 class="text-4xl font-bold text-center text-blue-900 mb-8"></h2>
         <p class="text-lg text-gray-600 leading-relaxed mb-8">
           
         </p>
         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

 <div class="md:col-span-2">
   <h3 class="text-2xl font-bold text-black mb-4">Phát Triển Ứng Dụng & Games – Giải Pháp Công Nghệ Sáng Tạo</h3>
   <p class="text-gray-600">
    Công nghệ không ngừng phát triển, nhu cầu về ứng dụng di động và trò chơi ngày càng gia tăng. Việc sở hữu một ứng dụng hoặc game chất lượng cao không chỉ giúp doanh nghiệp nâng cao trải nghiệm khách hàng mà còn mở ra nhiều cơ hội kinh doanh mới.

</p>

   <h3 class="text-xl font-bold text-black mb-4 mt-10">Giới Thiệu Dịch Vụ

   </h3>
   <p class="text-gray-600">
    Tại VPMEDIA, chúng tôi cung cấp dịch vụ phát triển ứng dụng di động và games theo yêu cầu, đảm bảo hiệu suất cao, giao diện trực quan và trải nghiệm người dùng mượt mà. Đội ngũ lập trình viên giàu kinh nghiệm của chúng tôi có thể xây dựng các ứng dụng trên nền tảng iOS, Android và đa nền tảng, đáp ứng nhu cầu của doanh nghiệp trong nhiều lĩnh vực khác nhau.

     </p>
  
   <h3 class="text-xl font-bold text-black mb-4 mt-10">Dịch Vụ Phát Triển Ứng Dụng

   </h3>
   <p class="text-gray-600">
    Chúng tôi phát triển các ứng dụng di động phục vụ nhiều mục đích, từ thương mại điện tử, tài chính, giáo dục, y tế đến quản lý doanh nghiệp. Ứng dụng được thiết kế theo tiêu chuẩn hiện đại, tối ưu hiệu suất, bảo mật cao và có khả năng mở rộng trong tương lai.   </p>

   <h3 class="text-xl font-bold text-black mb-4 mt-10">Quy Trình Phát Triển

    </h3>
    <p class="text-gray-600">
        Giai đoạn đầu tiên, chúng tôi tiến hành phân tích và tư vấn để tìm hiểu nhu cầu, xác định tính năng và đề xuất giải pháp phù hợp. Sau đó, nhóm thiết kế sẽ tạo dựng giao diện trực quan và tối ưu hóa trải nghiệm người dùng. Tiếp theo, đội ngũ lập trình viên thực hiện phát triển sản phẩm, đồng thời kiểm thử kỹ lưỡng để đảm bảo chất lượng. Cuối cùng, sản phẩm sẽ được triển khai lên App Store, Google Play và nhận được sự hỗ trợ sau khi ra mắt.
          </p>


          <h3 class="text-xl font-bold text-black mb-4 mt-10">Tại Sao Chọn VPMEDIA?

</h3>
<p class="text-gray-600">
    Chúng tôi không chỉ là đơn vị phát triển phần mềm mà còn là đối tác công nghệ, giúp doanh nghiệp hiện thực hóa ý tưởng và mở rộng cơ hội kinh doanh trên nền tảng số. Với đội ngũ kỹ sư giỏi, quy trình chuyên nghiệp và công nghệ tiên tiến, chúng tôi cam kết mang đến các sản phẩm chất lượng, đáp ứng xu hướng thị trường.      </p>


      
   <h3 class="text-xl font-bold text-black mb-4 mt-10">Liên Hệ Để Hợp Tác

</h3>
<p class="text-gray-600">
    Bạn đang có ý tưởng về một ứng dụng hoặc game sáng tạo? Hãy liên hệ với VPMEDIA ngay hôm nay để chúng tôi có thể giúp bạn hiện thực hóa ý tưởng và tạo nên những sản phẩm đột phá.      </p>







 </div>



 <div class="relative g-gray-100 p-4 rounded shadow-md  ">
    <h3 class="text-lg font-bold text-black mb-4 border-b-2 border-blue-900 pb-2">Dịch Vụ</h3>

  <div class="flex flex-col space-y-4">
    <RouterLink
      to="/dich-vu"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Tin nhắn SMS
    </RouterLink>
    <RouterLink
      to="/dichvu-cuoc-goi-thuong-hieu"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Cuộc gọi thương hiệu
    </RouterLink>
    <RouterLink
      to="/dich-vu-GTVT"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Dịch vụ GTGT
    </RouterLink>
    <RouterLink
      to="/dich-vu-ung-dung-games"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Phát triển ứng dụng và games
    </RouterLink>
    <RouterLink
      to="/dich-vu"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Vận hành hệ thống
    </RouterLink>
  
</div>
   
 </div>
</div>

       </div>
     </section>

 </template>