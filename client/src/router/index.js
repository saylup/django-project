import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import students from '../components/students.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: students
    },
  ]
})

export default router
