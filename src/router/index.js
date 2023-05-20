import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from "vue"
import HomeView from '../views/HomeView.vue'
import ModsView from '../views/ModsView.vue'
import RedirectView from '../views/RedirectView.vue'
import UnknownSmpView from '../views/UnknownSmpView.vue'

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
    component: UnknownSmpView
  },
  {
    path: '/mods',
    name: 'mods',
    meta: {
      title: "Lumaa - Mods"
    },
    component: ModsView
  },
  {
    path: '/redirect',
    name: "redirect",
    meta: {
      title: "Redirecting..."
    },
    component: RedirectView
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
  base: "repo", // This is a ChatGPT line - aka. a test line
  routes
})

const DEFAULT_TITLE = 'Lumaa';
router.afterEach((to) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
