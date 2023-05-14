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
  },
  {
    path: '/mods',
    name: 'mods',
    meta: {
      title: "Lumaa - Mods"
    },
    component: () => import('../views/ModsView.vue')
  },
  {
    path: '/redirect',
    name: "redirect",
    meta: {
      title: "Redirecting..."
    },
    component: () => import('../views/RedirectView.vue')
  }
]

const customRedirections = [
  {
    path: "/support",
    redirect: "/redirect?url=https://discord.gg/Rqpn3C7yR5"
  }
]

routes.push(...customRedirections)

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
