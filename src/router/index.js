import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/indexpage'
import Detial from '../pages/detial'
import Car from '../pages/detial/car.vue'
import Earth from '../pages/detial/earth.vue'
import Hill from '../pages/detial/hill.vue'
import Loud from '../pages/detial/loud.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      redirect: 'detial/car',
      path: '/detial',
      component: Detial,
      children: [
        {
          path: '/',
          component: Car
        },
        {
          path: 'car',
          component: Car
        },
        {
          path: 'hill',
          component: Hill
        },
        {
          path: 'loud',
          component: Loud
        },
        {
          path: 'earth',
          component: Earth
        }
      ]
    }
  ]
})
