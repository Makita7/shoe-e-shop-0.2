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
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/ProfilePage.vue'),
      children: [
        {
          path: 'profileInfo',
          name: 'profileInfo',
          component: () => import('../components/profileComponents/ProfileInfoComp.vue'),
        },
        {
          path: 'orderHistory',
          name: 'orderHistory',
          component: () => import('../components/profileComponents/OrderHistoryComp.vue'),
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          component: () => import('../components/profileComponents/WishlistComp.vue'),
        },
      ]
    },
    {
      path: '/shoe/:id',
      name: 'shoeDetails',
      component: () => import('../pages/ShoeDetailPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/NotFoundPage.vue.vue'),
    },
  ],
})

export default router
