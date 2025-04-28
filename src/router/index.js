import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home = () => import('../views/home')
const Login = () => import('../views/login')
const Compose = () => import('../views/compose/index')
const ComposeList = () => import('../views/compose/composeList')
const composeDesc = () => import('../views/compose/composeDesc')
const hospitalList = () => import('../views/hospital/hospitalList')
const hospitalDesc = () => import('../views/hospital/hospitalDesc')
const addItem = () => import('../views/addItem')
const orderConfirm = () => import('../views/orderConfirm')
const Subscribe = () => import('../views/subscribe')
const subscribeInfo = () => import('../views/subscribe/subscribeInfo')
const addPerson1 = () => import('../views/addPerson1')
const personList = () => import('../views/addPersonList')
const payConfirm = () => import('../views/payConfirm')
const report = () => import('../views/report/index')

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
  },
  {
    path: '/hospitalList',
    name: 'hospitalList',
    component: hospitalList,
  },{
    path: '/hospitalDesc',
    name: 'hospitalDesc',
    component: hospitalDesc,
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
    path: '/addPerson1',
    name: 'addPerson1',
    component: addPerson1,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/personList',
    name: 'personList',
    component: personList,
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
  },
  {
    path: '/report',
    name: 'report',
    component: report,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('user') || ''
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
