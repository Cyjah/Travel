import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './router.js'

Vue.use(VueRouter)

const routes = Routes

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
