<template>
    <!-- Hero Section -->
     <section
       class="w-full h-100 bg-cover bg-center text-white flex items-center justify-center"
       style="background-image: url('./src/assets/images/banner-bg.jpg');" >

       <div class="container mx-auto flex justify-between items-center py-4 px-4 fixed top-0  z-10">
      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="VP Media"
            class="transition-transform duration-300"
          />
        </router-link>
       </div>
                 <!--  Bar -->
                 <nav class="hidden md:flex justify-center items-center">
    <ul class="flex space-x-6 list-none">
      <li>
        <router-link to="/" class="no-underline text-white hover:text-blue-500">Trang chủ</router-link>
      </li>
      <li>
        <router-link to="/ve-chung-toi" class="no-underline text-white hover:text-blue-500">Về chúng tôi</router-link>
      </li>
      <li class="relative group">
        <router-link to="/dich-vu" class="no-underline text-white hover:text-blue-500">
          Dịch vụ
          <span class="ml-1"></span>
        </router-link>
        <ul class="absolute hidden group-hover:block bg-white shadow-md mt-1 rounded w-80 text-left z-10">

              <li>
                <router-link to="/dich-vu" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Tin nhắn SMS
                </router-link>
              </li>
              <li>
                <router-link to="/dich-vu/cuoc-goi-thuong-hieu" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Cuộc gọi thương hiệu
                </router-link>
              </li>
              <li>
                <router-link to="/dichvu/value-added" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Dịch vụ GTGT
                </router-link>
              </li>
              <li>
                <router-link to="/dichvu/app-development" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Phát triển ứng dụng và games
                </router-link>
              </li>
              <li>
                <router-link to="/dichvu/system-operation" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Vận hành hệ thống
                </router-link>
              </li>
            </ul>
      </li>
      <li class="relative group">
  <a href="#" class="nav-link text-white hover:text-blue-400 flex items-center gap-1">
    Giải pháp 
    <i class="fas fa-chevron-down text-xs mt-0.5"></i>
  </a>
  <!-- Dropdown menu -->
  <ul class="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded w-56 z-50">
    <li>
      <a href="/giai-phap/tong-dai-voip" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Tổng đài VoIP
      </a>
    </li>
    <li>
      <a href="/giai-phap/tong-dai-tin-nhan" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Tổng đài tin nhắn
      </a>
    </li>
    <li>
      <a href="/giai-phap/thu-dien-tu" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Thư điện tử
      </a>
    </li>
  </ul>
</li>
      <li>
        <router-link to="/services" class="no-underline text-white hover:text-blue-500">Tuyển dụng</router-link>
      </li>
      <li>
        <router-link to="/contact" class="no-underline text-white hover:text-blue-500">Liên hệ</router-link>
      </li>
    </ul>
  </nav>

      <button class="bg-blue-600 text-white  py-2 rounded hover:bg-blue-700">
        Hotline : +84(0) 902 825 586
      </button>
    </div>


     




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
   <h3 class="text-2xl font-bold text-black mb-4">Cuộc Gọi Thương Hiệu – Giải Pháp Gia Tăng Uy Tín Doanh Nghiệp</h3>
   <p class="text-gray-600">
    Trong bối cảnh thị trường ngày càng cạnh tranh, việc tạo dựng và khẳng định thương hiệu là yếu tố quan trọng giúp doanh nghiệp nâng cao độ tin cậy với khách hàng. Cuộc Gọi Thương Hiệu (Voice Brandname) là một trong những giải pháp tiên tiến, giúp doanh nghiệp thể hiện sự chuyên nghiệp khi liên hệ với khách hàng bằng cách hiển thị tên thương hiệu thay vì số điện thoại thông thường.   </p>

   <h3 class="text-xl font-bold text-black mb-4 mt-10">Giới Thiệu Dịch Vụ Cuộc Gọi Thương Hiệu
   </h3>
   <p class="text-gray-600">
    Cuộc Gọi Thương Hiệu là dịch vụ cho phép doanh nghiệp thực hiện các cuộc gọi hiển thị tên thương hiệu trên màn hình điện thoại của khách hàng. Thay vì nhận được cuộc gọi từ một số điện thoại xa lạ, khách hàng sẽ thấy ngay tên doanh nghiệp, giúp tăng mức độ nhận diện thương hiệu và nâng cao khả năng phản hồi.
   </p>
    <h3 class="text-xl font-bold text-black mb-4 mt-10">Lợi Ích Của Dịch Vụ
   
   </h3>
   <p class="text-gray-600">
    Khi sử dụng dịch vụ **Cuộc Gọi Thương Hiệu**, doanh nghiệp sẽ có nhiều lợi thế trong việc chăm sóc khách hàng và phát triển kinh doanh. Việc hiển thị tên thương hiệu trong cuộc gọi giúp doanh nghiệp gia tăng độ tin cậy, giảm tỷ lệ từ chối cuộc gọi từ khách hàng và nâng cao hiệu suất tiếp cận. Đây là giải pháp tối ưu cho các doanh nghiệp đang hoạt động trong lĩnh vực tài chính, ngân hàng, bảo hiểm, thương mại điện tử, chăm sóc khách hàng và tư vấn dịch vụ.   </p>

   <h3 class="text-xl font-bold text-black mb-4 mt-10">Kết Nối Trực Tiếp Với Nhà Mạng

    </h3>
    <p class="text-gray-600">
      VPMEDIA là đại lý chính thức của Mobifone, Vinaphone và Viettel, cung cấp dịch vụ Cuộc Gọi Thương Hiệu với chất lượng kết nối ổn định, cước phí hợp lý và quy trình triển khai nhanh chóng. Chúng tôi cam kết mang đến giải pháp đáng tin cậy, đảm bảo hiệu quả cao trong quá trình tiếp cận khách hàng của doanh nghiệp.
    </p>
 </div>

 <!-- <div class="relative bg-gray-100 p-4 rounded shadow-md w-full md:w-1/3">
  <h3 class="text-lg font-bold text-black mb-4 border-b-2 border-blue-900 pb-2">Dịch Vụ</h3>
  <div class="flex flex-col space-y-4"></div> -->


 <!-- button -->
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
      to="/dich-vu-GTVT"
      class="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
    >
      Phát triển ứng dụng và games
    </RouterLink>
    <RouterLink
      to="/system-operation"
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