<template>
  <div class="bg-linear-gradient">
    <div v-if="!spinner">
      <SignIn button-text="Acessar" :submit-form="loginUser" />
      <v-snackbar v-model="snackbar" color="error">
        Erro. Tente Novamente!
        <template #action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar = false"> Fechar </v-btn>
        </template>
      </v-snackbar>
    </div>
    <div v-else>
      <img src="@/assets/img/logo/loading-logo.gif" />
    </div>
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
      try {
        const response = await this.$auth
          .loginWith("local", {
            data: loginInfo,
          })
          .catch(() => {
            this.spinner = true;
          })
          .then(() => {
            this.spinner = true;
          })
          .finally(() => {
            this.spinner = false;
          });
        this.$axios.setToken(response.accessToken, "Bearer");
        this.$router.push("/");
      } catch (err) {
        console.error(err);
        this.snackbar = true;
      }
    },
  },
};
</script>
