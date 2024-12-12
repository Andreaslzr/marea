import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import EscolhaView from '@/views/EscolhaView.vue'
import CustomView from '@/views/CustomView.vue'
import Custom2View from '@/views/Custom2View.vue'
import Custom3View from '@/views/Custom3View.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/escolha',
      name: 'escolha',
      component: EscolhaView,
    },
    {
      path: '/custom',
      name: 'custom',
      component: CustomView,
    },
    {
      path: '/custom2',
      name: 'custom2',
      component: Custom2View,
    },
    {
      path: '/custom3',
      name: 'custom3',
      component: Custom3View,
    },

  ],
})

export default router
