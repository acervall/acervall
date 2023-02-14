import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import DeparturesView from './views/DeparturesView.vue'
import ProfileView from './views/ProfileView.vue'
import TestView from './views/TestView.vue'
import WelcomeView from './views/WelcomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: WelcomeView,
      path: '/'
    },
    {
      component: HomeView,
      path: '/home'
    },
    {
      component: DeparturesView,
      path: '/departures/:id'
    },
    {
      component: ProfileView,
      path: '/profile'
    },
    {
      component: TestView,
      path: '/test'
    }
  ]
})
