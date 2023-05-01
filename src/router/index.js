import { createRouter, createWebHashHistory } from 'vue-router'
import { nextTick } from "vue"
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Lumaa"
    },
    component: HomeView
  },
  {
    path: '/unknownsmp',
    name: 'unknownsmp',
    meta: {
      title: "Unknown SMP"
    },
    component: () => import('../views/UnknownSmpView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const DEFAULT_TITLE = 'Lumaa';
router.afterEach((to) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
