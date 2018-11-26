import Vue from 'vue'
import Router from 'vue-router'
import Database from '@/pages/database/database.vue'
import Crud from '@/views/crud/crud.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/database',
      name: 'Database',
      component: Database
    },
    {
      path: '/',
      name: 'Crud',
      component: Crud
    }
  ]
})
