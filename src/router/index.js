import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/indexpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      component: IndexPage
    }
  ]
})
