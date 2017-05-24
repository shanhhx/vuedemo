// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import resource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(resource)

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
