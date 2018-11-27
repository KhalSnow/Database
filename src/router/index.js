import Vue from 'vue'
import Router from 'vue-router'
import Crud from '@/views/crud/crud.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Crud',
      component: Crud
    }
  ]
})
