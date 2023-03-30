<template>
  <VForm ref="form" @submit.prevent="submit">
    <VTextField :rules="[form.email, form.required]" v-model="user.email" label="E-mail" />

    <VTextField :rules="[form.required, form.min]" v-model="user.password" type="password" label="Senha" />

    <span class="text-error">{{ form.error }}</span>

    <div class="d-flex justify-end">
      <VBtn :loading="isLoading" color="primary" type="submit">Entrar</VBtn>
    </div>
  </VForm>
</template>

<script>
import { signIn } from '@/firebaseAuth'
import { required, email, min } from '@/inputRules'

export default {
  data: () => ({
    form: {
      required,
      email,
      min,
      error: null
    },
    user: {
      email: "",
      password: ""
    },
    isLoading: false,
  }),
  methods: {
    async submit() {
      const formValidation = await this.$refs.form.validate()
      if(!formValidation.valid) return

      this.form.error = null

      this.isLoading = true

      try {
        await signIn(this.user.email, this.user.password)
        this.$router.push({ name: 'HomePage' })
      } catch (error) {
        this.form.error = error.message
      } finally {
        this.isLoading = false
      }
    }
  }
};
</script>
