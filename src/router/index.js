import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './router.js'

Vue.use(VueRouter)

const routes = Routes

const router = new VueRouter({
  routes
})

export default router
