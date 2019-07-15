import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  {
    path: '/',
    view: 'home'
  }, {
    path: '/about',
    view: 'about'
  }, {
    path: '/interaction',
    view: 'interaction'
  }, {
    path: '/issues',
    view: 'issues'
  }, {
    path: '/issues/:issueTitle',
    view: 'issues'
  }, {
    path: '/contacts',
    view: 'contacts'
  }, {
    path: '*',
    view: 'error-404'
  }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.view}.vue`)
  }
})

const router = new Router({
  mode: 'history',
  routes
})

export default router
