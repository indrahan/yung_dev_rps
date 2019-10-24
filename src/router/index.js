import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/vsCPU',
    name: 'vsCPU',

    component: () => import('../views/Characters.vue')
  },  {
    path: '/Highscore',
    name: 'Highscore',

    component: () => import('../views/Characters.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
