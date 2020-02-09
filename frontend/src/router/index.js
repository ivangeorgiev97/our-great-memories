import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddMemory from "../views/AddMemory.vue"
import DeleteMemory from "../views/DeleteMemory.vue"
import EditMemory from "../views/EditMemory.vue"

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
    path: '/addMemory',
    name: 'addMemory',
    component: AddMemory
  },
  {
    path: '/deleteMemory',
    name: 'deleteMemory',
    component: DeleteMemory
  },
  {
    path: '/editMemory',
    name: 'editMemory',
    component: EditMemory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
