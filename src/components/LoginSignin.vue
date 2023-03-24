<template>
  <VForm @submit.prevent="submit">
    <VTextField v-model="user.email" label="E-mail" />
    <VTextField v-model="user.password" type="password" label="Senha" />
    <div class="d-flex justify-end">
      <VBtn color="primary" type="submit">Entrar</VBtn>
    </div>
  </VForm>
</template>

<script>
import { signIn } from '@/plugins/firebase'

export default {
  data: () => ({
    user: {
      email: "",
      password: ""
    },
    inputRules: {
      required: v => !!v || "O campo deve ser preenchido",
      email: v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
      min: v => v.length >= 6 || "A senha dever ter no mínimo 6 dígitos"
    }
  }),
  methods: {
    async submit() {
      try {
        const userCredentials = await signIn(this.user.email, this.user.password)
        console.log(userCredentials)
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
