import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/ui/views/home/Home.vue')
  },
  {
    path: '/now-playing',
    name: 'NowPlaying',
    component: () => import(/* webpackChunkName: "now-playing" */ '@/ui/views/nowPlaying/NowPlaying.vue')
  },
  {
    path: '/popular',
    name: 'Popular',
    component: () => import(/* webpackChunkName: "popular" */ '@/ui/views/popular/PopularPage.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '@/ui/views/search/Search.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import(/* webpackChunkName: "movie" */ '@/ui/views/movie/Movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
