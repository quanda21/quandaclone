<template>
    <!-- Hero Section -->
     <section
       class="w-full h-100 w-screen bg-cover bg-center text-white flex items-center justify-center"
       style="background-image: url('./src/assets/images/banner-bg.jpg');" >

    


     




       <div class="text-center">
         <h1 class="text-4xl font-bold mb-4">DỊCH VỤ</h1>
         <div class="flex justify-center items-center mt-4"> 
           <RouterLink to="/" class="text-white text-lg hover:text-gray-300">Trang chủ</RouterLink>
         <p class="text-lg">  •Dịch vụ</p>
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
   <h3 class="text-2xl font-bold text-black mb-4">Giải Pháp Tổng Đài VoIP – Nâng Cao Hiệu Quả Giao Tiếp</h3>
   <p class="text-gray-600">
    VPMEDIA cung cấp giải pháp tin nhắn SMS chuyên nghiệp, giúp doanh nghiệp dễ dàng tiếp cận khách hàng thông qua các kênh giao tiếp nhanh chóng và hiệu quả. Chúng tôi kết nối trực tiếp với các nhà mạng để đảm bảo tốc độ gửi tin nhanh, chính xác và chi phí tối ưu cho doanh nghiệp.
   </p>

   <h3 class="text-xl font-bold text-black mb-4 mt-10">Giới Thiệu Giải Pháp

   </h3>
   <p class="text-gray-600">
    VPMEDIA là đối tác chính thức của các nhà mạng lớn tại Việt Nam, giúp doanh nghiệp gửi tin nhắn với tốc độ cao và đảm bảo tỷ lệ gửi thành công tối đa. Nhờ kết nối trực tiếp, tin nhắn của bạn sẽ được gửi đi ngay lập tức, không bị chậm trễ hay thất lạc.    </p>
  
   <h3 class="text-xl font-bold text-black mb-4 mt-10">Chất Lượng Âm Thanh Vượt Trội

   </h3>
   <p class="text-gray-600">
    Dịch vụ SMS của chúng tôi được ứng dụng rộng rãi trong nhiều lĩnh vực khác nhau như tài chính, ngân hàng, thương mại điện tử, dịch vụ chăm sóc khách hàng, giáo dục và các tổ chức doanh nghiệp. Với hệ thống API linh hoạt, dễ dàng tích hợp vào nền tảng hiện có, doanh nghiệp có thể tự động hóa việc gửi tin nhắn và tối ưu quy trình vận hành.
   </p>

   <h3 class="text-xl font-bold text-black mb-4 mt-10">Dễ Dàng Tích Hợp Và Mở Rộng

    </h3>
    <p class="text-gray-600">
        Việc sử dụng dịch vụ SMS của VPMEDIA giúp doanh nghiệp tiết kiệm chi phí, tăng hiệu quả truyền thông và nâng cao trải nghiệm khách hàng. Tin nhắn SMS có tỷ lệ mở cao, giúp doanh nghiệp tiếp cận khách hàng ngay lập tức mà không cần phụ thuộc vào kết nối Internet. Ngoài ra, hệ thống của chúng tôi hỗ trợ báo cáo chi tiết, giúp doanh nghiệp dễ dàng theo dõi hiệu quả chiến dịch và tối ưu chiến lược marketing.    </p>

        <h3 class="text-xl font-bold text-black mb-4 mt-10">Bảo Mật Cao, Đảm Bảo An Toàn Dữ Liệu

</h3>
<p class="text-gray-600">
    Việc sử dụng dịch vụ SMS của VPMEDIA giúp doanh nghiệp tiết kiệm chi phí, tăng hiệu quả truyền thông và nâng cao trải nghiệm khách hàng. Tin nhắn SMS có tỷ lệ mở cao, giúp doanh nghiệp tiếp cận khách hàng ngay lập tức mà không cần phụ thuộc vào kết nối Internet. Ngoài ra, hệ thống của chúng tôi hỗ trợ báo cáo chi tiết, giúp doanh nghiệp dễ dàng theo dõi hiệu quả chiến dịch và tối ưu chiến lược marketing.    </p>


 </div>

 <!-- <div class="relative bg-gray-100 p-4 rounded shadow-md w-full md:w-1/3">
  <h3 class="text-lg font-bold text-black mb-4 border-b-2 border-blue-900 pb-2">Dịch Vụ</h3>
  <div class="flex flex-col space-y-4"></div> -->


 <!-- button -->
 <div class="relative g-gray-100 p-4 rounded shadow-md  ">
    <h3 class="text-lg font-bold text-black mb-4 border-b-2 border-blue-900 pb-2">Giải Pháp</h3>

  <div class="flex flex-col space-y-4">
    <RouterLink
      to="/Giai-phap"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Tổng đài VoIP
    </RouterLink>
    <RouterLink
      to="/Giai-phat-tttn"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Tổng đài tin nhắn
    </RouterLink>
    <RouterLink
      to="/Giai-phap"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
        Thư điện tử
    </RouterLink>
   
  
</div>
   
 </div>
</div>

       </div>
     </section>

 </template>