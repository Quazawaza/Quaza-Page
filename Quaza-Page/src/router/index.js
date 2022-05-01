import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/Music', name: 'music', component: () => import('../views/Music.vue') },
    { path: '/Gallery', name: 'gallery', component: () => import('../views/Gallery.vue') },
  ],
});

export default router;