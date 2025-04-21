

<template>
  <!--gt -->
  <section
  class="relative w-full text-white py-30"
  style="background: linear-gradient(to bottom, #001d4c 0%, #0352a0 100%)"
>
  <!-- Particle Background -->
  <ParticleBackground />
  <!-- <Particles
      id="tsparticles"
      :options="particlesOptions"
    />     Hiệu ứng particles -->
  


   <!-- Header -->
  <div class="container mx-auto flex justify-between items-center py-4 px-4 fixed top-0  z-10">
    <ParticleBackground  />

      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="VP Media"
            class="transition-transform duration-300"
          />
        </router-link>
      </div>

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
                <router-link to="/dichvu-cuoc-goi-thuong-hieu" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
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
  <ul class="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded w-80 z-50">
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
        <router-link to="/lien-he" class="no-underline text-white hover:text-blue-500">Tuyển dụng</router-link>
      </li>
      <li>
        <router-link to="/lien-he" class="no-underline text-white hover:text-blue-500">Liên hệ</router-link>
      </li>
    </ul>
  </nav>

  <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
  Hotline : +84(0) 902 825 586
</button>

    </div>
    

  <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center relative z-10  ">
    <!-- Left: Text Content -->
    <div class="space-y-7">
      <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
        GIẢI PHÁP CNTT THÔNG MINH CHO DOANH NGHIỆP CỦA BẠN
      </h1>
      <p class="text-lg leading-relaxed text-white/80">
        Chúng tôi chuyên về nghiên cứu, xây dựng và phát triển các sản phẩm về công nghệ thông tin, viễn thông trên mạng Internet và mạng di động. Sứ mệnh của chúng tôi là mang đến những giải pháp tối ưu phù hợp với yêu cầu của từng khách hàng trên thị trường Công nghệ thông tin và Viễn thông.
      </p>
      <div class="flex flex-wrap gap-4 pt-4">
        <el-button type="default" size="large" class="text-blue-800 border-white bg-white ">
          Dịch vụ
        </el-button>
        <el-button type="default" size="large" class="text-blue-800 border-white bg-white ">
          Liên hệ với chúng tôi
        </el-button>
      </div>
    </div>

    <!-- Right: Image -->
    <div class="order-2 md:order-1">
      <img
        src="@/assets/images/home.png"
        alt="Datacenter Illustration"
        class="w-full max-w-[500px] mx-auto"
      />
    </div>
    
    
  </div>

  <!-- Background Shape -->
  
  <div class="absolute bottom-0 left-0 w-full z-0 "> 
    <img
  src="@/assets/images/home-wave-bg.svg"
  alt="Background Wave"
  class="w-full transform translate-y-7%"
/>

</div>

</section>

  
<!--nd1 -->
<section class="about py-16">
  <div class="container mx-auto px-4 flex flex-col md:flex-row">
    <div class="md:w-1/2 flex flex-col justify-center">
      <h2 class="text-lg text-blue-800 font-semibold tracking-wide uppercase">Về chúng tôi</h2>
      <h3 class="text-5xl text-black font-bold mt-4 leading-tight">VPMEDIA</h3>

      <p class="mt-10 text-gray-600 text-lg leading-relaxed">
        VPMEDIA là công ty hoạt động trong lĩnh vực viễn thông và CNTT được thành lập
        để trở thành doanh nghiệp hàng đầu trong lĩnh vực cung cấp dịch vụ gia tăng viễn
        thông trên Internet và di động tại Việt Nam. Khách hàng biết đến chúng tôi là nhà
        cung cấp các giải pháp phần mềm sáng tạo và đáng tin cậy cho thị trường Viễn
        thông trong nước cũng như vươn ra ngoài thế giới.
      </p>
      <router-link
        to="/ve-chung-toi"
        class="bg-blue-900 text-white w-35 py-3 px-6 rounded hover:bg-blue-700 text-center mt-8 inline-block text-lg font-medium"
      >
        Xem thêm
      </router-link>
    </div>
    <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0 relative">
      <img src="@/assets/images/about.jpg" alt="About Us" class="rounded shadow w-full" />

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 w-fit">
          <img src="@/assets/images/about-sub.jpg" alt="Overlay Icon" class="w-16 h-16" />
          <div>
            <h3 class="text-3xl font-bold text-orange-600 leading-none">12</h3>
            <span class="text-gray-600 text-sm">Năm xây dựng và đổi mới</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <!--nd2 -->
   
  <section class="serviece py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h1 class=" text-xl font-bold text-center text-orange-600 mb-4"> Những Gì Chúng Tôi Cung Cấp</h1>
        <h2 class="text-4xl font-bold text-center text-black mb-10">Dịch vụ của chúng tôi</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">

               <!--các ô  -->
         <div class="service-card">
            <i class="i-ph-briefcase-bold text-4xl text-primary"></i>
            <h3 class="service-title">Vận hành hệ thống</h3>
            <p class="service-desc">Cung cấp giải pháp quản lý, giám sát và tối
                                          ưu hóa hệ thống máy chủ, mạng và hạ tầng
                                          công nghệ thông tin. Đảm bảo hệ thống hoạt động ổn định, an toàn và hiệu quả.</p>
            <a href="#" class="service-link">Chi tiết</a>
          </div>
         <div class="service-card">
            <i class="i-ph-chart-bar-bold text-4xl text-primary"></i>
            <h3 class="service-title">Tin nhắn SMS</h3>
            <p class="service-desc">Dịch vụ SMS Brandname giúp doanh nghiệp gửi tin nhắn quảng cáo, chăm sóc khách hàng, OTP, thông báo giao dịch với độ tin cậy cao, tốc độ nhanh và chi phí hợp lý.</p>
            <a href="#" class="service-link">Chi tiết</a>
          </div>
          <div class="service-card">
            <i class="i-ph-megaphone-bold text-4xl text-primary"></i>
            <h3 class="service-title">Cuộc gọi thương hiệu</h3>
            <p class="service-desc">Dịch vụ Voice Brandname cho phép doanh nghiệp thực hiện các cuộc gọi hiển thị tên thương hiệu, giúp tăng độ nhận diện, tin cậy và hiệu quả tiếp cận khách hàng.</p>
            <a href="#" class="service-link">Chi tiết</a>
          </div>

         <div class="service-card">
            <i class="i-ph-megaphone-bold text-4xl text-primary"></i>
            <h3 class="service-title">Dịch vụ GTGT (Giá trị gia tăng)</h3>
            <p class="service-desc">Cung cấp các giải pháp gia tăng giá trị cho khách hàng như tổng đài ảo, USSD, dịch vụ nội dung số, đăng ký thuê bao tự động, hỗ trợ doanh nghiệp tiếp cận khách hàng hiệu quả hơn và nâng cao trải nghiệm người dùng.</p>
            <a href="#" class="service-link">Chi tiết</a>
          </div>
         <div class="service-card">
            <i class="i-ph-megaphone-bold text-4xl text-primary"></i>
            <h3 class="service-title">Phát triển ứng dụng và games</h3>
            <p class="service-desc">Dịch vụ thiết kế, lập trình và triển khai các ứng dụng di động, web, phần mềm tùy chỉnh theo nhu cầu doanh nghiệp. Ngoài ra, chúng tôi cũng phát triển game mobile và nền tảng tương tác trực tuyến.</p>
            <a href="#" class="service-link">Chi tiết</a>
          </div>
           <div class="service-card">
            <i class="i-ph-megaphone-bold text-4xl text-primary"></i>
            <h3 class="service-title">Giải pháp tổng đài VoIP</h3>
            <p class="service-desc"> Cung cấp và triển khai tổng đài IP (VoIP) giúp doanh nghiệp tối ưu chi phí, nâng cao hiệu suất và cải thiện trải nghiệm khách hàng. Hỗ trợ gọi nội bộ miễn phí, ghi âm, IVR, báo cáo chi tiết và tích hợp CRM.</p>
            <a href="#" class="service-link">Chi tiết</a>
          </div>
        </div>

      </div>

  </section>    

  <!--nd3 --> 
  <section class="applications py-20">
  <div class="container mx-auto w-full">
    <h1 class="text-xl font-bold text-center text-orange-600 mb-4">Ứng Dụng Chúng Tôi Đã Phát Triển</h1>
    <h2 class="text-4xl text-black font-bold text-center mb-8">Chúng tôi tự hào giới thiệu các ứng dụng tiêu biểu.</h2>

    <!-- Nút chọn ứng dụng -->
    <div class="flex justify-center gap-6  mb-9 w-full">
      <el-button
        v-for="(app, index) in applications"
        :key="index"
        :type="selectedApp === index ? 'primary' : 'default'"
        class="px-6 py-6 w-full text-lg font-semibold rounded-lg shadow-md"
        @click="selectApp(index)"
      >
        {{ app.title }}
      </el-button>
    </div>
  

      <transition name="slide-fade" mode="out-in">
        <div v-if="selectedApp !== null" :key="selectedApp" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-4xl font-bold text-black ___">{{ applications[selectedApp].title }}</h3>
            <p class="mt-4 text-gray-600">{{ applications[selectedApp].description }}</p>
            <ul class="mt-4 text-gray-600">
              <li v-for="(feature, index) in applications[selectedApp].features" :key="index">
                ✔ {{ feature }}
              </li>
            </ul>
            <p class="mt-4 text-gray-600"> {{ applications[selectedApp].titles }}</p>

            <a href="#" class="text-primary mt-4 block">Xem thêm</a>
          </div>
          <div>
            <img :src="applications[selectedApp].image" alt="App Image" class="rounded shadow w-full">
          </div>
        </div>
      </transition>
    </div>
  </section>

<!--nd4 -->
    <section
    class="w-full bg-cover bg-center text-white text-center py-20 px-4 bg-[#001d4c] bg-opacity-50"
      :style="`background-image: url(${bg})`"
      
      >
    <p class="text-orange-500 font-semibold mb-2">HỢP TÁC CÙNG CHÚNG TÔI?</p>
    <h2 class="text-2xl md:text-4xl font-bold mb-4">ỨNG DỤNG CÔNG NGHỆ ĐỂ NÂNG CAO TRẢI NGHIỆM</h2>
    <p class="max-w-3xl mx-auto mb-6 leading-relaxed">
      Chúng tôi tận dụng sức mạnh công nghệ để mang đến giải pháp tối ưu, giúp doanh nghiệp vận hành hiệu quả, bảo mật và linh hoạt hơn. Cùng nhau, chúng ta có thể tạo ra những giá trị bền vững và đột phá trong kỷ nguyên số.
    </p>
    <button class="bg-white text-blue-800 font-semibold px-6 py-2 rounded border border-white hover:bg-blue-100">
      Liên hệ với chúng tôi
    </button>
  </section>


<!--nd5 -->
<section class="py-12 text-center bg-gray-50">
    <p class="text-orange-500 font-semibold text-sm tracking-wider mb-2">
      ĐƯỢC TIN TƯỞNG BỞI NHIỀU KHÁCH HÀNG
    </p>
    <h2 class="text-3xl font-bold text-blue-900 mb-10">KHÁCH HÀNG CỦA CHÚNG TÔI</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-30 transition-transform hover:scale-105"
      >
        <img :src="logo" alt="Client Logo" class="max-h-20 max-w-full object-contain" />
      </div>
`   
    </div>
  </section>

</template>
<script setup>

import ParticleBackground from '@/components/ParticleBackground.vue'



import bg from '@/assets/images/banner-bg.jpg';

const logos = [
'./src/assets/images/client-01.png',
  './src/assets/images/client-02.png',
  './src/assets/images/client-03.png',
  './src/assets/images/client-04.png',
  './src/assets/images/client-05.png',
  './src/assets/images/client-06.png',
  './src/assets/images/client-07.png',
  './src/assets/images/client-08.png',
  './src/assets/images/client-09.png',
  './src/assets/images/client-10.png',
  './src/assets/images/client-11.png',
  './src/assets/images/client-12.png',
  './src/assets/images/client-13.png',
  './src/assets/images/client-14.png',
];


import { ref } from 'vue';

const particlesOptions = ref({
  background: {
    color: {
      value: '#001d4c',
    },
  },
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: '#ffffff',
    },
    links: {
      enable: true,
      color: '#ffffff',
      distance: 150,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
});

// Danh sách ứng dụng
const applications = ref([
  {
    title: 'VBot - Tổng đài AI đa tính năng',
    description: 'VBot là giải pháp tổng đài AI thông minh, giúp doanh nghiệp tự động hóa chăm sóc khách hàng, tối ưu quy trình giao tiếp và nâng cao trải nghiệm người dùng. Với công nghệ AI tiên tiến, VBot có thể xử lý cuộc gọi, phản hồi tin nhắn và hỗ trợ khách hàng 24/7.',
    features: [
      'Tự động hóa tổng đài với AI, giảm thiểu chi phí vận hành',
      ' Hỗ trợ đa kênh: thoại, SMS, chatbot, tích hợp với CRM',
      ' Cung cấp báo cáo, phân tích dữ liệu và tối ưu hiệu suất tổng đài',
      ' SDK linh hoạt, dễ dàng tích hợp vào ứng dụng và hệ thống của doanh nghiệp',
    ],
    titles: ' Với khả năng linh hoạt, dễ dàng tùy chỉnh và tích hợp thông qua SDK mạnh mẽ, VBot là giải pháp hoàn hảo giúp doanh nghiệp nâng cao chất lượng dịch vụ khách hàng và tối ưu hiệu quả hoạt động.',
    image: './src/assets/images/vbot.png',
  },
  {
    title: 'VScan - Ứng dụng quét tài',
    description: 'VScan là ứng dụng quét tài liệu mạnh mẽ, giúp bạn chuyển đổi giấy tờ, hợp đồng, hóa đơn và nhiều loại tài liệu khác sang định dạng kỹ thuật số một cách nhanh chóng và chính xác. Với công nghệ nhận diện ký tự quang học (OCR) tiên tiến, VScan giúp bạn lưu trữ, tìm kiếm và chia sẻ tài liệu dễ dàng.',
    features: [
      'Phân tích dữ liệu tài chính',
      'Báo cáo chi tiết và trực quan',
      'Tích hợp dễ dàng với hệ thống hiện tại',
    ],
    titles: 'Với VScan, bạn có thể số hóa tài liệu một cách tiện lợi, tiết kiệm thời gian và nâng cao hiệu suất làm việc. ',
    image: './src/assets/images/vscan.png',
  },
  {
    title: 'Văn phòng điện tử',
    description: 'VOffice là giải pháp văn phòng điện tử giúp doanh nghiệp số hóa quy trình làm việc, quản lý tài liệu, điều hành công việc và tối ưu hiệu suất làm việc. Với giao diện thân thiện và hệ thống thông minh, VOffice giúp kết nối nhân sự, giảm thiểu thủ tục giấy tờ và nâng cao hiệu quả quản lý.',
    features: [
      'Quản lý tài liệu thông minh',
      'Tích hợp lịch làm việc và nhắc nhở',
      'Bảo mật dữ liệu cao',
    ],

    titles: ' Với VOffice, doanh nghiệp có thể hiện đại hóa mô hình làm việc, tiết kiệm thời gian và nâng cao năng suất lao động.',
    image: './src/assets/images/voffice.png',
  },
  {
    title: 'Golden Health',
    description: 'Golden Health là ứng dụng chăm sóc sức khỏe cá nhân, giúp người dùng theo dõi và quản lý sức khỏe một cách hiệu quả. Với các tính năng thông minh, Golden Health hỗ trợ người dùng theo dõi nhịp tim, huyết áp, cân nặng và các chỉ số sức khỏe quan trọng khác.',
    features: [
      ' Theo dõi nhịp tim, huyết áp, cân nặng và các chỉ số sức khỏe quan trọng',

      ' Ghi chép nhật ký sức khỏe và quá trình điều trị',
         ' Nhắc nhở uống thuốc, lịch khám bệnh và tập luyện',
         ' Phân tích sức khỏe và đề xuất cải thiện thể trạng',
    ],
    titles: 'Với Golden Health, bạn có thể chủ động chăm sóc sức khỏe, xây dựng lối sống lành mạnh và phòng ngừa rủi ro bệnh tật. ',
    image: './src/assets/images/golden_health.png',
  },
]);

const selectedApp = ref(0);


// chọn ứng dụng
const selectApp = (index) => {
  selectedApp.value = index;
};


// const relative = {
//   fullScreen: {
//     enable: false,
//   },
//   background: {
//     color: "#001d4c",
//   },
//   particles: {
//     number: { value: 60 },
//     color: { value: "#ffffff" },
//     shape: { type: "circle" },
//     opacity: { value: 0.6 },
//     size: { value: 2 },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//       outModes: { default: "bounce" }
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1
//     }
//   },
//   interactivity: {
//     events: {
//       onhover: { enable: true, mode: "repulse" },
//       onclick: { enable: true, mode: "push" }
//     },
//     modes: {
//       repulse: { distance: 100, duration: 0.4 },
//       push: { quantity: 4 }
//     }
//   },
//   detectRetina: true
// };

</script>