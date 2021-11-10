<template>
  <div class="bg-linear-gradient">
    <div v-if="!spinner">
      <ForgotPassword :submit-form="forgotPassword" />
    </div>
    <div v-else>
      <Loading />
    </div>
    <v-snackbar v-model="snackbar" color="error">
      Erro. Tente Novamente! Esse CPF não foi encontrado.
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Fechar </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
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
          })
        return { response }
      } catch (error) {
        console.log(error)
        this.snackbar = true
        this.spinner = false
      }
    }
  }
}
</script>
