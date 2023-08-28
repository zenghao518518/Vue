import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import Cinemas from '@/views/Cinemas.vue'
import Center from '@/views/Center.vue'
import Nowplaying from '@/views/films/Nowplaying.vue'
import Comingsoon from '@/views/films/Comingsoon.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'Films',
    component: Films,
    children: [{
      path: '/films/Nowplaying',
      name: 'Nowplaying',
      component: Nowplaying
    }, {
      path: '/films/Comingsoon',
      name: 'Comingsoon',
      component: Comingsoon
    }]
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: Cinemas
  },
  {
    path: '/center',
    name: 'Center',
    component: Center
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
