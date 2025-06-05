import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'   
import router from './router'
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/vue3"

import i18n from './i18n.js' 



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Thêm tất cả solid icons
library.add(fas)



const app = createApp(App)

app.use(ElementPlus)

const particlesInit = async (engine) => {
    await loadFull(engine); // Load các plugin cần thiết cho Particles
  };
  
  app.use(Particles, { particlesInit });
 app.use(router)
 app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


