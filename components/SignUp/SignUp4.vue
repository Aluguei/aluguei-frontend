<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box scroll-loading">
      <div class="d-flex">
        <img src="@/assets/img/icons/backArrow.png" class="arrow cursor-pointer float-left" @click="goBack" />
      </div>
      <h3 class="color-gray mb-4">Cadastrando...</h3>
      <img src="@/assets/img/logo/loading-logo.gif" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$store.commit("screen/updateSignup3", true);
      this.$store.commit("screen/updateSignup4", false);
    },
  },
};
</script>
