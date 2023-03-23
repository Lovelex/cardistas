import App from './App.vue'
import { createApp } from 'vue'

import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import router from './routes'

loadFonts()

const pinia = createPinia()
const app = createApp(App)

app
  .use(pinia)
  .use(vuetify)
  .use(router)
  .mount('#app')
