import App from './App.vue'
import { createApp } from 'vue'

import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import { onAuthStateChanged, auth } from './firebaseAuth'

import { createPinia } from 'pinia'
import router from './routes'

loadFonts()

const pinia = createPinia()

let app = false

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
      .use(pinia)
      .use(vuetify)
      .use(router)
      .mount('#app')
  }
})
