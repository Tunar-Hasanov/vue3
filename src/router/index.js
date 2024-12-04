import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },

    {
      path: '/allbets',
      name: 'allsinglebets',
      component: () => import('../views/AllbetsView.vue'),
    },

    {
      path: '/allcupons',
      name: 'allcupons',
      component: () => import('../views/AllcuponsView.vue'),
    },
    // admin
    {
      path: '/admin/login',
      name: 'adminlogin',
      component: () => import('../views/admin/LoginView.vue'),
    },
    {
      path: '/admin/profile',
      name: 'adminprofile',
      component: () => import('../views/admin/ProfileView.vue'),
    },
    {
      path: '/admin/bet',
      name: 'addbets',
      component: () => import('../views/admin/AddBetsView.vue'),
    },
    {
      path: '/admin/kupon',
      name: 'addkupons',
      component: () => import('../views/admin/AddKuponsView.vue'),
    },
    {
      path: '/admin/slide',
      name: 'addslide',
      component: () => import('../views/admin/AddSlideView.vue'),
    },
    {
      path: '/admin/inbox',
      name: 'inbox',
      component: () => import('../views/admin/InboxView.vue'),
    },
  ],
})

export default router
