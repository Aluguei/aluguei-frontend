<template>
  <div class="bg-linear-gradient">
    <div v-if="!spinner">
      <SignIn button-text="Acessar" :submit-form="loginUser" />
    </div>
    <div v-else>
      <div class="d-flex align-center justify-center">
        <div class="overlay">
          <img class="loadingImage" src="@/assets/img/logo/loading-logo.gif" />
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar" color="error">
      Erro. Tente Novamente! Não foi possível realizar o acesso.
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
      spinner: false,
    };
  },
  methods: {
    async loginUser(loginInfo) {
      this.spinner = true;
      try {
        const response = await this.$auth
          .loginWith('local', {
            data: loginInfo,
          })
          .finally(() => {
            this.spinner = false;
          });
        this.$axios.setToken(response.accessToken, 'Bearer');
        this.$axios.setHeader('device', 'mobile');
        this.$router.push('/');
      } catch (err) {
        console.error(err);
        this.snackbar = true;
        this.spinner = false;
      }
    },
  },
};
</script>
