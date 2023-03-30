<template>
  <VForm ref="form" @submit.prevent="submit">
    <VTextField :rules="[form.required]" v-model="user.nick" label="Nick" />

    <VTextField :rules="[form.required, form.email]" v-model="user.email" label="E-mail" />

    <VTextField
      :rules="[form.required, form.min]"
      v-model="user.password"
      type="password"
      label="Senha"
    />

    <VTextField
      :rules="[form.required, form.min]"
      v-model="user.passwordConfirmation"
      type="password"
      label="Confirmar senha"
    />

    <span class="text-error">{{ form.error }}</span>

    <div class="d-flex justify-end">
      <VBtn :loading="isLoading" color="primary" type="submit">Cadastrar</VBtn>
    </div>
  </VForm>
</template>
<script>
import { signUp, updateNick } from '@/firebaseAuth'
import { addUserWithIdRef } from '@/queries/users'
import { email, min, required } from '@/inputRules'

export default {
  data: () => ({
    form: {
      error: null,
      email,
      min,
      required
    },
    user: {
      nick: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    },
    isLoading: false
  }),
  methods: {
    async submit() {
      const formValidation = await this.$refs.form.validate()
      if(!formValidation.valid) return
      if(this.user.password !== this.user.passwordConfirmation) {
        return this.form.error = "Confirmação de senha não coincide"
      }
      this.form.error = null

      this.isLoading = true

      try{
        const { user } = await signUp(this.user.email, this.user.password)
        await updateNick(this.user.nick, user)
        await addUserWithIdRef(user.uid, { nick: this.user.nick, email: this.user.email })
        this.$router.push({ name: 'HomePage' })
      } catch (error) {
        this.form.error = error.message
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
