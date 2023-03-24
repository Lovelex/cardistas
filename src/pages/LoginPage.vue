<template>
  <div class="h-100 d-flex justify-center align-center">
    <VCard width="640" class="pa-4">
      <VTabs color="primary" v-model="tab">
        <VTab value="signin">Login</VTab>

        <VTab value="signup">Cadastro</VTab>
      </VTabs>

      <VWindow class="pa-2" v-model="tab">
        <VWindowItem value="signin">
          <LoginSignin />
        </VWindowItem>

        <VWindowItem value="signup">
          <LoginSignup />
        </VWindowItem>
      </VWindow>

    </VCard>
  </div>
</template>

<script>
import LoginSignin from '@/components/LoginSignin.vue';
import LoginSignup from '@/components/LoginSignup.vue';

export default {
  components: { LoginSignin, LoginSignup },
  data: () => ({
    tab: 'signin'
  })
}

</script>

<style>
</style>
