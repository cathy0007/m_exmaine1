import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.less'
import './assets/less/common.less'
Vue.config.productionTip = false
Vue.config.devtools = true 
// 判断当前服务的运行环境：如果是开发环境正常输出console调试信息，如果是生产/线上环境取消掉console.log输出
console.log('当前运行环境是：', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  console.log = function () {}
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
