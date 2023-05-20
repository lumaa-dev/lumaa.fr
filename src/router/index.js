import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from "vue"
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    alias: "/home",
    name: 'home',
    meta: {
      title: "Lumaa"
    },
    component: HomeView
  },
  {
    path: '/unknownsmp',
    alias: '/usmp',
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

const redirect = (url) => {
  return "/redirect?url=" + url
}

const customRedirections = [
  {
    path: "/support",
    redirect: redirect("https://discord.gg/Rqpn3C7yR5")
  },
  {
    path: "/community",
    redirect: redirect("https://discord.gg/jQ2XcVbpbQ")
  },
  {
    path: "/twitch",
    redirect: redirect("https://twitch.tv/lumaa_dev")
  },
  {
    path: "/youtube",
    redirect: redirect("https://youtube.com/@lumaa_dev")
  },
  {
    path: "/tiktok",
    redirect: redirect("https://tiktok.com/@lumaa_dev")
  },
  {
    path: "/instagram",
    redirect: redirect("https://instagram.com/lumaa_dev")
  },
  {
    path: "/github",
    redirect: redirect("https://github.com/lumaa_dev")
  },
  {
    path: "/v-fast",
    alias: "/vfast",
    redirect: redirect("https://github.com/v-fast")
  }
]

routes.push(...customRedirections)

const router = createRouter({
  history: createWebHistory(),
  routes
})

const DEFAULT_TITLE = 'Lumaa';
router.afterEach((to) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
