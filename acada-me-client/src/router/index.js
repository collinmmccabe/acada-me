import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Get from '@/components/Get'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Get',
      name: 'Get',
      component: Get
    },
    {
      path: '/Results',
      name: 'Results',
      component: Results
    }
  ]
})
