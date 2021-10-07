<template>
  <div class="bg-linear-gradient">
    <ForgotPassword :submit-form="forgotPassword" />
  </div>
</template>
<script>
export default {
  async forgotPassword(CPF) {
    try {
      const response = await this.$axios.$post("/api/auth/request-forgot-password", {
        CPF,
      });
      return { response };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
