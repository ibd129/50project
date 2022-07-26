import { createRouter, createWebHistory } from 'vue-router'
import NavPage from '../views/NavPage.vue'

const routes = [
  {
    path: '/',
    name: 'NavPage',
    component: NavPage
  },
  {
    path: '/ExpandingCards',
    name: 'ExpandingCards',
    component: () => import('../views/ExpandingCards.vue')
  },
  {
    path: '/ProgressSteps',
    name: 'ProgressSteps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgressSteps.vue')
  },
  {
    path: '/RotatingNavigationPage',
    name: 'RotatingNavigationPage',
    component: () => import(/* webpackChunkName: "rotatingNavigation" */ '../views/RotatingNavigationPage.vue')
  },
  {
    path: '/HiddenSearch',
    name: 'HiddenSearch',
    component: () => import(/* webpackChunkName: "hiddenSearch" */ '../views/HiddenSearch.vue')
  },
  {
    path: '/BlurryLoading',
    name: 'BlurryLoading',
    component: () => import(/* webpackChunkName: "hiddenSearch" */ '../views/BlurryLoading.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
