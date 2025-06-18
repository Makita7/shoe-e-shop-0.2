import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/men',
      name: 'men',
      component: () => import('../pages/MenPage.vue'),
    },
    {
      path: '/women',
      name: 'women',
      component: () => import('../pages/WomenPage.vue'),
    },
    {
      path: '/unisex',
      name: 'unisex',
      component: () => import('../pages/UnisexPage.vue'),
    },
    {
      path: '/kids',
      name: 'kids',
      component: () => import('../pages/KidsPage.vue'),
    },
  ],
})

export default router
