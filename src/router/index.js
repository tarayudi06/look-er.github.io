import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobForU from '../views/JobForU.vue'
import About from '../views/About.vue'
import Tips from '../views/Tips.vue'
import Fulltime from '../views/Fulltime.vue'
import Parttime from '../views/Parttime.vue'
import Freelance from '../views/Freelance.vue'
import Login from '../views/Login.vue'
import ResultRekomendasi from '../views/ResultRekomendasi.vue'


import Register from '../views/Register.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobforu',
    name: 'JobForU',
    component: JobForU
  },
  {
    path: '/tips',
    name: 'Tips',
    component: Tips
  },
  {
    path: '/category/fulltime',
    name: 'Fulltime',
    component: Fulltime
  },
  {
    path: '/category/parttime',
    name: 'Parttime',
    component: Parttime
  },
  {
    path: '/category/freelance',
    name: 'Freelance',
    component: Freelance
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/ResultRekomendasi',
    name: 'ResultRekomendasi',
    component: ResultRekomendasi
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router