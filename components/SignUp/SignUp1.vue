<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <div class="d-flex">
        <NuxtLink to="/">
          <img
            src="@/assets/img/icons/back-arrow.png"
            class="arrow cursor-pointer"
          />
        </NuxtLink>
      </div>
      <h3 class="color-gray mb-4">Cadastro</h3>
      <p class="text-left">1. Dados para acesso</p>
      <v-form v-model="valid">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-text-field
          v-model="password"
          label="Senha"
          :rules="passwordRules"
          type="password"
          required
        />
        <v-text-field
          v-model="passwordConfirmation"
          label="Confirmar senha"
          :rules="[
            password === passwordConfirmation || 'Senhas devem ser iguais'
          ]"
          type="password"
          required
        />
        <v-btn
          class="mr-4 btn mt-10 color-white"
          type="button"
          :disabled="!valid"
          @click="goForward"
          >Avançar</v-btn
        >
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    passwordConfirmation: '',
    valid: false,
    emailRules: [
      (v) => !!v || 'E-mail é obrigatório',
      (v) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || 'E-mail deve ser válido'
    ],
    passwordRules: [
      (v) => !!v || 'Senha é obrigatório',
      (v) => v.length >= 3 || 'Senha deve ser maior que 10 caracteres'
    ]
  }),
  mounted() {
    this.email = this.$store.state.signupStore.userRegister.email || ''
    this.password = this.$store.state.signupStore.userRegister.password || ''
    this.passwordConfirmation =
      this.$store.state.signupStore.userRegister.passwordConfirmation || ''
  },
  methods: {
    goBack() {
      this.$store.commit('screen/updateSignin', true)
      this.$store.commit('screen/updateSignup1', false)
    },
    goForward() {
      this.$store.commit('signupStore/signUpOne', {
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation
      })
      this.$store.commit('screen/updateSignup1', false)
      this.$store.commit('screen/updateSignup2', true)
    }
  }
}
</script>
