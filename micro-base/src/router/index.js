import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout"
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    name: "home",
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
        meta: { title: '首页' }
      }
    ],
  },
  {
    path: '/*',
    component: layout,
    name: "home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
