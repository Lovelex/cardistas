import App from './App.vue'
import { createApp } from 'vue'

import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import { auth } from './plugins/firebase'

import { createPinia } from 'pinia'
import router from './routes'

loadFonts()

const pinia = createPinia()

let app = false

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(pinia)
      .use(vuetify)
      .use(router)
      .mount('#app')
  }
})
