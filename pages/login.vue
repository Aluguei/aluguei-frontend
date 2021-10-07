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
        await this.$auth.loginWith("local", {
          data: loginInfo,
        });
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
