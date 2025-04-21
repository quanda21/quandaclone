<template>
      
      <section
        class="w-full h-100 bg-cover bg-center text-white flex items-center justify-center"
        style="background-image: url('./src/assets/images/banner-bg.jpg');"
      >
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
        <router-link to="#" class="no-underline text-white hover:text-blue-500">
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
    
                <router-link to="/dichvu-cuoc-goi-thuong-hieu
                " class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Cuộc gọi thương hiệu
                </router-link>
              </li>
              <li>
                <router-link to="/dich-vu-GTVT" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Dịch vụ GTGT
                </router-link>
              </li>
              <li>
                <router-link to="/dich-vu-GTVT" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Phát triển ứng dụng và games
                </router-link>
              </li>
              <li>
                <router-link to="/dich-vu-GTVT" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
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
      <a href="/Giai-phap" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Tổng đài VoIP
      </a>
    </li>
    <li>
      <a href="/Giai-phat-tttn" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Tổng đài tin nhắn
      </a>
    </li>
    <li>
      <a href="/Giai-phat-tttn" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Thư điện tử
      </a>
    </li>
  </ul>
</li>
      <li>
        <router-link to="/lien-he" class="no-underline text-white hover:text-blue-500">Tuyển dụng</router-link>
      </li>
      <li>
        <router-link to="/lien-he" class="no-underline text-white hover:text-blue-500">Liên hệ</router-link>
      </li>
    </ul>
  </nav>

      <button class="bg-blue-600 text-white  py-2 rounded hover:bg-blue-700">
        Hotline : +84(0) 902 825 586
      </button>
    </div>

        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Liên hệ</h1>
          <div class="flex justify-center items-center mt-4"> 
            <RouterLink to="/" class="text-white text-lg hover:text-gray-300">Trang chủ</RouterLink>
          <p class="text-lg">  •liên hệ</p>
          </div>
          
        </div>
      </section>

      

    <div class="w-full">

        <div class="bg-white shadow-lg rounded-lg p-8 border-t-4 border-orange-500 text-center"> 
            <h2 class="text-xl font-semibold text-orange-500 mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h2>

        </div>
      <!-- Liên hệ -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 px-4 md:px-10">
        <!-- Thông tin liên hệ -->
        <div class="bg-white shadow-lg rounded-lg p-8 border-t-4 border-blue-900 text-center">
          <h2 class="text-xl font-semibold text-blue-900 mb-4">Hà Nội</h2>
          <p class="text-blue-900">Số 3 ngách 4 ngõ 163 Nguyễn Khang, phường Yên Hoà, Cầu Giấy, Hà Nội</p>
          <p class="mt-4 font-bold text-blue-900">+84(0) 902 825 586</p>
          <p class="text-indigo-700">support@vpmedia.vn</p>
        </div>
  
        <!-- Form liên hệ -->
        <form class="space-y-4 bg-white shadow-lg rounded-lg p-8 border-t-4 border-orange-500">
        
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="Họ và tên"
                class="w-full  py3 rounded-lg  outline-none  focus:ring-blue-900"
                />
            <input type="email" placeholder="Địa chỉ email" 
            class="w-full  py3 rounded-lg  outline-none  focus:ring-blue-900" />
            <input type="text" placeholder="Số điện thoại" 
            class="w-full  py3 rounded-lg  outline-none  focus:ring-blue-900" />
            <input type="text" placeholder="Tiêu đề"
                class="w-full  py3 rounded-lg  outline-none  focus:ring-blue-900" />
          </div>
          <textarea placeholder="Nội dung" rows="5"
                class="w-full  py3 rounded-lg  outline-none  focus:ring-blue-900"></textarea>
          <button type="submit" class="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
            Gửi
          </button>
        </form>
      </div>
  
      <!-- Google Map -->
      <div class="w-full h-[450px]">
        <iframe
          class="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8901769022057!2d105.79851627495982!3d21.036478187469447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3d3747d17b%3A0xf5b1d694bc6ad098!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY29uZyBuZ2jhu4cgVnAgTWVkaWE!5e0!3m2!1svi!2s!4v1713432070515!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  </style>