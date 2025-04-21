import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dichvu from '@/views/Dichvu.vue';
import Call from '@/views/Call.vue';
import { createApp } from 'vue';  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ve-chung-toi',
    name: 'Intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/dich-vu',
    name: 'DichVu',
    component: Dichvu
  },

  {
    path: '/dichvu-cuoc-goi-thuong-hieu',
    name: 'Call',
    component: Call
  },
 {
  path: '/dich-vu-GTVT',
  name: 'GTVT',
  component: () => import('../views/GTVT.vue')
},
{
  path: '/Giai-phap',
  name: 'GiaiPhat',
  component: () => import('../views/GiaiPhat.vue')
},

{
  path: '/Giai-phat-tttn',
  name: 'TinNhan',
  component: () => import('../views/TinNhan.vue')
},
 {
path: '/lien-he',
name: 'Contact',
component: () => import('../views/Contact.vue')

 },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 