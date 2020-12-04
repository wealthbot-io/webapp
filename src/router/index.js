import { createRouter, createWebHistory  } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'redirect',
    beforeEnter: (to) => {
      console.log(`http://127.0.0.1:10001${to.fullPath}`);
      window.location = `http://127.0.0.1:${process.env.VUE_APP_MONOLITH_HTTP_PORT}${to.fullPath}`;
      return false;
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
