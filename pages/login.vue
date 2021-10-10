<template>
  <div class="bg-linear-gradient">
    <SignIn button-text="Acessar" :submit-form="loginUser" />
  </div>
</template>
<script>
export default {
  methods: {
    async loginUser(loginInfo) {
      try {
        const response = await this.$auth.loginWith("local", {
          data: loginInfo,
        });
        this.$axios.setToken(response.accessToken, "Bearer");
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
