<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import '@/style.css'
import { onAuthStateChanged, auth } from '@/firebaseAuth'
import { useUser } from '@/store'

export default {
  name: 'App',
  created() {
    onAuthStateChanged(auth, userAuth => {
      const user = useUser()

      if (!userAuth) {
        return user.setMe(null)
      }

      return user.setMe(userAuth)
    })
  }
}
</script>
