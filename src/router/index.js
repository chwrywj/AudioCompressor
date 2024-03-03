import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'audio-compress',
      component: () => import('../views/AudioCompress.vue')
    }
  ]
})

export default router
