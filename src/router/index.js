import Vue from 'vue'
import Router from 'vue-router'
import screen from '@/page/screen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'screen',
      component: screen
    }
  ]
})
