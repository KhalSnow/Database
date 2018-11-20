import Vue from 'vue'
import Router from 'vue-router'
import Database from '@/pages/database/database.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Database',
      component: Database
    }
  ]
})
