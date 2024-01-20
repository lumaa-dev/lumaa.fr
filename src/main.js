import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown';

createApp(App).use(router).component(VueCountdown.name, VueCountdown).mount('#app')

