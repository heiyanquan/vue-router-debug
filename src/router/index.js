import Vue from 'vue'
import VueRouter from '../../vue-router/dist/vue-router'
import Home from '../views/Home.vue'
import HomeChildren from '../views/HomeChildren.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('home beforeEnter')
      next()
    },
    children: [
      {
        path: 'homechildren',
        name: 'homechildren',
        component: HomeChildren,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: (to, from, next) => {
      console.log('about beforeEnter')
      next()
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/Demo.vue'),
    beforeEnter: (to, from, next) => {
      console.log('demo beforeEnter')
      next()
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function beforeEach(to, from, next) {
  // 进入每一个组件都会调用
  console.log('beforeEach')
  next()
})
router.beforeResolve(function beforeResolve(to, from, next) {
  console.log('beforeResolve')
  next()
})
router.afterEach(function afterEach(to, from) {
  console.log('afterEach')
})

export default router
