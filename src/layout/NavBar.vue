<template>
  <VAppBar color="primary" class="d-flex px-4">
    <h1>Cardistas</h1>

    <vBtn
      :to="{ name: 'LoginPage' }"
      class="ml-auto"
      variant="outlined"
      append-icon="mdi-logout"
      @click="signOut"
    >
      <span>{{ userName }}</span>
    </vBtn>
  </VAppBar>
</template>

<script>
import { auth } from '@/firebaseAuth'
import { useUser } from '@/store'

export default {
  computed: {
    userName() {
      const user = useUser()
      console.log(user.me)
      return user.me.displayName
    }
  },
  methods: {
    async signOut() {
      try {
        await auth.signOut()
        this.$router.push({ name: 'LoginPage' })
      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>
