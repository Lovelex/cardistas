<template>
  <VForm @submit.prevent="submit">
    <VTextField v-model="user.nick" label="Nick" />

    <VTextField v-model="user.email" label="E-mail" />

    <VTextField v-model="user.password" type="password" label="Senha" />

    <VTextField v-model="user.passwordConfirmation" type="password" label="Confirmar senha" />

    <div class="d-flex justify-end">
      <VBtn color="primary" type="submit">Cadastrar</VBtn>
    </div>
  </VForm>
</template>
<script>
import { signUp } from '@/plugins/firebase'
import { addUserWithIdRef } from '@/queries/users'

export default {
  data: () => ({
    user: {
      nick: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    inputRules: {
      required: v => !!v || "O campo deve ser preenchido",
      email: v => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
      min: v => v.length >= 6 || "A senha dever ter no mínimo 6 dígitos"
    }
  }),
  methods: {
    async submit() {
      try{
        const user = await signUp(this.user.email, this.user.password)
        await addUserWithIdRef(user.user.uid, this.user)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
