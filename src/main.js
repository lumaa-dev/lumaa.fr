import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const buildDate = new Date()
const formattedDate = `${String(buildDate.getDate()).padStart(2, '0')}/${String(buildDate.getMonth() + 1).padStart(2, '0')}/${buildDate.getFullYear()}`;

const app = createApp(App)

app.config.globalProperties.$buildDate = formattedDate
app.use(router).mount('#app')

