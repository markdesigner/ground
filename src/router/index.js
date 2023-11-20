import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    // redirect: { name: 'home' },
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/snake',
    name: 'snake',
    component: () => import('../views/snake/index.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router