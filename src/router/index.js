import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home = () => import('../views/home')
const Login = () => import('../views/login')
const Compose = () => import('../views/compose/index')
const ComposeList = () => import('../views/compose/composeList')
const composeDesc = () => import('../views/compose/composeDesc')
const Hospital = () => import('../views/hospital/hospitalList')
const HospitalDesc = () => import('../views/hospital/hospitalDesc')
const addItem = () => import('../views/addItem')
const orderConfirm = () => import('../views/orderConfirm')
const Subscribe = () => import('../views/subscribe')
const subscribeInfo = () => import('../views/subscribe/subscribeInfo')
const addPerson = () => import('../views/addPerson')
const addPersonList = () => import('../views/addPersonList')
const payConfirm = () => import('../views/payConfirm')


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/compose',
    name: 'compose',
    component: Compose
  },
  {
    path: '/composeList',
    name: 'composeList',
    component: ComposeList
  },
  {
    path: '/composeDesc',
    name: 'composeDesc',
    component: composeDesc,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: Hospital,
    meta: {
      requiresAuth: true
    }
  },{
    path: '/hospitalDesc',
    name: 'hospitalDesc',
    component: HospitalDesc,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addItem',
    name: 'addItem',
    component: addItem,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addPerson',
    name: 'addPerson',
    component: addPerson,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addPersonList',
    name: 'addPersonList',
    component: addPersonList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: orderConfirm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: Subscribe,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/subscribeInfo',
    name: 'subscribeInfo',
    component: subscribeInfo,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: Subscribe,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/payConfirm',
    name: 'payConfirm',
    component: payConfirm,
    meta: {
      requiresAuth: true
    }
  }
  

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token') || ''
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
