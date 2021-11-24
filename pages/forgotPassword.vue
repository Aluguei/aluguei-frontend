<template>
  <div class="bg-linear-gradient">
    <div v-if="!spinner">
      <ForgotPassword :submit-form="forgotPassword" />
    </div>
    <div v-else>
      <Waiting />
    </div>
    <v-snackbar v-model="snackbarErro" color="error">
      Erro. Tente Novamente! Esse CPF não foi encontrado.
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbarErro = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbarSucesso" color="success">
      Senha recuperada com sucesso!
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbarSucesso = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbarErro: false,
      snackbarSucesso: false,
      spinner: false
    }
  },
  methods: {
    async forgotPassword(CPF) {
      this.spinner = true
      try {
        const response = await this.$axios
          .$post(
            'https://aluguei-backend.herokuapp.com/api/auth/request-reset-password',
            {
              CPF
            }
          )
          .finally(() => {
            this.spinner = false
            this.snackbarSucesso = false
          })
          .then(() => {
            this.snackbarSucesso = true
          })
        return { response }
      } catch (error) {
        console.log(error)
        this.snackbarErro = true
        this.spinner = false
      }
    }
  }
}
</script>
