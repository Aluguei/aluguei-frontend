/* eslint-disable vue/this-in-template */
<template>
  <div class='d-flex align-center justify-center container-box'>
    <div class='content-box'>
      <img src='@/assets/img/logo/logo-aluguei-140x141.png' class='logo' />
      <v-form ref='form' v-model='valid' lazy-validation @submit.prevent="userLogin">
        <v-text-field v-model='login.email' :rules='emailRules' label='E-mail' required></v-text-field>
        <v-text-field
          v-model='login.password'
          :rules='passwordRules'
          type='password'
          label='Senha'
          required
        ></v-text-field>
        <NuxtLink to='/esqueci-a-senha'>
          <p class='link cursor-pointer text-decoration-underline float-left'>Esqueci a senha</p>
        </NuxtLink>
        <NuxtLink to='/cadastrar'
        ><p class='link cursor-pointer text-decoration-underline float-right'>Cadastrar</p>
        </NuxtLink>
        <v-btn class='mr-4 btn mt-10 color-white' type='submit' :disabled='!valid'>
          Acessar
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: {
      email: '',
      password: '',
    },
    valid: false,
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'E-mail deve ser válido'
    ],
    passwordRules: [
      v => !!v || 'Senha é obrigatório',
      v => v.length >= 3 || 'Senha deve ser maior que 10 caracteres'
    ],
  }),
   methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        // eslint-disable-next-line no-console
        console.log(response)
        // this.$router.push('/')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    }
   }
}
</script>
