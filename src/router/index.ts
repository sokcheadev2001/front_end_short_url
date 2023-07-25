import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { user } from '@/shared/user/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from) => {
        if (to.name === 'home' && user.token) {
          return true
        } else {
          return '/login'
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/myurl',
      name: 'myurl',
      component: () => import('../views/MyUrlView.vue'),
      beforeEnter: (to, from) => {
        if (to.name === 'myurl' && user.token) {
          return true
        } else {
          return '/login'
        }
      }
    }
  ]
})

export default router
