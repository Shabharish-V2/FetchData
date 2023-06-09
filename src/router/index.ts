import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserProfile from '@/components/UserProfile.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/userProfile',
    name: 'userProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/UserProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
