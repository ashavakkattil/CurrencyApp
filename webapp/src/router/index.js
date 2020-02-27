import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPackage from '../views/AddPackage'
import addCurrencyRate from '../views/addCurrencyRate'

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
  },
  {
    path: '/currencyrate',
    name: 'Add currency rate',
    component: addCurrencyRate
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
