import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import List from './pages/list'
import Detail from './pages/detail'

Vue.use(VueRouter)

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
   base: "/module/news.html",
  routes: [
    {
      path: '/',
      component: List
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
