// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutDefault from '@/layouts/default/Default.vue'
import ViewHome from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ViewHome,
      },           
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
