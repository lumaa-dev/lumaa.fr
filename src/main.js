import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import head from 'vue-head'
// import { i18n } from './i18n'
// import state from './store/index'

createApp(App).use(router).use(head).mount('#app')
