import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/how-we-think',
    name: 'howWeThink',
    component: () => import("../views/HowWeThinkView.vue")
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
