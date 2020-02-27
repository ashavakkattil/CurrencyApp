import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPackage from '../views/AddPackage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addpackage',
    name: 'Add Package',
    component: AddPackage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//Lazy loading 
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
export default router
