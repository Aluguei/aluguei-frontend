<template>
  <div class='d-flex align-center justify-center container-box'>
    <div class='content-box'>
      <img src='@/assets/img/logo/logo-aluguei-140x141.png' class='logo' />
      <v-form ref='form' v-model='valid' lazy-validation @submit.prevent="userLogin">
        <v-text-field v-model='email' :rules='emailRules' label='E-mail' required></v-text-field>
        <v-text-field
          v-model='password'
          :rules='passwordRules'
          type='password'
          label='Senha'
          required
        ></v-text-field>
        <NuxtLink to='/esqueci-a-senha'>
          <h4 class='link cursor-pointer text-decoration-underline float-left'>Esqueci a senha</h4>
        </NuxtLink>
        <NuxtLink to='/cadastrar'
        ><h4 class='link cursor-pointer text-decoration-underline float-right'>Cadastrar</h4>
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
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+/.test(v) || 'E-mail deve ser válido'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Senha é obrigatório',
      v => v.length >= 10 || 'Senha deve ser maior que 10 caracteres'
    ],
  }),
   methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        // eslint-disable-next-line no-console
        console.log(response)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    }
   }
}
</script>
