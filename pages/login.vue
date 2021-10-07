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
        await this.$auth
          .loginWith("local", {
            data: loginInfo,
          })
          .then(() => {
            alert("Foi");
          });
        // this.$store.dispatch("snackbar/setSnackbar", {
        //   text: `Thanks for signin in", ${this.$auth.user}`,
        // });
        // this.$router.push("/");
      } catch (err) {
        // this.$store.dispatch("snackbar/setSnackbar", {
        //   color: "red",
        //   text: "There was an issue signing in. Please again.",
        // });
        console.error(err);
      }
    },
  },
};
</script>
